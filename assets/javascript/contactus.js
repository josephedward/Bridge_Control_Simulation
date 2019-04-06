
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDiy1YF4IByMa44EQBN46KtXkV5DjvPqxc",
    authDomain: "bridge-f1154.firebaseapp.com",
    databaseURL: "https://bridge-f1154.firebaseio.com",
    projectId: "bridge-f1154",
    storageBucket: "bridge-f1154.appspot.com",
    messagingSenderId: "818693965891"
};
firebase.initializeApp(config);


// variable that references the database.

var database = firebase.database();


// this references the connections to the site or users.
var connectionsRef = database.ref("/connections");


$(".btn btn-primary").off("click").on("click", function (event) {
    event.preventDefault();

    console.log(event)


    // Grabbing the user's input, using .val().trim()

    var contactUsFN = $("#validationCustom01").val().trim();
    var contactUsLN = $("#validationCustom02").val().trim();
    var contactUsUN = ("#inputGroupPrepend").val().trim();
    var contactUsCity = $("#frequency-input").val().trim();
    var contactUsState = $("#frequency-input").val().trim();
    var contactUsZip = $("#frequency-input").val().trim();

    var newContact = {
        firstName: contactUsFN,
        lastName: contactUsLN,
        userName: contactUsUN,
        city: contactUsCity,
        state: contactUsState,
        zip: contactUsZip,

    };

    console.log(newContact)


    // uploads the train data to the database
    database.ref().push(newContact);


    alert("Thank-you for your interest.  One of us will get back to you ASAP");






});