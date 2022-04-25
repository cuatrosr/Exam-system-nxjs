import {Formik, Field, Form} from "formik";
import styles from '../styles/login-form.module.css'

export default function LoginForm() {
    return (
        <div className={styles.login_box + ' p-3'}>
            <h1 className="display-6 mb-3">Login</h1>

            <Formik
                initialValues={{
                    username: '',
                    password: '',
                }}
                onSubmit={() => {

                }}
            >
                <Form>
                    <div className="mb-3">
                        <Field className="form-control" id="username" name="username" placeholder="Username" aria-describedby="usernameHelp"/>
                    </div>
                    <div className="mb-3">
                        <Field className="form-control" id="password" name="password" placeholder="Password" type="password"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </Form>
            </Formik>
        </div>
    )
}