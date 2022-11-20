let turn = 1;

//check winner

function CheckWin() {
  let box = document.querySelectorAll(".box");

  const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  arr.forEach(checking);

  function checking(item) {
    if ((box[item[0]].innerHTML === box[item[1]].innerHTML) && (box[item[1]].innerHTML === box[item[2]].innerHTML)) {
      document.querySelector("#print").innerHTML = "you won";
    }
  }
}

//decides to print x/o
function common(n) {
  if (turn % 2 != 0) {
    document.querySelectorAll(".box")[n].innerHTML = "X";
  } else {
    document.querySelectorAll(".box")[n].innerHTML = "O";
  }
  turn++;

  CheckWin();
}

function tap1() {
  common(0);
}

function tap2() {
  common(1);
}

function tap3() {
  common(2);
}

function tap4() {
  common(3);
}

function tap5() {
  common(4);
}

function tap6() {
  common(5);
}

function tap7() {
  common(6);
}

function tap8() {
  common(7);
}

function tap9() {
  common(8);
}
