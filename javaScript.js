//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/play.cubedpotato.com/25565";
//https://mcapi.us/server/status?ip=666.fluctis.com&port=25757
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 }
var pl = '';
 if(r.players.sample.length > 0 ){ pl = '<br>OP: '+r.players.sample[0].name;  }
  $('#rest').html(r.description.replace(/§(.+?)/gi, '')+'<br><b>Players Online:</b> '+r.players.online+pl);
 $('#favicon').attr('src', r.favicon);

});

function fadeInPage() {
      if (!window.AnimationEvent) { return; }
      var fader = document.getElementById('fader');
      fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
      if (!window.AnimationEvent) { return; }
      var anchors = document.getElementsByTagName('a');

   for (var idx=0; idx<anchors.length; idx+=1) {
     if (anchors[idx].hostname !== window.location.hostname) {
            continue;
        }
        anchors[idx].addEventListener('click', function(event) {
           var fader = document.getElementById('fader'),
               anchor = event.currentTarget;

           var listener = function() {
               window.location = anchor.href;
               fader.removeEventListener('animationend', listener);
           };
           fader.addEventListener('animationend', listener);

           event.preventDefault();
           fader.classList.add('fade-in');
      });
  }
});

window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});
