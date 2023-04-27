//? Directorio y archivo usado para data que unicamente estará ahi para las pruebas
//? Objetivo de que las pruebas sean lo mas simple posibles

export const initialState = {
  status: 'checking', // not-authenticated, authenticated, checking
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const authenticatedState = {
  status: 'authenticated', // not-authenticated, authenticated, checking
  uid: 'ABC123',
  email: 'demo@gmail.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.jpg',
  errorMessage: null,
};

export const notAuthenticatedState = {
  status: 'not-authenticated', // not-authenticated, authenticated, checking
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null,
};

export const demoUser = {
  uid: 'ABC123',
  email: 'demo@gmail.com',
  displayName: 'Demo User',
  photoURL: 'https://demo.jpg',
};
