
import {conn} from '../../../utils/database';

export default (req, res) => {
    const {method, body} = req;
    switch (method) {
        case 'GET': 
            const query = 'SELECT * FROM exams e WHERE e.id=$1';
            const response = conn.query(query, [req.query.id]);
            if (response.rows[0] === undefined) {
                return res.status(404).json({id: req.query.id});
            } else {
                return res.status(200).json(response.rows[0]);
            }
        default:
            return res.status(400).json('method not allowed');
    }
};