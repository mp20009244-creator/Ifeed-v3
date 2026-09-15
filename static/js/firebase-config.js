//SAIBA EXATAMENTE NO QUE ESTA MECHENDO!!!

export const firebaseConfig = {
  apiKey: "AIzaSyBq6mxwoTOx5K-s8k6bebD1AFB_L7QGZV4",
  authDomain: "ifeed-supremo.firebaseapp.com",
  projectId: "ifeed-supremo",
  storageBucket: "ifeed-supremo.firebasestorage.app",
  messagingSenderId: "685590473209",
  appId: "1:685590473209:web:9fe1a7c2017b8d366bf528",
  measurementId: "G-ZX17HX9LCL"
};

export const firebaseConfigurado = !Object.values(firebaseConfig).some(valor => valor.includes("COLE_") || valor.includes("SEU_"));
