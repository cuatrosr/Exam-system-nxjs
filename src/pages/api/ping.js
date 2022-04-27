import {conn} from '../../utils/database'

export default async (req, res) => {
  const response = await conn.query('SELECT NOW()');
  return res.json({message: 'pong', time: response.rows[0].now});
};