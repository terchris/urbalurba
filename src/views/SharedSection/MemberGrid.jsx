import React from "react";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import sectionsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle.jsx";

// images array used in rendering a function for this section
//import imgs from "assets/img/assets-for-demo/sections/imgs.jsx";
import imgs from "assets/memberlogo/logos.jsx";
import MemberCard from "./MemberCard";

const globalMembers = [
  {
    "package_count": 0,
    "num_followers": 0,
    "contact_name": "Tony Olsen",
    "id": "ab0394bf-07a3-43ea-82f4-0eeb3d2e6a8f",
    "display_name": "ABAX",
    "approval_status": "approved",
    "sustainable_development_goals": [
      "8",
      "9",
      "11",
      "12"
    ],
    "is_organization": true,
    "member": "yes",
    "state": "active",
    "type": "organization",
    "website": "https://www.abax.no/",
    "description": "Teknologi forandrer måten verden fungerer på, og dette påvirker alle deler av arbeidslivet. For ABAX betyr det at vi må tilby smarte løsninger som gir deg adgang til hele arbeidsplassen din, uavhengig av om du befinner deg i bilen, på kontoret eller ute i felt. Derfor er vår Mission Statement \"Solutions Provider for The Connected Workspace\".\n\nVåre tjenester hjelper kundene å holde seg oppdaterte, bli mer effektive og spare penger ved å tilby Internet of Things-løsninger (IoT) i verdensklasse. ABAX er det raskest voksende telematikkselskapet i Europa og fokuserer på å levere IoT-løsninger som maksimerer verdien for våre kunder. \n\nVed å tilby mobilitet, fleksibilitet og brukervennlighet tror ABAX på et sømløst integrert IoT-domene som løser hverdagsproblemer for vår målgruppe. Alle aspekter av våre tjenester kommuniserer med hverandre for å kunne tilby maksimal fleksibilitet og en ledende løsning innen kommunikasjonsnettverk og nettverkstjenester.\n\nBusinessmodellen vår er basert på en SaaS-løsning (Software as a Service). Vi har bygd en fullt integrert softwareplatform som kan tilpasses fremtidens innovative tjenester. Vår hardware, software og våre produkter er lette å installere og bruke. \n\nHos ABAX jobber over 400 ansatte, fordelt på salg, kundeservice, markedsføring, administrasjon, kvalitet og utvikling. Vi har kontorer i Norge, Sverige, Danmark, Finland, Nederland, Polen, England, Tyskland og Kina. Hovedkontoret ligger i Larvik, Norge..",
    "title": "ABAX",
    "main_adddress": "Hammergata 24, 3264 Larvik, Norway",
    "phone": "22 22 22 99",
    "contact_email": "To@abax.no",
    "contact_mobile": "46842441",
    "organization_number": "993098736",
    "contact_title": "Salgsansvarlig kommune",
    "segment": [
      "mobility",
      "telecom and software"
    ],
    "member_tags": [
      "iot",
      "mobilitet",
      "telematikk",
      "kjørebok",
      "flåtestyring",
      "worker",
      "smartere arbeidsdag"
    ],
    "slogan": "The difference is ABAX",
    "name": "abax",
    "created": "2018-09-10T20:26:01.953614",
    "organization_type": "private",
    "image_display_url": "http://bucket.urbalurba.com/logo/abax.jpg",
    "insightly_tags": [
      "enhanced data collection",
      "improving travel safety",
      "improving traffic management"
    ],
    "image_url": "http://bucket.urbalurba.com/logo/abax.jpg",
    "locationData": "{'latlng': {'lat': 59.052515541779606, 'lng': 10.01894221706374}}",
    "revision_id": "0fe9b53a-51e7-4c54-b669-e572398e7985",
    "employee_resource_id": "",
    "insightly_id": "98965342",
    "users": []
  },
  {
    "package_count": 1,
    "num_followers": 0,
    "contact_name": "Dan Vigeland",
    "id": "e8d52059-1139-4b58-8169-52314ba56d7a",
    "display_name": "Acando",
    "approval_status": "approved",
    "sustainable_development_goals": [
      "3",
      "11",
      "17"
    ],
    "is_organization": true,
    "member": "yes",
    "state": "active",
    "type": "organization",
    "website": "https://www.acando.no/",
    "description": "Acando er et konsulentselskap som jobber med digitale transformasjoner i offentlig og private virksomheter. Teknologi er en sentral driver til forandring, men det er brukerens evne og ønske om å ta teknologien i bruk som skaper verdi. Med teknisk spisskompetanse og inngående innsikt i brukeratferd og forretningsutvikling drevet av digitalisering, skaper vi idéer, løsninger og mobiliserer organisasjoner til forandring. Et av våre satsningsområder er Smart City der Intelligente Transportsystemer (ITS) og selvkjørende minibusser i alminnelig trafikkmiljø, er en del av satsningen..",
    "title": "Acando",
    "main_adddress": "Tordenskioldsgate 8-10, 0160 Oslo, Norway",
    "phone": "930 01 000",
    "contact_email": "dan.vigeland@acando.no",
    "contact_mobile": "93248286",
    "organization_number": "979191138",
    "contact_title": "Director Smart City",
    "segment": [
      "mobility",
      "telecom and software",
      "consulting"
    ],
    "member_tags": [
      "digital strategy",
      "iot",
      "data analytics",
      "autonomous"
    ],
    "slogan": "Digitalt konsulentselskap",
    "name": "acando",
    "created": "2018-06-25T07:59:09.815586",
    "organization_type": "private",
    "image_display_url": "http://bucket.urbalurba.com/logo/acando.jpg",
    "insightly_tags": [
      "improving travel safety",
      "improving traffic management",
      "improving parking",
      "promoting sustainable private transport models",
      "reducing use of fossils in public transport",
      "improving public transport accessibility"
    ],
    "image_url": "http://bucket.urbalurba.com/logo/acando.jpg",
    "locationData": "{'latlng': {'lat': 59.91227750652087, 'lng': 10.735671576894129}}",
    "revision_id": "72e579d4-6b7d-4904-a6cf-83100baefc22",
    "employee_resource_id": "dddd5155-24ea-4604-a41d-413494aaeb23",
    "insightly_id": "95288967",
    "users": []
  },
  {
    "package_count": 0,
    "num_followers": 0,
    "contact_name": "Kaja Goplen",
    "id": "adf6476e-cfa7-41ad-96e2-cd3d6cb12c3b",
    "display_name": "Advokatfirma Recurso",
    "approval_status": "approved",
    "sustainable_development_goals": "",
    "is_organization": true,
    "member": "yes",
    "state": "active",
    "type": "organization",
    "website": "http://www.recurso.no/",
    "description": "Juridisk rådgivning til bedrifter og privatpersoner. Spesialfelt arbeidsrett og megling, samt bistand i fbm bedriftsoppstart og utviklingsprosesser.\nRecurso AS yter effektiv, løsningsorientert og personlig rådgivning og bistand til sine klienter og samarbeidspartnere. \n\nVår visjon er at ressurs er elementært og nødvendig i alt som skal gjøres, og ressurser er til for å brukes. Vi arbeider fremoverlent, for å hjelpe våre kunder til å oppnå gode og konstruktive resultater. Du/dere skal oppleve at vårt arbeid utføres med gjensidig tillit og at vi jobber ut ifra et helhetlig perspektiv.",
    "title": "Advokatfirma Recurso",
    "main_adddress": "Rødbergveien 2b, 0591 Oslo, Norway",
    "phone": "416 95 522",
    "contact_email": "kontakt@recurso.no",
    "contact_mobile": "416 95 522",
    "organization_number": "91743534",
    "contact_title": "Advokat - Daglig leder",
    "segment": [
      "finance",
      "consulting"
    ],
    "member_tags": [
      "rårdgiving"
    ],
    "slogan": "Juridisk rådgivning til bedrifter og privatpersoner.",
    "name": "recurso",
    "created": "2018-06-25T07:59:23.463640",
    "organization_type": "private",
    "image_display_url": "http://bucket.urbalurba.com/logo/recruso.jpg",
    "insightly_tags": [
      "+oslo",
      "=sbnmedlemsvirksomhet",
      "ss_privat",
      "ckan-export"
    ],
    "image_url": "http://bucket.urbalurba.com/logo/recruso.jpg",
    "locationData": "{'latlng': {'lat': 59.947432994171635, 'lng': 10.818142167349604}}",
    "revision_id": "6b3873cc-6453-4f54-9fcb-c7fcafad2a97",
    "employee_resource_id": "",
    "insightly_id": "120770018",
    "users": []
  },
  {
    "package_count": 0,
    "num_followers": 0,
    "contact_name": "Øystein Johansen",
    "id": "92ffaf0e-58f1-4722-9697-1b46d04d1945",
    "display_name": "ÅF Lighting Norge",
    "approval_status": "approved",
    "sustainable_development_goals": "",
    "is_organization": true,
    "member": "yes",
    "state": "active",
    "type": "organization",
    "website": "http://www.afconsult.com/",
    "description": "Rådgivning, offentlig belysning",
    "title": "ÅF Lighting Norge",
    "main_adddress": "Lilleakerveien 8, 0283 Oslo, Norway",
    "phone": "24101010",
    "contact_email": "Oystein.Johansen@afconsult.com",
    "contact_mobile": "992 13 064",
    "organization_number": "991211845",
    "contact_title": "Office Manager",
    "segment": [
      "energy",
      "consulting"
    ],
    "member_tags": [
      "engineering and consulting company"
    ],
    "slogan": "Rådgivning, offentlig belysning",
    "name": "af-lighting-norge",
    "created": "2018-06-25T07:59:17.332160",
    "organization_type": "private",
    "image_display_url": "http://bucket.urbalurba.com/logo/af-logo-tag-black.jpg",
    "insightly_tags": [
      "improving travel safety",
      "improving traffic management",
      "promoting sustainable private transport models",
      "improving public transport accessibility",
      "improving energy usage efficiency",
      "reducing energy bills",
      "enhances grid stability"
    ],
    "image_url": "http://bucket.urbalurba.com/logo/af-logo-tag-black.jpg",
    "locationData": "{'latlng': {'lat': 59.91610640383171, 'lng': 10.637260656500901}}",
    "revision_id": "0a13b677-28ae-4419-81d6-e6a149f660ba",
    "employee_resource_id": "",
    "insightly_id": "114887093",
    "users": []
  },
  {
    "package_count": 0,
    "num_followers": 0,
    "contact_name": " ingen kontaktperson",
    "id": "8aafe6b4-1c07-4e2c-855d-fe8070459c02",
    "display_name": "Agder energi",
    "approval_status": "approved",
    "sustainable_development_goals": "",
    "is_organization": true,
    "member": "yes",
    "state": "active",
    "type": "organization",
    "website": "http://www.ae.no/",
    "description": "Agder Energi foredler og forvalter fornybar energi. Konsernets virksomhet omfatter produksjon, distribusjon og salg av fornybar energi, samt energitilknyttede tjenester. Vår visjon er å være et ledende norsk konsern innen fornybar energi.\n\n",
    "title": "Agder energi",
    "main_adddress": "Kjøita 18, 4630 Kristiansand, Norway",
    "phone": "38607000",
    "contact_email": "no.email@address.no",
    "contact_mobile": "00000000",
    "organization_number": "981952324",
    "contact_title": "ingen",
    "segment": [
      "energy"
    ],
    "member_tags": [
      "energiselskap"
    ],
    "slogan": "Fremtidens kraftselskap",
    "name": "ae",
    "created": "2019-01-16T07:47:08.747484",
    "organization_type": "private",
    "image_display_url": "http://bucket.urbalurba.com/logo/ae.jpg",
    "insightly_tags": [
      "creating new jobs",
      "enabling new business opportunities",
      "enhances grid stability",
      "improving energy supply efficiency",
      "improving energy usage efficiency",
      "promoting sustainable disposal of waste",
      "reducing use of fossils",
      "reducing use of fossils in public transport"
    ],
    "image_url": "http://bucket.urbalurba.com/logo/ae.jpg",
    "locationData": "{'latlng': {'lat': 58.15335382988043, 'lng': 8.002345822061491}}",
    "revision_id": "53fd2f38-2745-4229-9827-5b5aa6638acb",
    "employee_resource_id": "",
    "insightly_id": "95521295",
    "users": []
  }
];

class MemberGrid extends React.Component {
  
  render() {
    return (
      <div>
        
          <GridContainer>
            {globalMembers.map(CurrentMember => (
              <MemberCard member={CurrentMember} />
            ))}
          </GridContainer>
        
      </div>
    );
  }
}

export default withStyles(sectionsStyle)(MemberGrid);
