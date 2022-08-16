const sidebar = document.querySelector(".sidebar");
console.log(sidebar);
const btn=document.querySelector(".btn-toggle");
console.log(btn);

btn.addEventListener("click",function(){
    sidebar.classList.toggle("active");
    // sidebar.style.visibility="visible";
}) 