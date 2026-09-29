const postModel = require('../models/post.model')

const createPost = async (req, res) => {

    console.log(req.body);

    const post = await postModel.create({
        description: req.body.description
    });

    res.status(201).json({
        message: 'post created',
        post
    });
};

module.exports = createPost