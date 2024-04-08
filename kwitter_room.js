//AGREGA TUS ENLACES DE FIREBASE AQUÍ

var firebaseConfig = {
      apiKey: "AIzaSyA8Xk7pKmvHEdCyziBCThPT4YdlDQSxeUQ",
      authDomain: "kwitter-2f68c.firebaseapp.com",
      databaseURL: "https://kwitter-2f68c-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f68c",
      storageBucket: "kwitter-2f68c.appspot.com",
      messagingSenderId: "406822268116",
      appId: "1:406822268116:web:72e9adc9fc1f72f47b5f41"
    };
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicia el código

      //Finaliza el código
      });});}
getData();
