JavaScript (script.js):
javascript
// Get the textarea element
const editor = document.getElementById('editor');

// Add event listener for input changes
editor.addEventListener('input', function() {
  // Get the updated text from the textarea
  const updatedText = editor.value;

  // Perform any necessary operations with the updated text
  // For example, you can save it to a database or perform real-time collaboration

  // Display a confirmation message
  console.log("Text updated: " + updatedText);
});
