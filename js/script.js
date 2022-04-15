// import
import dataFood from "../data/data.js";

// if(document.readyState == "loading"){
//   document.addEventListener("DOMContentLoaded",ready)
// }else{
//   ready();
// }

// select
const load = document.querySelector(".onload");
const containerPage = document.querySelector(".container");
const logo = document.querySelector(".logo")
const headerTop = document.querySelector(".header__top")
const locationEl = document.querySelector(".header__top__location");
const btnCart = document.querySelector(".btn-cart");
const btnSignin = document.querySelector(".btn-signin");
const serviceContainer = [...document.querySelectorAll(".header__bottom__services")];
const serviceBtnsPev = [...document.querySelectorAll(".btn-prev")]
const serviceBtnNext = [...document.querySelectorAll(".btn-next")];

// array-data product cart


// console.log(dataCart);
// eventlistener

      render();



// navigate logo
logo.addEventListener("click",()=>{
  window.open("../index.html","_blank")
})

// header sticky

window.addEventListener("scroll", () =>{
  if(window.scrollY > 0){
    headerTop.classList.add("sticky")
  }else{
    headerTop.classList.remove("sticky")
  }
})

// header location

locationEl.onclick = ()=>{
    const locationCrosshairs = locationEl.querySelector(".fa-location-crosshairs");
    locationEl.classList.toggle("focus");
    
    locationCrosshairs.addEventListener("click",getLocation)

}

// function ready(){
//   window.addEventListener("load",()=>{
//     setTimeout(()=>{
//       load.classList.add("close");
//     },3000)
//     setTimeout(()=>{
//       render();
//     },3050)
//   }
// })
btnCart.addEventListener("click",openCart);

btnSignin.addEventListener("click",changeLocation)












// function for service 

  serviceContainer.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    serviceBtnNext[i].addEventListener("click",()=>{
      item.scrollLeft += containerWidth
    })
    serviceBtnsPev[i].addEventListener("click",()=>{
      item.scrollLeft -= containerWidth
    })
  })

// function

// get location 
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert( "Geolocation is not supported by this browser.")
    }
  }
  
//   show location
  function showPosition(position) {
    alert("Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude)
  }


  // function cart open

  

  function openCart() {
    // get parent cart elemnet
    const cartParent = btnCart.parentElement;
    // create variable list cart element 
    const listProductEl =cartParent.querySelector(".card");
    // add class open 
    listProductEl.classList.add("open");
    // create btn element of list cart element
    const btnCloseListProduct = listProductEl.querySelector(".close");
    // listener event and remove class open of list cart element
    btnCloseListProduct.addEventListener("click",()=>{
      listProductEl.classList.remove("open");
    })
    

    const buttons = document.querySelectorAll(".card__delete");
    for(const button of buttons){
      button.addEventListener("click", removeItem)
    }

    const cartItems = document.querySelectorAll(".card__item");
    for(const cartItem of cartItems){
      cartItem.addEventListener("change", changeQuarity)
    }
    updateTotal();

    const btnBuy = document.querySelector(".btn-buy");
    btnBuy.addEventListener("click",buy)
  }

  const buttonAddToCarts = document.querySelectorAll(".btn-add");

  for(const buttonAddToCart of buttonAddToCarts) {
    buttonAddToCart.addEventListener("click",getDataItem)
  }

  function getDataItem(e){
    const buttonAdd = e.target
    const item = buttonAdd.parentElement.parentElement.parentElement
    const title = item.querySelector(".main__item__title").innerText;
    const cost = item.querySelector(".main__item__cost").innerText;
    const image = item.querySelector("img").src;
    addItemToCart(title,cost,image)
    updateTotal();

  }

  function addItemToCart(title,cost,image){
    const listItem = document.querySelector(".card__list");
    const item = document.createElement("div")
    const titleItems = listItem.querySelectorAll(".card__title");
    for(const titleItem of titleItems){
      if(titleItem.innerHTML == title){
        alert("has too")
        return;
      }
    }
    item.classList.add("card__item");
    const itemContent = `
    <div class="card__photo">
      <img src="${image}" alt="">
    </div>
    <div class="card__content">
      <h2 class="card__title">${title}</h2>
      <p class = "card__cost">${cost}</p>
      <input type="number" value="1" class="card__quarity">
    </div>
    <button class="card__delete">Delete</button>
    `

    item.innerHTML = itemContent;
    listItem.append(item);

    const btnDeletes = item.querySelectorAll(".card__delete")
    for(const btnDelete of btnDeletes){
      btnDelete.addEventListener("click",removeItem)
    }
    const inputQuatitys = item.querySelectorAll(".card__quarity")
    for(const inputQuatity of inputQuatitys){
      inputQuatity.addEventListener("change",changeQuarity)
    }
  }


  function removeItem(e){
    const buttonClicked = e.target
    buttonClicked.parentElement.remove();
    updateTotal();
  }

  function changeQuarity(e){
    let input = e.target
    if(isNaN(input.value) || input.value <=0){
      input.value = 1
    }
    updateTotal();
  }

  function updateTotal(){
    const listItem = document.querySelector(".card__list");
    const items = listItem.querySelectorAll(".card__item");
    let total = 0;
    for(const item of items){
      const priceEl = item.querySelector(".card__cost");
      const quarityEl = item.querySelector(".card__quarity");
      const price = parseFloat(priceEl.innerHTML.replace("$",""))
      total = total + (price * quarityEl.value)
    }
    total = Math.round(total * 100) / 100;
    document.querySelector(".total-number").innerHTML = total +" VND"
  }
  
  
  function buy(){
    alert("thank to buy");

    const cartList = document.querySelector(".card__list")
    while(cartList.hasChildNodes()){
      cartList.removeChild(cartList.firstChild)
      updateTotal();
    }
  }

// change location
  function changeLocation(){
    window.open("https://google.com","_blank")
  }
  // render

  function render (){
    const listItem = document.querySelector(".main__list")
    let item = dataFood.map(item => {
      return `
      <div class="main__item">
      <div class="main__item__box">
          <div class="main__item__photo">
              <img src="${item.image}" alt="">
          </div>
          <div class="main__item__content">
              <h3 class="main__item__title">${item.title}</h3>
              <p class="main__item__category">${item.cate}</p>
              <div class="main__item__more">
                  <p class="main__item__start"><span><i class="fa-solid fa-star"></i> </span>${item.star}</p>
                  <p class="main__item__time"><span><i class="fa-solid fa-hourglass"></i> </span>${item.time}</p>
                  <p class="main__item__kilomet"><span><i class="fa-solid fa-road"></i> </span>${item.kilomet}</p>
              </div>
              <p class="main__item__detail">
                  <span><i class="fa-solid fa-tag"></i></span> ${item.detail}
              </p>
              <p class="main__item__cost">${item.cost} K </p>
          </div>
          <div class="main__item__control">
              <button class="btn-add">Add to Cart</button>
          </div>
      </div>
    </div>
      `
    })
    listItem.innerHTML = item.join("")
  }
