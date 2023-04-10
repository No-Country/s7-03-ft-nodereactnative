import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.FB_PROJECT_ID,
  storageBucket: process.env.FB_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export const uploadProductImages = async (file: Express.Multer.File) => {
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
