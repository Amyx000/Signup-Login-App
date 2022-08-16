const express = require("express")
const cors = require("cors")
require ("./config")
const Modelfile = require("./schemamodel")
const app = express();
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.post("/register",async (req, res)=>{
    const {name: inputname, email: inputemail, password: inputpass}=req.body;
    if(await Modelfile.findOne({email: inputemail})){
        res.statusMessage = "Email already exist";
        res.sendStatus(400).end()
    }
    else{
        res.sendStatus(200).end()
        const data = new Modelfile(req.body);
        await data.save();
    }
    
    
});

app.post("/login", async (req, res)=>{
    const {email: inputemail, password: inputpass}=req.body;
    console.log(inputemail);
   
    if (await Modelfile.findOne({email: inputemail}) && await Modelfile.findOne({password: inputpass})){
        res.status(200).end();
        console.log(await Modelfile.findOne({email: inputemail}));
        
        
    }
    else if (await Modelfile.findOne({email: inputemail}) || await Modelfile.findOne({password: inputpass}))
    {
        res.statusMessage = "Invalid details";
        res.status(400).end();
        console.log("Invalid details");
        
    }
    else{

        res.statusMessage = "User not found";
        res.status(400).end();
        console.log("User not found, please register");
       
    }
});


app.get("/data", (req, res)=>{
    Modelfile.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
})

app.listen(5000);
