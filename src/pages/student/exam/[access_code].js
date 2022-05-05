import {Formik, Field, Form} from "formik";
import {useRouter} from "next/router";
import React from 'react';

export default function Exam({user, exam, questions}) {
    const router = useRouter();
    const handleSubmit = async (values, {resetForm}) => {
        await router.push('/student/results/' + values.username);
    };
    return (
        <div className="container w-75 bg-secondary mt-5">
            <div className="row">
                {questions.map(q => (
                    <div key={q.id}>
                        {q.description}
                    </div>
                ))};
                <div className="col-3">
                    <Formik
                        initialValues={{
                            code: ''
                        }}
                        onSubmit={handleSubmit}
                    >
                        <h2 className="fw-bold text-center">Realiza el examen</h2>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

Exam.getInitialProps = async (req, res) => {
    let config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };
    let response = await fetch('http://localhost:3000/api/users/' + req.query.username, config);
    const user = await response.json();
    response = await fetch('http://localhost:3000/api/exams/' + req.query.access_code, config);
    const exam = await response.json();
    response = await fetch('http://localhost:3000/api/questions/' + req.query.access_code, config);
    const questions = await response.json();
    return {user, exam, questions};
};
