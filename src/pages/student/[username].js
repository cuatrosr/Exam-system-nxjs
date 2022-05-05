import Header from "../../components/Header";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ExamForm from "../../components/ExamForm";
import ResultForm from "../../components/ResultForm";
import styles from '../../styles/Home.module.css';

const Student = ({data}) => {
    return (
        <div>
            <Header title='Student view'></Header>
            <Nav/>
            <main className={styles.main}>
                <div className="container">
                    <div className="row justify-content-around">
                        <ExamForm user={data}/>
                        <ResultForm user={data}/>
                    </div>
                </div>
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