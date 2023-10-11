const PORT = 8800;
import express, { Express, Response, Request, Application } from "express";

import cors from "cors";
import dotenv from "dotenv";
import { getHotels } from "./PopularHotels";

dotenv.config();
const app: Application = express();
app.use(cors());

app.get("/hotels", (req: Request, resp: Response) => {
  // resp.send("Hello from MANAZIL");
  getHotels();
})

app.listen(PORT, () => console.log(`The app is running in port ${PORT}`));