import Head from 'next/head'
import LoginForm from "../../components/LoginForm";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Login Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="min-vh-100 d-flex justify-content-center align-items-center">
                <LoginForm/>
            </main>
            <Footer />
        </div>
    )
}

export default Home;