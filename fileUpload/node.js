var Express = require('express');
 var multer = require('multer');
 var bodyParser = require('body-parser');
 var app = Express();
 app.use(bodyParser.json());



 var Storage = multer.diskStorage({
     destination: function(req, file, callback) {
         callback(null, "./Images");
         
     },
     filename: function(req, file, callback) {
         callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
        // console.log(file);
     }
     
 });

 
function f1(){
console.log(Storage.filename);
}





 var upload = multer({
     storage: Storage
 }).array("imgUploader", 3); //Field name and max count



 app.get("/", function(req, res) {
     res.sendFile(__dirname + "/src/app/upload/upload.component.html");
 });


 app.post("/api/Upload", function(req, res) {
     upload(req, res, function(err) {
         if (err) {
             return res.end("Something went wrong!");
         }
         //console.log(Storage.filename);
         return res.end("jagdfjg"+Storage.filename);
         
 });
 });

app.post("/submit",function(req,res){
        console.log(Storage.filename);
})


 app.listen(8000, function(a) {
     console.log("Listening to port 8000");
 })