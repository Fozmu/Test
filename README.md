// Ersetze 'DEINE_API_SCHLÜSSEL' mit deinem tatsächlichen API-Schlüssel
const apiKey = 'DEINE_API_SCHLÜSSEL';
const city = 'Berlin';

// Hole die Wetterdaten
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
  .then(response => response.json())
  .then(data => {
    // Finde das HTML-Element, in das du die Daten schreiben möchtest
    const weatherElement = document.getElementById('weather');

    // Erstelle eine HTML-Struktur für die Wetterinformationen
    const weatherHTML = `
      <h2>Wetter in ${data.name}</h2>
      <p>Temperatur: ${data.main.temp}°C</p>
      <p>Beschreibung: ${data.weather[0].description}</p>
    `;

    // Füge die HTML-Struktur zum Element hinzu
    weatherElement.innerHTML = weatherHTML;
  })
  .catch(error => {
    console.error('Fehler beim Abrufen der Wetterdaten:', error);
  });
