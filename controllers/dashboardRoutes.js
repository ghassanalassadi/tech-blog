const router = require("express").Router();
const { User, BlogPost, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
        where: {
            user_id: req.session.user_id
        },
        include: [
            {
            model: User,
            attributes: ['name'],
            },
        ],
        });

        const blogPosts = blogPostData.map((blogPost) => blogPost.get({ plain: true }));

        res.render('dashboard', {
        blogPosts,
        logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/blogposts/:id", async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk(req.params.id, {
        include: [
            {
            model: User,
            attributes: ["name"],
            },
        ],
        });

        const blogPosts = blogPostData.get({ plain: true });

        res.render("dashboard", {
        ...blogPosts,
        logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;