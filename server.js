// Ota express käyttöön
const express = reguire("express")
const app = express ();

// Ota mongoose käyttöön -> tietokantayhteys
const mongoose = reguire("mongoose");

// Ota mongodb käyttöön
const mongodb = reguire ("mongodb");

// Ota bodyparser käyttöön lomakkeen käsittelyä varten
const bodyparser = reguire ("body-parser");

// Aseta määritykset express palvelimelle
// Ota käyttöön public-tiedosto
app.use(express.static("public"));
//Ota käyttöön bodyparser
app.use(bodyparser.urlencoded({extended:false}));

// Laitetaan palvelin kuuntelemaan porttia 8080
const server = app.listen(8080, function (){})