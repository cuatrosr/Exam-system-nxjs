const fs = require('fs');
const path = 'src/utils/user_database.json';

export default (req, res) => {
    const {method, body} = req;
    let db = JSON.parse(fs.readFileSync(path));
    switch (method) {
        case 'GET':
            let data = db.find(user => user.username === req.query.username);
            if (data === undefined) {
                return res.status(404).json({username: req.query.username});
            } else {
                return res.status(200).json(data);
            }
        default:
            return res.status(400).json('method not allowed');
    }
};