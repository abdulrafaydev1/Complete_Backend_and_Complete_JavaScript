const postModel = require('../models/post.model')

const createPost = async (req, res) => {

    await postModel.create({
        description: req.body.description,
    })

    res.status(201).json({
        message: 'post created',
    })

}

module.exports = createPost