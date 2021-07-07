const express= require('express')
const app= express()
const patch= require('path')
const port= 3000
const views= patch.join(__dirname, "views")

app.use(express.static('public'))

app.listen(port, ()=> console.log("Servidor funcionando en el puerto: "+ port))

app.get('/', (req,res) => res.sendFile(patch.join(views, 'home.html')))
app.get('/register', (req,res) => res.sendFile(patch.join(views, 'register.html')))
app.get('/login', (req,res) => res.sendFile(patch.join(views, 'login.html')))

