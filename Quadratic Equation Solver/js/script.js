let rowIndex = 32;
let table = document.getElementById('history-table');
let tbody = table.children[1];

function preInit() {

  for (let i = 0; i < rowIndex; i++) {

    let a = 10 * Math.random() - 5;
    let b = 10 * Math.random() - 5;
    let c = 10 * Math.random() - 5;

    if (Math.random() < 0.1) {
      a = 1;
      b = c = 0;
    }

    tbody.insertBefore(findRoot(i, a, b, c), tbody.firstChild);
  }
}

preInit();

function calculate() {

  let a = parseFloat(document.getElementById("editor1").innerHTML);
  let b = parseFloat(document.getElementById("editor2").innerHTML);
  let c = parseFloat(document.getElementById("editor3").innerHTML);

  let row = findRoot(rowIndex++, a, b, c);

  tbody.insertBefore(row, tbody.firstChild);
}

function findRoot(i, a, b, c) {

  let d = b * b - 4 * a * c;
  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  let newRow = document.createElement("tr");

  let sign1 = (a < 0) ?  '&#8722; ' : '';
  let sign2 = (b < 0) ? ' &#8722; ' : ' &#43; ';
  let sign3 = (c < 0) ? ' &#8722; ' : ' &#43; ';

  let pa = Math.abs(a.toPrecision(4));
  let pb = Math.abs(b.toPrecision(4));
  let pc = Math.abs(c.toPrecision(4));

  newRow.innerHTML = "<td>" + (i + 1) + "</td>" +
    "<td>" + sign1 + pa + 'x<sup>2</sup>' + sign2 + pb + 'x' + sign3 + pc + "</td>";

  if (isNaN(x1) || x1 == x2) {
    let value = x1 == x2 ? x1 : 'Нет корней';
    newRow.innerHTML += "<td colspan='2'>" + value + "</td>";
  } else {
    newRow.innerHTML += "<td>" + x1.toPrecision(4) + "</td>" + "<td>" + x2.toPrecision(4) + "</td>";
  }

  return newRow;
}

document.querySelectorAll(".input").forEach((item, i) => {

  let prevState = item.innerHTML;

  let flag = false;

  let isNegative = false;
  let sign = document.querySelectorAll(".sign")[i];
  let posSign = (i == 0) ? '' : '&#43;';

  item.addEventListener("input", function(e) {

    let string = this.innerHTML;

    let minusEntered = e.data === '-';

    if (minusEntered) {
      isNegative = !isNegative;
      sign.innerHTML = isNegative ? '&#8722;' : posSign;
    }

    // When field is empty it execute
    if (flag && !minusEntered) {
      this.innerHTML = string.substring(1, string.length);
      this.style.color = "#b14943";
      flag = false;
    }

    // When the field becomes empty, it executes
    if (string.length === 0) {
      this.innerHTML = (i !== 0) ? 0 : 1;
      sign.innerHTML = posSign;
      this.style.color = "#c26662";
      flag = true;
    }

    let re = new RegExp("[0-9]");

    if (e.inputType !== 'deleteContentBackward') {
      if (!re.test(e.data)) {
        this.innerHTML = string.replace(e.data, '');
      }
      if (string.length > 4) {
        this.innerHTML = prevState;
      }
    }

    moveCursor(this);

    prevState = this.innerHTML;

  }, false);
});

// Move cursore to right side of field
function moveCursor(el) {
  let range = document.createRange();
  let sel = window.getSelection();
  range.setStart(el, 1);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}
