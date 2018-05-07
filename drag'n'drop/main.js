var draggedElement;
const img = new Image();
img.src = 'drag-drop.png';

function dragstart_handler(e) {
    draggedElement = e.target;
    // define data for dragging
    e.dataTransfer.setData("text/plain", e.target.dataset.uid);

    // define allowed drag effects
    e.dataTransfer.effectAllowed = 'move';
    
    // set the image which will be shown during dragging
    e.dataTransfer.setDragImage(img, 40, 40);
}

function dragover_handler(e) {
    e.preventDefault(); 
    e.dataTransfer.dropEffect = 'move';   
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
        draggedElement.parentNode.removeChild(draggedElement);
    }
}