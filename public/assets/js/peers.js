/*
 *  Peer Networks online
 */

var socket = io();

var myPeer = {};

var myFriend = {};

// Document Ready function called automatically on page load
$(document).ready(function(){
  loginPeer();
});

// Function to ask peer to supply their name before entering a chatpeer
function loginPeer() {
  var network = prompt("Peer Network Name:", "username");

  if (/([^\s])/.test(network) && network != null && network != "") {

    socket.emit('newPeer', network);

    document.title = 'Peer Networks';
  } else {
    location.reload();
  }
}

// ############# Event listeners and emitters ###############
// Listen to newPeer even to set client with the current peer information
socket.on('newPeer', function(newPeer){
  myPeer = newPeer;
});

// Listen to onlinePeers event to update the list of online peers
socket.on('onlinePeers', function(onlinePeers){
  var peersList = '';

  if(onlinePeers.length == 2) {
    onlinePeers.forEach(function(peer){
      if(myPeer.id != peer.id){
        myFriend.id = peer.id;
        myFriend.name = peer.name;
        $('#form').show();
        $('#messages').show();
      }
    });
  }
  
  onlinePeers.forEach(function(peer){
    if(peer.id != myPeer.id) {
      var activeClass = (peer.id == myFriend.id) ? 'active' : '';

      peersList += '<li id="' + peer.id + '" class="' + activeClass + '"><a href="javascript:void(0)">' + peer.name + '</a></li>';
    }
  });

  $('#onlinePeers').html(peersList);

});

