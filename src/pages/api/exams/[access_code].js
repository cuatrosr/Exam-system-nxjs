
import {conn} from '../../../utils/database';

export default async (req, res) => {
    const {method, body} = req;
    switch (method) {
        case 'GET': 
            const query = 'SELECT * FROM exams e WHERE e.access_code=$1';
            const response = await conn.query(query, [req.query.access_code]);
            if (response.rows[0] === undefined) {
                return res.status(404).json({access_code: req.query.access_code});
            } else {
                return res.status(200).json(response.rows[0]);
            }
        default:
            return res.status(400).json('method not allowed');
    }
};