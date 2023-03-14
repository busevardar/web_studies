const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");
console.log(searchForm);

/*butona ulaşmak için*/
const searchBtn = document.querySelector("#search-btn");

const cartBtn = document.querySelector("#cart-btn")

const menuBtn = document.querySelector("#menu-btn")

/*addEventListener: bir olay gerçekleştiğinde çağrılacak 
işlevlerin ayarlanmasına olanak tanır*/
/* composedPath : tıklama özelliğini farketmeye yarar*/
searchBtn.addEventListener("click",function(){
    searchForm.classList.toggle("active"); /*tıkladıkça ekleyip siliyor active öelliğini*/

    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)){
            /*yani buton dısında herhangi bi yere tıklandıysa*/
            searchForm.classList.remove("active");
        }
    })
});


cartBtn.addEventListener("click",function(){
    cartItem.classList.toggle("active"); /*tıkladıkça ekleyip siliyor active öelliğini*/

    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(cartBtn) && !e.composedPath().includes(cartItem)){
            /*yani buton dısında herhangi bi yere tıklandıysa*/
            cartItem.classList.remove("active");
        }
    })
});


menuBtn.addEventListener("click",function(){
    navbar.classList.toggle("active"); /*tıkladıkça ekleyip siliyor active öelliğini*/

    document.addEventListener("click",function(e){
        if(!e.composedPath().includes(menuBtn) && !e.composedPath().includes(navbar )){
            /*yani buton dısında herhangi bi yere tıklandıysa*/
            navbar.classList.remove("active");
        }
    })
});
    
