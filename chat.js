// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
apiKey: "AIzaSyB7Jj50UcarVJuedR8YDEWtw1PQneC9gBQ",
    authDomain: "kwitter-60ad6.firebaseapp.com",
    databaseURL: "https://kwitter-60ad6-default-rtdb.firebaseio.com",
    projectId: "kwitter-60ad6",
    storageBucket: "kwitter-60ad6.appspot.com",
    messagingSenderId: "267786226055",
    appId: "1:267786226055:web:33636c3a7b8a247e0beb22"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



