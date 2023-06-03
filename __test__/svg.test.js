const SVG = require("../library/svg")
const { Circle } = require("../library/shapes")
describe("Circle", function () {
    test("rendering the svg element of size 300x300", function () {
        const expectedEl = `<svg width="300" height="300" xmlns="http://wwww.w3.org/2000/svg"></svg>`
        const TestSVG = new SVG()
        const returnShape = TestSVG.render()
        expect(returnShape).toEqual(expectedEl)
    })
    test("Testing rendering SVG element", function () {
        const expectedEl = `<svg width="300" height="300" xmlns="http://wwww.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white"</text></svg>`
        const TestSVG = new SVG()
        TestSVG.setText("white")
        const returnShape = TestSVG.render()
        expect(returnShape).toEqual(expectedEl)
    })
     test("ERROR ERRORER TEXT SHOULD BE LESS THAN 3", function () {
        const expectedEl = new Error("Text must not exceed 3 characters.")
        const hello = new SVG()
        expect(() => hello.setText("HELLO", "#333")).toThrow(expectedEl)
    })
    test("Testing shape element", function () {
        const expectedEl = `<svg width="300" height="300" xmlns="http://wwww.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="red" /></svg>`
        const testCircle = new Circle()
        testCircle.setColor("red")

        const TestSVG = new SVG()
        TestSVG.setShape(testCircle)
        const returnShape = TestSVG.render()
        expect(returnShape).toEqual(expectedEl)
    })
})