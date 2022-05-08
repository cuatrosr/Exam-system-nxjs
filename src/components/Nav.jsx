import Link from "next/link";

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand d-flex">
                    <img alt="Home" src="https://www.svgrepo.com/show/375443/home.svg"/>
                    <span>Exam</span>
                </a>
                <div className="navbar-nav">
                    <Link href="/">
                        <a className="nav-link">Logout</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
}