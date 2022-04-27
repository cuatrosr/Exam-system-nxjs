import styles from '../styles/Home.module.css'

export default function NavForm(){
    return(
            <div className={styles.navbar}>
                <div>
                    <a href="../user">HOME</a>
                </div>
                <div>
                    <a href="user/register">SIGN UP</a>
                </div>
              </div>
    );
}