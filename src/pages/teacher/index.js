import {Component} from 'react'
import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Link from 'next/link'

function clicked(){
    browserHistory.push('cexam')
}

export default function Teacher(){
    return(
        <div>
            <Header title='Teacher view'></Header>
            <main className={styles.main}>
                <Link href='/teacher/cexam'><button type='button' class='btn btn-primary'>Crear examen</button></Link>
            </main>   
        </div>
    )
}