/* Login Google do código do Pedro integrado à sessão Django.
   Caso o Firebase não esteja habilitado, o formulário Django continua funcional. */
import { firebaseConfig, firebaseConfigurado } from "./firebase-config.js";

const button = document.querySelector("#google-login");
const status = document.querySelector("#google-status");

function getCookie(name) {
  return (
    document.cookie
      .split(";")
      .map((item) => item.trim())
      .find((item) => item.startsWith(`${name}=`))
      ?.split("=")
      .slice(1)
      .join("=") || ""
  );
}

function showStatus(message, error = false) {
  if (!status) return;
  status.textContent = message;
  status.style.color = error ? "#a13510" : "#087a25";
}

if (button) {
  button.addEventListener("click", async () => {
    if (!firebaseConfigurado)
      return showStatus("Configure o Firebase ou use e-mail e senha.", true);
    button.disabled = true;
    showStatus("Abrindo o Google...");
    try {
      const [
        { initializeApp, getApps },
        { getAuth, GoogleAuthProvider, signInWithPopup },
      ] = await Promise.all([
        import("https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js"),
        import("https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js"),
      ]);
      const app = getApps().length
        ? getApps()[0]
        : initializeApp(firebaseConfig);
      const result = await signInWithPopup(
        getAuth(app),
        new GoogleAuthProvider(),
      );
      const idToken = await result.user.getIdToken();
      const response = await fetch(button.dataset.googleUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": decodeURIComponent(getCookie("csrftoken")),
        },
        body: JSON.stringify({
          idToken,
          perfil: button.dataset.profile || "doador",
        }),
      });
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.mensagem || "Não foi possível entrar com Google.");
      window.location.assign(data.redirect);
    } catch (error) {
      const cancelled = /popup-closed|cancelled-popup/i.test(error?.code || "");
      showStatus(
        cancelled
          ? "Login cancelado. Você pode tentar novamente."
          : error.message || "Falha no login Google. Use e-mail e senha.",
        true,
      );
      button.disabled = false;
    }
  });
}
