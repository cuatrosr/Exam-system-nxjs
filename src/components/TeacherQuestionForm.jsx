import styles from "../styles/form.module.css";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import {useRouter} from "next/router";

export default function TeacherQuestionForm({user, exam}) {
    const router = useRouter();
    const handleSubmit = async (values, {resetForm}) => {
        if (values.correct_answer === values.option1 || values.correct_answer === values.option2
            || values.correct_answer === values.option3 || values.correct_answer === values.option4) {
            let decimal_percentage = values.question_percentage / 100;
            const question = {
                description: values.description, option1: values.option1,
                option2: values.option2, option3: values.option3, option4: values.option4,
                correct_answer: values.correct_answer, question_percentage: decimal_percentage,
                id_exam: exam.id
            };
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(question)
            }
            const res = await fetch('/api/questions', config);
            const data = await res.json();
            if (res.status === 200) {
                Swal.fire({
                    icon: 'info',
                    title: 'Question added successfully',
                    text: "¿Do you want to add another question to the exam?",
                    showDenyButton: true,
                    confirmButtonText: 'Yes',
                    denyButtonText: 'No',
                    confirmButtonColor: '#6C757D',
                    denyButtonColor: '#808080'
                }).then((result) => {
                    if (result.isConfirmed) {
                        resetForm();
                    } else if (result.isDenied) {
                        Swal.fire({
                            icon: 'success',
                            text: `The exam ${exam.access_code} with the questions was created successfully`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        router.push('/teacher/' + user.username);
                    }
                })
            }
        } else {
            Swal.fire({
                icon: 'error',
                text: 'The correct answer does not match any options',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };
    return (
        <div className={styles.login_box + ' p-3 align-self-center'}>
            <h2 className={styles.title_text}>Questions</h2>
            <Formik
                initialValues={{
                    description: '',
                    option1: '',
                    option2: '',
                    option3: '',
                    option4: '',
                    correct_answer: '',
                    question_percentage: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={
                    Yup.object().shape({
                        description: Yup.string().required('This field is required'),
                        option1: Yup.string().required('This field is required'),
                        option2: Yup.string().required('This field is required'),
                        option3: Yup.string().required('This field is required'),
                        option4: Yup.string().required('This field is required'),
                        correct_answer: Yup.string().required('This field is required'),
                        question_percentage: Yup.string().required('This field is required')
                    })
                }
            >
                {({values, errors, touched}) => (
                    <Form>
                        <div className="mb-3">
                            <Field className="form-control" id="description" name="description"
                                   placeholder="Description"
                                   aria-describedby="descriptionHelp"/>
                            {errors.description && touched.description ? (
                                <div className="validation-error">{errors.description}</div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Field className="form-control" id="question_percentage" name="question_percentage"
                                   placeholder="Question Percentage" type="number" min="0" max="100"
                                   pattern="\d+"/>
                            {errors.question_percentage && touched.question_percentage ? (
                                <div className="validation-error">{errors.question_percentage}</div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Field className="form-control" id="correct_answer" name="correct_answer"
                                   placeholder="Correct Answer"/>
                            {errors.correct_answer && touched.correct_answer ? (
                                <div className="validation-error">{errors.correct_answer}</div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Field className="form-control" id="option1" name="option1"
                                   placeholder="First Option"/>
                            {errors.option1 && touched.option1 ? (
                                <div className="validation-error">{errors.option1}</div>
                            ) : null}
                            <Field className="form-control" id="option2" name="option2"
                                   placeholder="Second Option"/>
                            {errors.option2 && touched.option2 ? (
                                <div className="validation-error">{errors.option2}</div>
                            ) : null}
                            <Field className="form-control" id="option3" name="option3"
                                   placeholder="Third Option"/>
                            {errors.option3 && touched.option3 ? (
                                <div className="validation-error">{errors.option3}</div>
                            ) : null}
                            <Field className="form-control" id="option4" name="option4"
                                   placeholder="Fourth Option"/>
                            {errors.option4 && touched.option4 ? (
                                <div className="validation-error">{errors.option4}</div>
                            ) : null}
                        </div>
                        <div className={'d-grid gap-0'}>
                            <button type="submit" className="btn btn-secondary">Add</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}