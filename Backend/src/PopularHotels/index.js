import { booking } from "hotels-scraper-js";

export const getHotels = () => {
  booking
    .getHotels(
      ["pri=2", "3 stars"],
      "Argentine Peso",
      undefined,
      "Miami",
      "22/05/2023",
      "27/05/2023",
      3,
      1,
      undefined,
      "business"
    )
    .then(console.log);
};

// export default getHotels;
