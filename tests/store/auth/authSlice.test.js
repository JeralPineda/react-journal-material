import { authSlice } from '../../../src/store/auth/authSlice';
import { initialState } from '../../fixtures/authFixtures';

describe('Pruebas en authSlice', () => {
  test('debe de regresar el estado inicial y llamarse auth', () => {
    // console.log(authSlice);

    expect(authSlice.name).toBe('auth');
    const state = authSlice.reducer(initialState, {}); //saber el estado del slice
    // console.log(state);

    expect(state).toEqual(initialState);
  });
});
