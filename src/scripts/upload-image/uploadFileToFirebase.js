export default async function uploadFileToFirebase(firebaseContext, file) {
  // Create stroage reference
  const storageReference = firebaseContext.storage().ref(file.name);

  // Upload image
  await storageReference.put(file);

  return storageReference.getDownloadURL();
}
