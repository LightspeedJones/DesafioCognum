const db = require('./database')

const pool = db.pool

var getEmployees = (request, response) => {
    pool.query('SELECT * FROM employees ORDER BY id ASC', (error, results) => {
    
    if (error) {
      throw error
    }
    
    response.status(200).json(results.rows)
    })
  }
  
var insertEmployee = (request, response) => {
  var {name, role} = request.body

  pool.query('INSERT INTO employees (name, role) VALUES ($1, $2)', [name, role], (error, results) => {
    if(error){
      throw error
    }

    response.status(201).send(`employee ${name} created`)
  })
}
  
var updateEmployee = (request, response) => {
  var {id, name, role} = request.body

  pool.query('UPDATE employees SET name = $1, role = $2 WHERE id = $3', [name, role, id], (error, results) => {
    if(error){
      throw error
    }

    response.status(200).send(`employee ${name} updated`)
  })
}
  
var deleteEmployee = (request, response) => {
  var id = parseInt(request.params.id)

  pool.query('DELETE FROM employees WHERE id = $1', [id], (error, results) =>{
    if(error){
      throw error
    }
    response.status(200).send(`employee ${id} deleted`)
  })
}

module.exports = {
  getEmployees,
  insertEmployee,
  updateEmployee,
  deleteEmployee,
}