import { Router } from "express";
import { randomImagesRouter } from "../components";

export const router = Router();

router.use("/images", randomImagesRouter);
