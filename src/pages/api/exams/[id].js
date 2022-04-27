
let exams = require('../../../utils/exams_database.json');

export default (req, res) => {
    const {method} = req;
    let id = req.params.id;
    switch (method) {
        case 'GET':
            let exam = exams.find(x => x.id.toString() === id.toString());
            return exam;
        default:
            return res.status(400).json('method not allowed');
    }
};