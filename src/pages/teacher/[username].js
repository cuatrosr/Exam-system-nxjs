import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import TeacherExamForm from "../../components/TeacherExamForm";
import TeacherQuestionForm from "../../components/TeacherQuestionForm";
import LoginForm from "../../components/LoginForm";

const Teacher = ({data}) => {
    return (
        <div>
            <Header title='Teacher view'></Header>
            <Nav/>
            <main className={styles.main}>
                <TeacherExamForm user={data}/>
            </main>
            <Footer/>
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
    return {data};
}

export default Teacher;
