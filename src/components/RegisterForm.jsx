import {Formik, Field, Form} from "formik";
import styles from '../styles/form.module.css'
import Link from "next/link";
import {RegistrationSchema} from "../schema/registration.schema";
import {useRouter} from "next/router";

export default function RegisterForm() {
    const router = useRouter();
    const handleSubmit = async (values) => {
        console.log(values);
    };
    return (
        <div className={styles.login_box + ' p-3'}>
            <h1 className={styles.title_text + ' display-6 mb-3'}>Exam Platform</h1>

            <Formik
                initialValues={{
                    username: '',
                    password: '',
                    type: 'teacher',
                }}
                onSubmit={handleSubmit}
                validationSchema={RegistrationSchema}
            >
                {({values, errors, touched}) => (
                    <Form>
                        <div className="mb-3">
                            <Field className="form-control" id="username" name="username" placeholder="Username"
                                   type="text"/>
                            {errors.username && touched.username ? (
                                <div className="validation-error">{errors.username}</div>
                            ) : null}
                        </div>
                        <div className="mb-3">
                            <Field className="form-control" id="password" name="password" placeholder="Password"
                                   type="password"/>
                            {errors.password && touched.password ? (
                                <div className="validation-error">{errors.password}</div>
                            ) : null}
                        </div>
                        <p align="center">
                            <span>I am a </span>
                            <Field as="select" name="type">
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </Field>
                        </p>
                        <div className="d-grid gap-0">
                            <button type="submit" className="btn btn-secondary">Register</button>
                        </div>
                    </Form>
                )}
            </Formik>
            <p className={styles.href_div + ' text-center'}>
                <span>¿Already have an account? </span>
                <Link href="/user/">
                    <a className={styles.href_text}>Sign in</a>
                </Link>
            </p>
        </div>
    )
}