import styles from '../../styles/Home.module.css'
import Header from '../../components/Header'
import QuestionBox from '../../components/QuestionsBox'
import {Card, CardContent} from '@mui/material'

export default function createExam(){
    const newExam = event => {
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
                    <div class='text-center'>
                        <label for='formularyName' class='form-label'>Nombre del formulario</label>
                        <input type='text' class="form-control" id='formularyName'/>
                    </div>
                    <div class='text-center'>
                        <label for='accessCode' class='form-label'>Código de acceso</label>
                        <input type='password' class='form-control' id='accessCode'/>
                    </div>
                    <div class='text-center'>
                        <label for='description' class='form-label'>Descripción</label>
                        <input type='desc' class='form-control' id='descrip'/>
                    </div>
                    <div class='text-center'>
                        {QuestionBox}
                        <Card>
                        <CardContent>
                            <div class='mb-3'>
                                <label for='Question1' class='form-label'>Pregunta 1</label>
                                <input type='textquest' class="form-control" id='question1'/>
                            </div>
                            <div class='mb-3'>
                                <label for='Respuestas' class='form-label'>Respuestas:</label>
                                <div class="d-flex">a)<input type='textresp1' class="form-control" id='response1'/></div>
                                <div class="d-flex">b)<input type='textresp2' class="form-control" id='response2'/></div>
                                <div class="d-flex">c)<input type='textresp3' class="form-control" id='response3'/></div>
                                <div class="d-flex">d)<input type='textresp4' class="form-control" id='response4'/></div>
                                <button type='btn' class='text-left'>
                                    Añadir pregunta
                                </button>
                            </div>
                            <div class='text-center'>
                                <button type='btn' class='btn btn-primary'>
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