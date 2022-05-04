import styles from "../styles/form.module.css"
import * as Yup from "yup";
import {useRouter} from "next/router";
import {Formik, Field, Form} from "formik";

export default function examForm({user}){

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

        const res = await fetch('/api/exams', config)
        const data = await res.json();

        await router.push('/student/exam/'+data.access_code + '?username=' + user.username)
    }

    return(
        <div className={styles.login_box + 'p-3'}>
            <h2 className={styles.title_text}>Insert a code of the exam</h2>
            <Formik
                initialValues={{
                    codeAccess: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={
                    Yup.object().shape({
                        code: Yup.string().required('This field is required')
                    })
                }>
                {({values, errors, touched}) =>(
                    <Form>
                        <div className="mb-3">
                            <Field className="form-control" id="codeAccess" name="codeAccess" placeholder="Code" aria-describedby="codeHelp"/>
                            {errors.code && touched.code ? (
                                <div className="validation-error">{errors.code}</div>
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

