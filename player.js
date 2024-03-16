class Player
{
    constructor(name)
    {
        this.name = name;
        this.left = 0;
    }    
}








// function generatetableFirstPlayer() {
//     const tbl = document.createElement("table");
//     const tblBody = document.createElement("tbody");
//     for (let i = 1; i < 9; i++) {
//       const row = document.createElement("tr");
//       }
//       tblBody.appendChild(row);
//     }
//     tbl.appendChild(tblBody);
//     document.body.appendChild(tbl);
//     // tbl.setAttribute("border", "1");
  
//   function generateTheBoard() {
//       const map = maps[level]
//       for (let i = 0; i < map.length; i++) {

//           const state = map[i]
//           const div = document.createElement("div")

//           div.classList.add("cell")
//           div.textContent = i
//           if (state === 1) {
//               div.classList.add("wall")
//           }
//           if (state === 2) {
//               playerPosition = i
//           }
//           if (state === 3) {
//               div.classList.add("finish")
//           }
//           gameContainer.append(div)
//           cells.push(div)
//       }
//       // console.log(cells)
//       displayPlayer()
  