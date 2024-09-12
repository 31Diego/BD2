(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var UserSchema = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true, //email unico
            index: true, //mejora de eficiencia
        },

        //Almacenaje de Prefijos y Numeros + Validacion de numeros de telefono
        //para la validacion importante ejecutar el comando npm install libphonenumber-js
        phoneNumber: {
            prefix: {
                type: String,
                required: [true, 'Phone prefix required']
            },
            number: {
                type: String,
                required: [true, 'Phone number required'],
                validate: {
                    validator: function(number) {
                        // Suponiendo que `this` es el documento actual y tiene un prefijo.
                        const fullNumber = `${this.phoneNumber.prefix}${number}`;
                        const phoneNumber = parsePhoneNumberFromString(fullNumber);
                        return phoneNumber ? phoneNumber.isValid() : false;
                    },
                    message: props => `${props.value} is not a valid phone number!`
                }
            }
        },
        address: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    });

    module.exports = mongoose.model('users', UserSchema);
})();