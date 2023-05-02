import { signInWithGoogle } from '../../../src/firebase/providers';
import { checkingCredentials, login, logout } from '../../../src/store/auth';
import {
  checkingAuthentication,
  startGoogleSignIn,
} from '../../../src/store/auth/thunks';
import { demoUser } from '../../fixtures/authFixtures';

jest.mock('../../../src/firebase/providers');

describe('Pruebas en AuthThunks', () => {
  const dispatch = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test('debe de invocar el checkingCredentials', async () => {
    await checkingAuthentication()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
  });

  test('startGoogleSignIn debe de llamar checkingCredentials y login - Exitosamente', async () => {
    const loginData = { ok: true, ...demoUser };
    await signInWithGoogle.mockResolvedValue(loginData);

    //Thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(login(loginData));
  });

  test('startGoogleSignIn debe de llamar checkingCredentials y logout - Error', async () => {
    const loginData = { ok: false, errorMessage: 'Error en la autenticación' };
    await signInWithGoogle.mockResolvedValue(loginData);

    //Thunk
    await startGoogleSignIn()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    expect(dispatch).toHaveBeenCalledWith(logout(loginData));
  });
});
