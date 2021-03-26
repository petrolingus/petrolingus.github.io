document.getElementById("editor1").addEventListener("input", function() {
    console.log("input event fired");
    this.innerHTML = "0";
}, false);

document.getElementById("editor2").addEventListener("input", function() {
    let text = this.innerHTML;
    let edited = text.replace(/[A-Z]/g, '');
    this.innerHTML = '0';
}, false);
