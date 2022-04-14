var checkInput = document.querySelectorAll(".checkinput");
for(var i = 0; i < checkInput.length; i++){
   var enable_btn = document.querySelectorAll(".checkinput")[i]
   enable_btn.addEventListener("click", function(){
        var btn = document.getElementById("btn");
        btn.disabled = confirm2.checked ? false : true;
    })
}

// years showing on the copyright

var dDate = new Date;
var dYear = dDate.getFullYear();
document.getElementById("gettingDate").innerHTML = dYear;

// const country = document.getElementById('Country').value;
// var brn = document.getElementById("btn")
// // const countryValue = country.value.trim();
// btn.addEventListener("click", function(){
//     if(countryValue == 'Country') {
//        document.getElementById("error").innerHTML='Select A Country';
//     }
// })
