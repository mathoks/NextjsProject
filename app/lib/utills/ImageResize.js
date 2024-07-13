import { put } from "@vercel/blob";
import sharp from "sharp";

// const ImageResize = async (File) => {
//   let url = '';
//   try {
//     const resize = sharp(await File.arrayBuffer());
//     resize
//       .resize(200, 200, { withoutEnlargement: true, fit: "inside" })
//       .withMetadata()
//       .jpeg({ quality: 80, mozjpeg: true })
//       .toBuffer()
//       .then(async (data) => {
//         const blob = await put(File.name, data, {
//           access: "public",
//         });
//         if (blob?.url) {
            
//           url = blob.url;
//         } else {
//           throw new Error("upload failed please try again");
//         }
//       })
//       .catch((err) => {
//         url = '';
//         console.log(err)
//         throw new Error("operation failed here");
//       });
//       return url
//   } catch (error) {
//     url = '';
//     throw new Error("operation failed");
//   }
  
// };

// export default ImageResize;

const ImageResize = async (file) => {
    try {
      const data = await file.arrayBuffer();
      const resizedBuffer = await sharp(data)
        .resize(200, 200, { withoutEnlargement: true, fit: "inside" })
        .withMetadata()
        .jpeg({ quality: 80, mozjpeg: true })
        .toBuffer();
  
      const blob = await put(file.name, resizedBuffer, { access: "public" });
  
      if (blob?.url) {
        return blob.url;
      } else {
        throw new Error("Upload failed, please try again.");
      }
    } catch (error) {
      console.error(error); // Log the actual error for debugging
      throw new Error("Image resize operation failed."); // More specific error message
    }
  };
  
  export default ImageResize;
  