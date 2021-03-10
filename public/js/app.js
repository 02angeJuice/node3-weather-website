const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit', (e) => {
  const location = document.querySelector('input').value;
  const UILocation = document.querySelector('#ui-location');
  const UIForecast = document.querySelector('#ui-forecast');

  fetch(`/weather?address=${location}`).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        console.log(data.error);
        UILocation.textContent = data.error;
      } else {
        UILocation.textContent = data.location;
        UIForecast.textContent = data.forecastData;
      }

      search.value = '';
    });
  });

  e.preventDefault();
});
