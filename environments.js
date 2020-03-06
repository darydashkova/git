export const env = APP_IS_PROD ?
  {
    isProduction: true,
    path: {
      img: '/frontend/dist/assets/img/'
    }
  } :
  {
    isProduction: false,
    path: {
      img: '/'
    }
  };