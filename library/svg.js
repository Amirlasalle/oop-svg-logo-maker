class SVG{
    constructor(){
        this.textEl = "";
        this.shapeEl = "";
    }
    render(){
        return`
        <svg width="100" height="100">
        ${this.shapeEl}: ${this.textEl}
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
        `

    }

}

module.exports = SVG;