function getOnlineStatus() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://api.mcsrvstat.us/bedrock/3/51.81.164.5:27166', true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState === 4) {

      var type = request.getResponseHeader('Content-Type');
      if (type.indexOf("text") !== 1) {
        var output = JSON.parse(request.responseText);
        var statusString;
        var players = document.getElementsByClassName("players")[0];
        players.textContent = (output.players.online)
        var version = document.getElementsByClassName("version")[0];
        version.textContent = (output.version)
        var motd = document.getElementsByClassName("motd")[0];
        motd.textContent = (output.map.clean.replace("§u", ''))
        var online = document.getElementsByClassName("online")[0];
        if (output.online) {
          online.textContent = 'Online';
        } else {
          online.textContent = 'Offline';
        }
        setTimeout(() => {
          getOnlineStatus()
        }, 5000);

      }
    }
  }
}

addEventListener('load', (event) => {

  getOnlineStatus();
  document.title=test;
  const date1 = new Date();
  var MinFromMidnight = 7 * 60 - date1.getTimezoneOffset();
  var amOrpm = document.getElementsByClassName("amOrpm")[0];
  if (MinFromMidnight > 0) {
    amOrpm.textContent = 'am';
  } else {
    amOrpm.textContent = 'pm';
  }
  var restartTime = document.getElementsByClassName("restartTime")[0];
  restartTime.textContent = ((7 * 60 - date1.getTimezoneOffset() + 12 * 60) / 60);
}
);