import "/src/styles.css"
const weather = document.querySelector(".weather")
const container = document.querySelector(".container")
const input = document.querySelector("#inp");
const searchBtn = document.querySelector('.btn')


export async function fetchData() {

  const apiKey = '67DXDJ9NRVKSNRHWDVGKB7WQ4'
  let inputValue = ''; 

  try {

    searchBtn.addEventListener('click', async (e) => {
      e.preventDefault()
      inputValue = input.value;

      console.log(inputValue);
   

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputValue}?unitGroup=us&key=${apiKey}&contentType=json`, { mode: 'cors' })
    const weatherData = await response.json()

     const weatherPlc = document.createElement("div")
     weatherPlc.classList.add('weathPlc')

     const addres = document.createElement('h3')
     addres.classList.add("addres")
     addres.innerText = weatherData.address;
     weatherPlc.appendChild(addres)

     const condition = document.createElement('h3')
     condition.classList.add("condition")
     condition.innerText = weatherData.currentConditions.conditions;
     weatherPlc.appendChild(condition)

     weather.appendChild(condition)
     weather.appendChild(weatherPlc)


     
    // console.log(weatherData);
  })

  } catch (error) {

  }
}
