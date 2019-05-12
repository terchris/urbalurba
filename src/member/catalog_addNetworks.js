/** node program for adding networks
 * Its for use on a local node server on your machine.
 * so to have access to the server you need to put a key in /private folder (gitignore)
 * To get a key see section Initialize on your own server on https://firebase.google.com/docs/firestore/quickstart 
 

 se also https://firebase.google.com/docs/firestore/manage-data/transactions
 */


var admin = require("firebase-admin");
var serviceAccount = require('../../private/urbalurbacore-firebase-adminsdk-0svno-20cb09038a.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://urbalurbacore.firebaseio.com"
});

var db = admin.firestore();
var networkRef = db.collection("catalog_network");
/*
networkRef.doc().set(
    {
        "website": "http://www.smartebyernorge.no/",
        "categories": ["SDG", "segment", "challenges"],
        "foreignKeys": {
            "organisationNumber": "979191138"
        },
        "summary": "Driver fram ....",
        "slogan": "Smartbynettverk",
        "phone": "90056958",
        "idName": "SBN",
        "image": {
            "large": "",
            "medium": "http://bucket.urbalurba.com/logo/acando.jpg",
            "small": ""
        },
        "location": {
            "shippingAddress": "Tordenskioldsgate 3, 0160 Oslo, Norway",
            "gps": {
                "_latitude": 0,
                "_longitude": 0
            }
        },
        "displayName": "Smarte Byer Norge"
    }
);
*/


networkRef.doc().set(
    {
        "website": "https://byggalliansen.no",
        "categories": ["SDG", "BREAM"],
        "foreignKeys": {
            "organisationNumber": "979191138"
        },
        "summary": "non-profit medlemsforening der virksomheter fra hele verdikjeden innen bygg- og eiendom kan være medlem.",
        "slogan": "Allianse for bærekraftige bygg og områder",
        "phone": " 97758897",
        "idName": "byggalliansen",
        "image": {
            "large": "",
            "medium": "http://bucket.urbalurba.com/logo/acando.jpg",
            "small": ""
        },
        "location": {
            "shippingAddress": "Schweigaards gate 34C, 0191 Oslo, Norway",
            "gps": {
                "_latitude": 0,
                "_longitude": 0
            }
        },
        "displayName": "Grønn byggallianse"
    }
    
);