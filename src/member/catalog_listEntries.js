/* node program for listing entries
    * Its for use on a local node server on your machine.
    * so to have access to the server you need to put a key in /private folder (gitignore)
    * To get a key see section Initialize on your own server on https://firebase.google.com/docs/firestore/quickstart 
    * se also https://firebase.google.com/docs/firestore/manage-data/transactions
 
    * To use it go to its directory and type:
    node catalog_listEntries.js
*/


var admin = require("firebase-admin");
var serviceAccount = require('../../private/urbalurbacore-firebase-adminsdk-0svno-20cb09038a.json');


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://urbalurbacore.firebaseio.com"
});

var db = admin.firestore();

db.collection('catalog_entry').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', JSON.stringify( doc.data()) );
    });
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });
