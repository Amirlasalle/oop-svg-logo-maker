class SVG{
    constructor(){
        this.textEl = "";
        this.shapeEl = "";
    }
    render(){
        return`
        <svg width="300" height="300" xmlns="http://wwww.w3.org/2000/svg">
        ${this.shapeEl} ${this.textEl}
</svg>
        `

    }
    setText(message, color){
        if(message.length > 3){
        console.error("ERROR ERRORER TEXT SHOULD BE LESS THAN 3");
        } 
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}" </text>`
    }
    setShape(shape){
        this.shapeEl = shape.render()
    }

}

module.exports = SVG;