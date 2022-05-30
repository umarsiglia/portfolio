function validar()
{
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (nombre == '' || email=='' || mensaje =='')
    {
        alert('Por favor, complete todos los datos para enviar el mensaje.')
    }
    else
    {
        alert('Mensaje enviado con éxito!, muchas gracias.');
    }


}