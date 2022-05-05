import {conn} from '../../../utils/database';

export default async (req, res) => {
    const {method, body} = req;
    switch (method) {
        case 'GET':
            try {
                const query = 'SELECT * FROM questions';
                const response = await conn.query(query);
                return res.status(200).json(response.rows);
            } catch (e) {
                console.log(e.message);
                return res.status(400).json('error');
            }
        case 'POST':
            const {description, option1, option2, option3, option4, correct_answer, question_percentage, id_exam} = body;
            const query = 'INSERT INTO questions(description, option1, option2, option3, option4, correct_answer, question_percentage, id_exam) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
            const values = [description, option1, option2, option3, option4, correct_answer, question_percentage, id_exam];
            try {
                const response = await conn.query(query, values);
                return res.status(200).json(response.rows[0]);
            } catch (e) {
                return res.status(400).json({message: e.message});
            }
        default:
            return res.status(404).json('invalid method');
    }
}
;