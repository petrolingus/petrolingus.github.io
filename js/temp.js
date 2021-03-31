document.getElementById("editor1").addEventListener("input", function() {
    console.log("input event fired");
    this.innerHTML = "0";
}, false);

document.getElementById("editor2").addEventListener("input", function() {
    let text = this.innerHTML;
    let edited = text.replace(/\D/g, '');
    this.innerHTML = edited;
}, false);

let tbl = document.getElementById("mytable");
let tbody = tbl.children[2];
console.log(tbody);

function foo() {
  let newRow = document.createElement("tr");
  newRow.innerHTML = "<td>" + 1 + "</td><td>4</td><td>2</td><td>144</td><td>0</td><td>0</td>";
  tbody.insertBefore(newRow, tbody.firstChildren);
}

for (var i = 0; i < 1; ++i) {
  let newRow = document.createElement("tr");
  newRow.innerHTML = "<td>" + i + "</td><td>4</td><td>2</td><td>144</td><td>0</td><td>0</td>";
  tbody.insertBefore(newRow, tbody.firstChildren);
}
