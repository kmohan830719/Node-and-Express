
const express= require('express');
const path=require('path');
const bodyPrser=require('body-parser');
const app=express();

const adminRoutes=require('./routers/admin');
const shopRoutes=require('./routers/shop');
const contactUsRouter=require('./routers/contact')
const successMsg=require('./routers/success');
const errorController = require('./controllers/404error')

app.use(bodyPrser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactUsRouter);
app.use(successMsg);

app.use(errorController.get404Error);

app.listen(4000);