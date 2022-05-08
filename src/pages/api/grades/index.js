import {conn} from '../../../utils/database';

export default async (req, res) => {
    const {method, body} = req;
    switch (method) {
        case 'GET':
            try {
                const query = 'SELECT * FROM grades';
                const response = await conn.query(query);
                return res.status(200).json(response.rows);
            } catch (e) {
                console.log(e.message);
                return res.status(400).json('error');
            }
        case 'POST':
            const query = 'INSERT INTO grades(id_user, id_exam, grade) VALUES ($1, $2, $3) RETURNING *';
            const values = [body.id_user, body.id_exam, body.grade];
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