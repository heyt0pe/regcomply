let movedForward = false;

function moveForward(){
    if(movedForward == false){
        movedForward = true;
        toggleItemActive();
        let slide = document.getElementById('slide-1');
        slide.style.animation = "0.5s move-forward forwards cubic-bezier(0.07, 0.63, 1, 1)";
    }
    
}

function moveBackward(){
    if(movedForward == true){
        movedForward = false;
        toggleItemActive();
        let slide = document.getElementById('slide-1');
        slide.style.animation = "0.5s move-backward forwards cubic-bezier(0.07, 0.63, 1, 1)";
    }
    
}

function toggleItemActive(){
    let items = document.getElementsByClassName('title-item');
    for (const item of items) {
        item.classList.toggle('title-active');
    }
}