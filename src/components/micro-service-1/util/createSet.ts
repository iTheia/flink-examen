import fetch from "node-fetch";
import { createThumbnail } from "./createThumbnail";
import { rotateImage } from "./rotateImage";
import { storeImage } from "./storeImage";
import { IImage, IStandarImage } from "./types";

export const createSet = async (images: IImage[]) => {
  try {
    if (!images) {
      throw new Error("no images provided");
    }
    return Promise.all(
      images.map(async ({ url }) => {
        const fetchedImage = await fetch(url);
        const buffer = await fetchedImage.buffer();
        const thumbnail = await createThumbnail(buffer);
        const thumbnailPath = storeImage(thumbnail);
        const storedPath = storeImage(buffer);
        const rotatedImageBuffer = await rotateImage(buffer);
        const rotatedImagePath = storeImage(rotatedImageBuffer);
        const standarImage: IStandarImage = {
          thumbnail: thumbnailPath,
          storedPath,
          rotatedImage: rotatedImagePath,
        };
        return standarImage;
      })
    );
  } catch (error) {
    return [];
  }
};
