/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/


let blue = false;

function taskOne() {

  if (blue == false) {
    document.getElementById("answer-one").style.backgroundColor = "blue";
    blue = true;
  }

  else if (blue == true) {  
    document.getElementById("answer-one").style.backgroundColor = "white";
    blue = false;
  }

}

/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

const numbers = [234, 986, 784];
let newNumber;

function taskTwo() {
  
  newNumber = Math.floor(Math.random() * 1000);

  numbers.push(newNumber)
  document.getElementById("answer-two").innerHTML = numbers;
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

let day;

function taskThree() {

  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      alert ("Woohooo it's weekend");
      break;

    case 1:
      day = "Monday";
      alert ("FML");
      break;

    case 2:
      day = "Tuesday";
      alert ("FML");
      break;

    case 3:
      day = "Wednesday";
      alert ("FML");
      break;

    case 4:
      day = "Thursday";
      alert ("FML");
      break;

    case 5:
      day = "Friday";
      alert ("FML");
      break;

    case  6:
      day = "Saturday";
      alert ("Woohooo it's weekend");
  }

  document.getElementById("answer-three").innerHTML = "Today is " + day;

}

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera nummer" triggas
*/

function multiplier(valueOne, valueTwo) {

  sum = valueOne * valueTwo;


  if (isNaN(valueOne) || isNaN(valueTwo)) {
    alert("Jag kan bara multiplicera nummer");
  }

  else {
    alert("Produkten är: " + sum)
  }

}


numberOne = Math.floor(Math.random() * 10)
numberTwo = Math.floor(Math.random() * 10)


function taskFour() {
  //multiplier(5, 5);
  multiplier(numberOne, numberTwo);
  document.getElementById("answer-four").innerHTML = numberOne + " gånger " + numberTwo;
}

/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {
  
  for (let i = 0; i < fruits.length; i++) {
    
    if (fruits[i] ==="apelsin" || fruits[i] === "päron" ) {
      trash.push(fruits[i]);
    }

    else {
      eatable.push(fruits[i]);
    }

  }
    
  document.getElementById("answer-five").innerHTML = 
  "<b>Ätlig: </b>" + eatable  
  +  "<br>" + 
  "<b>Skräp:  </b>" + trash
}

/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];

function taskSix() {
  //Checks age
  for (let key in persons) {

    if (persons[key].age <= 30) {
       underThirty.push(persons[key].name);
    }

    else {
      overThirty.push(persons[key].name)
    }

  }

 //Kan ha dessa två i en och samma for-loop. Personligen gillar bara denna struktur mer ^^

  //Checks married status
  for (let key in persons) {

    if (persons[key].married === true) {
      married.push(persons[key].name)
    }

    else if (persons[key].married === false) {
      notMarried.push(persons[key].name)
    }

  }


  document.getElementById("answer-six").innerHTML =
  "<b>Över 30: </b>" + overThirty
  +  "<br>" + 
  "<b>Under 30: </b>" + underThirty
  +  "<br>" + 
  "<b>Gift: </b>" + married
  +  "<br>" + 
  "<b>Ogift: </b>" + notMarried
}

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
  document.getElementById("answer-seven").innerHTML = addMeSomeLineBreaks.replace(/,/g ,", <br>");
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

function taskEight() {
  document.getElementById("card-eight").style.display = "none";
  
  setTimeout(() => {
    document.getElementById("card-eight").style.display = "inline";
  }, 3000);
}

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

function taskNine() {
  
  const h = new Date();
  let hour = h.getHours();

  var divBox = document.getElementsByClassName("answer-container") 
  var i;

  if (hour > 17) {
    for (i = 0; i < divBox.length; i++) {
      divBox[i].style.backgroundColor = "blue";
    }
  }

  else {
    for (i = 0; i < divBox.length; i++) {
      divBox[i].style.backgroundColor = "red";
    }
  }
}

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
  
  let sum;

  //Check if valueOne & valueTwo is numbers
  if (isNaN(valueOne) || isNaN(valueTwo)) {
    alert("Jag kan bara använda nummer, försök igen (Sida laddar nu om)");
    //window.location.reload();
  }

  
      //plus
      if(operator === "add") {
        sum = valueOne + valueTwo;
        alert(sum);
      }

      //minus
      else if(operator === "subtract") {
        sum = valueOne - valueTwo;
        alert(sum);
      }

      //gånger
      else if(operator === "multiply") {
        sum = valueOne * valueTwo;
        alert(sum);
      }

      //delat med
      else if(operator === "divide") {
        sum = valueOne / valueTwo;
        alert(sum);
      }

      //Om inget/fel input på operator
      else {
        alert("Något är fel");
      }

    

}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  valueOne = Math.floor(Math.random() * 10);
  valueTwo = Math.floor(Math.random() * 10);
  operator = "multiply";
  calculator(valueOne, valueTwo, operator);
  //window.location.reload();
}
