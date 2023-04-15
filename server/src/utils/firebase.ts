import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadProductImage = async (file: Express.Multer.File) => {
  const ext = file.originalname.split('.').pop();
  const timestamp = Date.now();
  const fileName = `product-${timestamp}.${ext}`;
  const productRef = ref(storage, `products-images/${fileName}`);

  const metadata = {
    contentType: file.mimetype,
  };

  await uploadBytes(productRef, file.buffer, metadata);
  const productURL = await getDownloadURL(productRef);
  return productURL;
};

export const deleteProductImage = async (imageUrl: string) => {
  const fileName = imageUrl.split('/').pop();
  if (!fileName) {
    console.error('No se pudo obtener el nombre del archivo');
    return;
  }
  let ext = '';

  const start = fileName.indexOf('2F') + 2;

  if (fileName.indexOf('.png', start) !== -1) {
    ext = '.png';
  } else if (fileName.indexOf('.jpg', start) !== -1) {
    ext = '.jpg';
  }
  const end = fileName.indexOf(ext, start) + 4;

  const path = fileName.substring(start, end);
  const productImageRef = ref(storage, `products-images/${path}`);
  try {
    await deleteObject(productImageRef);
    console.log(`Image ${imageUrl} deleted from Firebase storage`);
  } catch (error) {
    console.error(
      `Error deleting image ${imageUrl} from Firebase storage: ${error}`,
    );
  }
};
