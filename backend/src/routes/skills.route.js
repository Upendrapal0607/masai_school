const express = require("express");
const { SkillsModel } = require("../models/skills.model");

const SkillsRoute = express.Router();

SkillsRoute.get("/",async(req,res)=>{
    try {
        const AllSkills = await SkillsModel.find();
        res.status(201).json({AllSkills})
    } catch (error) {
        res.status(404).json({message:error})
    }
})

module.exports = {
    SkillsRoute
}