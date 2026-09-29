const postModel = require('../models/post.model')

const createPost = (res, req) => {

    let posts = postModel.create(req.body)

}

module.exports = createPost