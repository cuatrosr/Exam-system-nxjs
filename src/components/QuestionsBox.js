import {Component, useState} from 'react'
import Question from './Question'

export default class QuestionsBox extends Component{
    render(){
        const [components, setComponents] = useState(["Sample"])

        function addComponent() {
            setComponents([...components, "Sample"])
        }
    }
/*
    return (
        <div>
            <div>
            {components.map((item, i) => (<Question/>))}
            </div>
            <div>
                <button type='btn' class='btn btn-secondary' onClick={addComponent}>Agregar pregunta (+)</button>
            </div>
        </div>
    ) */

}