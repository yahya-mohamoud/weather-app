import { displayData } from "./displayData";
import "/src/styles.css";
const input = document.querySelector("#inp");
const searchBtn = document.querySelector(".btn");
const loader = document.querySelector(".loader");
const container = document.querySelector(".container");
const loading = document.querySelector(".Loading");

function toggleLoader(show) {
  loader.style.display = show ? "block" : "none";
  container.style.display = "none";
  loading.style.display = "block";
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchData(city) {
  const apiKey = "67DXDJ9NRVKSNRHWDVGKB7WQ4";
  toggleLoader(true);
  // setTimeout(async() => {

  try {
    await delay(1000);
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=${apiKey}&contentType=json`,
      { mode: "cors" },
    );
    const weatherData = await response.json();

    if (!response.ok) {
      throw new Error("City not found or API error");
    }
    displayData(weatherData);
    console.log(weatherData);
  } catch (error) {
    console.error(error);
  } finally {
    toggleLoader(false);
    container.style.display = "block";
    loading.style.display = "none";
  }
  // }, 500)
}

fetchData("jijiga");

searchBtn.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue) {
    fetchData(inputValue);
  }
});
