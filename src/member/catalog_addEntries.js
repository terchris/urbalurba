/* node program for adding entries
    * Its for use on a local node server on your machine.
    * so to have access to the server you need to put a key in /private folder (gitignore)
    * To get a key see section Initialize on your own server on https://firebase.google.com/docs/firestore/quickstart 
    * se also https://firebase.google.com/docs/firestore/manage-data/transactions
 
    * To use it go to its directory and type:
    node catalog_addEntries.js
*/

var admin = require("firebase-admin");
var serviceAccount = require('../../private/urbalurbacore-firebase-adminsdk-0svno-20cb09038a.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://urbalurbacore.firebaseio.com"
});

var db = admin.firestore();
var categoryRef = db.collection("catalog_entry");



categoryRef.doc().set(
    {
        "idName": "elektrisk-passasjerferge",        
        "displayName": "Elektrisk passasjerferge",
        "slogan": "Verdens første elektriske passasjerskip",
        "summary": "Høsten 2019 ble fergen Go'Vakker Elen satt i drift i Fredrikstad. Fergen er en av de første i sitt slag i verden. Den er 100% elektrisk og lades med induksjon mens den ligger til kai.",
        "url": "https://www.fredrikstad.kommune.no/aktuelt/elferga-govakker-elen-dopt/",
        "description": "Go´vakker Elen er etter det vi vet verdens første passasjerskip som regnes som elektrisk drevet. Med fulladede batterier vil ferga kunne driftes ca. 40 minutter på full fart (noe over 9 knop), og over 4 timer i 5 knop (som er maks i elva Glomma).Det er ikke bare batteridriften som er imponerende og innovativt når det gjelder Go´Vakker Elen. Det er også måten fergen lades på. Her slipper man skjøteledning. Elen lades induktivt når den legger til ved fergeleiet og trenge å lade mellom 1 og 2 minutter for å kompensere for energitapet ved en tur/retur-reise over Glomma. Det er omtrent den tiden det tar å gå av og på ferga. Som de andre passasjerfergene som drives av Fredrikstad kommune, er også denne gratis for passasjerene å bruke.\r\n\r\nHvorfor regner vi Go'Vakker Elen som et smartbyprosjekt? Det er fordi hun bidrar flere mål i Smart Fredrikstad-Strategien: Denne elektriske fergen bidrar til at innbyggerne har et miljøvennlig alternativ til transport, den bidrar til mindre støy, og den sparer kommunen for penger.Vi regner med at driftskostnadene blir inntil 80% mindre enn for de gamle dieseldrevne fergene.Denne ene fergen alene er beregnet til å spare 250.000 kroner i diesel, og 50.000 kroner i driftsutgifter årlig. Passasjerene kan ta med seg sykkel ombord.",
        "image": {
            "large": "",
            "medium": "http://bucket.urbalurba.com/entry/fredrikstad-kommune/elen.png",
            "small": ""
        },
        "status": "Ongoing",
        "location": {
            "shippingAddress": "Rådhuset, Nygaardsgaten 14-16, 1606 Fredrikstad, Norway",
            "gps": {
                "_latitude": 0,
                "_longitude": 0
            }
        },
        "startDate": "43709",
        "finishDate": "",

        "categories": {
            "type": ["Solution"],
            "tags": "transport, offentlig transport, ferge, fergetransport, elektrisk ferge, induktiv lading",
            "SDG": [
                "11",
                "13"
            ],
            "segment": [
                "mobility",
                "energy"
            ],
            "challenges": [
                "Reducing use of fossils in public transport",
                "Promoting sustainable behavior",
                "Reducing local air pollution",
                "Reducing use of fossils",
                "Promoting active living",
                "Improving Life Quality",
                "Reducing Operation Costs"
            ]
        },
        "ownerOrg":
        {
            "displayName": "Fredrikstad kommune",
            "insightly_id": "90707163",
            "idName": "fredrikstad-kommune",
            "phone": "69 30 60 00",
            "image": {
                "large": "",
                "medium": "http://bucket.urbalurba.com/logo/fredrikstad.jpg",
                "small": ""
            },
            "website": "http://www.smartfredrikstad.no",
            "location": {
                "shippingAddress": "Nygaardsgaten 14-16, Fredrikstad, 1602, Norway",
                "gps": {
                    "_latitude": 0,
                    "_longitude": 0
                }
            }
        },
        "contacts": [
            {
                "contactRoles": [
                    "Display"
                ],
                "displayName": "Fredrikstad kommune",
                "orgDepartment": "Virksomhet parkering og transport",
                "title": "Virksomhetsleder",
                "name": "Frode Samuelsen",
                "mobile": "95901107",
                "email": "frosam@fredrikstad.kommune.no",
                "url": "https://www.fredrikstad.kommune.no/"
            },
            {
                "contactRoles": [
                    "Display",
                    "Maintainer"
                ],
                "displayName": "Fredrikstad kommune",
                "orgDepartment": "Smart Fredrikstad",
                "title": "Programleder",
                "name": "Gard Jenssen",
                "mobile": "90087378",
                "email": "garjen@fredrikstad.kommune.no",
                "url": "https://www.fredrikstad.kommune.no/"
            }
        ],
        "foreignKeys":
        {
            "orgIdName": "fredrikstad-kommune",
            "insightly_id": "95288967",
            "form": {
                "formSystem": "cognitoforms",
                "formID": "ProjectRegistration_Id",
                "entryID": "29",
                "Entry_Status": "Reviewed",
                "Entry_DateCreated": "43843.56528",
                "Entry_DateSubmitted": "43843.57292",
                "Entry_DateUpdated": "43845.59653"
            }
        }

    }
);


