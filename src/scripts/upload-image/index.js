// Project files
import { uploadFile } from "../cloudStorage";
import dataURLToFile from "./dataURLToFile";
import readImage from "./readImage";
import resizeImage from "./resizeImage";

export async function uploadImage(event, filename) {
  const file = event.target.files[0];

  const originalImage = await readImage(file);
  const resizedImaged = filename.startsWith("thumb-") ? await resizeImage(originalImage, 80, 680) : await resizeImage(originalImage, 900, 600);
  const imageForFirebase = await dataURLToFile(
    resizedImaged,
    `${filename}.jpg`
  );
  const newImageURL = await uploadFile(imageForFirebase, filename);

  return newImageURL;
}