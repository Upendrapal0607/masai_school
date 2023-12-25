const mongoose = require("mongoose");

// developer (Onboarding) schema

const DeveloperSchema = mongoose.Schema(
  {
    full_name: {
      type: String,
    },
    first_name: {
      type: String,
      
    },
    last_name: {
      type: String,
      
    },
    phone_number: {
      type: String,
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    skills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "skills",
      },
    ],
    professional_experience: [
      {
        company_name: { type: String },
        tech_stack: String,
        skills_used: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "skills",
          },
        ],
        time_period: { type: Number, default: 0 },
      },
    ],
    educational_experience: [
      {
        degree_name: { type: String },
        school_name: { type: String,default:"", require: true },
        time_period: { type: Number, default: 0, require: true },
      },
    ],
  },
  { versionKey: false }
);

// developer (Onboarding) model

const DeveloperModel = mongoose.model("DeveloperData", DeveloperSchema);
module.exports = {
  DeveloperModel,
};
