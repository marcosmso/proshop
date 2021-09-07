import bcrypt from 'bcryptjs'

const users = [
  { name: 'Admin User', email: 'admin@example.com', password: bcrypt.hashSync('123456', 10), isAdmin: true },
  { name: 'Marcos Santana', email: 'marcos@example.com', password: bcrypt.hashSync('123456', 10) },
  { name: 'Vanuza Vieira', email: 'vanuza@example.com', password: bcrypt.hashSync('123456', 10) }
]

export default users