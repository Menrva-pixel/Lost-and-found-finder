const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'nama_pengguna',
  password: 'kata_sandi',
  database: 'nama_database'
});

connection.connect((err) => {
  if (err) {
    console.error('Koneksi ke database MySQL gagal:', err);
  } else {
    console.log('Terhubung ke database MySQL');
  }
});

connection.end((err) => {
  if (err) {
    console.error('Error saat memutus koneksi dari database MySQL:', err);
  } else {
    console.log('Koneksi ke database MySQL ditutup');
  }
});

module.exports = connection;
