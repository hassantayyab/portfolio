var backdrop = document.querySelector(".backdrop");
var sideNavLinks = document.querySelectorAll("#sideNavMenu li");

function openNav() {
  document.querySelector("#sideNavMenu").style.width = "250px";
  backdrop.classList.add("sidenav-open");
  setTimeout(() => {
    for (let i = 0; i < sideNavLinks.length; i++) {
      sideNavLinks[i].classList.add("open");
    }
  }, 160);
}

function closeNav() {
  document.querySelector("#sideNavMenu").style.width = "0";
  backdrop.classList.remove("sidenav-open");
  setTimeout(() => {
    for (let i = 0; i < sideNavLinks.length; i++) {
      sideNavLinks[i].classList.remove("open");
    }
  }, 50);
}

// Event Listener for click outside sidenav menu
backdrop.addEventListener("click", function() {
  closeNav();
});

// Event listener for side menu links
for (let i = 0; i < sideNavLinks.length; i++) {
  sideNavLinks[i].addEventListener("click", function() {
    closeNav();
  });
}
