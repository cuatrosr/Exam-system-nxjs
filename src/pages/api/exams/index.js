const fs = require('fs');

let exams = require('../../../utils/exams_database.json');

export default (req, res) => {
    const { method , body} = req;

    switch (method) {
        case 'GET':
            return res.json(exams);
        case 'POST':
            const body = JSON.parse(req.body);
            console.log(body);
            create(body);
            return res.status(200);
        case 'DELETE':
            _delete(body.id);
        default:
            return res.status(404).json('invalid method');
    }
};

function create(exam) {
    // TODO validate exam
    exam.id = exams.length ? Math.max(...exams.map(x => x.id)) + 1 : 1;
    exams.push(exam);   
    saveData();
}

function _delete(id) {
    // filter out deleted exam and save
    exams = exams.filter(x => x.id.toString() !== id.toString());
    saveData();
    
}

function saveData() {
    fs.writeFileSync('../../../utils/exams_database.json', JSON.stringify(exams, null, 4));
}

