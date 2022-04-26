import {Formik, Field, Form} from "formik";
import styles from '../styles/form.module.css'
import Link from "next/link";

export default function LoginForm() {
    const handleSubmit = async (values) => {

        console.log(values);
    };
    return (
        <div className={styles.login_box + ' p-3'}>
            <h1 className={styles.title_text}>Exam Platform</h1>

            <Formik
                initialValues={{
                    username: '',
                    password: '',
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