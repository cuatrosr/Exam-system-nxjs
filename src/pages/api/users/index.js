import {conn} from '../../../utils/database';

export default async (req, res) => {
    const {method, body} = req;
    switch (method) {
        case 'GET':
            try {
                const query = 'SELECT * FROM users';
                const response = await conn.query(query);
                return res.status(200).json(response.rows);
            } catch (e) {
                console.log(e.message);
                return res.status(400).json('error');
            }
        case 'POST':
            const query = 'SELECT * FROM users u WHERE u.username=$1';
            const values = [req.query.username];
            const response = await conn.query(query, values);
            if (response.rows[0] === undefined) {
                const query = 'INSERT INTO users(username, password, user_type) VALUES ($1, $2, $3) RETURNING *';
                const values = [body.username, body.password, body.type];
                const response = await conn.query(query, values);
                return res.status(200).json(response.rows[0]);
            } else {
                return res.status(400).json({
                    username: body.username,
                    type: body.type
                });
            }
        default:
            return res.status(400).json('method not allowed');
    }
};