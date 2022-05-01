import styles from "../styles/Home.module.css"
import {TextField} from "@mui/material";

export default function code(){
    return(
        <div className={styles.codeExam}>
            <TextField id="codeExam" label="Outlined" variant="outlined" />
        </div>
    );
}