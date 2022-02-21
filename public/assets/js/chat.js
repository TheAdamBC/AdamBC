/*
 *  (C) 2018, All rights reserved. This software constitutes the trade secrets and confidential and proprietary information
 *  It is intended solely for use by Sandip Salunke. This code may not be copied or redistributed to third parties without 
 *  prior written authorization from Sandip Salunke
 */

var socket = io();

var allChatMessages = [];

var chatNotificationCount = [];

var myUser = {};
var myFriend = {};

// Document Ready function called automatically on page load
$(document).ready(function(){
  loginMe();
});

// Function to ask user to supply his/her name before entering a chatbox
function loginMe() {
  var person = prompt("Peer Username:", "username");

  if (/([^\s])/.test(person) && person != null && person != "") {

    //$('#user').val(person);
    socket.emit('newUser', person);

    document.title = 'Peer Chat';
  } else {
    location.reload();
  }
}

// Function to be called when sent a message from chatbox
function submitfunction() {
  var message = {};
  text = $('#m').val();
  
  if(text != '') {

    message.text = text;

    message.sender = myUser.id;
    message.receiver = myFriend.id;

    $('#messages').append('<li class="chatMessageRight">' + message.text + '</li>');
    
    if(allChatMessages[myFriend.id] != undefined) {
      allChatMessages[myFriend.id].push(message);
    } else {
      allChatMessages[myFriend.id] = new Array(message);
    }

    socket.emit('chatMessage', message);
  }

  $('#m').val('').focus();
  return false;
}

// function to emit an even to notify friend that I am typing a message 
function notifyTyping() { 
  socket.emit('notifyTyping', myUser, myFriend);
}

// Load all messages for the selected user
function loadChatBox(messages) {
  $('#messages').html('');
  messages.forEach(function(message){

    var cssClass = (message.sender == myUser.id) ? 'chatMessageRight' : 'chatMessageLeft';

    $('#messages').append('<li class="' + cssClass + '">' + message.text + '</li>');
  });
}

// Append a single chant message to the chatbox
function appendChatMessage(message) {
  if(message.receiver == myUser.id && message.sender == myFriend.id) {
    playNewMessageAudio();

    var cssClass = (message.sender == myUser.id) ? 'chatMessageRight' : 'chatMessageLeft';

    $('#messages').append('<li class="' + cssClass + '">' + message.text + '</li>');
  } else {
    playNewMessageNotificationAudio();

    updateChatNotificationCount(message.sender);
  }

  if(allChatMessages[message.sender] != undefined) {
    allChatMessages[message.sender].push(message);
  } else {
    allChatMessages[message.sender] = new Array(message);
  }
}

// Function to play a audio when new message arrives on selected chatbox
function playNewMessageAudio() {
  (new Audio('https://notificationsounds.com/soundfiles/8b16ebc056e613024c057be590b542eb/file-sounds-1113-unconvinced.mp3')).play();
}

// Function to play a audio when new message arrives on selected chatbox
function playNewMessageNotificationAudio() {
  (new Audio('https://notificationsounds.com/soundfiles/dd458505749b2941217ddd59394240e8/file-sounds-1111-to-the-point.mp3')).play();
}

// Function to update chat notifocation count
function updateChatNotificationCount(userId) {
  var count = (chatNotificationCount[userId] == undefined) ? 1 : chatNotificationCount[userId] + 1;

  chatNotificationCount[userId] = count;

  $('#' + userId + ' label.chatNotificationCount').html(count);
  $('#' + userId + ' label.chatNotificationCount').show();
}

// Function to clear chat notifocation count to 0
function clearChatNotificationCount(userId) {
  chatNotificationCount[userId] = 0;
  $('#' + userId + ' label.chatNotificationCount').hide();
} 


// Function to be called when a friend is selected from the list of online users
function selectUerChatBox(element, userId, userName) {
  myFriend.id = userId;
  myFriend.name = userName;

  $('#form').show();
  $('#messages').show();
  $('#onlineUsers li').removeClass('active');

  $(element).addClass('active');
  $('#notifyTyping').text('');
  $('#m').val('').focus();

  // Reset chat message count to 0
  clearChatNotificationCount(userId);

  // load all chat message for selected user 
  if(allChatMessages[userId] != undefined) {
    loadChatBox(allChatMessages[userId]);
  } else {
    $('#messages').html('');
  }
}

// ############# Event listeners and emitters ###############
// Listen to newUser even to set client with the current user information
socket.on('newUser', function(newUser){
  myUser = newUser;
  $('#myName').html(myUser.name);
});

// Listen to notifyTyping event to notify that the friend id typying a message
socket.on('notifyTyping', function(sender, recipient){
  if(myFriend.id == sender.id) {
    $('#notifyTyping').text(sender.name + ' is typing ...');
  }

  setTimeout(function(){ $('#notifyTyping').text(''); }, 5000);
});

// Listen to onlineUsers event to update the list of online users
socket.on('onlineUsers', function(onlineUsers){
  var usersList = '';

  if(onlineUsers.length == 2) {
    onlineUsers.forEach(function(user){
      if(myUser.id != user.id){
        myFriend.id = user.id;
        myFriend.name = user.name;
        $('#form').show();
        $('#messages').show();
      }
    });
  }
  
  onlineUsers.forEach(function(user){
    if(user.id != myUser.id) {
      var activeClass = (user.id == myFriend.id) ? 'active' : '';

      usersList += '<li id="' + user.id + '" class="' + activeClass + '" onclick="selectUerChatBox(this, \'' + user.id + '\', \'' + user.name + '\')"><a href="javascript:void(0)">' + user.name + '</a><label class="chatNotificationCount"></label></li>';
    }
  });

  $('#onlineUsers').html(usersList);
});

// Listen to number of users online
socket.on('onlineUsers', function(onlineUsers){
  $('#usersOnline').html(onlineUsers.length);
});

// Listen to chantMessage event to receive a message sent by my friend 
socket.on('chatMessage', function(message){
  appendChatMessage(message);
});

// Listen to userIsDisconnected event to remove its chat history from chatbox
socket.on('userIsDisconnected', function(userId){
  delete allChatMessages[userId];
  $('#form').hide();
  $('#messages').hide();
});

