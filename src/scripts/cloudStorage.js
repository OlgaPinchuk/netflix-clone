// NPM package
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Project files
import { storageInstance } from "./firebase";

export async function uploadFile(file, filename = "new-file") {
  const storageReference = ref(storageInstance, filename);
  await uploadBytes(storageReference, file);

  return await getDownloadURL(storageReference);
}
