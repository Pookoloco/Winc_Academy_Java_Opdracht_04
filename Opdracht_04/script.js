const age = 30;
const isFemale = true;
const driverStatus = "bob";
const firstName = "Sarah";
const totalAmount = 50;


if (age >= 18) {
  console.log("Je mag naar binnen!");
} else {
  console.log("Je mag niet naar binnen!");
}

if (isFemale) {
  console.log("Je ticket zegt dat je een vrouw bent!");
} else {
  console.log(
    "Je hebt aangegeven op je ticket dat je een man bent, je mag niet naar binnen");
}

if (driverStatus === "bob") {
  console.log("Je bent de bob, je mag autorijden");
} else {
  console.log("Je bent geen bob, hier met die autosleutels");
}

if (age >=18 && age <=25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Helaas, voor jouw geen korting vandaag");
}

if (firstName === "Bram" || firstName === "Sarah") {
  console.log("Gefeliciteerd! Je krijgt een biertje van het huis");
} 

if (totalAmount >= 25 && totalAmount < 50) {
  console.log("Je krijgt een gratis portie bitterballen!");
} else if (totalAmount >= 50 && totalAmount <100) {
  console.log("Je krijgt een gratis portie nachos!!");
} else if (totalAmount >= 100) {
  console.log("Je krijgt een gratis flesje champagne!!!");
}