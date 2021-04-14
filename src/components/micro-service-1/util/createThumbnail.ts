import imageThumbnail from "image-thumbnail";

export const createThumbnail = async (
  buffer: Buffer,
  width = 80,
  height = 80
) => {
  const thumbnail = await imageThumbnail(buffer, {
    width,
    responseType: "buffer",
    height,
  });
  return thumbnail;
};
