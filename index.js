var country = document.getElementById("country");
var your = document.getElementById("your");
var myCountry = ["Nigeria", "Kenya", "Ghana", "South Africa", "Tanzania", "Zimbabwe", "Somalia", "Liberia", "Zambia", "Sierra Leone"];

function open_btn() {
    // Get the checkbox
    var confirm = document.getElementById("confirm");
    // Get the output text
    var btn = document.getElementById("btn");
    
    // If the checkbox is checked, display the output text
    if (confirm.checked == true){
        registrationSection.style.display = "block";
    } else {
        registrationSection.style.display = "none";
    }
  }
  function open_btn(confirm) {
    var btn = document.getElementById("btn");
    btn.disabled = confirm.checked ? false : true;
}
