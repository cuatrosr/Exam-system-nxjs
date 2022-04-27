
let exams = require('../../../utils/exams_database.json');

export default (req, res) => {
    const {method} = req;
    switch (method) {
        case 'GET':
            let id = req.query.id;
            let exam = exams.find(x => x.id.toString() === id.toString());
            return exam;
        default:
            return res.status(400).json('method not allowed');
    }
};