const fs = require('fs');
const path = 'src/utils/user_database.json';

export default (req, res) => {
    const {method, body} = req;
    let db = JSON.parse(fs.readFileSync(path));
    switch (method) {
        case 'GET':
            return res.status(200).json(db);
        case 'POST':
            db.push({
                username: body.username,
                password: body.password,
                type: body.type
            });
            console.log(db);
            fs.writeFileSync(path, JSON.stringify(db));
            return res.status(200).json({
                username: body.username,
                type: body.type
            });
        default:
            return res.status(400).json('method not allowed');
    }
};