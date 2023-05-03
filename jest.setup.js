// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate'; //Prueba de eliminar imagen de Cloudinary
import { getEnvironmets } from './src/helpers/getEnvironment';

//Variables de entorno para testing
require('dotenv').config({
  path: '.env.test',
});

jest.mock('./src/helpers/getEnvironment', () => ({
  getEnvironmets: () => ({ ...process.env }),
}));
