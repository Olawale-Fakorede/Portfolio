

function home(){
    window.location.href = 'index.html';
    // console.log("clicked");
}


function aboutMe(){
    window.location.href = 'about.html';
    // console.log("clicked");
}

function skill() {
    window.location.href = 'skills.html';
    // console.log('clicked');
}

function myProjs() {
    window.location.href = 'projects.html';
    // console.log('clicked');
}

function onContact() {
    window.location.href = 'contact.html';
    // console.log('clicked');
}





// ABOUT DOWNLOAD JS


// Get the portfolio container and download button
const portfolioContainer = document.getElementById("portfolio");
const downloadButton = document.getElementById("download-button");

// Add a PDF file to the portfolio
// const pdfData =
const pdfFile = new Blob([pdfData], { type: "resume/pdf" }); 
// pdfData is the PDF file data
const pdfUrl = URL.createObjectURL(pdfFile);
const pdfLink = document.createElement("a");
pdfLink.href = pdfUrl;
pdfLink.download = "Olawale Fakorede Web Development Resume.pdf"; // set the download file name
portfolioContainer.appendChild(pdfLink);

// Add an event listener to the download button
// downloadButton.addEventListener("click", () => {
//   pdfLink.click(); // simulate a click on the PDF link to download the file

//   console.log("clicked");
// });

function downLoad(){
    pdfLink.click();
    console.log('clicked');
}
