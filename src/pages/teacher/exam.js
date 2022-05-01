import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import QuestionBox from '../../components/QuestionsBox'
import {Card, CardContent} from '@mui/material'

export default function createExam(){
    const newExam = async event => {
        event.preventDefault();

        const endpoint = '/api/exams';
        const JSONdata = {
            title: document.getElementById('formularyName').value,
            description: document.getElementById('descrip').value,
            accessCode: document.getElementById('accessCode').value,
            questions: [],
        }

        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }
        const res = await fetch(endpoint, options);
        // TODO finish this
    }

    

    return(
        <div>
            <Header title='Create exam'/>
            <main className={styles.main}>
                <form onSubmit={newExam}>
                    <div className='text-center'>
                        <label form='formularyName' className='form-label'>Nombre del formulario</label>
                        <input type='text' className="form-control" id='formularyName'/>
                    </div>
                    <div className='text-center'>
                        <label form='accessCode' className='form-label'>Código de acceso</label>
                        <input type='password' className='form-control' id='accessCode'/>
                    </div>
                    <div className='text-center'>
                        <label form='description' className='form-label'>Descripción</label>
                        <input type='desc' className='form-control' id='descrip'/>
                    </div>
                    <div className='text-center'>
                        {QuestionBox}
                        <Card>
                        <CardContent>
                            <div className='mb-3'>
                                <label htmlFor='Question1' className='form-label'>Pregunta 1</label>
                                <input type='textquest' className="form-control" id='question1'/>
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='Respuestas' className='form-label'>Respuestas:</label>
                                <div className="d-flex">a)<input type='textresp1' className="form-control" id='response1'/></div>
                                <div className="d-flex">b)<input type='textresp2' className="form-control" id='response2'/></div>
                                <div className="d-flex">c)<input type='textresp3' className="form-control" id='response3'/></div>
                                <div className="d-flex">d)<input type='textresp4' className="form-control" id='response4'/></div>
                                <button type='btn' className='text-left'>
                                    Añadir pregunta
                                </button>
                            </div>
                            <div className='text-center'>
                                <button type='btn' className='btn btn-primary'>
                                    Crear pregunta
                                </button>
                            </div>
                        </CardContent>
                    </Card>
                    </div>
                </form>
            </main>
        </div>
    )
}