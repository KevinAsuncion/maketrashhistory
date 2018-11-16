//sets up firestore
var firestore = firebase.firestore();
var settings = {timestampsInSnapshots: true};
firestore.settings(settings);

//sets up db
var db = firebase.firestore();
var cupsRef = db.collection("counts").doc("cups");

//gets value from db and puts it into element
cupsRef.get().then(function (doc) {
  if (doc.exists) {
    var cups = doc.data();
    document.getElementById("cup-number").innerHTML = cups.count;
    return cups;
  } else {
    console.log("No such document!");
  }
}).catch(function (error) {
  console.log("Error getting document:", error);
});

//updates firestore
function update_firestore(number) {
  db.collection("counts").doc("cups").set({
    count: number
  })
    .then(function () {
      document.getElementById("cup-number").innerHTML = number;
    })
    .catch(function (error) {
      console.error("Error writing document: ", error);
    });
}

//updates firestore and page when clicked
document.getElementById("cup-img").addEventListener("click", function () {
  var number = document.getElementById("cup-number").innerHTML;
  number++;
  update_firestore(number);
});

