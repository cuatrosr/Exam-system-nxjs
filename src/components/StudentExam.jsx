import {Formik, Field, Form, FieldArray} from "formik";
import styles from '../styles/form.module.css'
import {useRouter} from "next/router";
import * as Yup from "yup";
import Swal from "sweetalert2";

export default function StudentExam({user, exam, questions}) {
    let test = `{`;
    for (let i = 0; i < questions.length; i++) {
        test += (i < questions.length - 1) ?  `"id${questions[i].id}":"",` : `"id${questions[i].id}":""}`;
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
                                <div key={'id'+question.id} className="mb-3">
                                    <Field className="form-control" id={'id'+question.id} name={'id'+question.id}
                                           placeholder="Answer"/>
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