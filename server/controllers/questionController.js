const fs = require("fs");

const getQuestions = (req, res) => {
    fs.readFile("./data/questions.json", "utf-8", (err, jsonString) => {
        if(err){
            console.log(err);
        }else{
            try {
                res.send(JSON.parse(jsonString));
            } catch (error) {
                console.log(error);
            }
        }
    })
  };

module.exports = { getQuestions };