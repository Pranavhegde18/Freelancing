import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const feedSchema = new mongoose.Schema({
    name1: String,
    email1: String,
    mobile: String,
    feedback: String
})

const freelSchema = new mongoose.Schema({
    title: String,
    name2: String,
    mobile: String,
    jobd: String,
    salary: String
})

const User = new mongoose.model("User", userSchema)
const Feedb = mongoose.model("Feedb", feedSchema)
const Freedb = mongoose.model("Freedb",freelSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.send({message: "Login Successfull", user: user})
            } else {
                res.send({ message: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.post("/feedback",(req,res)=> {
    const feedsav= new Feedb(req.body);
    feedsav.save((err)=>{
    if(err){
        res.send({message:"Error occurred"})
    }
    else{
        res.send({message :"Submitted feedback"});
    }
    });
});

// function getUsersByTitle(title, cb) {
//     Freedb.find({'title': title}).toArray(cb);
// }

// app.use(express.json());

// app.post("/freelance",(req,res)=> {
//     const freesav= new Freedb(req.body);
//     Freedb.getUsersByTitle(freesav.title, function(err, data){
//         if (err) {
//             console.log(err);
//             return res(err);
//         } else {
//             console.log("Project Posted!!..");
//             return res.json(data);
//         }
//     });
// });

app.listen(3001,() => {
    console.log("BE started at port 3001")
})