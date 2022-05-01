import {Formik, Field, Form} from "formik";
import styles from '../styles/form.module.css'
import Link from "next/link";
import {useRouter} from "next/router";
const Swal = require('sweetalert2');

export default function LoginForm() {
    const router = useRouter();
    const handleSubmit = async (values, {resetForm}) => {
        let config = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }
        const res = await fetch('/api/users/' + values.username, config);
        const data = await res.json();
        if (res.status === 200) {
            if (values.password === data.password) {
                Swal.fire({
                    icon: 'success',
                    text: 'Logged in',
                    showConfirmButton: false,
                    timer: 1500
                });
                if (data.user_type === 'teacher') {
                    await router.push('/teacher?' + 'username=' + values.username);
                } else {
                    await router.push('/student?' + 'username=' + values.username);
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    text: 'Incorrect password',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } else {
            Swal.fire({
                icon: 'error',
                text: `User ${data.username} doesn't exist`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        resetForm();
    };
    return (
        <div className={styles.login_box + ' p-3'}>
            <h1 className={styles.title_text}>Exam Platform</h1>
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-3">
                        <Field className="form-control" id="username" name="username" placeholder="Username" aria-describedby="usernameHelp"/>
                    </div>
                    <div className="mb-3">
                        <Field className="form-control" id="password" name="password" placeholder="Password" type="password"/>
                    </div>
                    <div className="d-grid gap-0">
                        <button type="submit" className="btn btn-secondary">Login</button>
                    </div>
                </Form>
            </Formik>
            <p className={styles.href_div + ' text-center'}>
                <span>¿Need an account? </span>
                <Link href="/user/register">
                    <a className={styles.href_text}>Sign up</a>
                </Link>
            </p>
        </div>
    )
}