const inquirer = require("inquirer");
const fs = require("fs")
const {Circle, Triangle,Square} = require("./library/shapes")
const SVG = require("./library/svg")


const questions = [
    {
        type:"list",
        message:"What type of shape do you want?",
        name:"shape",
        choices:["Circle", "Triangle", "Square"],
    },
    {
        type:"list",
        message:"Pick a color for the shape.",
        name:"Shape_color",
        choices: ["Yellow", "Blue", "Red"]
    },
    {
        type:"input",
        message:"What letters do you want for the logo?",
        name:"Text",
    },
    {
        type:"list",
        message:"Pick a color for the text.",
        name:"Text_color",
        choices: ["White", "Black", "Red", "Blue"]
    }
]

function init(){
    inquirer.prompt (questions)
    .then(answers => {
        console.log(answers)
        switch(answers.shape){
            case "Circle":
                var myCircle = new Circle();
                myCircle.setColor(answers.Shape_Color);
                generateSVG(myCircle,answers.Text,answers.Text_color);
                break;
            case "Triangle":
                var myTriangle = new Triangle()
                myTriangle.setColor(answers.Shape_Color);
                generateSVG(myTriangle,answers.Text,answers.Text_color);
                break;
            case "Square":
                var mySquare = new Square()
                mySquare.setColor(answers.Shape_Color);
                generateSVG(mySquare,answers.Text,answers.Text_color);
                break;
        }
    })
    }
function generateSVG(shape,text,color){
    const mySVG = new SVG();
    mySVG.setShape(shape)
    mySVG.setText(text,color)
    fs.writeFileSync("logo.svg",mySVG.render(),function(err){
        if(err) throw err;
    })
}

init ()