import styles from "../styles/form.module.css";
import {Formik, Field, Form} from "formik";
import * as Yup from "yup";
import {useRouter} from "next/router";
import Swal from "sweetalert2";

export default function TeacherExamForm({user}) {
    const router = useRouter();
    const handleSubmit = async (values, {resetForm}) => {
        let config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        }
        const res = await fetch('/api/exams', config);
        const data = await res.json();
        if (res.status === 200) {
            Swal.fire({
                icon: 'info',
                text: 'Now add some questions to the exam',
                showConfirmButton: false,
                timer: 1500
            });
            await router.push('/teacher/exam/' + data.access_code + '?username=' + user.username);
        } else {
            if (data.message !== undefined) {
                Swal.fire({
                    icon: 'error',
                    text: `The description is too long`,
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    text: `The access code ${data.access_code} is not available`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };
    return (
        <div className={styles.login_box + ' p-3'}>
            <h2 className={styles.title_text}>Create Exam</h2>
            <Formik
                initialValues={{
                    title: '',
                    description: '',
                    access_code: '',
                    id_creator: user.id
                }}
                onSubmit={handleSubmit}
                validationSchema={
                    Yup.object().shape({
                        title: Yup.string().required('This field is required'),
                        description: Yup.string().required('This field is required'),
                        access_code: Yup.string().required('This field is required')
                    })
                }
            >
                {({values, errors, touched}) => (
                    <Form>
                        <div className="mb-3">
                            <Field className="form-control" id="title" name="title" placeholder="Title"
                                   aria-describedby="titleHelp"/>
                            {errors.title && touched.title ? (
                                <div className="validation-error">{errors.title}</div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Field className="form-control" id="description" name="description"
                                   placeholder="Description"/>
                            {errors.description && touched.description ? (
                                <div className="validation-error">{errors.description}</div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Field className="form-control" id="access_code" name="access_code"
                                   placeholder="Access code"/>
                            {errors.access_code && touched.access_code ? (
                                <div className="validation-error">{errors.access_code}</div>
                            ) : null}
                        </div>
                        <div className={'d-grid gap-0'}>
                            <button type="submit" className="btn btn-secondary">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}