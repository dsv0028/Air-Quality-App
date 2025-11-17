🌤️ Weather & Air Quality Checker

A simple and elegant web app that displays real-time air quality data for any city using the API Ninjas Air Quality API. Built with HTML, Bootstrap 5, and JavaScript (Fetch API + async/await).

🚀 Features 🌆 Check air quality of any city worldwide 📊 Displays major pollutants: CO, NO₂, O₃, PM2.5, SO₂ 💨 Shows overall Air Quality Index (AQI) ⚡ Real-time data fetched via RapidAPI 💎 Modern, responsive Bootstrap 5 UI ⏳ Loading indicator while fetching data 🌍 Default city: Delhi

🧰 Tech Stack Category Technologies Frontend HTML5, CSS3, Bootstrap 5 Scripting JavaScript (ES6) API Air Quality API - API Ninjas (via RapidAPI)

Deployment GitHub Pages / Netlify (optional) 📂 Project Structure Weather-AirQuality-App/ │ ├── index.html # Main HTML file (UI layout) ├── script.js # JS logic to fetch and display air quality data ├── README.md # Project documentation └── assets/ (optional) # Folder for icons or images if added

⚙️ Setup Instructions 1️⃣ Clone the Repository git clone https://github.com/your-username/weather-airquality-app.git cd weather-airquality-app

2️⃣ Open in Browser Simply open index.html in your browser — no server needed. Or use a simple live server: npx serve

3️⃣ Update Your API Key Replace the placeholder key in script.js with your own RapidAPI key: const apiKey = 'YOUR_RAPIDAPI_KEY';

🧠 How It Works User enters a city name. The app calls the Air Quality API using fetch(). Response data is parsed and displayed dynamically on the page. AQI and pollutant levels update instantly with smooth Bootstrap UI.

🎨 UI Preview Desktop View Mobile View (You can replace the placeholders above with screenshots of your app)

🌐 Deploy on GitHub Pages Commit your code: git add . git commit -m "Initial commit" git push origin main Go to your GitHub repo → Settings → Pages Under Build and deployment, choose: Source: Deploy from a branch Branch: main → / (root) Click Save — your app will be live in a few minutes 🎉

📜 License This project is licensed under the MIT License — you’re free to use, modify, and distribute it.

💡 Future Enhancements 🌦️ Add weather data (temperature, humidity, icons) 📅 Show 3-day air quality trends 🌍 Add auto-location detection using Geolocation API
