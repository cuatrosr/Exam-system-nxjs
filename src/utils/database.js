import {Pool} from 'pg';

let conn;

if (!conn) {
    conn = new Pool({
        user: 'postgres',
        password: 'mysecretpassword',
        host: 'localhost',
        port: 5432,
        database: 'examdb',
    });
}

export {conn};