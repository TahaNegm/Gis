let linkss = document.querySelector("#linkss");
let Userinfo = document.querySelector("#Userinfo");
let userdata = document.querySelector("#userdata");
let logOutBtn = document.querySelector("#logout");
let fabagshoppingr = document.querySelector(".fa-bag-shopping");
if (localStorage.getItem("username")) {
  linkss.remove();
  userdata.innerHTML = localStorage.getItem("username");
}

logOutBtn.addEventListener("click", function () {
  localStorage.clear();
  setTimeout(() => {
    window.location = "login.html";
  }, 1500);
});

if (localStorage.getItem("username") === null) {
  logOutBtn.remove();
  fabagshoppingr.remove();
}

// ************************************************************************************//

let allProducts = document.querySelector(".af");

let Products = [
  {
    id: 1,
    title: "Spatial analysis",
    imageUrl: "./imge/1772.jpg",
    Price: "$50",
    Example: "./b/index.html",
  },
  {
    id: 2,
    title: "Coverage ranges",
    imageUrl: "./imge/8289173_1771.jpg",
    Price: "$40",
    Example: "./a/index.html",
  },
  {
    id: 3,
    title: "3D Buildings",
    imageUrl: "./imge/3d-smartphone-device-with-map-gps-technology.jpg",
    Price: "$100",
    Example: "./c/index.html",
  },
  {
    id: 4,
    title: "Location-allocation",
    imageUrl: "./imge/9136713_1959.jpg",
    Price: "$70",
    Example: "./d/index.html",
  },
  {
    id: 5,
    title: "Model Builder",
    imageUrl: "./imge/20865553_2419144998054.jpg",
    Price: "$30",
    Example: "./e/index.html",
  },
  {
    id: 6,
    title: "Closest Facility",
    imageUrl: "./imge/3d-smartphone-device-with-map-gps-technology (1).jpg",
    Price: "$55",
    Example: "./f/index.html",
  },
];

function drawItems() {
  let y = Products.map((item) => {
    return `
            <div class="col-lg-4 col-12 col-md-6">
                <div class="card" id="con2">
                    <img src="${item.imageUrl}" width="200" height="250"  id="OZ" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h4 class="card-title">${item.title}</h4>
                        <h5 class="card-title">${item.Price}</h5>
                        <p class="card-text text-body-secondary" id="tc">We are a group from Cairo University that provides GIS services</p>
                        </p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button class="btn btn-success me-md-2 text-light" onClick="addToCart(${item.id})" id="bs" type="button"> To buy</button>
            
                          <a href="${item.Example}" target="_blank" class="btn btn-secondary btnn text-light" id="bs">Example</a>
                        </div>
                       
                    </div>
                </div>
            </div>
        `;
  });

  allProducts.innerHTML = y.join("");
}

drawItems();

var carts_products = document.querySelector("#cover1");

let badge = document.querySelector(".badge");

var carts_products = document.querySelector("#cover1");

let additem = [];
let totalPrice = 0; // قم بتعريف totalPrice خارج نطاق الدالة addToCart()
let totalsave = []; // قم بتعريف totalsave خارج نطاق الدالة addToCart()

function addToCart(id) {
  if (localStorage.getItem("username") === null) {
    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  } else {
    let chosenItem = Products.find((item) => item.id === id);
    let newItem = document.createElement("div");
    let existingItem = additem.find((item) => item.id === chosenItem.id);
    if (!existingItem) {
      newItem.innerHTML = `
            <span class='numper'>${chosenItem.title}</span>
            <div class="plusBtn96">
             <button class="plusBtn"><i class="fa-solid fa-plus"></i></button>  
             <span class='pmm'>1</span>
             <button class="minusBtn"> <i class="fa-solid fa-minus"></i></button>
            </div>
            
        `;
      document.querySelector(".items-container").appendChild(newItem);
      additem = [...additem, chosenItem];
      localStorage.setItem("ProductsInCart", JSON.stringify(additem));

      // حساب السعر الإجمالي
      totalPrice += parseFloat(chosenItem.Price.replace("$", ""));
      totalsave.push(totalPrice); // أضف السعر الإجمالي إلى totalsave
      localStorage.setItem("totalsave", JSON.stringify(totalsave));

      // تحديث عدد العناصر في السلة
      badge.innerHTML = additem.length;

      // تحديد زر الزيادة داخل العنصر الجديد
      let plusBtn = newItem.querySelector(".plusBtn");
      let minusBtn = newItem.querySelector(".minusBtn");
      let pmm = newItem.querySelector(".pmm");

      // إضافة المستمعين لأحداث النقر
      plusBtn.addEventListener("click", function () {
        let currentValue = parseInt(pmm.innerHTML);
        pmm.innerHTML = currentValue + 1;

        totalPrice += parseFloat(chosenItem.Price.replace("$", ""));
        totalsave.push(totalPrice); // أضف السعر الإجمالي إلى totalsave
        localStorage.setItem("totalsave", JSON.stringify(totalsave));
      });
      minusBtn.addEventListener("click", function () {
        let currentValue = parseInt(pmm.textContent);
        pmm.textContent = currentValue - 1;

        totalPrice -= parseFloat(chosenItem.Price.replace("$", "")); // قم بطرح سعر العنصر من السعر الإجمالي
        totalsave.push(totalPrice); // أضف السعر الإجمالي إلى totalsave
        localStorage.setItem("totalsave", JSON.stringify(totalsave));

        if (currentValue <= 1) {
          newItem.remove();
          for (let i = 0; i < additem.length; i++) {
            if (additem[i].id === chosenItem.id) {
              additem.splice(i, 1);
              break;
            }
          }
          localStorage.setItem("ProductsInCart", JSON.stringify(additem));
          badge.innerHTML = additem.length;
        }
      });
    }
  }
}

var fabagshopping = document.querySelector(".fa-bag-shopping");
var carts_products1 = document.querySelector(".carts_products");

fabagshopping.addEventListener("click", function () {
  if (carts_products.innerHTML != "") {
    if (carts_products1.style.display == "block") {
      carts_products1.style.display = "none";
    } else {
      carts_products1.style.display = "block";
    }
  }
});
