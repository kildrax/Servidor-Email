const sgMail = require('@sendgrid/mail');

const sendEmail = (formulario) => {
    sgMail.setApiKey('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');
    const msg = {
        to: 'wooody0313@gmail.com',
        from: 'kcgkily@gmail.com',
        subject: 'Sending with Twilio SendGrid is Fun',
        text: 'Prueba con Nodemon',
        html: `<strong> ${formulario.nombre} ${formulario.apellido} </strong><br >
                <strong> ${formulario.correo} ${formulario.celular} </strong><br >
                <strong> ${formulario.programaInteres} ${formulario.comoContactarlo} </strong><br >`,
    };
    //ES6
    sgMail
        .send(msg)
        .then(() => true,
         error => {
            console.error(error);

            if (error.response) {
                console.error(error.response.body)
            }
        });
}

module.exports = {
    sendEmail
}



