import mysql, {ConnectionOptions } from 'mysql2/promise';

// Create the connection to database


const dbConnection: ConnectionOptions = {
        host: 'localhost',
        user: 'root',
        database: 'shopping',
}

export const conn = mysql.createConnection(dbConnection)