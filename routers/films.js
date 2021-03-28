const {Film, validation_film , validation_film_update} = require('../models/film') ; 
const router = require('express').Router() ; 
const Seance = require('../models/seance')

router.get('/' , async (req ,res)=> { 
    let film =  await Film.find()
                          .populate('seances')
   res.send( film )  ; 
}) ;
router.get('/:id', async (req,res)=>{
    let film =await Film.findById(req.params.id)        
                            .populate('seances') ;                
    if(!film)
        return res.status(404).send('id not found')
    res.send(film);
});

router.post('/' ,async  (req ,res)=> { 
let validation = validation_film(req.body) ; 
if(validation.error )
        return res.status(400).send(validation.error.details[0].message ) ; 
 let film = new Film ({ 
     ...req.body
 }) ; 
 film = film.save()
            
 .then(film => res.status(201).send(film) )  
 .catch(error => res.status(400).json({error}))  ; 
}) ; 

router.put('/:id', async (req,res)=>{
    let validation = validation_film_update(req.body) ; 
    if(validation.error )
         return res.status(400).send(validation.error.details[0].message ) ;
    let film =await Film.updateOne({_id:req.params.id} , { ...req.body})
    if(!film) 
        return res.status(404).send('id not found')
    film = await Film.findById(req.params.id);
    res.send(film) ; 
}) ;

router.delete('/:id', async (req,res)=>{
    let film =await Film.findById(req.params.id);
    if(!film)
        return res.status(404).send('id not found')
    await Film.deleteOne({_id:req.params.id})
    res.send(film);
});

module.exports = router  ; 