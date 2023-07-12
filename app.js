
const express= require('express');
const bodyPrser=require('body-parser');
const app=express();

const adminRoutes=require('./routers/admin');
const shopRoutes=require('./routers/shop');

app.use(bodyPrser.urlencoded({extended: false}));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res,next)=>{
    res.status(404).send('<h1>The Page Not Found</h1>');
});

app.listen(4000);