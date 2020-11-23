//read
var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', function (snapshot) {
    updateStarCount(postElement, snapshot.val());
});
//on- for update once
//once - for update continuously

//write
function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture: imageUrl
    });
}

var d_data = firebase.database().ref('navdrone/navdrone/0');
var d_state = firebase.database().ref('navdrone/0/drones/'+ d_num);


var dbRef = firebase.database().ref('logDHT');
dbRef.once('value', function (snapshot) {
    var lastData = 0;
    snapshot.forEach(function (childSnapshot) {
        lastData = childSnapshot;
    });
    setValue(lastData);
});
dbRef.on("child_added", function (snapshot) {
    setValue(snapshot);
});
dbRef.on("child_changed", function (snapshot) {
    setValue(snapshot);
});
var key = ""

function setValue(snapshot) {
    document.getElementById('lat').value = snapshot.val().lat;
    document.getElementById('lng').value = snapshot.val().lng;
    document.getElementById('humidity').value = snapshot.val().humidity;
    document.getElementById('temperature').value = snapshot.val().temperature;
    document.getElementById('time').value = snapshot.val().time;
    document.getElementById('state1').innerHTML = snapshot.val().temperature;
    document.getElementById('state2').innerHTML = snapshot.val().humidity;
};