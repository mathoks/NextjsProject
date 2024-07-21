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
  
  export const ImageResize3 = async (file=[]) => {

let con = [];
    try {
      if(Array.isArray(file) && file.length > 0){
      file.map(async(img)=>{
          if(img.size === 0){
            throw new Error('image size is not allowed')
          }
          const data = await img.arrayBuffer() 
          const resizedBuffer = await sharp(data)
        .resize(250, 150, { withoutEnlargement: true , fit: "inside"})
        .withMetadata()
        .jpeg({quality: 80, mozjpeg: true})
        .toBuffer();
        const blob = await put(img.name, resizedBuffer, { access: "public" });
        if (!blob) {
          throw new Error("Upload failed, please try again.");
        }
        con.push(blob.url)
        })
        
        return con;
      }
      
       else throw new Error("image is required")
    } catch (error) {
      console.error(error); // Log the actual error for debugging
      throw new Error("Image resize operation failed."); // More specific error message
    }
  };

  export const ImageResize2 = async (files = []) => {
    // Validate input type and length
    if (!Array.isArray(files) || files.length === 0) {
      throw new Error("Invalid input: Please provide an array of image files.");
    }
  
    const processedUrls = []; // Array to store processed image URLs
  
    try {
      // Process each image file asynchronously using Promise.all
      await Promise.all(
        files.map(async (img) => {
          if (img.size === 0) {
            throw new Error("Image size is not allowed (empty file).");
          }
  
          const data = await img.arrayBuffer();
          const resizedBuffer = await sharp(data)
            .resize(250, 150, { withoutEnlargement: true })
            .withMetadata()
            .jpeg({ quality: 80, mozjpeg: true })
            .toBuffer();
  
          // Upload the resized image using your preferred storage method (replace with actual implementation)
          const uploadedBlob = await put(img.name, resizedBuffer,  { access: "public" });
  
          if (!uploadedBlob) {
            throw new Error("Upload failed, please try again.");
          }
  
          processedUrls.push(uploadedBlob.url);
        })
      );
  
      return processedUrls;
    } catch (error) {
      console.error(error); // Log the actual error for debugging
      throw new Error("Image resize or upload operation failed."); // More specific error message
    }
  };