import styles from "../styles/form.module.css";
import {Field, Form, Formik} from "formik";
import Link from "next/link";

export default function TeacherQuestionForm() {
    let id_aux = 0;
    const handleSubmit = async (values, {resetForm}) => {
        console.log(values)
    };
    return (
        <div className={styles.login_box + ' p-3 align-self-center'}>
            <h2 className={styles.title_text}>Questions</h2>
            <Formik
                initialValues={{
                    id: id_aux,
                    description: '',
                    option1: '',
                    option2: '',
                    option3: '',
                    option4: '',
                    correct_answer: '',
                    question_percentage: ''
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-3">
                        <Field className="form-control" id="description" name="description" placeholder="Description"
                               aria-describedby="descriptionHelp"/>
                    </div>
                    <div className="mb-3">
                        <Field className="form-control" id="description" name="description"
                               placeholder="Description"/>
                    </div>
                    <div className="mb-3">
                        <Field className="form-control" id="access_code" name="access_code"
                               placeholder="Access code"/>
                    </div>
                    <div className={'d-grid gap-0'}>
                        <button type="submit" className="btn btn-secondary">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}