import Head from 'next/head'
import LoginForm from "../../components/LoginForm";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Login Page</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <LoginForm/>
            </main>
        </div>
    )
}

export default Home;