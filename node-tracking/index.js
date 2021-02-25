const express = require ('express'); 
const cors = require ('cors');
const TrackingCorreios = require ('tracking-correios');
const app = express();
app.use (cors());


const port = 3001;

const get =(obj, path, fallback = null)=>{
    const pathKeys = (typeof path === 'string') ? path.split('.'): [];
    const result = pathKeys.reduce((value,key) => value && value[key], obj);
    return result || fallback;
}



app.get ('/',(req, res) => {
    const{tracking} = req.query;

    TrackingCorreios.track(tracking)
        .then ((result) =>{

        console.log ('evento', get (result,'0.evento'));      

        res.json({message:'Encomenda do Opressor encontrada',tracking,result});
        }) 
        .catch((error)=>{
        res.json({message: 'Codigo de rastreio do Opressor não encontrado !',error});
        })
});

app.listen (port,() => console.log(`connected ${port}`))