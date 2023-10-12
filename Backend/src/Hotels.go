package main

import (
	"fmt"
	"io"
	"net/http"
)

func main() {

	url := "https://booking-com13.p.rapidapi.com/stays/properties/list-v2?location=Benidorm%2C%20Valencia%20Community%2C%20Spain&checkin_date=2023-10-01&checkout_date=2023-10-28&language_code=en-us&currency_code=USD"

	req, _ := http.NewRequest("GET", url, nil)

	req.Header.Add("X-RapidAPI-Key", "ea1d443b04mshfafb440ce7d5837p1eb600jsnc811a3ff6411")
	req.Header.Add("X-RapidAPI-Host", "booking-com13.p.rapidapi.com")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := io.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}