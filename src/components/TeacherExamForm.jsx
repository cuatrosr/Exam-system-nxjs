import Link from "next/link";
import styles from "../styles/form.module.css";
import {Formik, Field, Form} from "formik";

export default function TeacherExamForm({user}) {
    let id_aux = 0;
    //let json = [{id: "1", description: "1+2", option1: "-2", option2: "0", option3: "1", option4: "3"}];
    let json = [];
    const handleSubmitExam = async (values, {resetForm}) => {
        console.log(values)
    };
    const handleSubmitQuestion = async (values, {resetForm}) => {
        console.log(values)
    };
    return (
        <div className='container'>
            <div className='row justify-content-around'>
                <div className={styles.login_box + ' p-3 align-self-center'}>
                    <h2 className={styles.title_text}>Create Exam</h2>
                    <Formik
                        initialValues={{
                            title: '',
                            description: '',
                            access_code: '',
                            id_creator: user.id
                        }}
                        onSubmit={handleSubmitExam}
                    >
                        <Form>
                            <div className="mb-3">
                                <Field className="form-control" id="title" name="title" placeholder="Title"
                                       aria-describedby="titleHelp"/>
                            </div>
                            <div className="mb-3">
                                <Field className="form-control" id="description" name="description"
                                       placeholder="Description"/>
                            </div>
                            <div className="mb-3">
                                <Field className="form-control" id="access_code" name="access_code"
                                       placeholder="Access code"/>
                            </div>
                            <div className="accordion mb-3" id="accordionQuestions">
                                {json.length !== 0 ? (
                                    json.map(question => (
                                        <div key={question.id} className="accordion-item">
                                            <h2 className="accordion-header" id={"heading" + question.id}>
                                                <button className="accordion-button" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target={"#collapse" + question.id} aria-expanded="true"
                                                        aria-controls={"collapse" + question.id}>
                                                    {question.description}
                                                </button>
                                            </h2>
                                            <div id={"collapse" + question.id}
                                                 className="accordion-collapse collapse show"
                                                 aria-labelledby={"heading" + question.id}
                                                 data-bs-parent="#accordionQuestions">
                                                <div className="accordion-body">
                                                    {question.option1}, {question.option2}, {question.option3}, {question.option4}
                                                </div>
                                            </div>
                                        </div>
                                    ))) : (
                                    <div className="mb-3">
                                        <input type="text" readOnly className="form-control" value="Questions"/>
                                    </div>
                                )}
                            </div>
                            <div className={'d-grid gap-0'}>
                                <button type="submit" className="btn btn-secondary">Submit</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
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
                        onSubmit={handleSubmitQuestion}
                    >
                        <Form>
                            <div className="mb-3">
                                <Field className="form-control" id="description" name="description"
                                       placeholder="Description"
                                       aria-describedby="descriptionHelp"/>
                            </div>
                            <div className="mb-3">
                                <Field className="form-control" id="question_percentage" name="question_percentage"
                                       placeholder="Question Percentage" type="number" min="0" max="100" pattern="\d+"/>
                            </div>
                            <div className="mb-3">
                                <Field className="form-control" id="correct_answer" name="correct_answer"
                                       placeholder="Correct Answer"/>
                            </div>
                            <div className="mb-3">
                                <Field className="form-control" id="option1" name="option1"
                                       placeholder="First Option"/>
                                <Field className="form-control" id="option2" name="option2"
                                       placeholder="Second Option"/>
                                <Field className="form-control" id="option3" name="option3"
                                       placeholder="Third Option"/>
                                <Field className="form-control" id="option4" name="option4"
                                       placeholder="Fourth Option"/>
                            </div>
                            <div className={'d-grid gap-0'}>
                                <button type="submit" className="btn btn-secondary">Submit</button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}