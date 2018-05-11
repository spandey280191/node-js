const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'test',
    password: 'postgres',
    port: 5432,
  })
  client.connect();

  client.query('SELECT * from person', (err, res) => {

    res.rows.forEach(element => {
        console.log(element);
    });
    client.end()
  })