const { Square, Triangle, Circle } = require("../library/shapes")
describe("Circle", function () {
    test("rendering the circle", function () {
        const expectedEl = `<circle cx="150" cy="100" r="80" fill="blue" />`
        const testCircle = new Circle()
        testCircle.setColor("blue")
        const returnShape = testCircle.render()
        expect(returnShape).toEqual(expectedEl)

    })
    test("rendering the triangle", function () {
        const expectedEl = `<polygon points="150, 18 244, 182 56, 182" fill="red" />`
        const testTriangle = new Triangle()
        testTriangle.setColor("red")
        const returnShape = testTriangle.render()
        expect(returnShape).toEqual(expectedEl)

    })
    test("rendering the Square", function () {
        const expectedEl = `<rect x="90" y="40" width="120" height="120" fill="yellow" />`
        const testSquare = new Square()
        testSquare.setColor("yellow")
        const returnShape = testSquare.render()
        expect(returnShape).toEqual(expectedEl)

    })
})
