document.addEventListener('DOMContentLoaded', event => {
    const textInput = document.querySelector('#textFile');
    textInput.addEventListener('change', onTextFileChange);
})

function onTextFileChange(event) {
    const previewBlock = document.querySelector('.preview-block');
    const fileDetails = document.querySelector('.file-details');
    const file = event.target.files[0];

    if(file) {
        // show file size info
        fileDetails.innerHTML = '<p> File size:' + file.size +' bytes</p>';
        
        const fr = new FileReader();
        fr.onload = e => {
            previewBlock.innerHTML = fr.result;
        }
        fr.readAsText(file);
    }
}
