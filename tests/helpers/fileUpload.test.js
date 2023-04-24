import { fileUpload } from '../../src/helpers/fileUpload';

describe('Pruebas en fileUpload', () => {
  test('debe de subir el archivo correctamente a cloudinary', async () => {
    const imageUrl = 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'image.jpg');

    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
  });
});
