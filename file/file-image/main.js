document.addEventListener('DOMContentLoaded', event => {
    const imageInput = document.querySelector('#imageFile');
    imageInput.addEventListener('change', onImageFileChange);
})

function onImageFileChange(event) {
    const previewBlock = document.querySelector('.preview-block');
    const fileDetails = document.querySelector('.file-details');
    const file = event.target.files[0];

    if(file) {
        // show file size info
        const sizeInMB = (file.size / (1024*1024)).toFixed(2);
        fileDetails.innerHTML = '<p> File size:' + sizeInMB +' MB</p>';
        
        // display a preview
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.src = url;
        previewBlock.innerHTML = '';
        previewBlock.appendChild(img);
        img.onload = e => URL.revokeObjectURL(url);
    }
}