// تحديد المتغيرات
let allProducts = document.querySelector(".af");
let jjson = localStorage.getItem("ProductsInCart");
let totalsave = localStorage.getItem("totalsave");
let totalp = document.querySelector(".total");

// تحويل النص المخزن في localStorage إلى كائن JavaScript
let productsInCart = JSON.parse(jjson);
let productsInCart1 = JSON.parse(totalsave);

// تعريف الأسعار الإجمالية والمتغيرات الأخرى
let totalPrice = 0;
let totalsavee = 0;
var save=  totalp.innerHTML = "$" + productsInCart1[productsInCart1.length - 1];


// دالة لعرض المنتجات
function draw1Items() {
    // إنشاء عناصر الكارت من خلال البيانات المخزنة
    let y = productsInCart.map((item) => {
        return `
            <div class="col-lg-4 col-12 col-md-6">
                <div class="card" id="con2">
                    <img src="${item.imageUrl}" width="200" height="220" id="OZ" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text text-body-secondary" id="tc">Choosing your clothes is about art, so live the
                            experience of choosing your own art</p>
                        </p>
                        <div class="d-grid  d-md-flex justify-content-md-end ee">
                            <div class="p-2 flex-grow-1 " >
                                <button type="button" class="btn btn-outline-light plusBtn"><i class="fa-solid fa-plus text-danger"></i></button>
                                <span class='pmm'>1</span>
                                <button type="button" class="btn btn-outline-light minusBtn"><i class="fa-solid fa-minus text-info"></i></button>
                            </div>
                            <button class="btn btn-danger text-light " onClick="RemoveToCart(${item.id})" id="bs" type="button">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    allProducts.innerHTML = y.join("");

    let plusBtns = document.querySelectorAll(".plusBtn");
    let minusBtn = document.querySelectorAll(".minusBtn");
    let pmms = document.querySelectorAll(".pmm");

    plusBtns.forEach((plusBtn, index) => {
        plusBtn.addEventListener("click", function () {
            // زيادة قيمة العنصر
            let currentValue = parseInt(pmms[index].innerHTML);
            pmms[index].innerHTML = currentValue + 1;
            
            // تحديث السعر الإجمالي
            totalPrice += parseFloat(productsInCart[index].Price.replace("$", ""));
            let save = parseFloat(productsInCart1[productsInCart1.length - 1]);
            totalp.innerHTML = "$" + (totalPrice + save).toFixed(1);
        });
    });



    minusBtn.forEach((minusBtn, index) => {
        minusBtn.addEventListener("click", function () {
            // زيادة قيمة العنصر
            let currentValue = parseInt(pmms[index].innerHTML);
            if(currentValue>=1){
                pmms[index].innerHTML = currentValue - 1;
                  // تحديث السعر الإجمالي
                totalPrice -= parseFloat(productsInCart[index].Price.replace("$", ""));
                let save = parseFloat(productsInCart1[productsInCart1.length - 1]);
                totalp.innerHTML = "$" + (totalPrice + save).toFixed(1);
            
            }
           
          
        });
    });
}

// استدعاء الدالة لعرض المنتجات
draw1Items();




function RemoveToCart(idToRemove) {
  // إزالة العنصر من productsInCart بناءً على id
  productsInCart = productsInCart.filter((item) => item.id !== idToRemove);
  localStorage.setItem("ProductsInCart", JSON.stringify(productsInCart));

  // إعادة رسم العناصر في الصفحة
  draw1Items();

  // إعادة حساب السعر الإجمالي بعد الإزالة
  let totalPriceAfterRemoval = productsInCart.reduce(
    (total, item) => total + parseFloat(item.Price.replace("$", "")),
    0
  );
  totalp.innerHTML = "$" + totalPriceAfterRemoval;
}

let logOutBtn = document.querySelector("#logout");
let linkss = document.querySelector("#linkss");

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
