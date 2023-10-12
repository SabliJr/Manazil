const PORT = 8800;
import express from "express";

import cors from "cors";
import dotenv from "dotenv";
import { getHotels } from "./PopularHotels/index";

dotenv.config();
const app = express();
app.use(cors());

app.get("/hotels", (req, res) => {
  res.send("Hello from MANAZIL");
  getHotels();
});

app.listen(PORT, () => console.log(`The app is running in port ${PORT}`));
