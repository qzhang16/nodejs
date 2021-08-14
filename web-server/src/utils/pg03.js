const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'sg',
  host: 'localhost',
  database: 'socialnetwork',
  password: 'Rockwell123',
  port: 6432
})
pool.query('SELECT * from users', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
    user: 'sg',
    host: 'localhost',
    database: 'socialnetwork',
    password: 'Rockwell123',
    port: 6432
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})