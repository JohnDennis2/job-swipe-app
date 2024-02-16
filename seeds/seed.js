const sequelize = require('../config/connections');
const { User, Jobs } = require('../models');


const seedJob = require('./jobSeed.json');
const seedUser = require('./userSeed.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUser, {
    individualHooks: true,
    returning: true,
  });

    await Jobs.bulkCreate(seedJob)

  process.exit(0);
};

seedAll();