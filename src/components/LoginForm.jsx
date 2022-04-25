import {Formik, Field, Form} from "formik";
import styles from '../styles/login-form.module.css'

export default function LoginForm() {
    return (
        <Formik
            initialValues={{
                username: '',
                password: '',
                type: '',
            }}
            onSubmit={() => {

            }}
        >
            <Form>
                <Field id="username" name="username" placeholder="Username" />
                <Field type="password" id="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
        </Formik>
    )
}