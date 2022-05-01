import Head from 'next/head'
import RegisterForm from "../../components/RegisterForm";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <div>
            <Head>
                <title>Register Page</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Nav />
           <Footer />
            <main className="vh-100 d-flex justify-content-center align-items-center">
                <RegisterForm/>
            </main>
        </div>
    )
}

export default Home;