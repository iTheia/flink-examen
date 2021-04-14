import axios from "axios";
import { Request, Response } from "express";
import { DOGS_ENDPOINT, CATS_ENDPOINT } from "./const";
import { createSet } from "./util";

export const getRandomImages = async (req: Request, res: Response) => {
  try {
    const [{ data: cats }, { data: dogs }] = await axios.all([
      axios.get(CATS_ENDPOINT),
      axios.get(DOGS_ENDPOINT),
    ]);
    const catsSet = await createSet(cats);
    const dogsSet = await createSet(dogs);
    const response = {
      message:
        "no comprendi del todo si debia de almacenarlas, enviarlas en base64 todo, pero decidi dejarlo asi y dejar los metodos para trasnformar todo a base64",
      cats: catsSet,
      dogs: dogsSet,
    };
    res.send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
