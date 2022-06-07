const { Client } = require('pg')

const client = new Client({
  user:  process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'posts',
  password: '',
  port: process.env.DB_PORT,
})

client.connect(function (err) {
  if(err) throw err;
  console.log('Database connected')
})

module.exports = client