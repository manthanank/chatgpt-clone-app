export const environment = {
  production: false,
  apiUrl:
    window.location.hostname === 'localhost'
      ? 'http://localhost:3000'
      : 'https://chatgpt-clone-app-erpk.vercel.app/api',
};
