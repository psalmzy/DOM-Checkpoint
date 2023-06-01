// Get all quantity input elements
var quantityInputs = document.getElementsByClassName("quantity-input");

// Add event listeners to quantity buttons
var quantityBtns = document.getElementsByClassName("quantity-btn");
for (var i = 0; i < quantityBtns.length; i++) {
  quantityBtns[i].addEventListener("click", function () {
    var inputElement = this.parentNode.querySelector(".quantity-input");
    var quantity = parseInt(inputElement.value);
    if (this.classList.contains("minus-btn") && quantity > 1) {
      inputElement.value = quantity - 1;
    } else if (this.classList.contains("plus-btn")) {
      inputElement.value = quantity + 1;
    }
    updateTotalPrice();
  });
}

// Add event listeners to delete buttons
var deleteBtns = document.getElementsByClassName("delete-btn");
for (var i = 0; i < deleteBtns.length; i++) {
  deleteBtns[i].addEventListener("click", function () {
    var row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
    updateTotalPrice();
  });
}

// Add event listeners to like buttons
var likeBtns = document.getElementsByClassName("like-btn");
for (var i = 0; i < likeBtns.length; i++) {
  likeBtns[i].addEventListener("click", function () {
    this.classList.toggle("liked");
  });
}

// Update total price based on quantity changes and deletions
function updateTotalPrice() {
  var total = 0;
  var rows = document.getElementsByTagName("tr");
  for (var i = 1; i < rows.length; i++) {
    var quantity = parseInt(rows[i].querySelector(".quantity-input").value);
    var price = parseFloat(
      rows[i].querySelector(".total").textContent.slice(1)
    );
    total += quantity * price;
  }
  document.getElementById("total").textContent = "$" + total.toFixed(2);
}
