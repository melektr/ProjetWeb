$(document).ready(function() {
    var inputEmail = $('#input-email');
    var inputPhone = $('#input-phone');
    var inputMessage = $('#input-message');
    var reg = /\S+@\S+\.\S+/;
    $('#contact').on('submit', function(e) {
        e.preventDefault();
        var email = $('#input-email').val();
        var phone = $('#input-phone').val();
        var message = $('#input-message').val();
        validerEmail(email);
        validerNumber(phone);
        validerMessage(message);
        var valide = validerEmail(email) && validerNumber(phone) && validerMessage(message);
        if (valide) {
            this.submit();
        }
    });

    function validerEmail(email) {
        if (email == '') {
            inputEmail.addClass('is-invalid');
            $('#email-feedback').text('Veuillez saisir votre email !');
            $('#email-feedback').show();
            return false;
        } else if (!reg.test(email)) {
            inputEmail.addClass('is-invalid');
            $('#email-feedback').text('addresse email invalide !');
            $('#email-feedback').show();
            return false;
        }
        inputEmail.removeClass('is-invalid');
        $('#email-feedback').hide();
        return true;
    }

    function validerNumber(phone) {
        if (phone == '') {
            inputPhone.addClass('is-invalid');
            $('#phone-feedback').text('Veuillez saisir votre numéro de télephone !');
            $('#phone-feedback').show();
            return false;
        } else if (isNaN(phone) || phone.length !== 8) {
            inputPhone.addClass('is-invalid');
            $('#phone-feedback').text('numéro invalide !');
            $('#phone-feedback').show();
            return false;
        }
        inputPhone.removeClass('is-invalid');
        $('#phone-feedback').hide();
        return true;
    }

    function validerMessage(text) {
        if (text == '') {
            inputMessage.addClass('is-invalid');
            $('#message-feedback').text('Veuillez écrire votre  message !');
            $('#message-feedback').show();
            return false;
        }
        inputMessage.removeClass('is-invalid');
        $('#messsage-feedback').hide();
        return true;
    }
});