const PORT = 3800;
import express from "express";
import { lovedHotels } from "./getHotels/lovedHotels.js";

const app = express();

app.get("/hello", async (req, res) => {
  try {
    const data = await lovedHotels();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`An error occurred while fetching data`);
  }
});

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
