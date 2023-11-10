let bag = [];

// let cartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];

function handleSort() {
  let selected = document.querySelector("select").value;

  if (selected == "HTL") {
    bag.sort((a, b) => b.price - a.price);
  }

  if (selected == "LTH") {
    bag.sort((a, b) => a.price - b.price);
  }
  displayData(bag);
  // console.log(bag);
}


//  Search functinality 


function search(){
    let q=document.querySelector('input').value;

    let newValue=bag.filter(function(e){
        return e.title.toLowerCase().includes(q.toLowerCase())
    })
    displayData(newValue)
}

let url = "https://fakestoreapi.com/products";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    bag = data;
    displayData(data);
  });

function displayData(data) {
  document.getElementById("container").innerHTML = "";

  data.forEach(function (elem) {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("src", elem.image);

    let title = document.createElement("h2");
    title.innerText = elem.title;

    let description = document.createElement("p");
    description.innerText = elem.description;

    let price = document.createElement("p");
    price.innerText = elem.price;

    let rating = document.createElement("p");
    rating.innerText = elem.rating.rate;

    div.append(image, title, description, price, rating);

    document.querySelector("#container").append(div);
  });
}
