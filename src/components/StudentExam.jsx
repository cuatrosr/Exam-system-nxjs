import {Formik, Field, Form, FieldArray} from "formik";
import styles from '../styles/form.module.css'
import {useRouter} from "next/router";
import * as Yup from "yup";
import Swal from "sweetalert2";

export default function StudentExam({user, exam, questions}) {
    let test = `{`;
    for (let i = 0; i < questions.length; i++) {
        test += (i < questions.length - 1) ? `"id${questions[i].id}":"",` : `"id${questions[i].id}":""}`;
    }
    let json = JSON.parse(test);
    const router = useRouter();
    const handleSubmit = async (values, {resetForm}) => {
        console.log(values)
    };
    return (
        <div className={styles.login_box + ' p-3'}>
            <h1 className={styles.title_text}>Exam</h1>
            <Formik
                initialValues={json}
                onSubmit={handleSubmit}
            >
                {({values, errors, touched}) => (
                    <Form>
                        {questions.map(question => {
                            return (
                                <div key={'id' + question.id} className={styles.options_box + ' p-3 mx-auto m-4'}>
                                    <div role="group" aria-labelledby="my-radio-group" className='d-flex flex-column justify-content-around mb-3'>
                                        <div className='mb-2'>
                                            <Field type="radio" name={'id' + question.id} value={question.option1}/>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                        <div className='mb-2'>
                                            <Field type="radio" name={'id' + question.id} value={question.option2}/>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                        <div className='mb-2'>
                                            <Field type="radio" name={'id' + question.id} value={question.option3}/>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </div>
                                        <div className='mb-2'>
                                            <Field type="radio" name={'id' + question.id} value={question.option4}/>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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