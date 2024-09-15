import response from './../response.js'

const adminAuth = (req, res, next) => {
    const { username, password } = req.body

    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        return next()
    }

    return response(res, 401, false, 'Authentication failed. Invalid username or password.')
}

export default adminAuth