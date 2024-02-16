const { Jobs, Favorite } = require('../models')

//pass to homepage
module.exports = {
    getFunc: async (req, res) => {
        try {
            const jobs = await Jobs.findAll();
            res.status(200).json({ message: 'SUCCESS: GET connected to jobRoutes', jobs })
        } catch (err) {
            res.status(404).json(err);
        }
    },
    
    postFunc: async (req, res) => {
        try {
            Jobs.create(req.body)
                .then(newJob => res.json(newJob))
            res.status(200).json({ message: 'SUCCESS: POST connected to jobRoutes' })
        } catch (err) {
            res.status(400).json(err);
        }
    },

    //id
    getIdFunc: async (req, res) => {
        try {
            Jobs.findByPk({
                where:
                {
                    id: req.params.id
                }
            })
                .then(jobs => res.status(200).json({ message: 'SUCCESS: GET connected to jobRoutes' })
                )
        } catch (err) {
            res.status(404).json(err);
        }
    },

    deleteIdFunc: async (req, res) => {
        Jobs.destroy({
            where:
            {
                id: req.params.id
            }
        })
            .then(deletedJob => {
                if (!deletedJob) {
                    res.status(400).json({ message: "Could not delete job" });
                    return;
                };
                res.json(deletedJob);
            })
            .catch(err => res.status(500).json(err));
    },

    getFavFunc: async (req, res) => {
        try {
            // Get all users, sorted by name
            const favData = await Favorite.findAll({
                where: {
                    id: req.params.id
                }
            });

            // Serialize user data so templates can read it
            const favorites = favData.map((project) => project.get({ plain: true }));

            // Pass serialized data into Handlebars.js template
            res.render('jobs', { favorites });
        } catch (err) {
            res.status(500).json(err);
        }
    },
}