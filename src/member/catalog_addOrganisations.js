/** node program for adding organisations
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
var categoryRef = db.collection("catalog_organisation");

categoryRef.doc().set(
    {
        "website": "https://www.acando.no/",
        "organisationTags": "digital strategy, IoT, data analytics, autonomous",
        "categories": {
            "SDG": ["1", "2"],
            "segment": ["mobility", "energy"],
            "BREAM": ["ledelse", "energibruk"]

        },
        "contacts": [{
            "mobile": "",
            "title": "Director Smart City",
            "email": "",
            "name": "Dan Vigeland"
        },
        {
            "mobile": "",
            "title": "Director Smart Transport",
            "email": "",
            "name": "frode Kjos"
        }
        ],

        "foreignKeys": {
            "ckan_id": "e8d52059-1139-4b58-8169-52314ba56d7a",
            "organisationNumber": "979191138",
            "insightly_id": "95288967"
        },
        "summary": "Acando er et konsulentselskap som jobber med digitale transformasjoner i offentlig og private virksomheter. Teknologi er en sentral driver til forandring, men det er brukerens evne og ønske om å ta teknologien i bruk som skaper verdi. Med teknisk spisskompetanse og inngående innsikt i brukeratferd og forretningsutvikling drevet av digitalisering, skaper vi idéer, løsninger og mobiliserer organisasjoner til forandring. Et av våre satsningsområder er Smart City der Intelligente Transportsystemer (ITS) og selvkjørende minibusser i alminnelig trafikkmiljø, er en del av satsningen..",
        "slogan": "Digitalt konsulentselskap",
        "phone": "93001000",
        "idName": "acando",
        "organicationType": "private",
        "image": {
            "large": "",
            "medium": "http://bucket.urbalurba.com/logo/acando.jpg",
            "small": ""
        },
        "updates": {
            "ckan_org_date_updated_utc": "2019-03-13 08:37:38",
            "insightly_org_date_updated_utc": "2019-03-13 08:37:38"
        },
        "networkMemberships": [
            "SBN",
            "greenbuilding"
        ],
        "location": {
            "shippingAddress": "Tordenskioldsgate 8-10, 0160 Oslo, Norway",
            "gps": {
                "_latitude": 0,
                "_longitude": 0
            }
        },
        "displayName": "Acando"
    }
);


