import { put } from "@vercel/blob";
import { removeBackground } from "modern-rembg/index.mjs";
import sharp from "sharp";


export const ImageResize = async (file) => {
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
  
  export const ImageResize2 = async (file=[]) => {
console.log(file)
    try {
      if(Array.isArray(file) && file.length > 0){
        file.map(async(img)=>{
          if(img.size === 0)return;
          const data = await img.arrayBuffer() 
          const resizedBuffer = await sharp(data)
        .resize(200, 200, { withoutEnlargement: true, fit: "inside" })
        .withMetadata()
        .jpeg({ quality: 80, mozjpeg: true })
        .toBuffer();
        const blob = {url: "kkk"} 
        // await put(file.name, resizedBuffer, { access: "public" });
        if (blob?.url) {
          return blob.url;
        } else {
          throw new Error("Upload failed, please try again.");
        }
        })
      }
      
       else throw new Error("image is required")
    } catch (error) {
      console.error(error); // Log the actual error for debugging
      throw new Error("Image resize operation failed."); // More specific error message
    }
  };

  