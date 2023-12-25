const mongoose = require('mongoose')
// skills schema
const SkillsSchema = mongoose.Schema(
    {
      name: String,
    },
    { versionKey: false }
  );
  
  // skills model
  const SkillsModel = mongoose.model("skills", SkillsSchema);
  
  module.exports = {
    SkillsModel,
  };
  