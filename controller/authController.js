const User = require('../model/userSchema')


module.exports.post_login = (req, res) => {
    const {
        email,
        password
    } = req.body
}


module.exports.post_signup = async (req, res) => {
    const {
        email,
        password
    } = req.body;

    const user = new User({
        email,
        password
    });
    try {
        const savedUser = await user.save()
        res.status(200).json({
            user
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            err: 'error'
        })
    }

}