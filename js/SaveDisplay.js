// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC97jVCrGFzT9ITY3EQRY8AoQWl3YEXueM',
  authDomain: 'csci225-fba7e.firebaseapp.com',
  projectId: 'csci225-fba7e',
  storageBucket: 'csci225-fba7e.appspot.com',
  messagingSenderId: '1090943276775',
  appId: '1:1090943276775:web:fd8f938f62c14414143442',
  measurementId: 'G-CC57Y5HC9K',
};
firebase.initializeApp(firebaseConfig);




// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();

  // get the value of the form using serializeArray method
  console.log('worked');
  
  var inputdata = $('.sampleSurvey').serializeArray();
  var inputJson = {};
  inputdata.forEach((data)=>{
    console.log(data.name);
    console.log(data.value);

   
   
      var n = data.name;
      var v = data.value;
      
    inputJson[n] = v;
    
  }


  
 
);



firebase.firestore().collection('Survey').add(inputJson);



});
firebase
  .firestore()
  .collection("Survey")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    var a1 = 0;
    var a2 = 0;
    var a3 = 0;
    var a4 = 0;
    var a5 = 0;
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().choice);
      console.log(doc.data().comm);

      //switch to implement the table below
      if (doc.data.choice == 'A'){
        a1 += 1;
      } else if (doc.data.choice =='B'){
        a2 += 1;
      }else if (doc.data.choice == 'C'){
        a3 += 1;
      }else if (doc.data.choice == 'D'){
        a4 += 1;
      }else if (doc.data.choice == 'E'){
        a5 += 1;
      }

      


    });
  });

// update the result in table
