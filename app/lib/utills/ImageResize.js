import { put } from "@vercel/blob";
import sharp from "sharp";

const ImageResize = async (File) => {
  
  try {
    const resize = sharp(await File.arrayBuffer());
    resize
      .resize(200, 200, { withoutEnlargement: true, fit: "inside" })
      .withMetadata()
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer()
      .then(async (data) => {
        const blob = await put(File.name, data, {
          access: "public",
        });
        if (blob) {
          return blob;
        } else {
          throw new Error("upload failed please try again");
        }
      })
      .catch((err) => {
        console.log(err);
        throw new Error("operation failed here");
      });
  } catch (error) {
    console.log(error);
    throw new Error("operation failed");
  }
};

export default ImageResize;
