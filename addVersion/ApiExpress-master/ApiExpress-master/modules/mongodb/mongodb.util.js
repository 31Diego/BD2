//simplificacion del metodo unit en el archivo mongodb.utils.js

(function () {
    'use strict';

    module.exports = {
        init: init
    };

    var mongoose = require('mongoose');
    var mongodbConfig = require('../../config/mongodb/mongodb-config').mongodb;

    function init() {
        var options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        };

        // Directamente usa la cadena de conexión desde la configuración.
        var connectionString = mongodbConfig.connectionString;
       
        mongoose.connect(connectionString, options)
            .then(function () {
                console.log("MongoDB connection successful. DB: " + connectionString);
            })
            .catch(function (error) {
                console.log("Error occurred while connecting to DB: " + error.message);
            });
    }
})();
