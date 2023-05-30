const express = require("express");
const app = express();
const exp = require("../models/experimentSchema");


const Editexperiment = async (req,res) =>{
    let Experiment = req.body;
    const editexp= new exp(Experiment)

    try{
        await exp.updateOne ({_id:req.params.id},editexp)
        res.status(201).json({editexp,message:"updatesucces"})
    }catch(Error){
        res.status(409).json({message:Error.message})
        console.log(Error)
    }

}

exports.Editexperiment = Editexperiment;


// "name":"btech",
// "duration":4,
// "branches":{
//     "name":"cse",
//     "semesters":{
//         "number":2,
//         "Subjects":{
//            "code":"cs323",
//            "Name":"cse",
//            "introduction":"jdchbjdn",
//            "objective":"djcnchdbhjbjhf",

//            "listofExperiments":{
//                "aim":"hsgdygdhjdbehdj",
//             "procedure":"lcnjbcjrnjendjke"
//            },

//            "targetaudience":"dkjfufjn",
//            "courseAlignment":"kjgnjegjeng"
//         }

//     }
// }