export default (req, res) => {
    const {method} = req;
    switch (method) {
        case 'GET':
            return res.json('getting a unique task');
        case 'PUT':
            return res.json('updating a unique task');
        case 'DELETE':
            return res.json('deleting a unique task');
        default:
            return res.status(400).json('method not allowed');
    }
};