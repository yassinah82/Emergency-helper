let form = document.forms[0];
let countriesDropDown = form.countries;
let searchInput = document.getElementById("search");
let jsonData;

fetch('countries.json')
  .then(response => response.json())
  .then(function (data){
      jsonData = data;
      getCountries(jsonData.countries);  // <-- send only the array
  });

function getCountries(countriesArray){
    let out = '';
    out += `<option value="">Choose your country</option>`;

    for (let item of countriesArray){    // <-- correct loop
        out += `<option value="${item.code}">
                    ${item.country}
                </option>`;
    }

    countriesDropDown.innerHTML = out;
}
