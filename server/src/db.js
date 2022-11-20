import postgres from 'pg'

const pool = new postgres.Pool({
    user: 'postgres',
    password: 'shakib',
    host: 'localhost',
    port: 5432,
    database: 'todostable'
})

export default pool