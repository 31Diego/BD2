(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    var UserMiddleware = require('./user.module')().UserMiddleware;

    router.post('/',
        UserMiddleware.addUser,
        function (req, res) {
            res.status(201).json(req.response);
            
        });

    router.get('/',
        UserMiddleware.getUsers,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/:userId',
        UserMiddleware.getUserById,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.put('/:UserId',
        UserMiddleware.modifyUser,
        function (req, res) {
            res.status(200).json(req.response);
        });


    router.delete('/:UserId',
        UserMiddleware.removeUser,
        function (req, res) {
            res.status(200).json(req.response);
        });

    router.get('/summary/by-city', function (req, res, next) {
        UserService.getUsersSummaryByCity()
            .then(data => res.status(200).json(data))
            .catch(err => next(err));
        });

exports.getUsers = function(req, res) {
    UserService.fetchUsers()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Ocurrió un error al obtener los usuarios."
            });
        });
};


    module.exports = router;

})();
