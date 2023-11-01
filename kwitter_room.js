
      const config = {
        apiKey: "AIzaSyBN25yaJ1TeQNjqNUnipSLTeqBHaDb8xaY",
        authDomain: "chat-2a584.firebaseapp.com",
        databaseURL: "https://chat-2a584-default-rtdb.firebaseio.com",
        projectId: "chat-2a584",
        storageBucket: "chat-2a584.appspot.com",
        messagingSenderId: "837170069952",
        appId: "1:837170069952:web:39338a846339e326584825"
      };

    // Initialize Firebase
    firebase.initializeApp(config);


    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

    function addRoom() {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
    }
    function logOut(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div> <hr> "
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

