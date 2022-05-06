import {conn} from '../../../utils/database';

export default async (req, res) => {
    const {method, body} = req;
    switch (method) {
        case 'GET':
            const query = 'SELECT g.grade FROM grades g INNER JOIN exams e on e.id = g.id_exam INNER JOIN users u on u.id = g.id_user WHERE e.access_code=$1 AND u.username=$2';
            const response = await conn.query(query, [req.query.access_code, req.query.username]);
            if (response.rows[0] === undefined) {
                return res.status(404).json({access_code: req.query.access_code});
            } else {
                return res.status(200).json(response.rows);
            }
        default:
            return res.status(400).json('method not allowed');
    }
};