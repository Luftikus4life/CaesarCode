console.log("Hallo du");
// let = 222;
// let b = "dadsad";
// let c = [3, 3, 3, 2, 5, 434];
// let auto = {
//   speed: 130,
//   marke: "BMW",
//   features: ["Navi", "dads"],
// };

const encode_button = document.getElementById("erster");

encode_button.style = "color: red";

encode_button.innerHTML = "Lümmel";

setInterval(() => {
  encode_button.style = "color: red";

  encode_button.innerHTML = Math.random().toString();
}, 1000);
