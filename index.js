const express = require("express");
const app = express();
const multer = require("multer")
const path = require("path")
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, 'file')
    },
    filename: (req,file,cb)=>{
        console.log(file)
        cb(null, file.originalname)
    }
})
const upload = multer({
    storage: storage
})
app.set("view engine", "ejs");
app.get("/", (req,res)=>{
    res.render("upload")
})

app.post("/", upload.single("file"), (req,res)=>{
    res.redirect('/');
})
app.listen(3000)