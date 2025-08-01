// Function to validate the file extension
function validateFileExtension(fileName) {
    if (
        fileName.endsWith(".jpg") ||
        fileName.endsWith(".jpeg") ||
        fileName.endsWith(".png") ||
        fileName.endsWith(".gif")
    ) {
        console.log("You can upload the file.");
    } else {
        console.log("Please upload a .jpg, .jpeg, .png, or .gif file.");
    }
}

// Test the function
validateFileExtension("profile-picture.jpg");   
// Valid file type. You can upload the file.
validateFileExtension("document.pdf");         
// Invalid file type. Please upload a .jpg, .jpeg, .png, or .gif file.







