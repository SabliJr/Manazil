import { booking } from "hotels-scraper-js";

export const BookingHotels = () => {
  return booking
    .getHotels()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};
