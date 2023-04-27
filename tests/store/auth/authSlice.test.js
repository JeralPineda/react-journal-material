import { authSlice, checkingCredentials, login, logout } from '../../../src/store/auth/authSlice';
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from '../../fixtures/authFixtures';

describe('Pruebas en authSlice', () => {
  test('debe de regresar el estado inicial y llamarse auth', () => {
    // console.log(authSlice);

    expect(authSlice.name).toBe('auth');
    const state = authSlice.reducer(initialState, {}); //saber el estado del slice
    // console.log(state);

    expect(state).toEqual(initialState);
  });

  test('debe de realizar la autenticación (login)', () => {
    // console.log(login(demoUser));
    const state = authSlice.reducer(initialState, login(demoUser));
    // console.log(state);

    expect(state).toEqual(authenticatedState);
  });

  test('debe de realizar el logout', () => {
    const state = authSlice.reducer(authenticatedState, logout());
    // console.log(state);

    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test('debe de realizar el logout y mostrar un mensaje de error', () => {
    const errorMessage = 'Credenciales incorrectas';
    const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));
    // console.log(state);

    expect(state).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage,
    });
  });

  test('debe de cambiar el estado a checking', () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());
    // console.log(state);

    expect(state.status).toBe('checking');
  });
});
