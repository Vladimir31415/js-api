function dragstart_handler(e) {
    // define data for dragging
    e.dataTransfer.setData("text/plain", e.target.dataset.uid);

    // define allowed drag effects
    e.dataTransfer.effectAllowed = 'copyLink';
    // define default effect
    e.dataTransfer.dropEffect = "copy";
    
    // set the image which will be shown during dragging
    const img = new Image();
    img.src = 'drag-drop.png';
    e.dataTransfer.setDragImage(img, 40, 40);
}

function dragover_handler(e) {
    e.preventDefault();
    if(!e.dataTransfer.getData('text')){
      e.preventDefault();
    } 
    e.dataTransfer.dropEffect = 'link';   
}

function dragenter_handler(e) {
    e.target.classList.add('dragenter');
}
function dragleave_handler(e) {
    e.target.classList.remove('dragenter');
}
function dragend_handler(e) {
    e.target.classList.add('dragged');
}

function drop_handler(e) {
//     console.log(e);
    e.preventDefault();
    // visual feedback
    e.target.classList.remove('dragenter');
   
    const data = e.dataTransfer.getData('text');
    // process only if data exists
    if(data)  {
        e.target.innerHTML += '<p> Added block: '+ data +'</p>'
    }
}