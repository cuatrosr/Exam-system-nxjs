import styles from '../../../styles/Home.module.css'
import Header from '../../../components/Header'
import Nav from "../../../components/Nav";
import Footer from "../../../components/Footer";
import TeacherQuestionForm from "../../../components/TeacherQuestionForm";

const Question = ({data_user, data_exam}) => {
    return (
        <div>
            <Header title='Teacher view'></Header>
            <Nav/>
            <main className={styles.main}>
                <TeacherQuestionForm user={data_user} exam={data_exam} />
            </main>
            <Footer/>
        </div>
    )
}

Question.getInitialProps = async (req, res) => {
    let config = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }
    let response = await fetch('http://localhost:3000/api/users/' + req.query.username, config);
    const data_user = await response.json();
    response = await fetch('http://localhost:3000/api/exams/' + req.query.access_code, config);
    const data_exam = await response.json();
    return {data_user, data_exam};
}

export default Question;
