const express = require('express');
const app = express();
 

                          //Routing 


// app.get('/', (req, res)=> {
//     res.send("this is from expresss")
// });

// app.get('/contact', (req, res) => {
//     res.send('this is from contact page')
// })


// app.get('/help', (req, res) => {
//     res.send('this is help page')
// })

// app.get('/*', (req, res) => {
//     res.send('404 error')
// })

// app.listen(3000)


                //Middlewares


// app.use((req, res, next) => {
//     console.log('Running Middlewares!!!!')
//     next();
// })


// app.get('/', (req, res)=> {
//     res.send("this is from expresss")
// });

// app.get('/contact', (req, res) => {
//     res.send('this is from contact page')
// })


// app.get('/help', (req, res) => {
//     res.send('this is help page')
// })

// app.listen(3000)

                     //error Handler


// app.get('/', (req, res)=> {
//     res.send("this is from expresss")
// });

// app.get('/contact', (req, res) => {
//     res.send('this is from contact page')
// })


// app.get('/help', (req, res) => {
//     res.send('this is help page')
// })

// app.get('/*',(req, res, next) => {
//     return next(new Error('something went wrong!!'))
// })

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('something broke')
// })

// app.listen(3000)