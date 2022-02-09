const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    });
});

function removeActiveClasses(){
    panels.forEach(panel => {
       panel.classList.remove('active'); 
    });
}


// The Below Code is if you want to automate the expanding card (relplace the above forEach loop with this)
// It still needs some refinement to detect when the 4th and 5th div are not being displayed on smaller
// breakpoints
////////////////////////////////////////////////////////////////
//let idxCounter = panels.length;
//let idxCount = 0;
//
//let shiftDivs = setInterval(setActive, 4000);
//
//
//function setActive(){
//    
//    if (idxCount === idxCounter){
//        idxCount = 0;
//    }
//    else{
//        idxCount++;
//    }
//    
//    
//    if(idxCount === 0){
//        panels.item(idxCount).classList.remove('active');
//    }
//    else{
//        panels.item(idxCount-1).classList.remove('active');
//    }
//    
//    if(idxCount === idxCounter){
//        panels.item(0).classList.add('active');
//    }
//    else{
//        panels.item(idxCount).classList.add('active');
//    }    
//}