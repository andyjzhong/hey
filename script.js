console.log("JS loaded");

document.querySelector("#submit-btn").addEventListener("click", function() {
  let msg = document.querySelector("h1").innerText = "I think you're awesome! 🙂"
  document.querySelector("#submit-btn").style.display = "none";
})
