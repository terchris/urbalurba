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

/*
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



categoryRef.doc().set(
    {
        "displayName": "Segments",
        "image": {
            "large": "http://bucket.urbalurba.com/cat/segment/segment-logo-large.png",
            "medium": "http://bucket.urbalurba.com/cat/segment/segment-logo-medium.png",
            "small": "http://bucket.urbalurba.com/cat/segment/segment-logo-small.jpg"
        },
        "categoryItems": [
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-energy-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-energy-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-energy-small.png"
                },
                "sortOrder": 1,
                "summary": "Energi",
                "idName": "Energy",
                "displayName": "Energy",
                "article": "Løsninger og virksomheter innen energi"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-wather-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-wather-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-wather-small.png"
                },
                "sortOrder": 2,
                "summary": "Løsninger for håndtering av vann",
                "idName": "Wather",
                "displayName": "Wather",
                "article": "Løsninger for håndtering av vann"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-air-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-air-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-air-small.png"
                },
                "sortOrder": 3,
                "summary": "Luft og luftkvalitet",
                "idName": "Air",
                "displayName": "Air",
                "article": "Luft og luftkvalitet"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-mobility-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-mobility-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-mobility-small.png"
                },
                "sortOrder": 4,
                "summary": "Mobilitetsløsninger",
                "idName": "Mobility",
                "displayName": "Mobility",
                "article": "Løsninger for transport av mennesker og varer"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-health-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-health-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-health-small.png"
                },
                "sortOrder": 5,
                "summary": "Helse",
                "idName": "Health",
                "displayName": "Health",
                "article": "Helse"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-waste-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-waste-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-waste-small.png"
                },
                "sortOrder": 6,
                "summary": "Avfallshåndtering",
                "idName": "Waste",
                "displayName": "Waste",
                "article": "Løsninger og virksomheter innen håndtering av avfall"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-telco_soft-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-telco_soft-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-telco_soft-small.png"
                },
                "sortOrder": 7,
                "summary": "Telekommunikasjon og programvare",
                "idName": "Telecom and Software",
                "displayName": "Telecom and Software",
                "article": "Telekommunikasjon og programvare"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-food_agri-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-food_agri-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-food_agri-small.png"
                },
                "sortOrder": 8,
                "summary": "Mat og landbruk",
                "idName": "Food and Agriculture",
                "displayName": "Food and Agriculture",
                "article": "Mat og landbruk"
            },                        
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-tourism-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-tourism-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-tourism-small.png"
                },
                "sortOrder": 9,
                "summary": "Turisme",
                "idName": "Tourism",
                "displayName": "Tourism",
                "article": "Turisme"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-build_costr-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-build_costr-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-build_costr-small.png"
                },
                "sortOrder": 10,
                "summary": "Building and Construction",
                "idName": "Building and Construction",
                "displayName": "Building and Construction",
                "article": "Building and Construction"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-security-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-security-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-security-small.png"
                },
                "sortOrder": 11,
                "summary": "Security",
                "idName": "Security",
                "displayName": "Security",
                "article": "Security"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-education-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-education-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-education-small.png"
                },
                "sortOrder": 12,
                "summary": "Education",
                "idName": "Education",
                "displayName": "Education",
                "article": "Education"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-bio_nat-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-bio_nat-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-bio_nat-small.png"
                },
                "sortOrder": 13,
                "summary": "Bio and Natural Resources",
                "idName": "Bio and Natural Resources",
                "displayName": "Bio and Natural Resources",
                "article": "Bio and Natural Resources"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-finance-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-finance-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-finance-small.png"
                },
                "sortOrder": 14,
                "summary": "Finance",
                "idName": "Finance",
                "displayName": "Finance",
                "article": "Finance"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-ocean-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-ocean-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-ocean-small.png"
                },
                "sortOrder": 15,
                "summary": "Ocean Industries",
                "idName": "Ocean Industries",
                "displayName": "Ocean Industries",
                "article": "Ocean Industries"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-trade-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-trade-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-trade-small.png"
                },
                "sortOrder": 16,
                "summary": "Trade",
                "idName": "Trade",
                "displayName": "Trade",
                "article": "Trade"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-hospitality-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-hospitality-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-hospitality-small.png"
                },
                "sortOrder": 17,
                "summary": "Hospitality",
                "idName": "Hospitality",
                "displayName": "Hospitality",
                "article": "Hospitality"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-sport_rec-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-sport_rec-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-sport_rec-small.png"
                },
                "sortOrder": 18,
                "summary": "Sport and recreation",
                "idName": "Sport and recreation",
                "displayName": "Sport and recreation",
                "article": "Sport and recreation"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/segment/segment-consulting-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/segment/segment-consulting-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/segment/segment-consulting-small.png"
                },
                "sortOrder": 19,
                "summary": "Consulting",
                "idName": "Consulting",
                "displayName": "Consulting",
                "article": "Consulting"
            }



        ],
        "summary": "The different segments that are adressed",
        "idName": "segment",
        "choice": "multiple"
    }  
);


categoryRef.doc().set(
    {
        "displayName": "Challenges",
        "image": {
            "large": "http://bucket.urbalurba.com/cat/challenges/challenges-logo-large.png",
            "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-logo-medium.png",
            "small": "http://bucket.urbalurba.com/cat/challenges/challenges-logo-small.jpg"
        },
        "categoryItems": [
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-enh_data_coll-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-enh_data_coll-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-enh_data_coll-small.jpg"
                },
                "sortOrder": 1,
                "summary": "Enhanced data collection",
                "idName": "Enhanced data collection",
                "displayName": "Enhanced data collection",
                "article": "Enhanced data collection"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-fast_data-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-fast_data-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-fast_data-small.jpg"
                },
                "sortOrder": 2,
                "summary": "Faster data transfer",
                "idName": "Faster data transfer",
                "displayName": "Faster data transfer",
                "article": "Faster data transfer"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_data-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_data-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_data-small.jpg"
                },
                "sortOrder": 3,
                "summary": "Improved data accessibility",
                "idName": "Improved data accessibility",
                "displayName": "Improved data accessibility",
                "article": "Improved data accessibility"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_data-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_data-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_data-small.jpg"
                },
                "sortOrder": 4,
                "summary": "Increased data transparency",
                "idName": "Increased data transparency",
                "displayName": "Increased data transparency",
                "article": "Increased data transparency"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-enh_data_sec-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-enh_data_sec-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-enh_data_sec-small.jpg"
                },
                "sortOrder": 5,
                "summary": "Enhanced data security",
                "idName": "Enhanced data security",
                "displayName": "Enhanced data security",
                "article": "Enhanced data security"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_trav_sec-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_trav_sec-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_trav_sec-small.jpg"
                },
                "sortOrder": 6,
                "summary": "Improving travel safety",
                "idName": "Improving travel safety",
                "displayName": "Improving travel safety",
                "article": "Improving travel safety"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_traf_man-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_traf_man-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_traf_man-small.jpg"
                },
                "sortOrder": 7,
                "summary": "Improving traffic management",
                "idName": "Improving traffic management",
                "displayName": "Improving traffic management",
                "article": "Improving traffic management"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_park-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_park-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_park-small.jpg"
                },
                "sortOrder": 8,
                "summary": "Løsninger for bedre håndtering av parkering",
                "idName": "Improving parking",
                "displayName": "Improving parking",
                "article": "Løsninger for bedre håndtering av parkering"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-red_trav-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-red_trav-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-red_trav-small.jpg"
                },
                "sortOrder": 9,
                "summary": "Reducing need for travel",
                "idName": "Reducing need for travel",
                "displayName": "Reducing need for travel",
                "article": "Reducing need for travel"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-sust_transp-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-sust_transp-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-sust_transp-small.jpg"
                },
                "sortOrder": 10,
                "summary": "Promoting sustainable private transport models",
                "idName": "Promoting sustainable private transport models",
                "displayName": "Promoting sustainable private transport models",
                "article": "Promoting sustainable private transport models"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-red_foss_transp-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-red_foss_transp-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-red_foss_transp-small.jpg"
                },
                "sortOrder": 11,
                "summary": "Reducing use of fossils in public transport",
                "idName": "Reducing use of fossils in public transport",
                "displayName": "Reducing use of fossils in public transport",
                "article": "Reducing use of fossils in public transport"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_pub_transp-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_pub_transp-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_pub_transp-small.jpg"
                },
                "sortOrder": 12,
                "summary": "Improving public transport accessibility",
                "idName": "Improving public transport accessibility",
                "displayName": "Improving public transport accessibility",
                "article": "Improving public transport accessibility"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_edu-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_edu-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_edu-small.jpg"
                },
                "sortOrder": 13,
                "summary": "Improving education",
                "idName": "Improving education",
                "displayName": "Improving education",
                "article": "Improving education"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_act_liv-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_act_liv-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_act_liv-small.jpg"
                },
                "sortOrder": 14,
                "summary": "Promoting active living",
                "idName": "Promoting active living",
                "displayName": "Promoting active living",
                "article": "Promoting active living"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_energy_eff-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_energy_eff-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_energy_eff-small.jpg"
                },
                "sortOrder": 15,
                "summary": "Increasing energy efficiency of appliances",
                "idName": "Increasing energy efficiency of appliances",
                "displayName": "Increasing energy efficiency of appliances",
                "article": "Increasing energy efficiency of appliances"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_sus_waste-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_sus_waste-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_sus_waste-small.jpg"
                },
                "sortOrder": 16,
                "summary": "Promoting sustainable disposal of waste",
                "idName": "Promoting sustainable disposal of waste",
                "displayName": "Promoting sustainable disposal of waste",
                "article": "Promoting sustainable disposal of waste"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-rec_waste-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-rec_waste-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-rec_waste-small.jpg"
                },
                "sortOrder": 17,
                "summary": "Recycling waste",
                "idName": "Recycling waste",
                "displayName": "Recycling waste",
                "article": "Recycling waste"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_sus_land-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_sus_land-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_sus_land-small.jpg"
                },
                "sortOrder": 18,
                "summary": "Promoting sustainbable use of land",
                "idName": "Promoting sustainbable use of land",
                "displayName": "Promoting sustainbable use of land",
                "article": "Promoting sustainbable use of land"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-red_soil_pol-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-red_soil_pol-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-red_soil_pol-small.jpg"
                },
                "sortOrder": 19,
                "summary": "Reducing soil pollution",
                "idName": "Reducing soil pollution",
                "displayName": "Reducing soil pollution",
                "article": "Reducing soil pollution"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-red_air_pol-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-red_air_pol-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-red_air_pol-small.jpg"
                },
                "sortOrder": 20,
                "summary": "Reducing local air pollution",
                "idName": "Reducing local air pollution",
                "displayName": "Reducing local air pollution",
                "article": "Reducing local air pollution"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-red_inv_cost-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-red_inv_cost-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-red_inv_cost-small.jpg"
                },
                "sortOrder": 21,
                "summary": "Reducing investment costs",
                "idName": "Reducing investment costs",
                "displayName": "Reducing investment costs",
                "article": "Reducing investment costs"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_sos_int-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_sos_int-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_sos_int-small.jpg"
                },
                "sortOrder": 22,
                "summary": "Improving social integration",
                "idName": "Improving social integration",
                "displayName": "Improving social integration",
                "article": "Improving social integration"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_life_qual-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_life_qual-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_life_qual-small.jpg"
                },
                "sortOrder": 23,
                "summary": "Improving Life Quality",
                "idName": "Improving Life Quality",
                "displayName": "Improving Life Quality",
                "article": "Improving Life Quality"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_safe-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_safe-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_safe-small.jpg"
                },
                "sortOrder": 24,
                "summary": "Increasing Safety",
                "idName": "Increasing Safety",
                "displayName": "Increasing Safety",
                "article": "Increasing Safety"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_health_care-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_health_care-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_health_care-small.jpg"
                },
                "sortOrder": 25,
                "summary": "Improving Health Care",
                "idName": "Improving Health Care",
                "displayName": "Improving Health Care",
                "article": "Improving Health Care"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_eld_care-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_eld_care-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_eld_care-small.jpg"
                },
                "sortOrder": 26,
                "summary": "Improving Elderly Care",
                "idName": "Improving Elderly Care",
                "displayName": "Improving Elderly Care",
                "article": "Improving Elderly Care"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_sus_beh-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_sus_beh-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-prom_sus_beh-small.jpg"
                },
                "sortOrder": 27,
                "summary": "Promoting sustainable behavior",
                "idName": "Promoting sustainable behavior",
                "displayName": "Promoting sustainable behavior",
                "article": "Promoting sustainable behavior"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-fac_citizen_eng-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-fac_citizen_eng-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-fac_citizen_eng-small.jpg"
                },
                "sortOrder": 28,
                "summary": "Facilitating Citizen Engagement",
                "idName": "Facilitating Citizen Engagement",
                "displayName": "Facilitating Citizen Engagement",
                "article": "Facilitating Citizen Engagement"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-lim_urb_spr-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-lim_urb_spr-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-lim_urb_spr-small.jpg"
                },
                "sortOrder": 29,
                "summary": "Limiting Urban Sprawl",
                "idName": "Limiting Urban Sprawl",
                "displayName": "Limiting Urban Sprawl",
                "article": "Limiting Urban Sprawl"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-red_ghg_emi-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-red_ghg_emi-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-red_ghg_emi-small.jpg"
                },
                "sortOrder": 30,
                "summary": "Reducing GHG Emissions",
                "idName": "Reducing GHG Emissions",
                "displayName": "Reducing GHG Emissions",
                "article": "Reducing GHG Emissions"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_shar_renew-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_shar_renew-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-inc_shar_renew-small.jpg"
                },
                "sortOrder": 31,
                "summary": "Increasing share of renewables",
                "idName": "Increasing share of renewables",
                "displayName": "Increasing share of renewables",
                "article": "Increasing share of renewables"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-dec_enery_build-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-dec_enery_build-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-dec_enery_build-small.jpg"
                },
                "sortOrder": 32,
                "summary": "Decreasing energy consumption in buildings",
                "idName": "Decreasing energy consumption in buildings",
                "displayName": "Decreasing energy consumption in buildings",
                "article": "Decreasing energy consumption in buildings"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-red_waste-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-red_waste-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-red_waste-small.jpg"
                },
                "sortOrder": 33,
                "summary": "Reducing waste generation",
                "idName": "Reducing waste generation",
                "displayName": "Reducing waste generation",
                "article": "Reducing waste generation"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-red_wather_pol-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-red_wather_pol-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-red_wather_pol-small.jpg"
                },
                "sortOrder": 34,
                "summary": "Reducing water pollution",
                "idName": "Reducing water pollution",
                "displayName": "Reducing water pollution",
                "article": "Reducing water pollution"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_energy_use_eff-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_energy_use_eff-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_energy_use_eff-small.jpg"
                },
                "sortOrder": 35,
                "summary": "Improving Energy Usage Efficiency",
                "idName": "Improving Energy Usage Efficiency",
                "displayName": "Improving Energy Usage Efficiency",
                "article": "Improving Energy Usage Efficiency"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_energy_sup_eff-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_energy_sup_eff-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_energy_sup_eff-small.jpg"
                },
                "sortOrder": 36,
                "summary": "Improving Energy Supply Efficiency",
                "idName": "Improving Energy Supply Efficiency",
                "displayName": "Improving Energy Supply Efficiency",
                "article": "Improving Energy Supply Efficiency"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-peak_ennergy_dem-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-peak_ennergy_dem-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-peak_ennergy_dem-small.jpg"
                },
                "sortOrder": 37,
                "summary": "Shaving peak Energy Demand",
                "idName": "Shaving peak Energy Demand",
                "displayName": "Shaving peak Energy Demand",
                "article": "Shaving peak Energy Demand"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-red_energy_bill-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-red_energy_bill-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-red_energy_bill-small.jpg"
                },
                "sortOrder": 38,
                "summary": "Reducing energy bills",
                "idName": "Reducing energy bills",
                "displayName": "Reducing energy bills",
                "article": "Reducing energy bills"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-enh_grid_stab-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-enh_grid_stab-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-enh_grid_stab-small.jpg"
                },
                "sortOrder": 39,
                "summary": "Enhances Grid Stability",
                "idName": "Enhances Grid Stability",
                "displayName": "Enhances Grid Stability",
                "article": "Enhances Grid Stability"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-red_fossil-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-red_fossil-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-red_fossil-small.jpg"
                },
                "sortOrder": 40,
                "summary": "Reducing use of fossils",
                "idName": "Reducing use of fossils",
                "displayName": "Reducing use of fossils",
                "article": "Reducing use of fossils"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-red_op_cost-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-red_op_cost-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-red_op_cost-small.jpg"
                },
                "sortOrder": 41,
                "summary": "Reducing Operation Costs",
                "idName": "Reducing Operation Costs",
                "displayName": "Reducing Operation Costs",
                "article": "Reducing Operation Costs"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_pers_eff-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_pers_eff-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-imp_pers_eff-small.jpg"
                },
                "sortOrder": 42,
                "summary": "Improving personnel efficiency",
                "idName": "Improving personnel efficiency",
                "displayName": "Improving personnel efficiency",
                "article": "Improving personnel efficiency"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-enc_dig_entr-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-enc_dig_entr-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-enc_dig_entr-small.jpg"
                },
                "sortOrder": 43,
                "summary": "Encouraging digital entrepreneurship",
                "idName": "Encouraging digital entrepreneurship",
                "displayName": "Encouraging digital entrepreneurship",
                "article": "Encouraging digital entrepreneurship"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-create_job-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-create_job-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-create_job-small.jpg"
                },
                "sortOrder": 44,
                "summary": "Creating new jobs",
                "idName": "Creating new jobs",
                "displayName": "Creating new jobs",
                "article": "Creating new jobs"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/challenges/challenges-enab_business-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/challenges/challenges-enab_business-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/challenges/challenges-enab_business-small.jpg"
                },
                "sortOrder": 45,
                "summary": "Enabling new business opportunities",
                "idName": "Enabling new business opportunities",
                "displayName": "Enabling new business opportunities",
                "article": "Enabling new business opportunities"
            }
        ],
        "summary": "Defines set of challenges ",
        "idName": "challenges",
        "choice": "multiple"
    }
    
);

*/



categoryRef.doc().set(
    {
        "displayName": "Organisasjonstype",
        "image": {
            "large": "http://bucket.urbalurba.com/cat/orgtype/orgtype-logo-large.png",
            "medium": "http://bucket.urbalurba.com/cat/orgtype/orgtype-logo-medium.png",
            "small": "http://bucket.urbalurba.com/cat/orgtype/orgtype-logo-small.jpg"
        },
        "categoryItems": [
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/orgtype/orgtype-priv-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/orgtype/orgtype-priv-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/orgtype/orgtype-priv-small.jpg"
                },
                "sortOrder": 1,
                "summary": "Private bedrifter",
                "idName": "private",
                "displayName": "Private bedrifter",
                "article": "Private bedrifter"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/orgtype/orgtype-municip-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/orgtype/orgtype-municip-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/orgtype/orgtype-municip-small.jpg"
                },
                "sortOrder": 2,
                "summary": "Kommuner og kommunale foretak",
                "idName": "municipality",
                "displayName": "Kommune",
                "article": "Kommuner og kommunale foretak"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/orgtype/orgtype-gov-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/orgtype/orgtype-gov-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/orgtype/orgtype-gov-small.jpg"
                },
                "sortOrder": 3,
                "summary": "Statlige organisasjoner",
                "idName": "government",
                "displayName": "Statlig",
                "article": "Statlige organisasjoner"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/orgtype/orgtype-assoc-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/orgtype/orgtype-assoc-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/orgtype/orgtype-assoc-small.jpg"
                },
                "sortOrder": 4,
                "summary": "Organisasjoner",
                "idName": "association",
                "displayName": "Organisasjoner",
                "article": "Organisasjoner"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/orgtype/orgtype-civil-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/orgtype/orgtype-civil-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/orgtype/orgtype-civil-small.jpg"
                },
                "sortOrder": 5,
                "summary": "Frivillige organisasjoner",
                "idName": "civil_society_ngo",
                "displayName": "Frivillige organisasjoner",
                "article": "Frivillige organisasjoner"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/orgtype/orgtype-acad-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/orgtype/orgtype-acad-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/orgtype/orgtype-acad-small.jpg"
                },
                "sortOrder": 6,
                "summary": "Akademia",
                "idName": "academia",
                "displayName": "Akademia",
                "article": "Akademia"
            },
            {
                "image": {
                    "large": "http://bucket.urbalurba.com/cat/orgtype/orgtype-research-large.png",
                    "medium": "http://bucket.urbalurba.com/cat/orgtype/orgtype-research-medium.png",
                    "small": "http://bucket.urbalurba.com/cat/orgtype/orgtype-research-small.jpg"
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


/*

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
        

*/