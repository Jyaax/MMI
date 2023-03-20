let express = require('express');
let bodyparser = require ('body-parser');
let app=express();
let port=3000;

app.use(express.static(__dirname+'/www'));
app.use('/js',express.static(__dirname+'/node_modules/bootstrap/dist/js'));
app.use('/js',express.static(__dirname+'/node_modules/jquey/dist'));
app.use('/js',express.static(__dirname+'/node_modules/@popperjs/core/dist/umd'));
app.use('/css',express.static(__dirname+'/node_modules/bootstrap/dist/css'));
app.use('/views', express.static(__dirname + '/views'));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.set('view engine', 'ejs');

let myobject={
    nom: "Mon objet",
    valeur: 10
}

app.listen(port,()=>{
    console.log('Le serveur est en route');
    console.log(`Serveur listening at http://localhost:${port}`);
})

app.get('/',(req,res,next)=>{
    res.render('index.ejs', {monobjet : myobject});
})
//page index

app.get('/page2',(req,res,next)=>{
    res.render('page2.ejs');
})

app.post('/page2',(req,res,next)=>{
    console.log(req.body.name);
})

app.get('/accueil',(req,res,next)=>{
    res.sendFile('/www/accueil.html');
})