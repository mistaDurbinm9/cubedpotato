MinecraftAPI.getServerStatus('play.cubedpotato.com', {
  port: 25565 // optional, only if you need a custom port
}, function (err, status, players) {
  if (err) {
    return document.querySelector('.server-status').innerHTML = 'Error loading status';
  }

  // you can change these to your own message!
  document.querySelector('.server-online').innerHTML = status.online ? 'Online!' : 'Offline!';
  document.querySelector('.players-online').innerHTML = players.max + '/' + players.max;
});
