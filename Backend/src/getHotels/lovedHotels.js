import { booking } from "hotels-scraper-js";

export const lovedHotels = () => {
  return booking
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
    .then((data) => {
      // Send the JSON response
      return data;
    })
    .catch((error) => {
      // Handle any errors that may occur during the request
      console.error(error);
      // return status(500).send("An error occurred while fetching data");
    });
};
