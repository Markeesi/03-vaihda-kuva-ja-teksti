const myImage = document.getElementById("myImage");
const myText = document.getElementById("myText");
const nameInput = document.getElementById("nameInput");
const changeTextButton = document.getElementById("changeTextButton");

let enteredName = ""; // Initialize an empty name

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");

  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/brave-icon-png.png");
    myText.textContent = "Brave is cooler!";
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
    myText.textContent = "Mozilla is cool";
  }
};

// changeTextButton.onclick = () => {
//   const newName = nameInput.value;
//   myText.textContent += `, ${newName}`; // Append the entered name at the end
//   nameInput.value = ""; // Clear the input field after appending
// };

changeTextButton.onclick = () => {
  enteredName = nameInput.value;
  updateText();
};

function updateText() {
  if (myText.textContent === "Mozilla is cool") {
    myText.textContent = enteredName
      ? `Mozilla is cool, ${enteredName}!`
      : "Mozilla is cool";
    nameInput.value = ""; // Clear the input field
  } else {
    myText.textContent = enteredName
      ? `Brave is cooler, ${enteredName}!`
      : "Brave is cooler!";
    nameInput.value = ""; // Clear the input field
  }
}
