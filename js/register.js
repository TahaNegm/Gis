let username= document.querySelector('#username')
let email= document.querySelector('#exampleInputEmail1')
let password= document.querySelector('#exampleInputPassword1')
let Register= document.querySelector('#sign_up')
let navbarbrand = document.querySelector('.navbar-brand')



navbarbrand.addEventListener("click", function (){
    setTimeout(() => {
        window.location = "index.html";
    } , 1000)
})
Register.addEventListener('click', function(e){
    e.preventDefault();
    if(username.value===''|| email.value==='' || password.value==='' ){
        alert('please fill data')
    }else{
        localStorage.setItem('username' ,username.value )
        localStorage.setItem('email' ,email.value )
        localStorage.setItem( 'password',password.value )
        setTimeout(()=>{
            window.location='login.html'
        },1500)
    }
    
})




















































