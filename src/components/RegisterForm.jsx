import {Formik, Field, Form} from "formik";
import styles from '../styles/form.module.css'
import Link from "next/link";
import {RegistrationSchema} from "../schema/registration.schema";
import {useRouter} from "next/router";
const Swal = require('sweetalert2');

export default function RegisterForm() {
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
        const res = await fetch('/api/users', config);
        const data = await res.json();
        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                text: 'The user has been registered',
                showConfirmButton: false,
                timer: 1500
            });
            await router.push('/user');
        } else {
            Swal.fire({
                icon: 'error',
                text: `The user ${data.username} is already registered`,
                showConfirmButton: false,
                timer: 1500
            });
            resetForm();
        }
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