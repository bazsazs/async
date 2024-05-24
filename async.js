const url = "https://vvri.pythonanywhere.com/api/courses";

// Eredeti fetchData függvény
function fetchData() {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data)
      data.forEach(element => {
        console.log(element);
      });
  })
  .catch(error => console.log("Hiba történt: " + error));
}

// async/await használata fetchDataAsync függvényben
async function fetchDataAsync() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
    const data = await response.json();
    if (data)
      data.forEach(element => {
        console.log(element);
      });
  } catch (error) {
    console.log("Hiba történt: " + error);
  }
}

// async arrow function fetchDataAsyncArrow néven
const fetchDataAsyncArrow = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Hiba történt: " + error);
  }
}

// Adatok megjelenítése külön függvényben
const displayData = async () => {
  const data = await fetchDataAsyncArrow();
  if (data)
    data.forEach(element => {
      console.log(element);
    });
}

// A függvények meghívása
// fetchData();
// fetchDataAsync();
displayData();
