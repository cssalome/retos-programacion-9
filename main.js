const main = () => {
  let acc = 0; // 1 Crear un acumulador

  document.addEventListener("keydown", function (event) {
    if (event.which === 39) {
      acc += 1;
    } else if (event.which === 37) {
      acc -= 1;
    }
    box.style.marginLeft = acc + "rem";
  });
  const box = document.querySelector("div.box");
};
main();

// const main = () => {
//   const box = document.querySelector("div.box");
//   // box.style.marginLeft = "20rem";
//   let acc = 0;
//   function mover() {
//     console.log("asd");
//     acc += 1;
//     box.style.marginLeft = acc + "rem";
//   }
//   box.addEventListener("click", mover, false);
// };
// main();
