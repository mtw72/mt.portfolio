// Open the modal
function openModal(event, modalName) {
    document.getElementById(modalName).style.display = "block";
}

// Get the close buttons
var closeButtons = document.getElementsByClassName("close");

// Add an event listener to each close button to close the modal
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function() {
        this.parentElement.parentElement.parentElement.style.display = "none";
    });
}

// Get the modals
var modals = document.getElementsByClassName("modal");

// When the user clicks anywhere outside of the modal, close it
for (var i = 0; i < modals.length; i++) {
    modals[i].addEventListener("click", function(event) {
        if (event.target == this) {
            this.style.display = "none"; 
        }
    })
}