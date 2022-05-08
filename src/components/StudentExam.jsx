import {Formik, Field, Form, FieldArray} from "formik";
import styles from '../styles/form.module.css'
import {useRouter} from "next/router";
import Swal from "sweetalert2";

export default function StudentExam({user, exam, questions}) {
    let jsonValues = `{`;
    for (let i = 0; i < questions.length; i++) {
        jsonValues += (i < questions.length - 1) ? `"id${questions[i].id}":"",` : `"id${questions[i].id}":""}`;
    }
    let initialValues = JSON.parse(jsonValues);
    const router = useRouter();
    const handleSubmit = async (values, {resetForm}) => {
        Swal.fire({
            icon: 'question',
            title: '¿Are you sure you want to submit?',
            text: `You can't go back again`,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            confirmButtonColor: '#6C757D',
            denyButtonColor: '#808080'
        }).then(async (result) => {
            if (result.isConfirmed) {
                let valuesJson = Object.getOwnPropertyNames(values);
                let grade = 0;
                for (let i = 0; i < questions.length; i++) {
                    grade += (values[valuesJson[i]] === questions[i].correct_answer) ? 5*questions[i].question_percentage : 0;
                }
                values['grade'] = grade;
                values['id_user'] = user.id;
                values['id_exam'] = exam.id;
                let config = {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                };
                const response = await fetch('http://localhost:3000/api/grades', config);
                const data = await response.json();
                if (response.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Uploaded attempt',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    await router.push('/student/' + user.username);
                } else {
                    Swal.fire({
                        icon: 'error',
                        text: data.message,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        })
    };
    return (
        <div className={styles.login_box + ' p-3'}>
            <h1 className={styles.title_text}><strong>Exam</strong></h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {({values, errors, touched}) => (
                    <Form>
                        {questions.map(question => {
                            return (
                                <div key={'id' + question.id} className={styles.options_box + ' p-3 mx-auto m-4'}>
                                    <div>
                                        <p className='text-center'>Question value: <strong>{question.question_percentage*100}%</strong></p>
                                        <h4 className={styles.title_text}><strong>{question.description}</strong></h4>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group"
                                         className='d-flex flex-column justify-content-around mb-3'>
                                        <div className='mb-2'>
                                            <Field className='me-1' type="radio" name={'id' + question.id} value={question.option1}/>
                                            {question.option1}
                                        </div>
                                        <div className='mb-2'>
                                            <Field className='me-1' type="radio" name={'id' + question.id} value={question.option2}/>
                                            {question.option2}
                                        </div>
                                        <div className='mb-2'>
                                            <Field className='me-1' type="radio" name={'id' + question.id} value={question.option3}/>
                                            {question.option3}
                                        </div>
                                        <div>
                                            <Field className='me-1' type="radio" name={'id' + question.id} value={question.option4}/>
                                            {question.option4}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        <div className="d-grid gap-0">
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}