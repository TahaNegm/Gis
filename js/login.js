
let username = document.querySelector("#exampleInputEmail1")
let password = document.querySelector("#exampleInputPassword1")
let loginBtn = document.querySelector("#sign_in")
let getUser = localStorage.getItem("username")
let getPassword = localStorage.getItem("password")
let navbarbrand = document.querySelector('.navbar-brand')



navbarbrand.addEventListener("click", function () {
    setTimeout(() => {
        window.location = "index.html";
    }, 1000)
})

loginBtn.addEventListener("click", function (e) {
    e.preventDefault()
    if (username.value === "" || password.value === "") {
        alert("please fill data ")
    } else {
        if ((getUser && getUser.trim() === username.value.trim() && getPassword && getPassword.trim() === password.value)) {
            setTimeout(() => {
                window.location = "index.html"
            }, 1500)
        } else {
            alert("username or password is wrong ")
        }
    }
})

















function addToCart(id) {
  if (localStorage.getItem("username") === null) {
    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  } else {
    let chosenItem = Products.find((item) => item.id === id);
    let newItem = document.createElement("div");

    newItem.innerHTML = `
            <span class='numper'>${chosenItem.title}</span>
            <button class="plusBtn"><i class="fa-solid fa-plus"></i></button>  
            <span class='pmm'>1</span>
            <button class="minusBtn"> <i class="fa-solid fa-minus"></i></button>
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