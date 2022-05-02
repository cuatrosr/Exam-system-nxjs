import examForm from "../../components/ExamForm";
import Header from "../../components/Header";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function exam(){
    return(


        <div className="container w-75 bg-secondary mt-5">
            <div className="row">
                <div className="col-3">
                    <h2 className="fw-bold text-center">Realiza el examen</h2>
                    <form role="form">
                        <div className="form-group">
                            <p id="text1">This is the first question</p>
                            <div className="swal2-checkbox">
                                <label><input type="checkbox" value=""/>Option 1</label>
                            </div>
                            <div className="swal2-checkbox">
                                <label><input type="checkbox" value=""/>Option 2</label>
                            </div>
                            <div className="swal2-checkbox">
                                <label><input type="checkbox" value=""/>Option 3</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}



