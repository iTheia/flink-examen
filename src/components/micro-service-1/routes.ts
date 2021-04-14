import { Router } from "express";
import { getRandomImages } from "./controller";

export const randomImagesRouter = Router();

randomImagesRouter.get("/", getRandomImages);
