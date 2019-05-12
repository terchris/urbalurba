/** node program for searching organizations
 * Its for use on a local node server on your machine.
 * so to have access to the server you need to put a key in /private folder (gitignore)
 * To get a key see section Initialize on your own server on https://firebase.google.com/docs/firestore/quickstart 
 * use xx to run it
 */


var admin = require("firebase-admin");
var serviceAccount = require('../../private/urbalurbacore-firebase-adminsdk-0svno-20cb09038a.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://urbalurbacore.firebaseio.com"
});

var db = admin.firestore();


var orgref = db.collection('catalog_organisation');

/*
// Searching for acando 
console.log('Searching for acando -> should return a record');
var query = orgref.where('idName', '==', 'acando').get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', JSON.stringify( doc.data())   );
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

  */

  /*
// Searching for 1acando 
console.log('Searching for 1acando -> should NOT return a record');
var query = orgref.where('idName', '==', '1acando').get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', JSON.stringify( doc.data())   );
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

*/

/*
// Searching for acando and organicationType = private
console.log('Searching for acando and organicationType = private -> should return a record');
var query = orgref.where('idName', '==', 'acando').where('organicationType', '==', 'private').get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', JSON.stringify( doc.data())   );
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

*/

/*
// Searching for acando and organicationType = private
console.log('Searching for acando and organicationType = private -> should return a record');
var query = orgref.where('idName', '==', 'acando').where('organicationType', '==', 'private').get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', JSON.stringify( doc.data())   );
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });


*/


/*

// Searching for acando and networkMemberships contains SBN
console.log('Searching for acando and networkMemberships contains SBN -> should return a record');
var query = orgref.where('idName', '==', 'acando').where('networkMemberships', 'array-contains', 'SBN').get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', JSON.stringify( doc.data())   );
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });

*/


// Searching for acando and caregories.SDG has an answer 2
console.log('Searching for acando and caregories.SDG has an answer 2 -> should return a record');
var query = orgref.where('idName', '==', 'acando').where('categories.SDG', 'array-contains', '2').get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
      console.log(doc.id, '=>', JSON.stringify( doc.data())   );
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
