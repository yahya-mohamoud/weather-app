export async function displayData(weatherData) {
  const weather = document.querySelector(".weather");

  weather.innerText = "";

  const weatherPlc = document.createElement("div");
  weatherPlc.classList.add("weathPlc");

  const weatherTwo = document.createElement("div");
  weatherTwo.classList.add("weatherTwo");

  const weatherThree = document.createElement("div");
  weatherThree.classList.add("weatherThree");

  const addres = document.createElement("h3");
  addres.classList.add("address");
  addres.innerText = `${weatherData.address}`.toUpperCase();
  weatherTwo.appendChild(addres);

  const temprature = document.createElement("h3");
  temprature.classList.add("temprature");
  temprature.innerText = ` ${weatherData.currentConditions.temp} ℉`;
  weatherThree.appendChild(temprature);

  const iconPlc = document.createElement("h3");
  iconPlc.classList.add("iconPlc");
  const conditions = weatherData.currentConditions.icon;

  switch (conditions.toLowerCase()) {
    case "clear":
    case "sunny":
      iconPlc.innerText = "☀️";
      break;

    case "clear-night":
      iconPlc.innerText = "🌜";

      break;

    case "partly cloudy":
    case "partly sunny":
      iconPlc.innerText = "⛅";

      break;

    case "cloudy":
    case "overcast":
      iconPlc.innerText = "☁️";
      break;

    case "light rain":
    case "drizzle":
      iconPlc.innerText = "🌦️";
      break;

    case "rain":
    case "showers":
      iconPlc.innerText = "🌧️";
      break;

    case "heavy rain":
      iconPlc.innerText = "☔";
      break;

    case "thunderstorm":
    case "thunder":
      iconPlc.innerText = "⛈️";
      break;

    case "light snow":
      iconPlc.innerText = "❄️";
      break;

    case "snow":
      iconPlc.innerText = "🌨️";
      break;

    case "fog":
    case "mist":
      iconPlc.innerText = "🌁";
      break;

    case "windy":
    case "breezy":
      iconPlc.innerText = "🍃";
      break;

    default:
      iconPlc.innerText = "sunny";
      break;
  }

  weatherThree.appendChild(iconPlc);

  const timeZone = document.createElement("h3");
  timeZone.classList.add("timeZone");
  timeZone.innerText = `${weatherData.timezone}`;
  weatherTwo.appendChild(timeZone);

  const condition = document.createElement("h3");
  condition.classList.add("condition");
  condition.innerText = ` ${weatherData.currentConditions.conditions}`;
  weatherPlc.appendChild(condition);

  const description = document.createElement("h3");
  description.classList.add("description");
  description.innerText = `Description: ${weatherData.description}`;
  weatherPlc.appendChild(description);

  weather.appendChild(weatherTwo);
  weather.appendChild(weatherThree);
  weather.appendChild(weatherPlc);
}
