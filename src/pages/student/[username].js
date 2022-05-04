
import examForm from "../../components/ExamForm";
import code from "../../components/Code";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Link from "next/Link";
import Header from "../../components/Header";
import {Formik, Field, Form} from "formik";
import {useRouter} from "next/router";
import Swal from "sweetalert2";
import React from 'react';
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ExamForm from "../../components/ExamForm";


import styles from '../../styles/Home.module.css'

const Student = ({data}) => {
    return(
        <div>
            <Header title = 'Student view'></Header>
            <Nav/>
            <main className={styles.main}>
                <ExamForm user={data}/>
            </main>
            <Footer/>
        </div>
    )
}

Student.getInitialProps = async (req, res) => {
    let config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }

    const response = await fetch('http://localhost:3000/api/users/' + req.query.username, config);
    const data = await response.json();
    return {data};
}

export default Student;











/*export default function Username({data}) {


    const router = useRouter();
    const handleSubmit = async (values, {resetForm}) => {
        const res = await fetch('/api/exams', config);
        const code = await res.json();
            await router.push('/student/exam'+code.access_code+'?username=' + data.username);

    };

    return (
        <div className="container w-75 bg-primary mt-5 rounded shadow">
            <div className="row-cols-1">
                <div className="text-end"></div>
                <h1>¡Hello student {data.username}!</h1>
                <h2 className="fw-bold text-center">EXAM TO STUDENTS</h2>
                <Formik
                    initialValues={{
                        code: ''
                    }}
                    onSubmit={handleSubmit}
                >
                    <form>
                        <div className="mb-4">
                            <label htmlFor="code" className="form-label">Code of the exam</label>
                            <Field className="form-control" id="code" name="code" placeholder="Code" />
                        </div>
                        <div className="d-grid ">
                            <button type="submit" className="btn btn-primary bg-gradient">Start</button>
                        </div>
                    </form>
                </Formik>
            </div>
        </div>


    );
}

export async function getStaticPaths(){
    try{
        const res = await fetch('http://localhost:3000/api/users');
         const data = await res.json()
        console.log(data)
        const paths = data.map(({username}) => ({params: {username: `${username}`}}))
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
      const res = await fetch('http://localhost:3000/api/users/'+params.username)
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
}*/

/*Student.getInitialProps = async (req, res) => {
    let config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }
    const response = await fetch('http://localhost:3000/api/users/' + req.query.username, config);
    const data = await response.json();
    return {data};
}*/