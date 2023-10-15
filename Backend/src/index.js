const PORT = 8800;
import express from "express";
import cors from "cors";
import { BookingHotels } from "./GetHotels/lovedHotels.js";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000/",
  })
);

app.get("/lovedHotels", async (req, res) => {
  try {
    const data = await BookingHotels();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send(`An error occurred while fetching data`);
  }
});

app.listen(PORT, () => {
  console.log(`The app is running on port ${PORT}`);
});
