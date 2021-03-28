require('./connectDb') ; 
const express = require ('express') ; 
const filmrouter = require ('./routers/films') ; 
const seancerouter = require ('./routers/seances') ; 
const app = express() ; 
const port = process.env.PORT || 4005 ; 
app.use (express.json())  ; 

app.use('/api/films' ,filmrouter )   ; 
app.use('/api/seances' , seancerouter) ; 
app.listen (port , ()=> console.log('application is up ' , port)) ; 