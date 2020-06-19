let schueler_id;
let vorname;
let nachname;
let kuerzel;
let klasse;
let abteilung;

function Student(id, vorname, nachname, kuerzel, klasse, abteilung) {
    this.schueler_id = id;
    this.vorname = vorname;
    this.nachname = nachname;
    this.kuerzel = kuerzel;
    this.klasse = klasse;
    this.abteilung = abteilung;
}
function getId(){
    return this.schueler_id;
}
function getVorname(){
    return this.vorname;
}
function getNachname(){
    return this.nachname;
}
function getKuerzel(){
    return this.kuerzel;
}
function getKlasse(){
    return this.klasse;
}
function getAbtID(){
    return this.abteilung;
}
function setId(id){
    this.schueler_id = id;
}
function setVorname(vorname){
    this.vorname = vorname;
}
function setNachname(nachname){
    this.nachname = nachname;
}
function setKuerzel(kuerzel){
    this.kuerzel = kuerzel;
}
function setKlasse(klasse){
    this.klasse = klasse;
}
function setAbtID(abtId){
    this.abteilung = abtId;
}

function getEmail(){
    return kuerzel + '@htl-kaindorf.at';
}