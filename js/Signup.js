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
$('#signup-form').submit(function (e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = $("#signup-form input[name='username']").val();
  console.log('email you typed is ' + email);
  var password = $("#signup-form input[name='password']").val();
  console.log('password you typed is ' + password);
  var repassword = $("#signup-form input[name='cpassword']").val();
  if (password == cpassword) {
    console.log('they match');
  } else {
    alert;
  }

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      // Signed in
      // ...

      console.log('You are signed up');
      window.location.href = 'Login.html';
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});

//the other choice use google account
$('#google').click(function () {
  console.log('click google log in method');
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log('loged in');
    });
});
