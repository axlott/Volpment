

(function(){
    "use strict";
    document.addEventListener('DOMContentLoaded', function(){

        //variables de form

        var nombre = document.getElementById('grupo-nombre');
        var apellido = document.getElementById('grupo-apellido');
        var numero = document.getElementById('grupo-numero');
        var email = document.getElementById('grupo-email');
        var motivo = document.getElementById('grupo-motivo');
        var mensaje = document.getElementById('grupo-mensaje');

        // variables inputs 

        var nombreO = document.getElementById('nombre');
        var apellidoO = document.getElementById('apellido');
        var numeroO = document.getElementById('numero');
        var emailO = document.getElementById('email');
        var motivoO = document.getElementById('motivo');
        var mensajeO = document.getElementById('mensaje');

        //variables de los botones y otros
        
        var siguiente = document.getElementById('siguiente');
        var atras = document.getElementById('atras');

        var botonForm = document.getElementById('grupo-botonForm');

        var errorDiv = document.getElementById('error');

        var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        var i = 1

        //funciones 
        console.log(i);

        function sumar () {

            if (i == 1){

                
                if (nombreO.value.length < 2 ){

                    errorDiv.style.display='block';
                    errorDiv.innerHTML = 'este campo es obligatorio';
                    errorDiv.style.textAlign='center';
                    nombreO.classList.remove('border-0');
                    nombreO.classList.add('border');
                    nombreO.classList.add('border-danger');
                }
                else if (apellidoO.value.length < 2){

                   nombreO.classList.add('border-0')
                   nombreO.classList.remove('border');
                   nombreO.classList.remove('border-danger');

                   errorDiv.style.display='block';
                   errorDiv.innerHTML = 'este campo es obligatorio';
                   errorDiv.style.textAlign='center';
                   apellidoO.classList.remove('border-0');
                   apellidoO.classList.add('border');
                   apellidoO.classList.add('border-danger');
                }
                else {

                    i = i + 1

                    siguiente.style.display='block';
                    atras.style.display='block';

                    // validacion correcta
                    
                    errorDiv.style.display='none';
                    nombreO.classList.add('border-0')
                    nombreO.classList.remove('border');
                    nombreO.classList.remove('border-danger');

                    apellidoO.classList.add('border-0')
                    apellidoO.classList.remove('border');
                    apellidoO.classList.remove('border-danger');
                    

                    // esconder clases

                    nombre.classList.add('d-none');
                    apellido.classList.add('d-none');
                    numero.classList.remove('d-none');
                    email.classList.remove('d-none');
                    motivo.classList.add('d-none');
                    mensaje.classList.add('d-none');
                    botonForm.classList.add('d-none');
                }
            }
            else if (i == 2){

                if (!mailformat.test(emailO.value)){

                   errorDiv.style.display='block';
                   errorDiv.innerHTML = 'este campo es obligatorio';
                   errorDiv.style.textAlign='center';
                   emailO.classList.remove('border-0');
                   emailO.classList.add('border');
                   emailO.classList.add('border-danger');
                }
                else if (numeroO.value.length < 6){
                    errorDiv.style.display='block';
                    errorDiv.innerHTML = 'este campo es obligatorio';

                    emailO.classList.add('border-0')
                    emailO.classList.remove('border');
                    emailO.classList.remove('border-danger');
                    
                    numeroO.classList.remove('border-0');
                    numeroO.classList.add('border');
                    numeroO.classList.add('border-danger');
                }
                else {
                    i = i + 1
                    console.log(i + ' se esta sumando');

                    siguiente.style.display='none';
                    atras.style.display='block';

                    // validacion correcta
                    
                    errorDiv.style.display='none';
                    emailO.classList.add('border-0')
                    emailO.classList.remove('border');
                    emailO.classList.remove('border-danger');

                    numeroO.classList.add('border-0')
                    numeroO.classList.remove('border');
                    numeroO.classList.remove('border-danger');

                    // esconder clases

                    nombre.classList.add('d-none');
                    apellido.classList.add('d-none');
                    numero.classList.add('d-none');
                    email.classList.add('d-none');
                    motivo.classList.remove('d-none');
                    mensaje.classList.remove('d-none');
                    botonForm.classList.remove('d-none');
                }
            }

            else if (i == 3) {
               
                siguiente.style.display='none';
                atras.style.display='block';

            }                
        }
        function restar () {
            if ( i > 1){
                i = i - 1
                console.log(i + ' se esta restando');
            }  
            if (i == 1) {

                siguiente.style.display='block';
                atras.style.display='none';


                nombre.classList.remove('d-none');
                apellido.classList.remove('d-none');
                numero.classList.add('d-none');
                email.classList.add('d-none');
                motivo.classList.add('d-none');
                mensaje.classList.add('d-none');
                botonForm.classList.add('d-none');
            }
            else if (i == 2 ){

                siguiente.style.display='block';
                atras.style.display='block';


                nombre.classList.add('d-none');
                apellido.classList.add('d-none');
                numero.classList.remove('d-none');
                email.classList.remove('d-none');
                motivo.classList.add('d-none');
                mensaje.classList.add('d-none');
                botonForm.classList.add('d-none');
            }
            else if (i == 3) {
                nombre.classList.add('d-none');
                apellido.classList.add('d-none');
                numero.classList.add('d-none');
                email.classList.add('d-none');
                motivo.classList.remove('d-none');
                mensaje.classList.remove('d-none');
                botonForm.classList.remove('d-none');
            }    
                             
        }
        
        
        // llamados

        siguiente.addEventListener('click', sumar);
        
        atras.addEventListener('click', restar);

    }); //DOM CONTENT LOADED
})();
