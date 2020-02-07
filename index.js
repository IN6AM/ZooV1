'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var port = 3800;
var app = require('./app');

mongoose.connect('mongodb://localhost:27017/ZooAM', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Conexión a la BD correcta');
    app.listen(port, ()=>{
        console.log('Express corriendo');
    });
})
.catch(err=>{
    console.log('Error de conexión', err);
});