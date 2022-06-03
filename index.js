console.log("Hallo du");
// let = 222;
// let b = "dadsad";
// let c = [3, 3, 3, 2, 5, 434];
// let auto = {
//   speed: 130,
//   marke: "BMW",
//   features: ["Navi", "dads"],
// };

// const encode_button = document.getElementById("erster");

// encode_button.style = "color: red";

// encode_button.innerHTML = "Lümmel";

// setInterval(() => {
//   encode_button.style = "color: red";

//   encode_button.innerHTML = Math.random().toString();
// }, 1000);

const encode_button = document.getElementById("erster");
const decode_button = document.getElementById("zweiter");
const input_area = document.getElementById("input");
const output_area = document.getElementById("output");
const letterlist = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);

function encode(text) {
  let textarr = text.split("");
  for (let i = 0; i < textarr.length; i++) {
    let l = textarr[i];
    let indexInLetterlist = letterlist.indexOf(l);
    if (indexInLetterlist != -1) {
      let newindex = indexInLetterlist + 4;
      if (newindex >= letterlist.length) {
        newindex -= letterlist.length;
      }
      let newletter = letterlist[newindex];
      textarr[i] = newletter;
    }
  }
  return textarr.join("");
}

function decode(text) {
  let textarr = text.split("");
  for (let i = 0; i < textarr.length; i++) {
    let l = textarr[i];
    let indexInLetterlist = letterlist.indexOf(l);
    if (indexInLetterlist != -1) {
      let newindex = indexInLetterlist - 4;
      if (newindex < 0) {
        newindex += letterlist.length;
      }
      let newletter = letterlist[newindex];
      textarr[i] = newletter;
    }
  }
  return textarr.join("");
}

function encodeEvent() {
  let text = input_area.value;
  let encodedText = encode(text);
  output_area.value = encodedText;
}
encode_button.addEventListener("click", encodeEvent);

function decodeEvent() {
  let text = output_area.value;
  let decodedText = decode(text);
  input_area.value = decodedText;
}
decode_button.addEventListener("click", decodeEvent);

// Wenn wir die Buttons weg sollen dann aktivieren
// input_area.addEventListener("input", encodeEvent);
// output_area.addEventListener("input", decodeEvent);
