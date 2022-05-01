import {conn} from '../../../utils/database';

export default async (req, res) => {
    const {method, body} = req;
    switch (method) {
        case 'GET':
            const query = 'SELECT * FROM users u WHERE u.username=' + "'" + req.query.username + "'";
            const response = await conn.query(query);
            if (response.rows[0] === undefined) {
                return res.status(404).json({username: req.query.username});
            } else {
                return res.status(200).json(response.rows[0]);
            }
        default:
            return res.status(400).json('method not allowed');
    }
};