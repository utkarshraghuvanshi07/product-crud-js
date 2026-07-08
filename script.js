const createbtn = document.querySelector("#create");
const formDiv = document.querySelector(".form");
const closebtn = document.querySelector("#close");
const form = document.querySelector("form");
const productDiv = document.querySelector(".products");

const updatebtn = document.querySelector("#update");

const productArr = [];

let updateIndex = null;

// product card ui 
let ui = () =>{
  productDiv.innerHTML = "";
    productArr.forEach((element,index) => {
          productDiv.innerHTML += `
          <div class="product-card">
          <div class="img">
            <img
            src="${element.image}"
            alt=""
          />
          </div>

          <div class="text">
            <h3>Name - ${element.productName}</h3>
            <p>description - ${element.description}</p>
            <p>price - ${element.price}</p>
          </div>
          <div class="btns">
            <button onclick="update(${index})" id="update">Update</button>
            <button onclick="deleteCard(${index})" id="delete">Delete</button>
          </div>
        </div>`
    });
}

createbtn.addEventListener("click", () => {
  formDiv.style.display = "flex";
});

closebtn.addEventListener("click", () => {
  formDiv.style.display = "none";
});

// product entry
form.addEventListener("submit", (event) => { 
  event.preventDefault();

  let productName = event.target[0].value;
  let description = event.target[1].value;
  let price = event.target[2].value;
  let image = event.target[3].value;

  if (
    productName.trim() === "" ||
    description.trim() === "" ||
    price.trim() === "" ||
    image.trim() === ""
  ) {
    alert("please fill all the fields");
    return;
  }

  let obj = {
    productName,
    description,
    price,
    image,
  };

  if(updateIndex !== null){
     productArr[updateIndex] = obj;
     updateIndex = null;
  } else{
     productArr.push(obj);
  }
  
 

  ui();

  form.reset();
  formDiv.style.display = "none";
});

//update
let update = (index) =>{
  formDiv.style.display = "flex";
  updateIndex = index;
  form[0].value = productArr[index].productName;
  form[1].value = productArr[index].description;
  form[2].value = productArr[index].price;
  form[3].value = productArr[index].image;
}  

//delete
let deleteCard = (index)=>{
  productArr.splice(index,1);
  ui();

}