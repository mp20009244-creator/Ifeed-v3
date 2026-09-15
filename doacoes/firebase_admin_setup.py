"""Inicialização segura e opcional do Firebase Admin.

O projeto do Pedro exigia um arquivo privado e quebrava o Django quando esse
arquivo não existia. Nesta versão o login normal do Django sempre funciona. O
Google é ativado quando o pacote Firebase está instalado e o projeto público
está configurado; um service account local continua opcional.
"""

from django.conf import settings

FIREBASE_DISPONIVEL = False
FIREBASE_ERRO = ""

try:
    import firebase_admin
    from firebase_admin import auth, credentials

    if not firebase_admin._apps:
        arquivo = settings.FIREBASE_ADMIN_CREDENTIALS
        if arquivo.exists():
            credencial = credentials.Certificate(str(arquivo))
            firebase_admin.initialize_app(
                credencial,
                {"projectId": settings.FIREBASE_PROJECT_ID},
            )
        else:
            firebase_admin.initialize_app(options={"projectId": settings.FIREBASE_PROJECT_ID})
    FIREBASE_DISPONIVEL = True
except Exception as exc:  # O login Django não pode parar por causa do Google.
    FIREBASE_ERRO = str(exc)


def verificar_token_firebase(id_token):
    if not FIREBASE_DISPONIVEL:
        return None, "Login Google indisponível. Entre com e-mail e senha."
    try:
        return auth.verify_id_token(id_token), None
    except Exception:
        return None, "Não foi possível validar a conta Google. Confira o Firebase e tente novamente."
