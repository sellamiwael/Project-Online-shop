function addToCart(productName) {
  alert(`✅ ${productName} added to cart successfully!`);
}

function sendMessage() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert(`📨 Thank you ${name}! Your message has been sent.`);
    return true;
  } else {
    alert("⚠️ Please fill all fields before submitting.");
    return false;
  }
}
