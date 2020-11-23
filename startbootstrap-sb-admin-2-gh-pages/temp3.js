// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyABCpkEcHNLDRpsHXKJe-bd85a4Ig2N-_Y",
    authDomain: "pknu2204.firebaseapp.com",
    databaseURL: "https://pknu2204.firebaseio.com",
    projectId: "pknu2204",
    storageBucket: "pknu2204.appspot.com",
    messagingSenderId: "1001547594779",
    appId: "1:1001547594779:web:2523a2274f7494d0cb0cbe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var big = document.getElementById('big');
var dbRef = firebase.database().ref().child('text');
dbRef.on('value', snap => big.innerText = snap.val());

var numtest = 1
/*
function writeData() {
    firebase.database().ref("User/" + numtest + "/test").set({
        name: document.getElementById("nameField").value,
        age: document.getElementById("ageField").value
    });
}
*/
//set or put

var a = 1
var b = 2
var c = 3
function writeData() {
    firebase.database().ref("User/").set({
        namee_a: a + "-" + b + "-",
        age: document.getElementById("ageField").value
    });
}

function getData() {
    firebase.database().ref("User").once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementById("data").innerHTML = childData['name'] + "-" + childData['age'];
        })
    })
}