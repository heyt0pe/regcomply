let button = document.getElementsByClassName('early-access');
let modal = document.getElementById('Modal');
let closeModal = document.getElementsByClassName('close-btn')[0];


for (var i = 0; i <= button.length; i++) {
    button[i]?.addEventListener("click", function () {
        modal.style.display = "block";
    });
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}