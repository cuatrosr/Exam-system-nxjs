import db from '../../../database';
export default (req, res) => {
    const { method , body} = req;

    switch (method) {
        case 'GET':
            return res.status(200).json('getting tasks');
        case 'POST':
            db.push({
                id: body.id,
                title: body.title,
                description: body.description,
                accesCode: body.accesCode,
                questions: body.questions,
            });
        default:
            return res.status(404).json('invalid method');
    }
};