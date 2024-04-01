function passwordVisible() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

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
  
  const isDarkMode = localStorage.getItem("theme") === "dark"
  if (isDarkMode) {
    setDarkMode()
  }else{
    setLightMode()
  }