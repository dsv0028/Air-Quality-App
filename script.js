const apiKey = '85a3d63566mshf7786fbdc24c4afp1fdc36jsn46c15da51a8b';
const apiHost = 'air-quality-by-api-ninjas.p.rapidapi.com';

const cityInput = document.getElementById('cityInput');
const checkBtn = document.getElementById('checkBtn');
const loading = document.getElementById('loading');
const result = document.getElementById('result');

const cityName = document.getElementById('cityName');
const aqiValue = document.getElementById('aqiValue');
const co = document.getElementById('co');
const no2 = document.getElementById('no2');
const o3 = document.getElementById('o3');
const pm25 = document.getElementById('pm25');
const so2 = document.getElementById('so2');

checkBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert('Please enter a city name!');
    return;
  }
  getAirQuality(city);
});

async function getAirQuality(city) {
  const url = `https://${apiHost}/v1/airquality?city=${city}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': apiHost
    }
  };

  loading.classList.remove('d-none');
  result.classList.add('d-none');

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log('Air Quality Data:', data);

    cityName.textContent = city.toUpperCase();
    aqiValue.textContent = data.overall_aqi || 'N/A';
    co.textContent = data.CO?.concentration + ' µg/m³' || 'N/A';
    no2.textContent = data.NO2?.concentration + ' µg/m³' || 'N/A';
    o3.textContent = data.O3?.concentration + ' µg/m³' || 'N/A';
    pm25.textContent = data.PM2_5?.concentration + ' µg/m³' || 'N/A';
    so2.textContent = data.SO2?.concentration + ' µg/m³' || 'N/A';

    result.classList.remove('d-none');
  } catch (error) {
    alert('Error fetching air quality data!');
    console.error(error);
  } finally {
    loading.classList.add('d-none');
  }
}

// Default load for Delhi
getAirQuality('Delhi');
