import styles from '../styles/navForm.css'

export default function NavForm(){
    return(
        <body>
            <header>
                <nav>
                    <ul className={styles.header}>
                        <li><a href="#">Options</a> </li>
                    </ul>
                </nav>
            </header>
        </body>
    );
}