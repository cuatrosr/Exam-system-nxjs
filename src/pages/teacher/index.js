import {Component} from 'react'
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Link from 'next/link'

function clicked(){
    browserHistory.push('exam')
}

export default function Teacher({ data }) {
    return (
        <div>
            <Header title='Teacher view'></Header>
            <main className={styles.main}>
                <h1>¡Hello teacher {data.username}!</h1>
                <Link href='/teacher/exam'>
                    <button type='button' className='btn btn-primary'>Crear examen</button>
                </Link>
            </main>
        </div>
    )
}

Teacher.getInitialProps = async (req, res) => {
    let config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }
    const response = await fetch('http://localhost:3000/api/users/' + req.query.username, config);
    const data = await response.json();
    return { data };
}