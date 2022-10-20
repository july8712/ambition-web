window.addEventListener("load", function(event) {
    
    (function() {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init('yy3goWZgjqVfTC3wF');
    })();

    // Input Selectors
    const contactForm = document.querySelector('.contact-form')
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const phone = document.querySelector('#phone')
    const message = document.querySelector('#message')
    
    // Checkbox selectors
    const checkboxBrand = document.querySelector('#checkboxBrand')
    const checkboxRRSS = document.querySelector('#checkboxRRSS')
    const checkboxApp = document.querySelector('#checkboxApp')
    const checkboxUX = document.querySelector('#checkboxUX')
    const checkboxManifiesto = document.querySelector('#checkboxManifiesto')
    const checkboxId = document.querySelector('#checkboxId')

    // Labels Selectors
    const nameLabel = document.querySelector('#nameLabel')
    const emailLabel = document.querySelector('#emailLabel')
    const phoneLabel = document.querySelector('#phoneLabel')
    const messageLabel = document.querySelector('#messageLabel')

    // Input Values    
    let nameCurrentValue = name.value
    let emailCurrentValue = email.value
    let phoneCurrentValue = phone.value
    let messageCurrentValue = message.value
    
    let checkboxBrandCurrentValue 
    let checkboxRRSSCurrentValue
    let checkboxAppCurrentValue
    let checkboxUXCurrentValue
    let checkboxManifiestoCurrentValue
    let checkboxIdCurrentValue
    
    // ===== INPUTS VALIDATORS
    writeName = () => {
        nameCurrentValue = name.value
        if( nameCurrentValue.length > 0) {
            name.classList.remove('error')
            nameLabel.classList.remove('errorLabel')
        }

        if( nameCurrentValue.length === 0) {
            name.classList.add('error')
            nameLabel.classList.add('errorLabel')
        }
    }

    writePhone = () => {
        phoneCurrentValue = phone.value
        if( phoneCurrentValue.length > 0) {
            phone.classList.remove('error')
            phoneLabel.classList.remove('errorLabel')
        }

        if( phoneCurrentValue.length === 0) {
            phone.classList.add('error')
            phoneLabel.classList.add('errorLabel')
        }
    }

    writeEmail = () => {
        emailCurrentValue = email.value
        if( emailCurrentValue.length > 0) {
            email.classList.remove('error')
            emailLabel.classList.remove('errorLabel')
        }

        if( emailCurrentValue.length === 0) {
            email.classList.add('error')
            emailLabel.classList.add('errorLabel')
        }
    }

    writeMessage = () => {
        messageCurrentValue = message.value
        if( messageCurrentValue.length > 0) {
            message.classList.remove('error')
            messageLabel.classList.remove('errorLabel')
        }

        if( messageCurrentValue.length === 0) {
            message.classList.add('error')
            messageLabel.classList.add('errorLabel')
        }
    }

    {// ===== CHECKBOXES VALIDATORS
    // BRAND   CHECKBOX
    writeCheckboxBrand = () => {
        if (checkboxBrand.checked) {
            checkboxBrandCurrentValue = 'Quiero diseñar mi marca'
            // alert(checkboxBrandCurrentValue)
        } else if (!checkboxBrand.checked) {
            checkboxBrandCurrentValue = ''
        }
    }

    // RRSS SOCIAL MEDIA CHECKBOX
    writeCheckboxRRSS = () => {
        if (checkboxRRSS.checked) {
            checkboxRRSSCurrentValue = 'Necesito ayuda con mis Redes Sociales'
            // alert(checkboxUXCurrentValue)
        } else if (!checkboxRRSS.checked){
            checkboxRRSSCurrentValue = ''
        }
    }

    // APP   CHECKBOX
    writeCheckboxApp = () => {
        if (checkboxApp.checked) {
            checkboxAppCurrentValue = 'Quiero diseñar mi App'
            // alert(checkboxUXCurrentValue)
        } else if (!checkboxApp.checked) {
            checkboxAppCurrentValue = ''
        }
    }

    // UX CHECKBOX
    writeCheckboxUX = () => {
        if (checkboxUX.checked) {
            checkboxUXCurrentValue = 'Quiero diseñar UX/UI'
            // alert(checkboxUXCurrentValue)
        } else  if (!checkboxUX.checked){
            checkboxUXCurrentValue = ''
        }
    }


     // Manifiesto CHECKBOX
     writeCheckboxManifiesto = () => {
        if (checkboxManifiesto.checked) {
            checkboxManifiestoCurrentValue = 'Quiero diseñar mi Manifiesto'
            // alert(checkboxUXCurrentValue)
        } else  if (!checkboxManifiesto.checked){
            checkboxManifiestoCurrentValue = ''
        }
    }

    // Id CHECKBOX
    writeCheckboxIdCurrentValue = () => {
        if (checkboxId.checked) {
            checkboxIdCurrentValue = 'Quiero diseñar mi Identidad'
            // alert(checkboxUXCurrentValue)
        } else  if (!checkboxId.checked){
            checkboxIdCurrentValue = ''
        }
    }}


    
    

    writeData = () => {
        nameCurrentValue = name.value
        emailCurrentValue = email.value
        phoneCurrentValue = phone.value
        messageCurrentValue = message.value
    }


    sendEmail = (event) => {

        event.preventDefault()

        if(nameCurrentValue.length === 0) {
            name.classList.add('error')
            nameLabel.classList.add('errorLabel')
        }
        
        if(emailCurrentValue.length === 0) {
            email.classList.add('error') 
            emailLabel.classList.add('errorLabel')
        }
        
        if(phoneCurrentValue.length === 0) {

            // this.alert('Por favor, complete el campo PHONE ')
            phone.classList.add('error') 
            phoneLabel.classList.add('errorLabel')
        } 
        
        if(messageCurrentValue.length === 0) {

            // this.alert('Por favor, complete el campo MENSAJE')   
            message.classList.add('error') 
            messageLabel.classList.add('errorLabel')

        } 
        
        if (nameCurrentValue.length > 0 && emailCurrentValue.length > 0 && phoneCurrentValue.length > 0 && messageCurrentValue.length > 0) {
            nameLabel.classList.remove('errorLabel')
            nameLabel.classList.remove('error')
         

            let message = `
                ${nameCurrentValue}
                ${phoneCurrentValue}
                ${emailCurrentValue}
                ${messageCurrentValue}
                ${checkboxBrandCurrentValue}
                ${checkboxRRSSCurrentValue}
                ${checkboxAppCurrentValue}
                ${checkboxUXCurrentValue}
                ${checkboxManifiestoCurrentValue}
                ${checkboxIdCurrentValue}
            `
            this.alert(message)
        
        }
    }

    

   

        

    // sendEmail = () => {

    //     console.log('sendEmail')

    //     const email = document.querySelector('#email')
    //     const message = document.querySelector('#message')

    //     const templateParams = {
    //         name: name.value,
    //         email: email.value,
    //         message: message.value
    //     }

    //     if(name.value && email.value && message.value){
        
    //         emailjs.send('service_4t8w1nq', 'template_2z9j9i9', templateParams)
    //         .then(function(response) {
    //             console.log('SUCCESS!', response.status, response.text);
    //         }, function(error) {
    //             console.log('FAILED...', error);
    //         });
    //     } else {
    //         alert('Please fill out all fields')
    //     } 
    // }

    // if(send === true) {

    // emailjs.sendForm('service_zaxcxon', 'template_8fxppch', '.contact-form', 'yy3goWZgjqVfTC3wF')
    //             .then(function() {
    //                 console.log('SUCCESS!');
    //             }, function(error) {
    //                 console.log('FAILED...', error);
    //             }
    // );
    // }
    // seleccionar todos los inputs
    // validar que no esten vacios
    // si estan todos llenos enviar el formulario
    // const myFunction = (e) => {
    //     console.log('valor:',e.value)
    // }
    
   
});
