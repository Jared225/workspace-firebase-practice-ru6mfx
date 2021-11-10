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
//object examples
var testJson = {};
testJson['lastname'] = 'zhang';
testJson['location'] = 'aiken';
console.log(testJson);

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  const inputdata = $('form').serializeArray();
  console.log(inputdata);

  /* save the data to database */
  var inputJson = {};
  for(var i=0;i<inputdata.length; i++){
    var n = inputdata[i]["name"];
    var v = inputdata[i]["value"];
    console.log(n + ' ' + v);
  inputJson[n] = v;
  
}
  firebase.firestore().collection('hotelreservation').add(inputJson);

  /* clear the entry */
  $('form')[0].reset();
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection("hotelreservation")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });

