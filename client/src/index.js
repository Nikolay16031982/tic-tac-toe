const cells = Array.from(document.querySelectorAll(".cell"));

let userStatus = "zero";

const izWinner = (arr, N) => {
  let count = 0;
  let colCount = 0;
  let rowCount = 0;
  for (let i = 0; i < N; i++)
    for (let j = 0; j < N; j++) {
      if (arr[i * N + j].classList.contains("zero")) colCount++;
      if (arr[i + j * N].classList.contains("zero")) rowCount++;
      if(i + j * (N + 1)<N**2)
      if (arr[i + j * (N + 1)].classList.contains("zero")) count++;
      if (j == N - 1)
        if (colCount === N || rowCount === N || count === N) {
          return true;
        } else{
            count = 0;
            colCount = 0;
            rowCount = 0;
        } 
    }
};

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    if (userStatus === "cross") e.target.classList.add("cross");
    if (userStatus === "zero") e.target.classList.add("zero");
    if (izWinner(cells, 3)) alert("Winner");
  });
});
