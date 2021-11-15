var firebaseConfig = {
  apiKey: 'AIzaSyC97jVCrGFzT9ITY3EQRY8AoQWl3YEXueM',
  authDomain: 'csci225-fba7e.firebaseapp.com',
  projectId: 'csci225-fba7e',
  storageBucket: 'csci225-fba7e.appspot.com',
  messagingSenderId: '1090943276775',
  appId: '1:1090943276775:web:fd8f938f62c14414143442',
  measurementId: 'G-CC57Y5HC9K',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#Login").submit(function(e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this. 
  var email =  $("#signup-form input[name='username']").val();
  console.log('it worked');
  var password = $("#signup-form input[name='password']").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      // Signed in
      // ...
      console.log("login in");
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});