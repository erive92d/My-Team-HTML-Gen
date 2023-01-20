const Intern = require("../lib/intern")

const internTest = new Intern("Jordan",23,'jordan@gmail.com','North Carolina')

test("Should provide a school name", ()=> {
    const result = internTest.school
    expect(result).toBe("North Carolina")
})

test("Should throw an error if asked for github",()=> {
    const result = internTest.github
    expect(result).not.toBe(true)
})