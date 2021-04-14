import Jimp from "jimp";
export const rotateImage = async (buffer: Buffer) => {
  const image = await Jimp.read(buffer);
  const src = await image.rotate(30).getBufferAsync(Jimp.MIME_JPEG);
  return src;
};
