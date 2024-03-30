function getOnlineStatus() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://api.mcsrvstat.us/bedrock/3/51.81.150.31:19585', true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState === 4) {

      var type = request.getResponseHeader('Content-Type');
      if (type.indexOf("text") !== 1) {
        var output = JSON.parse(request.responseText);
        var online = document.getElementsByClassName("online")[0];
        var onlineOnly = document.getElementsByClassName("onlineOnly")[0];
        if (output.online) {
          online.textContent = 'Online';
          var players = document.getElementsByClassName("players")[0];
          players.textContent = (output.players.online)
          var version = document.getElementsByClassName("version")[0];
          version.textContent = (output.version)
          var motd = document.getElementsByClassName("motd")[0];
          motd.textContent = (output.map.clean.replace("§u", ''))
        } else {
          online.textContent = 'Offline';
          onlineOnly.classList.add("hidden");
        }
        setTimeout(() => {
          getOnlineStatus()
        }, 5000);
      }
    }
  }
}
getOnlineStatus();
addEventListener('load', (event) => {
  const date1 = new Date();
  var MinFromMidnight = 8 * 60 - date1.getTimezoneOffset();
  var amOrpm;
  if (MinFromMidnight > 0) {
    amOrpm = 'am';
  } else {
    amOrpm = 'pm';
  }

  var time = ((8 * 60 - date1.getTimezoneOffset() + 12 * 60) / 60);

  var twelveHourTime
  if (time > 12) {
    twelveHourTime = time - 12
  } else {
    twelveHourTime = time
  }

  var restartTime = document.getElementsByClassName("restartTime")[0];
  restartTime.textContent = '' + twelveHourTime + amOrpm + ' (local time).'
  
  const darkMode = document.querySelectorAll('.darkModeButton');
darkMode[0].addEventListener('click', function(event) {
  const body = document.querySelectorAll('body');
  body[0].classList.add("dark");
  body[0].classList.remove("light");
});

const lightMode = document.querySelectorAll('.lightModeButton');
lightMode[0].addEventListener('click', function(event) {
  const body = document.querySelectorAll('body');
  body[0].classList.remove("dark");
  body[0].classList.add("light");
});
}
)