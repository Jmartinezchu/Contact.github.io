    // aqui se validan los contenedores de el formulario
    const enviar  =  document.querySelector('#sutmit_m');
    const formulario  = document.querySelector('#formulario');

    enviar.addEventListener('click',function(e){
        e.preventDefault();
        console.log('diste click');
        sendEmail();
    })

    function sendEmail() {
        let tempParams = {
            nombres: document.getElementById("names").value,
            celular: document.getElementById("phone").value,
            email: document.getElementById("email").value,
            mensaje: document.getElementById("mensaje").value,
        };

        if (tempParams.nombres == "" || tempParams.celular == "" || tempParams.email == "" || tempParams.mensaje == "") {
            // todos los campos completos
            swal("¡Alerta!", "Debes completar todos los campos", "warning");
        }else if (tempParams.nombres.length <10 || tempParams.nombres.length > 40 ) {
            // nombre valido
            swal("¡Alerta!", "Tu nombre no es valido", "warning");
        }else if (isNaN(tempParams.celular) || tempParams.celular.length !== 9 ) {
            // celular valido
            swal("¡Alerta!", "El número ingresado no es valido", "warning");
        }else if (tempParams.email.length <9 && tempParams.email.length > 40 ) {
            // validar asunto
            swal("¡Alerta!", "El email ingresado no es valido", "warning");
        }else if (tempParams.mensaje.length <10) {
            // validar mensaje
            swal("¡Alerta!", "El mensaje no es objetivo", "warning");
        }else{
            emailjs.send('service_2robc6z','template_j11vfyo',tempParams)
            .then(function(res){
                swal(`¡${tempParams.nombres} sus Datos han sido Enviados!`, "Muy pronto nos contactaremos con usted", "success");
                formulario.reset();
            })  
        }
    }

