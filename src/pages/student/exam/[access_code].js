import Header from "../../../components/Header";
import Nav from "../../../components/Nav";
import styles from "../../../styles/Home.module.css";
import StudentExam from "../../../components/StudentExam";
import Footer from "../../../components/Footer";

export default function Exam({user, exam, questions}) {
    return (
        <div>
            <Header title='Teacher view'></Header>
            <Nav/>
            <main className={styles.main}>
                <StudentExam user={user} exam={exam} questions={questions}/>
            </main>
            <Footer/>
        </div>
    );
}

Exam.getInitialProps = async (req, res) => {
    let config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    };
    let response = await fetch('http://localhost:3000/api/users/' + req.query.username, config);
    const user = await response.json();
    response = await fetch('http://localhost:3000/api/exams/' + req.query.access_code, config);
    const exam = await response.json();
    response = await fetch('http://localhost:3000/api/questions/' + req.query.access_code, config);
    const questions = await response.json();
    return {user, exam, questions};
};
