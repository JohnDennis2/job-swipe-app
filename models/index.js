const router = require('express').Router();
const User = require('./user.js');
const Jobs = require('./jobs.js');
const Profile = require('./profile.js');

const Favorite = ('./Favorite.js')

User.belongsToMany(Jobs, {
    through: Favorite,
    as: 'user_jobs',
    foreignKey: "user_id"
})

Jobs.belongsToMany(User, {
    through: {
        model: Favorite,
        unique: false
    },
    as: 'favorited_by'
})

User.belongsTo(Profile, {
  
    as:'user_profile',
    foreignKey: "user_id"
})


Profile.belongsTo(User, {
    foreignKey:"user_id"
})


User.hasOne(Profile, {
    foreignKey:"user_id"
})

module.exports = { User, Jobs, Favorite, Profile };


