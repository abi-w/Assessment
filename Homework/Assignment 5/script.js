document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.getElementById("text-container");
    const colorButton = document.getElementById("color-button");

    const colors = ["red", "blue", "green", "yellow", "purple"];
    let currentColorIndex = 0;

    // Function to change text color
    function changeTextColor() {
        textContainer.style.color = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length; // Loop back to the first color if needed
    }

    // Attach a click event listener to the button
    colorButton.addEventListener("click", changeTextColor);
});
