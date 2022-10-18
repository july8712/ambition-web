window.addEventListener("load", function(event) {
    
    (function() {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init('yy3goWZgjqVfTC3wF');
    })();

    const contactForm = document.querySelector('.contact-form')
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const phone = document.querySelector('#phone')
    const message = document.querySelector('#message')
    const checkboxBrand = document.querySelector('#checkboxBrand')
    const checkboxUX = document.querySelector('#checkboxUX')



    let nameCurrentValue = name.value
    let emailCurrentValue = email.value
    let phoneCurrentValue = phone.value
    let messageCurrentValue = message.value
    let checkboxBrandCurrentValue 
    let checkboxUXCurrentValue
    
    // MARCA CHECKBOX
    writeCheckboxBrand = () => {
        if (checkboxBrand.checked) {
            checkboxBrandCurrentValue = 'Quiero diseñar mi marca'
            // alert(checkboxMarcaCurrentValue)
        } else {
            checkboxBrandCurrentValue = ''
        }
    }

    // UX CHECKBOX
    writeCheckboxUX = () => {
        if (checkboxUX.checked) {
            checkboxUXCurrentValue = 'Quiero diseñar UX/UI'
            // alert(checkboxUXCurrentValue)
        } else {
            checkboxUXCurrentValue = ''
        }
    }

    // RRSS SOCIAL MEDIA CHECKBOX
    writeCheckboxRR = () => {
        if (checkboxUX.checked) {
            checkboxUXCurrentValue = 'Quiero diseñar UX/UI'
            // alert(checkboxUXCurrentValue)
        } else {
            checkboxUXCurrentValue = ''
        }
    }
         
 

    writeData = () => {
        nameCurrentValue = name.value
        emailCurrentValue = email.value
        phoneCurrentValue = phone.value
        checkboxBrandCurrentValue = checkboxBrand.value
        checkboxUXCurrentValue = checkboxUXCurrentValue.value
        messageCurrentValue = message.value

        alert('nameCurrentValue',messageCurrentValue)
    }


    sendEmail = (event) => {

        event.preventDefault()

        if(nameCurrentValue.length === 0) {

            this.alert('Por favor, complete el campo Nombre')

        } else if(phoneCurrentValue.length === 0) {

            this.alert('Por favor, complete el campo PHONE')


        } else if(emailCurrentValue.length === 0) {

            this.alert('Por favor, complete el campo EMAIL')

        } else if(messageCurrentValue.length === 0) {

            this.alert('Por favor, complete el campo EMAIL')   

        } else {


            let message = `
                ${nameCurrentValue}
                ${phoneCurrentValue}
                ${emailCurrentValue}
                ${checkboxBrandCurrentValue}
                ${checkboxUXCurrentValue}
                ${messageCurrentValue}
            `
            this.alert(message)
        
        }
    }

    


    

    // writePhone = () => {
    //     nameCurrentValue = name.value
    //     console.log('nameCurrentValue',nameCurrentValue)
    // }

    // writeEmail = () => {
    //     nameCurrentValue = name.value
    //     console.log('nameCurrentValue',nameCurrentValue)
    // }

    // writeCheckbox = () => {
    //     nameCurrentValue = name.value
    //     console.log('nameCurrentValue',nameCurrentValue)
    // }

    
    // writeMessage = () => {
    //     nameCurrentValue = name.value
    //     console.log('nameCurrentValue',nameCurrentValue)
    // }

    

        

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
