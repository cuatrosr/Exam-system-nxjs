const fs = require('fs');
const path = 'src/utils/user_database.json';

export default function handler(req, res) {
    const db = JSON.parse(fs.readFileSync(path));
    const data = db.find(user => user.username === req.query.username);
    res.json(data);
}