var button = document.querySelector("#navsmartphone");

button.addEventListener("click", function(){
    deleteItem();
});

function deleteItem(){
    var x = document.getElementById("navbar_container");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}




