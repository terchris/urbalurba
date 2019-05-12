/** node program for adding categores
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
var categoryRef = db.collection("catalog_category");


categoryRef.doc().set(
    {
        "displayName": "Sustainable Development Goals",
        "image": {
            "large": "",
            "medium": "",
            "small": ""
        },
        "categoryItems": [
            {
                "image": {
                    "large": "https://www.fn.no/var/globalis/storage/images/2/0/7/1/831702-44-nor-NO/M%C3%A5l-1-RGB.png",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 1,
                "summary": "Utrydde alle former for fattigdom i hele verden",
                "idName": "1",
                "displayName": "Utrydde fattigdom",
                "article": "I 1990 levde 36 prosent av verdens befolkning i ekstrem fattigdom. Siden den gang har andelen ekstremt fattige blitt mer enn halvert. 767 millioner mennesker lever i dag under fattigdomsgrensa på 1,90 dollar dagen. Ekstrem fattigdom skal utryddes "
            },
            {
                "image": {
                    "large": "https://www.fn.no/var/globalis/storage/images/9/1/7/1/831719-16-nor-NO/M+%C3%91l-2-RGB.jpg",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 2,
                "summary": "Utrydde sult, oppnå matsikkerhet og bedre ernæring, og fremme bærekraftig landbruk",
                "idName": "2",
                "displayName": "Utrydde sult",
                "article": "Selv om antallet mennesker som lever i kronisk sult fortsatt er svært høyt, har andelen sunket fra 23,3 prosent i 1990-92 til 12,9 prosent i 2014-2016. 821 millioner mennesker er rammet av sult, mens nesten 2 milliarder opplever manglende matsikkerhet i perioder. Det er på tide å tenke nytt om måten vi dyrker, fordeler og bruker maten vår. Hvis vi gjør det på riktig måte, kan jordbruk, skog og fisk sørge for næringsrik mat til alle, og samtidig være en viktig inntektskilde for mange."
            },
            {
                "image": {
                    "large": "https://www.fn.no/var/globalis/storage/images/6/3/7/1/831736-17-nor-NO/M+%C3%91l-3-RGB.jpg",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 3,
                "summary": "Sikre god helse og fremme livskvalitet for alle, uansett alder",
                "idName": "3",
                "displayName": "God helse",
                "article": "At alle kan leve friske og sunne liv er en forutsetning for å oppnå bærekraftig utvikling. Det er gjort store framskritt i arbeidet med å øke forventet levealder, og minske mødre- og barnedødelighet i verden. For at dette bærekraftsmålet skal nås, kreves det likevel en massiv innsats de neste 15 årene. En rekke alvorlige sykdommer må utryddes, og andre store helseutfordringer må håndteres."
            },
            {
                "image": {
                    "large": "https://www.fn.no/var/globalis/storage/images/3/5/7/1/831753-17-nor-NO/M+%C3%91l-4-RGB.jpg",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 4,
                "summary": "Sikre inkluderende, rettferdig og god utdanning og fremme muligheter for livslang læring for alle",
                "idName": "4",
                "displayName": "God utdanning",
                "article": "En god utdanning er grunnlaget for å forbedre menneskers liv. Jenter og gutter skal ha lik tilgang til utdanning med god kvalitet, og den skal være gratis. "
            }
        ],
        "summary": "FNs bærekraftsmål er verdens felles arbeidsplan for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030",
        "idName": "SDG",
        "choice": "multiple"
    }
);



categoryRef.doc().set(
    {
        "displayName": "Segments",
        "image": {
            "large": "",
            "medium": "",
            "small": ""
        },
        "categoryItems": [
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 1,
                "summary": "Mobilitetsløsninger",
                "idName": "mobility",
                "displayName": "Mobility",
                "article": "Løsninger for transport av mennesker og varer"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 2,
                "summary": "Avfallshåndtering",
                "idName": "waste",
                "displayName": "Waste",
                "article": "Løsninger og virksomheter innen håndtering av avfall"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 3,
                "summary": "Energi",
                "idName": "energy",
                "displayName": "Energy",
                "article": "Løsninger og virksomheter innen energi"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 4,
                "summary": "Turisme",
                "idName": "4",
                "displayName": "tourism",
                "article": "Turisme"
            }
        ],
        "summary": "The different segments that adressed",
        "idName": "segment",
        "choice": "multiple"
    }    
);



categoryRef.doc().set(
    {
        "displayName": "Challenges",
        "image": {
            "large": "",
            "medium": "",
            "small": ""
        },
        "categoryItems": [
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 1,
                "summary": "Løsninger for bedre håndtering av parkering",
                "idName": "improving_parking",
                "displayName": "Improving parking",
                "article": "Løsninger for bedre håndtering av parkering"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 2,
                "summary": "Redusere el regningen",
                "idName": "reducing_energy_bills",
                "displayName": "Reducing energy bills",
                "article": "løsninger som kan redusere energi kostnad"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 3,
                "summary": "Forbedre helsestell",
                "idName": "improving_health_care",
                "displayName": "Improving health care",
                "article": "Løsninger for forbedret helsestell"
            }
        ],
        "summary": "Defines set of challenges ",
        "idName": "challenges",
        "choice": "multiple"
    }
    );
    



categoryRef.doc().set(
    {
        "displayName": "BREAM-NOR",
        "image": {
            "large": "",
            "medium": "",
            "small": ""
        },
        "categoryItems": [
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 1,
                "summary": "Ledelse og administrasjon",
                "idName": "ledelse",
                "displayName": "Ledelse og administrasjon",
                "article": "Ledelse og administrasjon"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 2,
                "summary": "Helse og innemiljø",
                "idName": "helse",
                "displayName": "Helse og innemiljø",
                "article": "Helse og innemiljø"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 3,
                "summary": "Energibruk",
                "idName": "energibruk",
                "displayName": "Energibruk",
                "article": "Energibruk"
            }
        ],
        "summary": "Miljøsertifisering for alle typer bygg.",
        "idName": "BREAM",
        "choice": "multiple"
    }    
        );
        

categoryRef.doc().set(
    {
        "displayName": "Organisasjonstype",
        "image": {
            "large": "",
            "medium": "",
            "small": ""
        },
        "categoryItems": [
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 1,
                "summary": "Private bedrifter",
                "idName": "private",
                "displayName": "Private bedrifter",
                "article": "Private bedrifter"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 2,
                "summary": "Kommuner og kommunale foretak",
                "idName": "municipality",
                "displayName": "Kommune",
                "article": "Kommuner og kommunale foretak"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 3,
                "summary": "Statlige organisasjoner",
                "idName": "government",
                "displayName": "Statlig",
                "article": "Statlige organisasjoner"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 4,
                "summary": "Organisasjoner",
                "idName": "association",
                "displayName": "Organisasjoner",
                "article": "Organisasjoner"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 5,
                "summary": "Frivillige organisasjoner",
                "idName": "civil_society_ngo",
                "displayName": "Frivillige organisasjoner",
                "article": "Frivillige organisasjoner"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 6,
                "summary": "Akademia",
                "idName": "academia",
                "displayName": "Akademia",
                "article": "Akademia"
            },
            {
                "image": {
                    "large": "",
                    "medium": "",
                    "small": ""
                },
                "sortOrder": 7,
                "summary": "Forskning",
                "idName": "research",
                "displayName": "Forskning",
                "article": "Forskning"
            }
        ],
        "summary": "Types of organizations",
        "idName": "organizationType",
        "choice": "single"
    }    
            );
            