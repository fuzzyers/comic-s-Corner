import pgPromise from 'pg-promise';

const pgp = pgPromise();
const connectionString = process.env.DB_LINK;

if (!connectionString) {
    throw new Error('DATABASE_URL is not defined in environment variables');
}

const db = pgp({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false,  // Allows self-signed certificates or unsecured connections.
    },
});

db.connect()
    .then((obj) => {
        console.log('Database connected');
        obj.done();
    })
    .catch((error) => {
        console.error('Database connection error', error);
    });

export default db;