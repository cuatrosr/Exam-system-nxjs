import styles from "../styles/Home.module.css"

export default function examForm(){
    return(
        <body>
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
        </body>
    );
}

