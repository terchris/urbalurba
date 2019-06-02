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
            "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-large.png",
            "medium": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-medium.png",
            "small": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-small.jpg"
        },
        "categoryItems": [
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-1.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-1.png"
                },
                "sortOrder": 1,
                "summary": "Utrydde alle former for fattigdom i hele verden",
                "idName": "1",
                "displayName": "Utrydde fattigdom",
                "article": "I 1990 levde 36 prosent av verdens befolkning i ekstrem fattigdom. Siden den gang har andelen ekstremt fattige blitt mer enn halvert. 767 millioner mennesker lever i dag under fattigdomsgrensa på 1,90 dollar dagen. Ekstrem fattigdom skal utryddes "
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-2.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-2.png"
                },
                "sortOrder": 2,
                "summary": "Utrydde sult, oppnå matsikkerhet og bedre ernæring, og fremme bærekraftig landbruk",
                "idName": "2",
                "displayName": "Utrydde sult",
                "article": "Selv om antallet mennesker som lever i kronisk sult fortsatt er svært høyt, har andelen sunket fra 23,3 prosent i 1990-92 til 12,9 prosent i 2014-2016. 821 millioner mennesker er rammet av sult, mens nesten 2 milliarder opplever manglende matsikkerhet i perioder. Det er på tide å tenke nytt om måten vi dyrker, fordeler og bruker maten vår. Hvis vi gjør det på riktig måte, kan jordbruk, skog og fisk sørge for næringsrik mat til alle, og samtidig være en viktig inntektskilde for mange."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-3.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-3.png"
                },
                "sortOrder": 3,
                "summary": "Sikre god helse og fremme livskvalitet for alle, uansett alder",
                "idName": "3",
                "displayName": "God helse",
                "article": "At alle kan leve friske og sunne liv er en forutsetning for å oppnå bærekraftig utvikling. Det er gjort store framskritt i arbeidet med å øke forventet levealder, og minske mødre- og barnedødelighet i verden. For at dette bærekraftsmålet skal nås, kreves det likevel en massiv innsats de neste 15 årene. En rekke alvorlige sykdommer må utryddes, og andre store helseutfordringer må håndteres."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-4.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-4.png"
                },
                "sortOrder": 4,
                "summary": "Sikre inkluderende, rettferdig og god utdanning og fremme muligheter for livslang læring for alle",
                "idName": "4",
                "displayName": "God utdanning",
                "article": "En god utdanning er grunnlaget for å forbedre menneskers liv. Jenter og gutter skal ha lik tilgang til utdanning med god kvalitet, og den skal være gratis. "
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-5.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-5.png"
                },
                "sortOrder": 5,
                "summary": "Oppnå likestilling og styrke jenter og kvinners stilling",
                "idName": "5",
                "displayName": "Likestilling mellom kjønnene",
                "article": "Likestilling er en menneskerett. Det handler om å gi begge kjønn like rettigheter og muligheter til å bestemme over eget liv. Kvinners tilgang til utdanning, helsetjenester, arbeid og juridiske rettigheter er nødvendig for å skape utvikling i et land."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-6.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-6.png"
                },
                "sortOrder": 6,
                "summary": "Sikre bærekraftig vannforvaltning og tilgang til vann og gode sanitærforhold for alle",
                "idName": "6",
                "displayName": "Rent vann og gode sanitærforhold",
                "article": "Alle må ha tilgang til rent vann hvis vi skal oppnå bærekraftig utvikling. Det finnes nok ferskvann på planeten, men dårlig økonomi og manglende infrastruktur står ofte i veien."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-7.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-7.png"
                },
                "sortOrder": 7,
                "summary": "Sikre tilgang til pålitelig, bærekraftig og moderne energi til en overkommelig pris for alle",
                "idName": "7",
                "displayName": "Ren energi for alle",
                "article": "Tilgang til energi står i sentrum av så nær som alle utfordringer og muligheter vi møter i dag. Det kan dreie seg om jobber, sikkerhet, klimaendringer, matproduksjon eller muligheter for økt inntekt."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-8.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-8.png"
                },
                "sortOrder": 8,
                "summary": "Fremme varig, inkluderende og bærekraftig økonomisk vekst, full sysselsetting og anstendig arbeid for alle",
                "idName": "8",
                "displayName": "Anstendig arbeid og økonomisk vekst",
                "article": "Omtrent halvparten av verdens befolkning tjener så dårlig at ikke de kan leve av lønnen sin. Å skape økonomisk vekst og nye arbeidsplasser gjennom anstendig arbeid er en forutsetning for bærekraftig utvikling. Å skape arbeidsplasser av god kvalitet er en av de største utfordringene for alle land fram mot 2030."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-9.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-9.png"
                },
                "sortOrder": 9,
                "summary": "Bygge solid infrastruktur, fremme inkluderende og bærekraftig industrialisering og bidra til innovasjon",
                "idName": "9",
                "displayName": "Innovasjon og infrastruktur",
                "article": "Investeringer i transport, vanningssystemer, energi og informasjonsteknologi er helt avgjørende for å skape en bærekraftig utvikling. "
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-10.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-10.png"
                },
                "sortOrder": 10,
                "summary": "Redusere ulikhet i og mellom land",
                "idName": "10",
                "displayName": "Mindre ulikhet",
                "article": "Økonomisk vekst har bidratt til at flere land har blitt rikere. Dette fører ikke automatisk til mindre fattigdom. Vi må redusere ulikheter mellom land, og innad i land, for å kunne skape en bærekraftig utvikling."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-11.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-11.png"
                },
                "sortOrder": 11,
                "summary": "Gjøre byer og bosettinger inkluderende, trygge, motstandsdyktige og bærekraftige",
                "idName": "11",
                "displayName": "Bærekraftige byer og samfunn",
                "article": "Verden urbaniseres i en fart vi aldri har sett maken til. Mer enn halvparten av verdens befolkning bor i dag i byer, og andelen kommer til å fortsette og øke. Byene fungerer som smeltedigler fulle av ideer, handel, kultur, vitenskap og sosial samhandling. Samtidig står byene for 75 prosent av alle klimagassutslipp og store slumområder hindrer gode levekår."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-12.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-12.png"
                },
                "sortOrder": 12,
                "summary": "Sikre bærekraftig forbruks- og produksjonsmønstre",
                "idName": "12",
                "displayName": "Ansvarlig forbruk og produksjon",
                "article": "Bærekraftig forbruk og produksjon handler om å gjøre mer med mindre ressurser."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-13.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-13.png"
                },
                "sortOrder": 13,
                "summary": "Handle umiddelbart for å bekjempe klimaendringene og konsekvensene av dem",
                "idName": "13",
                "displayName": "Stoppe klimaendringene",
                "article": "Klimaendringer er et globalt spørsmål og kjenner ingen landegrenser. Derfor må vi også finne globale løsninger. I tillegg til å kutte i utslipp og fange og lagre CO2, må det satses langt mer på fornybar energi og annen ren energi."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-14.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-14.png"
                },
                "sortOrder": 14,
                "summary": "Bevare og bruke hav og marine ressurser på en måte som fremmer bærekraftig utvikling",
                "idName": "14",
                "displayName": "Liv under vann",
                "article": "Det er verdenshavene – deres temperatur, kjemi, strømninger og liv – som driver de globale systemene som gjør det mulig for mennesker å leve på jorda.  Regn, drikkevann, været, klimaet, mye av maten vår og til og med lufta vi puster inn er til syvende og sist regulert av havet."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-15.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-15.png"
                },
                "sortOrder": 15,
                "summary": "Beskytte, gjenopprette og fremme bærekraftig bruk av økosystemer, sikre bærekraftig skogforvaltning, bekjempe ørkenspredning, stanse og reversere landforringelse samt stanse tap av artsmangfold",
                "idName": "15",
                "displayName": "Liv på land",
                "article": "Skog dekker 30 prosent av jordas overflate. Skogen gir mat og ly, bekjemper klimaendringer, tar vare på det biologiske mangfoldet, og er hjemmet til mange urfolk. Over 80 prosent av alle dyr, planter og insekter som lever på land, bor i skogen. 1,6 milliarder mennesker har skogen som sitt levebrød. Avskoging og ørkenspredning er store utfordringer når det gjelder å skape bærekraftig utvikling. Samtidig gjør de menneskene som er avhengige av skogen mer utsatt for fattigdom."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-16.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-16.png"
                },
                "sortOrder": 16,
                "summary": "Fremme fredelige og inkluderende samfunn med sikte på bærekraftig utvikling, sørge for tilgang til rettsvern for alle og bygge velfungerende, ansvarlige og inkluderende institusjoner på alle nivåer",
                "idName": "16",
                "displayName": "Fred og rettferdighet",
                "article": "Å sikre internasjonal fred og sikkerhet har alltid vært FNs hovedoppgave. Derfor er mål 16 viet til å skape fredelige og inkluderende samfunn.Fred er en forutsetning for å skape bærekraftig utvikling. Under konflikter mister mange tilgang til offentlige tjenester. I tillegg er det vanskelig å drive sterke statlige institusjoner under en konflikt. Når for eksempel rettsvesenet i et land fungerer dårlig, går det ut over menneskers rettssikkerhet. Svake institusjoner gjør det også vanskeligere å stoppe korrupsjon, bestikkelser og skatteunndragelser. Dette hemmer den økonomiske veksten i et land og frarøver mennesker retten til grunnleggende velferdstjenester."
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/sdg/sdg-logo-17.png",
                    "medium": "",
                    "small": "http://bucket.urbalurba.com/cat/sdg/sdg-icon-17.png"
                },
                "sortOrder": 17,
                "summary": "Styrke gjennomføringsmidlene og fornye globale partnerskap for bærekraftig utvikling",
                "idName": "17",
                "displayName": "Samarbeid for å nå målene",
                "article": "For å lykkes med bærekraftsmålene trengs det nye og sterke partnerskap. Myndigheter, næringslivet og sivilsamfunnet må samarbeide for å oppnå bærekraftig utvikling. Bærekraftsmålene skal fungere som en felles, global retning og prioritert innsats de neste 15 årene. Erfaring fra Tusenårsmålene viser at denne typen målrettet innsats virker."
            }
        ],
        "summary": "FNs bærekraftsmål er verdens felles arbeidsplan for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030",
        "idName": "SDG",
        "choice": "multiple"
    }

);


/*
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
*/