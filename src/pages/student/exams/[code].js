import examForm from "../../../components/ExamForm";
import Header from "../../../components/Header";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import {Formik, Field, Form} from "formik";
import {values} from "pg/lib/native/query";
import {useRouter} from "next/router";
import Student from "../principal/[username]";

export default function exam({data}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    const handleSubmit = async (values, {resetForm}) => {
        await router.push('/student/results/' + values.username);
    };

    return (
        <div className="container w-75 bg-secondary mt-5">
            <div className="row">
                <div className="col-3">
                    <h2 className="fw-bold text-center">Realiza el examen</h2>

                </div>
            </div>
        </div>
    );
}

exam.getInitialProps = async (req, res) => {
    let config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }
    const response = await fetch('http://localhost:3000/api/users' + req.query.username, config);
    const data = await response.json();
    return { data };
}

