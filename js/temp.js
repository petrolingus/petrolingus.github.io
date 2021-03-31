document.getElementById("editor1").addEventListener("input", function() {
    // console.log("input event fired");
    // this.innerHTML = "0";
}, false);

document.getElementById("editor2").addEventListener("input", function() {
    let text = this.innerHTML;
    let edited = text.replace(/\D/g, '');
    this.innerHTML = edited;
}, false);

let counter = 1;
let tbl = document.getElementById("mytable");
let tbody = tbl.children[2];
console.log(tbody);

function foo() {

  let a = parseFloat(document.getElementById("editor1").innerHTML);
  let b = parseFloat(document.getElementById("editor2").innerHTML);
  let c = parseFloat(document.getElementById("editor3").innerHTML);

  console.log(a);
  console.log(b);
  console.log(c);

  let d = b * b - 4 * a * c;

  let x1;
  let x2;

  if (d > 0) {
    x1 = (-b + Math.sqrt(d)) / (2 * a);
    x2 = (-b - Math.sqrt(d)) / (2 * a)
  } else if (d < 0) {
    x1 = 'NaN';
    x2 = 'NaN';
  } else {
    x1 = x2 = (-b + Math.sqrt(d)) / (2 * a);
  }

  let newRow = document.createElement("tr");
  newRow.innerHTML = "<td>" + counter + "</td>" +
    "<td>" + a.toPrecision(4) + "</td>" +
    "<td>" + b.toPrecision(4) + "</td>" +
    "<td>" + c.toPrecision(4) + "</td>" +
    "<td>" + x1.toPrecision(4) + "</td>" +
    "<td>" + x2.toPrecision(4) + "</td>";
  tbody.insertBefore(newRow, tbody.firstChildren);
}

// for (var i = 0; i < 1; ++i) {
//   let newRow = document.createElement("tr");
//   newRow.innerHTML = "<td>" + i + "</td><td>4</td><td>2</td><td>144</td><td>0</td><td>0</td>";
//   tbody.insertBefore(newRow, tbody.firstChildren);
// }
