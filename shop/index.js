addEventListener('load', (event) => {
    function setDarkMode() {
      const body = document.querySelectorAll('body');
      body[0].classList.add("dark");
      body[0].classList.remove("light");
    }
  
    function setLightMode() {
      const body = document.querySelectorAll('body');
      body[0].classList.add("light");
      body[0].classList.remove("dark");
    }
  
    const isLightMode = localStorage.getItem("theme") === "light"
    if (isLightMode) {
      setLightMode()
    }else{
      setDarkMode()
    }
  }
  )