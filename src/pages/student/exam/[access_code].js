import examForm from "../../../components/ExamForm";
import Header from "../../../components/Header";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";
import {Formik, Field, Form} from "formik";
import {values} from "pg/lib/native/query";
import {useRouter} from "next/router";
import Student from "../[username]";
import React from 'react';

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
                    <Formik
                        initialValues={{
                            code: ''
                        }}
                        onSubmit={handleSubmit}
                    >
                        <h2 className="fw-bold text-center">Realiza el examen {data.acces_code}</h2>
                    </Formik>


                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths(){
    try{
        const res = await fetch('http://localhost:3000/api/exam');
        const data = await res.json()
        console.log(data)
        const paths = data.map(({access_code}) => ({params: {accessCode: `${access_code}`}}))
        return{
            paths,
            fallback: false
        }

    }catch (error){
        console.log(error)
    }
}

export async function getStaticProps({params}){
    try{
        const res = await fetch('http://localhost:3000/api/exam/'+params.access_code)
        const data = await res.json();
        console.log(data);
        return{
            props:{
                data,
            },
        };

    }catch (error){
        console.log(error);
    }
}
/*exam.getInitialProps = async (req, res) => {
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
}*/

