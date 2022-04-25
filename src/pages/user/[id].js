export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:3000/api/users')
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: {id: user.id}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('http://localhost:3000/api/users/' + id);
    const data = await res.json();

    return {
        props: {user: data}
    }
}

const Details = ({user}) => {
    return (
        <div>
            <h1>{user.username}</h1>
            <p>{user.type}</p>
        </div>
    )
}

export default Details;