const express = require("express");
const hbs = require("hbs");
const app = express();
// app.use(express.static("./public"));

app.set("view engine", hbs);

app.use(
  (date = (req, res, next) => {
    let hour = new Date().getHours();
    hour > 17 || hour < 16
      ? res.send("<h1> Our office is not open now</h1>")
      : next();
  })
);

app.get("/home", function(req, res) {
  res.render("index.hbs", { Document: "home" });
});
app.get("/our-services", function(req, res) {
  res.render("index.hbs", { Document: "our services" });
});
app.get("/contact", function(req, res) {
  res.render("index.hbs", { Document: "contact" });
});

// app.get("/home",function(req,res){
//     res.sendFile(__dirname+"/home.html")
// })app.get("/our-services",function(req,res){
//     res.sendFile(__dirname+"/our-services.html")
// })app.get("/contact",function(req,res){
//     res.sendFile(__dirname+"/contact.html")
// })

app.listen(3000, err => {
  if (err) console.log("server is not running");
  else console.log("server is running on port 3000");
});

// app.listen(3000);
// console.log("localhost:3000");
// app.get('/home' ,(req,res)=>{
//     res.sendFile(__dirname + '/public/home.html')
//     })
// app.get('/ourservices' ,(req,res)=>{
//     res.sendFile(__dirname + '/public/ourservices.html')
//     })
// app.get('/contact' ,(req,res)=>{
//     res.sendFile(__dirname + '/public/contact.html')
//     })

// app.listen(3000, (err) => {
//     if(err) console.log("server is not running")
//     else console.log("server is running on port 3000")
// })
