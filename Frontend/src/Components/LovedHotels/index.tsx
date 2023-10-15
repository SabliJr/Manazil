import React, { useState, useEffect } from "react";
import axios from "axios";

import { iLovedHotels } from "../../types/lovesHotelsTypes";

const LovedHotels = (): JSX.Element => {
  const [data, setData] = useState<iLovedHotels[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8800/lovedHotels")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(data);

  return (
    <div>
      <h3>Loved Hotels By Guests:</h3>
      {data.map((x) => (
        <div key={x.title}>
          <img src={x.thumbnail} alt='' />
        </div>
      ))}
    </div>
  );
};

export default LovedHotels;
