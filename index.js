function getOnlineStatus() {
  var request = new XMLHttpRequest();

  request.open('GET', 'https://api.mcsrvstat.us/bedrock/3/51.81.164.5:27166', true);
  request.send(null);
  request.onreadystatechange = function() {
    if (request.readyState === 4) {

      var type = request.getResponseHeader('Content-Type');
      if (type.indexOf("text") !== 1) {
        var output = JSON.parse(request.responseText);
        var statusString;
        var players = document.getElementsByClassName("players")[0];
        players.textContent = (output.players.online)
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
getOnlineStatus();
