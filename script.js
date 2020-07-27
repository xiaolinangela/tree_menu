var toggler = document.getElementsByClassName("caret");
var showMore = document.getElementById("show-more");
var offset = 0;
var count = 2;
var r = document.getElementById("root");
var i;
for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    showMore.disabled = false;
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
    var c = this.parentElement.parentElement.children;

    for (var j = 0; j < c.length; j++) {
      if (c[j]) {
        c;
        if (this.parentElement !== c[j]) {
          if (c[j].querySelector(".nested")) {
            c[j].querySelector(".nested").classList.remove("active");
            c[j].querySelector(".caret").classList.remove("caret-down");
          }
        }
      }
    }
  });
}

// showMore.addEventListener("click", function () {
//   var parent = document.createElement("li");
//   var span = document.createElement("span");
//   span.classList.add("caret");
//   span.innerHTML = "ParentC";
//   parentC.appendChild(span);
//   var ul = document.createElement("ul");
//   ul.classList.add("nested");
//   var child1 = document.createElement("li");
//   child1.innerHTML = "ChildC1";
//   var child2 = document.createElement("li");
//   child2.innerHTML = "ChildC2";
//   ul.appendChild(child1);
//   ul.appendChild(child2);
//   parentC.append(ul);
//   r.appendChild(parentC);
//   span.onclick = function () {
//     this.parentElement.querySelector(".nested").classList.toggle("active");
//     this.classList.toggle("caret-down");
//     var c = this.parentElement.parentElement.children;
//     for (var j = 0; j < c.length; j++) {
//       if (c[j]) {
//         if (this.parentElement !== c[j]) {
//           c[j].querySelector(".nested").classList.remove("active");
//           c[j].querySelector(".caret").classList.remove("caret-down");
//         }
//       }
//     }
//   };
// });

showMore.addEventListener("click", getElement);

function getElement() {
  for (var i = offset; i < offset + count; i++) {
    var parent = document.createElement("li");
    var span = document.createElement("span");
    span.classList.add("caret");
    span.innerHTML = "Parent" + i;
    parent.appendChild(span);
    var ul = document.createElement("ul");
    ul.classList.add("nested");
    var child1 = document.createElement("li");
    child1.innerHTML = "Child" + i + "1";
    var child2 = document.createElement("li");
    child2.innerHTML = "Child" + i + "2";
    ul.appendChild(child1);
    ul.appendChild(child2);
    parent.append(ul);
    r.appendChild(parent);
    span.onclick = function () {
      this.parentElement.querySelector(".nested").classList.toggle("active");
      this.classList.toggle("caret-down");
      var c = this.parentElement.parentElement.children;
      for (var j = 0; j < c.length; j++) {
        if (c[j]) {
          if (this.parentElement !== c[j]) {
            c[j].querySelector(".nested").classList.remove("active");
            c[j].querySelector(".caret").classList.remove("caret-down");
          }
        }
      }
    };
  }
  offset += 2;
}
