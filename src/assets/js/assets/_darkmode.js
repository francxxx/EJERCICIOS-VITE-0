export default function darkMode() {
  const $btnDarkMode = document.querySelector(
    ".nav__container--darkModeButton",
  );

  const $icon = $btnDarkMode.querySelector(".fa-solid");
  const theme = localStorage.getItem("theme") ?? "light";
  if( theme === "dark"){
    $icon.classList.remove("fa-moon");
    $icon.classList.add("fa-sun");
    document.body.classList.add("dark");
  }

  // Registrar el evento click en el botón

  $btnDarkMode.addEventListener("click", (e) => {

    const isDark = localStorage.getItem("theme") === "dark";
    
    $icon.classList.toggle("fa-sun");
    $icon.classList.toggle("fa-moon");

    document.body.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "light" : "dark");
  });
}



/*
    if(!isDark) {
      $header.classList.add("dark");
      $main.classList.add("dark");

    }else{
      $header.classList.remove("dark");
      $main.classList.remove("dark");
    }*/
   
/*
    $icon.classList.remove("fa-moon");
    $icon.classList.add("fa-sun");

    if($icon.classList.contains("fa-sun")) {
      $icon.classList.remove("fa-sun");
      $icon.classList.add("fa-moon");

    } else {
        $icon.classList.remove("fa-moon");
        $icon.classList.add("fa-sun");
    }*/

