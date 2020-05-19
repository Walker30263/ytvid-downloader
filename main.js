var downloadBtn = document.querySelector('.lets-gooo');
var vidLink = document.querySelector('.vid-link');

downloadBtn.addEventListener('click', () => {
    console.log("The inputted link is " + vidLink.value)
    letsDoThis(vidLink.value);
});

function letsDoThis(URL) {
    window.location.href = `http://localhost:4000/download?URL=${URL}`;
}