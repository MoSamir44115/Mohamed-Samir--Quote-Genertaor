// didnt know how to do it with array of objects , so to  author and break it to second line 


// let x = [
//   {
//     author: "Oscar Wilde",
//     quote: " “Be yourself; everyone else is already taken.”",
//   },
//   {
//     author: "ahmed",
//     quote: " “Be yourself; everyone else is already taken.”",
//   },
//   {
//     author: "mohamed",
//     quote: " “Be yourself; everyone else is already taken.”",
//   },
//   {
//     author: "steven",
//     quote: " “Be yourself; everyone else is already taken.”",
//   },
//   {
//     author: "sayed",
//     quote: " “Be yourself; everyone else is already taken.”",
//   },
// ];

let y = [
  "“Be yourself; everyone else is already taken.” ― Oscar Wilde",
  '"Do not take life too seriously. You will not get out alive."--Elbert Hubbard',
  "“So many books, so little time.”― Frank Zappa",
  "“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”― Albert Einstein",
  "“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
  "“Once Upon A Time In Hollywood.”― Sayed Zidan",
];



btn.onclick = function content() {
  let randomNumber = Math.floor(Math.random() * y.length);
  document.getElementById("main").innerHTML = y[randomNumber];
};
