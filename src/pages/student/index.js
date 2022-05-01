import {Component} from 'react'
import examForm from "../../components/ExamForm";
import code from "../../components/Code";
// eslint-disable-next-line @next/next/no-document-import-in-page
import Link from "next/Link";
import Header from "../../components/Header";

export default function Student(){
    return(
        <div>
            <Header tittle='Student View'></Header>
            <main className="vh-100 d-flex justify-content-center align-items-center">

                <code/>

            </main>
        </div>
    );
}