import {Component} from 'react'
import examForm from "../../components/ExamForm";
import code from "../../components/Code";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Link from "next/Link";
import Header from "../../components/Header";

export default function Student(){
    return(

        <body>
            <div className="container w-75 bg-primary mt-5 rounded shadow">
                <div className="row-cols-1">
                    <div className="text-end"></div>

                    <h2 className="fw-bold text-center">EXAM TO STUDENTS</h2>

                    <form action="#">
                        <div className="mb-4">
                            <label htmlFor="code" className="form-label">Code of the exam</label>
                            <input type="code" className="form-control" name="codeExam"/>
                        </div>
                        <div className="d-grid ">
                            <Link href="/student/examStudent"><button type="submit" className="btn btn-primary bg-gradient">Start</button></Link>

                        </div>
                    </form>
                </div>
            </div>
        </body>

    );
}