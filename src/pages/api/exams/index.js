import {conn} from '../../../utils/database';

export default async (req, res) => {
    const { method , body} = req;

    switch (method) {
        case 'GET':
            try {
                const query = 'SELECT * FROM exams';
                const response = await conn.query(query);
                return res.status(200).json(response.rows);
            } catch (e) {
                console.log(e.message);
                return res.status(400).json('error');
            }
        case 'POST':
            const query = 'SELECT * FROM exams e WHERE e.access_code=$1';
            const values = [req.query.access_code];
            const response = await conn.query(query, values);
            if (response.rows[0] === undefined) {

                const {title, description, access_code, id_creator} = body;
                const query = 'INSERT INTO exams(access_code, id_creator, title, description) VALUES ($1, $2, $3, $4) RETURNING *';
                const values = [access_code, id_creator, title, description];
                const response = await conn.query(query, values);
                return res.status(200).json(response.rows[0]);
            } else {
                return res.status(400).json({
                    access_code: body.access_code,
                    id_creator: body.id_creator
                });
            }
        default:
            return res.status(404).json('invalid method');
    }
};