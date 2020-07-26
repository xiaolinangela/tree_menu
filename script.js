var toggler = document.getElementsByClassName("caret");

var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
    var c = this.parentElement.parentElement.children;
    for (var j = 0; j < c.length; j++) {
      if (c[j]) {
        console.log(c[j]);
        console.log(this.parentElement);
        if (this.parentElement !== c[j]) {
          c[j].querySelector(".nested").classList.remove("active");
          c[j].querySelector(".caret").classList.remove("caret-down");
        }
      }
    }
  });
}
