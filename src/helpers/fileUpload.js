export const fileUpload = async (file) => {
  if (!file) throw new Error('No tenemos ningún archivo a subir');

  console.log(import.meta.env.VITE_BASE_API_URL_CLOUDINARY);

  const cloundUrl = import.meta.env.VITE_BASE_API_URL_CLOUDINARY; //https://api.cloudinary.com/v1_1/example/upload

  const formData = new FormData();
  formData.append('upload_preset', 'react-journal');
  formData.append('file', file);

  try {
    const resp = await fetch(cloundUrl, {
      method: 'POST',
      body: formData,
    });

    console.log(resp);

    if (!resp.ok) throw new Error('No se pudo subir imagen');

    const cloudResp = await resp.json();

    console.log(cloudResp);
    return cloudResp.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
