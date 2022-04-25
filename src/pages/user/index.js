export const getStaticProps = async () => {
    const res = await fetch('http://localhost:3000/api/users')
    const data = await res.json();

    return {
        props: {users: data}
    }
}

const Users = ({users}) => {
    console.log(users);
    return (
        <div>
            <h1>All Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <a>
                        <h3>{user.username}</h3>
                    </a>
                </div>
                ))}
        </div>
    );
}

export default Users;

