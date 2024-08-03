const express = require('express')
const productRoutes = require('./routes/productRoute');

const app =  express();
const port = process.env.PORT || 3000;

const server = app.get('/', (req, res)=>{
    res.send('working');
});


app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is khan')
});

app.use('/products', productRoutes);

//error handling
// app.use((req, res, next)=>{
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);
// });
// app.use((req, res, next)=>{
//     res.status(error.status || 500);
//     res.json({
//         error:{
//             message: error.message
//         }
//     });
// });

server.listen(port);
