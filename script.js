console.log("hello world");

//Multiplying the note with the input value dynamically
let inputbox = document.getElementById("firstnote");
let outputbox = document.getElementById("twothousandnote");
inputbox.addEventListener("input", () => {
  outputbox.value = inputbox.value * 2000;
});

let inputbox1 = document.getElementById("secondnote");
let outputbox1 = document.getElementById("fivehundrednote");
inputbox1.addEventListener("input", () => {
  outputbox1.value = inputbox1.value * 500;
});

let inputbox2 = document.getElementById("thirdnote");
let outputbox2 = document.getElementById("twohundrednote");
inputbox2.addEventListener("input", () => {
  outputbox2.value = inputbox2.value * 200;
});

let inputbox3 = document.getElementById("fourthnote");
let outputbox3 = document.getElementById("hundrednote");
inputbox3.addEventListener("input", () => {
  outputbox3.value = inputbox3.value * 100;
});

let inputbox4 = document.getElementById("fifthnote");
let outputbox4 = document.getElementById("fiftynote");
inputbox4.addEventListener("input", () => {
  outputbox4.value = inputbox4.value * 50;
});

let inputbox5 = document.getElementById("sixthnote");
let outputbox5 = document.getElementById("twentynote");
inputbox5.addEventListener("input", () => {
  outputbox5.value = inputbox5.value * 20;
});

let inputbox6 = document.getElementById("seventhnote");
let outputbox6 = document.getElementById("tennote");
inputbox6.addEventListener("input", () => {
  outputbox6.value = inputbox6.value * 10;
});

//Updating totalnotes,totalrupees and totalrupeesinwords input box dynamically.
let totalrupees = +document.getElementById("totalrs");
let totalnotes = +document.getElementById("totalnotes");
let totalrupeesinwords = document.getElementById("totalrupeesinwords");
// console.log(typeof(totalrupees))

let updatetotalrs = document.querySelectorAll(".inputbox");
updatetotalrs.forEach((element) => {
  element.addEventListener("input", () => {
    // Addition of the total rupees
    let twothousand = parseInt(
      document.getElementById("twothousandnote").value
    );
    let fivehundred = parseInt(
      document.getElementById("fivehundrednote").value
    );
    let twohundred = parseInt(document.getElementById("twohundrednote").value);
    let hundred = parseInt(document.getElementById("hundrednote").value);
    let fifty = parseInt(document.getElementById("fiftynote").value);
    let twenty = parseInt(document.getElementById("twentynote").value);
    let ten = parseInt(document.getElementById("tennote").value);
    let ans =
      twothousand + fivehundred + twohundred + hundred + fifty + twenty + ten;
    document.getElementById("totalrs").value = ans;

    // Addition of the total notes
    let note1 = parseInt(document.getElementById("firstnote").value);
    let note2 = parseInt(document.getElementById("secondnote").value);
    let note3 = parseInt(document.getElementById("thirdnote").value);
    let note4 = parseInt(document.getElementById("fourthnote").value);
    let note5 = parseInt(document.getElementById("fifthnote").value);
    let note6 = parseInt(document.getElementById("sixthnote").value);
    let note7 = parseInt(document.getElementById("seventhnote").value);
    let ans1 = note1 + note2 + note3 + note4 + note5 + note6 + note7;
    document.getElementById("totalnotes").value = ans1;

    // conversion of number to words
    let value = document.getElementById("totalrs").value;
    let conversion = number2text(value);
    document.getElementById("totalrupeesinwords").innerHTML = conversion;
  });
});

// function getvalues()
// {

//     var element=document.getElementById("firstnote").value=24;
//     console.log(element);
// }
function startgreet() {
  let audio = new Audio("startgreet.mp3");
  audio.play();
}
setTimeout(startgreet, 5000);



let sound = () => {
  let greet = new Audio("/greeting.mp3");
  greet.play();
};

function number2text(value) {
  var fraction = Math.round(frac(value) * 100);
  var f_text = "";

  if (fraction > 0) {
    f_text = "AND " + convert_number(fraction) + " PAISE";
  }

  return convert_number(value) + " RUPEE " + f_text + " ONLY";
}

function frac(f) {
  return f % 1;
}

function convert_number(number) {
  if (number < 0 || number > 999999999) {
    return "NUMBER OUT OF RANGE!";
  }
  var Gn = Math.floor(number / 10000000); /* Crore */
  number -= Gn * 10000000;
  var kn = Math.floor(number / 100000); /* lakhs */
  number -= kn * 100000;
  var Hn = Math.floor(number / 1000); /* thousand */
  number -= Hn * 1000;
  var Dn = Math.floor(number / 100); /* Tens (deca) */
  number = number % 100; /* Ones */
  var tn = Math.floor(number / 10);
  var one = Math.floor(number % 10);
  var res = "";

  if (Gn > 0) {
    res += convert_number(Gn) + " CRORE";
  }
  if (kn > 0) {
    res += (res == "" ? "" : " ") + convert_number(kn) + " LAKH";
  }
  if (Hn > 0) {
    res += (res == "" ? "" : " ") + convert_number(Hn) + " THOUSAND";
  }

  if (Dn) {
    res += (res == "" ? "" : " ") + convert_number(Dn) + " HUNDRED";
  }

  var ones = Array(
    "",
    "ONE",
    "TWO",
    "THREE",
    "FOUR",
    "FIVE",
    "SIX",
    "SEVEN",
    "EIGHT",
    "NINE",
    "TEN",
    "ELEVEN",
    "TWELVE",
    "THIRTEEN",
    "FOURTEEN",
    "FIFTEEN",
    "SIXTEEN",
    "SEVENTEEN",
    "EIGHTEEN",
    "NINETEEN"
  );
  var tens = Array(
    "",
    "",
    "TWENTY",
    "THIRTY",
    "FOURTY",
    "FIFTY",
    "SIXTY",
    "SEVENTY",
    "EIGHTY",
    "NINETY"
  );

  if (tn > 0 || one > 0) {
    if (!(res == "")) {
      res += " AND ";
    }
    if (tn < 2) {
      res += ones[tn * 10 + one];
    } else {
      res += tens[tn];
      if (one > 0) {
        res += "-" + ones[one];
      }
    }
  }

  if (res == "") {
    res = "zero";
  }
  return res;
}

function multiply() {
  //     multiplication of the number with note value
  let element = document.getElementById("firstnote").value;
  let result = element * 2000;
  let number = (document.getElementById("twothousandnote").value = result);

  let element1 = document.getElementById("secondnote").value;
  let result1 = element1 * 500;
  let number1 = (document.getElementById("fivehundrednote").value = result1);

  let element2 = document.getElementById("thirdnote").value;
  let result2 = element2 * 200;
  let number2 = (document.getElementById("twohundrednote").value = result2);

  let element3 = document.getElementById("fourthnote").value;
  let result3 = element3 * 100;
  let number3 = (document.getElementById("hundrednote").value = result3);

  let element4 = document.getElementById("fifthnote").value;
  let result4 = element4 * 50;
  let number4 = (document.getElementById("fiftynote").value = result4);

  let element5 = document.getElementById("sixthnote").value;
  let result5 = element5 * 20;
  let number5 = (document.getElementById("twentynote").value = result5);

  let element6 = document.getElementById("seventhnote").value;
  let result6 = element6 * 10;
  let number6 = (document.getElementById("tennote").value = result6);

  let interval = setTimeout(sound, 2000);

  // Addition of the total rupees
  let twothousand = parseInt(document.getElementById("twothousandnote").value);
  let fivehundred = parseInt(document.getElementById("fivehundrednote").value);
  let twohundred = parseInt(document.getElementById("twohundrednote").value);
  let hundred = parseInt(document.getElementById("hundrednote").value);
  let fifty = parseInt(document.getElementById("fiftynote").value);
  let twenty = parseInt(document.getElementById("twentynote").value);
  let ten = parseInt(document.getElementById("tennote").value);
  let ans =
    twothousand + fivehundred + twohundred + hundred + fifty + twenty + ten;
  document.getElementById("totalrs").value = ans;

  // Addition of the total notes
  let note1 = parseInt(document.getElementById("firstnote").value);
  let note2 = parseInt(document.getElementById("secondnote").value);
  let note3 = parseInt(document.getElementById("thirdnote").value);
  let note4 = parseInt(document.getElementById("fourthnote").value);
  let note5 = parseInt(document.getElementById("fifthnote").value);
  let note6 = parseInt(document.getElementById("sixthnote").value);
  let note7 = parseInt(document.getElementById("seventhnote").value);
  let ans1 = note1 + note2 + note3 + note4 + note5 + note6 + note7;
  document.getElementById("totalnotes").value = ans1;

  // conversion of number to words
  let value = document.getElementById("totalrs").value;
  let conversion = number2text(value);
  document.getElementById("totalrupeesinwords").innerHTML = conversion;
}
function Reset() {
  document.getElementById("firstnote").value = null;
  document.getElementById("twothousandnote").value = null;
  document.getElementById("secondnote").value = null;
  document.getElementById("fivehundrednote").value = null;
  document.getElementById("thirdnote").value = null;
  document.getElementById("twohundrednote").value = null;
  document.getElementById("fourthnote").value = null;
  document.getElementById("hundrednote").value = null;
  document.getElementById("fifthnote").value = null;
  document.getElementById("fiftynote").value = null;
  document.getElementById("sixthnote").value = null;
  document.getElementById("twentynote").value = null;
  document.getElementById("seventhnote").value = null;
  document.getElementById("tennote").value = null;

  document.getElementById("totalrs").value = null;
  document.getElementById("totalnotes").value = null;
  document.getElementById("totalrupeesinwords").innerHTML =
    "Total Rupees in words";
}
