function setActiveListItem(clickedListItem) {
  var parentUl = clickedListItem.parentElement;

  var listItems = parentUl.getElementsByTagName("li");

  for (var i = 0; i < listItems.length; i++) {
    let a = listItems[i].querySelector("a");
    if (a) {
      a.classList.remove("active");
    }
  }

  clickedListItem.querySelector("a").classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var listItems = document.querySelectorAll("#navSecondDiv ul li a");

  listItems.forEach(function (item) {
    item.addEventListener("click", function () {
      setActiveListItem(this.parentNode);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var bookNowAs = document.querySelectorAll("a");

  bookNowAs.forEach(function (a) {
    if (a.innerText.includes("Book Now")) {
      a.addEventListener("click", function () {
        let listItems = document.querySelectorAll("#navSecondDiv ul li a");

        listItems.forEach(function (a) {
          if (a) {
            a.classList.remove("active");
          }
        });

        let bookNowbtn = document.querySelector("#bookNowButton");
        bookNowbtn.classList.add("active");
      });
    }
  });
});
function goToGalleryPage() {
  window.location.href = "gallery.html";
}
function goToDestinationSection() {
  var section = document.getElementById("destination");
  section.scrollIntoView({ behavior: "smooth" });
  var parentUl = document.querySelectorAll("#navSecondDiv ul");
  parentUl.forEach(function (ul) {
    var listItems = ul.getElementsByTagName("li");
    for (var i = 0; i < listItems.length; i++) {
      let a = listItems[i].querySelector("a");
      if (a) {
        a.classList.remove("active");
      }
    }
  });
  var destinationBtn = document.querySelector("#destinationDivBtn");
  if (destinationBtn) {
    destinationBtn.classList.add("active");
  }
}
function goToPage(page) {
  window.location.href = page;
}
function handleMenuClick() {
  var navDiv = document.getElementById("navigation");
  if (navDiv.style.display === "none" || navDiv.style.display === "") {
    navDiv.style.display = "block";
    console.log("working");
  } else {
    navDiv.style.display = "none";
  }
}
function hideMenu() {
  var navDiv = document.getElementById("navigation");
  navDiv.style.display = "none";
}
