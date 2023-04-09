

window.onload = () => {

  // Get the input field and button elements
  const input = document.getElementById("word-input");
  const button = document.getElementById("add-button");
  // Add an event listener to the button to handle clicks
  button.addEventListener("click", function() {
    // Get the value of the input field
    const word = input.value;

    // Create a new list item element
    const newItem = document.createElement("li");
    newItem.textContent = word;

    // Add the new list item element to the word box
    const wordBox = document.getElementById("word-box");
    wordBox.appendChild(newItem);

    // Clear the input field
    input.value = "";
  });
}
