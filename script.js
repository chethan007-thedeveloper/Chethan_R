//
var tablinks = document.getElementsByClassName("tablinks");
var tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("activelink");
  }
  for (tabcontents of tabcontent) {
    tabcontents.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("activelink");
  document.getElementById(tabname).classList.add("active-tab");
}

//   <!-- ========FOR SIDE-MENU==(MOBILE VERSION)============ -->
let sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}

//   =============================Contact form===========================

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzidfllOTONvmtTHfDW9w4M-CpQ7Qq9qGIjJ4qWpFrtk9lOAO58ncpF_-e3H5XGpD1l/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message Sent Successfully.";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
