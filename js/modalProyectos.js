// Get the modals
const modalsElemRef = [];
genericBuilder('modals',modalsElemRef);
// Get the spans 
const spansElemRef = [];
const spansBind = {
    type: 'onclick',
    callback: setSpanEvent 
}
genericBuilder('spans', spansElemRef, spansBind);
 // Get the buttons
 const buttonsElemRef = [];
 const buttonEvent = {
        type:'onclick',
        callback : setBtnEvent
    }
genericBuilder('buttons', buttonsElemRef, buttonEvent);

// Modal Open Event
function setBtnEvent(e) {
    const attr = e.currentTarget.dataset.modal;
    return modalsElemRef[attr].style.display = 'flex';
}

// Modal Close Event
function setSpanEvent(e) {
    const attr = e.currentTarget.dataset.modal;
    return modalsElemRef[attr].style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
 const isModalTarget = modalsElemRef.find((modal) => e.target === modal);
 if (isModalTarget) {
    isModalTarget.style.display = "none";
 }
}

function genericBuilder(type, arrayRef , bindEvent) {
    let lastRefFind = -1;
    let index = 1;
    if ( type === 'spans') {
        const spansRef = document.querySelectorAll('.close');
        spansRef.forEach(spanRef => {
            spanRef[bindEvent.type] = bindEvent.callback;
            arrayRef.push(spanRef);
        });
        return;
    }
    const selector = getSelectorByType(type);
    while (lastRefFind !== null) {
        lastRefFind = document.getElementById(`${selector}${index}`);
        if (lastRefFind) {
            arrayRef.push(lastRefFind);
            if (bindEvent) {
                lastRefFind[bindEvent.type] = bindEvent.callback;
            }
        };
        index++;
    }
}

function getSelectorByType(type) {
    switch (type) {
        case 'modals':
            return 'myModal-'
        
        case 'buttons':
            return 'myBtn-'
        default:
            break;
    }
}

// GALLERY INSIDE MODAL PROYECTO JS
