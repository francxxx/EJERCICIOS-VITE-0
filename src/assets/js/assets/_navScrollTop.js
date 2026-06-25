export default function navScrollTop() {
    
  const $navbar = document.querySelector(
    ".navbar");


  window.addEventListener("scroll",()=>{
    const scrollTop = document.documentElement.scrollTop

    if(scrollTop > 800){
        $navbar.style.backgroundColor = "#3ee2f841";
        $navbar.classList.remove("bg-body-tertiary");
    }else{
        $navbar.classList.add("bg-body-tertiary");
    }
  })

}