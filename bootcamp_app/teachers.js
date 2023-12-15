const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortName = process.argv[2] || 'JUL02';

pool.query(`
  SELECT DISTINCT teachers.name, cohorts.name AS cohort
  FROM assistance_requests
  JOIN teachers ON assistance_requests.teacher_id = teachers.id
  JOIN students ON assistance_requests.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
  WHERE cohorts.name = $1
`, [cohortName])
  .then(res => {
    console.log('connected');
    res.rows.forEach(teacher => {
      console.log(`${teacher.cohort}: ${teacher.name}`);
    });
    pool.end();
  })
  .catch(err => console.error('query error', err.stack));