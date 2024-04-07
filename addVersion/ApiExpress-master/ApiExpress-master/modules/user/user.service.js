(function () {
        'use strict';
    
        module.exports = {
            createUser: createUser,
            fetchUsers: fetchUsers,
            fetchUserById: fetchUserById,
            updateUser: updateUser,
            deleteUser: deleteUser,
            getUsersSummaryByCity: getUsersSummaryByCity // Nueva funcion, Usuarios por ciudad.
        };

    var UserModel = require('./user.module')().UserModel;
    
    function createUser(user) {
        return UserModel.create(user);
    }

    function fetchUsers() {
        return UserModel.find({})
            .exec();
    }

    function fetchUserById(userId) {
        return UserModel.findById(userId)
            .exec();
    }

    function updateUser(userId, user) {
        return UserModel
            .findByIdAndUpdate(userId, user, {new: true})
            .exec();
    }

    function deleteUser(userId) {
        return UserModel
            .findByIdAndRemove(userId)
            .exec();
    }

    function getUsersSummaryByCity() {
        return UserModel.aggregate([
            { $group: { _id: "$city", totalUsers: { $sum: 1 } } },
            { $sort: { totalUsers: -1 } }
        ]).exec();
    }
})();
