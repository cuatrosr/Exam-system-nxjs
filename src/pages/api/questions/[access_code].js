import {conn} from '../../../utils/database';

export default async (req, res) => {
    const {method, body} = req;
    switch (method) {
        case 'GET':
            const query = 'SELECT q.id, q.description, q.option1, q.option2, q.option3, q.option4, q.correct_answer, q.question_percentage FROM questions q INNER JOIN exams e on e.id = q.id_exam WHERE e.access_code=$1';
            const response = await conn.query(query, [req.query.access_code]);
            if (response.rows[0] === undefined) {
                return res.status(404).json({access_code: req.query.access_code});
            } else {
                return res.status(200).json(response.rows);
            }
        default:
            return res.status(400).json('method not allowed');
    }
};