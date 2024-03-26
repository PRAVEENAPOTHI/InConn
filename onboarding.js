// Function to toggle the selection of a card
function toggleCard(card) {
    card.classList.toggle("selected");
    updateConfirmButton();
}

// Function to update the state of the confirm button
function updateConfirmButton() {
    var selectedCards = document.querySelectorAll(".card.selected");
    var confirmButton = document.getElementById("confirmButton");
    confirmButton.disabled = selectedCards.length === 0;
}

// Function to show the popup
function showPopup() {
    var selectedCards = document.querySelectorAll(".card.selected");
    if (selectedCards.length > 0) {
        document.getElementById("popup").style.display = "block";
    }
}

// Function to hide the popup
function hidePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to proceed after confirming
function proceed() {
    alert("Proceeding...");
    // Add your logic here to proceed after confirming
}
