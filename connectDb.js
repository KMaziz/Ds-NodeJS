const mongoose = require ('mongoose') ; 
mongoose.connect('mongodb+srv://aziz:aziz123456@cluster0.eoxov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{ useNewUrlParser: true,
  useUnifiedTopology: true })
        .then(() => console.log('mongodb is up  !'))
        .catch((error) => console.log('mongodb is down !', error));


        
module.exports = mongoose  ; 


