const path=require('path');

const rootDir=require('../util/path');

exports.getContactus=(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','contactus.html'))
};

exports.postcontactus=(req,res,next)=>{
    res.redirect('/success');
};