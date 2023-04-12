import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  displayName: '',
  email: '',
  password: '',
};

const formValidations = {
  email: [(value) => value.includes('@'), 'El email debe tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 letras.'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const { formState, displayName, email, password, onInputChange, isFormValid, displayNameValid, emailValid, passwordValid } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Crear cuenta">
      <form
        //
        onSubmit={onSubmit}
        className="animate__animated animate__fadeIn animate__faster"
      >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              //
              label="Nombre completo"
              type="text"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              placeholder="Nombre completo"
              fullWidth
              error={!!displayNameValid && formSubmitted}
              helperText={!!displayNameValid && formSubmitted ? displayNameValid : null}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              //
              label="Correo"
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="correo@google.com"
              fullWidth
              error={!!emailValid && formSubmitted}
              helperText={!!emailValid && formSubmitted ? emailValid : null}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              //
              label="Contraseña"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="Contraseña"
              fullWidth
              error={!!displayNameValid && formSubmitted}
              helperText={!!passwordValid && formSubmitted ? passwordValid : null}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>

            <Grid item xs={12}>
              <Button
                //
                type="submit"
                variant="contained"
                fullWidth
                disabled={isCheckingAuthentication}
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
