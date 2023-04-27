import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dyszc49bz',
  api_key: '755234936665418',
  api_secret: 'zwUEtPEnXDSn_c46cDbrJiV6CkY',
  secure: true,
});

describe('Pruebas en fileUpload', () => {
  test('debe de subir el archivo correctamente a cloudinary', async () => {
    const imageUrl = 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'image.jpg');

    const url = await fileUpload(file);
    expect(typeof url).toBe('string');

    //Limpieza
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');
    await cloudinary.api.delete_resources(['journal/' + imageId], {
      resource_type: 'image',
    }); //Eliminando imagen
  });

  test('debe de retornar null', async () => {
    // const blob = await resp.blob();
    const file = new File([], 'image.jpg');

    const url = await fileUpload(file);
    // console.log(url);
    expect(url).toBe(null);
  });
});
