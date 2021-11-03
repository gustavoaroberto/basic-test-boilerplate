const API_URL = "https://front-br-challenges.web.app/api/v2/green-thumb/";

window.fetchData = function fetchData() {
  const waterValue = document.getElementById("water").value;
  const sunValue = document.getElementById("sun").value;
  const toxicityValue = document.getElementById("toxicity").value;

  console.log("toxicity: ", toxicityValue);
  if (waterValue && sunValue && toxicityValue) {
    const url = new URL(API_URL);
    const params = {
      sun: sunValue,
      water: waterValue,
      pets: toxicityValue,
    };

    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );

    fetch(url)
      .then(function (res) {
        res
          .json()
          .then(function (data) {
            document.getElementById("card-container").innerHTML = "";

            data.forEach((el) => {
              const { name, sun, water, url, price, toxicity, staff_favorite } =
                el;
              Card({
                name,
                sun,
                water,
                url,
                price,
                toxicity,
                staff_favorite,
              });
            });

            document.getElementById("third-section").style.display = "block";
            document.getElementById("no-result-section").style.display = "none";
          })
          .catch(function (err) {
            console.error(err);
            document.getElementById("third-section").style.display = "none";
            document.getElementById("no-result-section").style.display =
              "block";
          });
      })
      .catch(function (err) {
        console.error(err);
        document.getElementById("third-section").style.display = "none";
        document.getElementById("no-result-section").style.display = "block";
      });
  } else {
    document.getElementById("third-section").style.display = "none";
    document.getElementById("no-result-section").style.display = "block";
  }
};
