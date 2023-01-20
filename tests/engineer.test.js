const Engineer = require("../lib/engineer")

const testEngineer = new Engineer("Lebron",23,'lbj@nba.com','lebron@github.com')

test("Should have a github account", ()=> {
    const result = testEngineer.github
    expect(result).toBe('lebron@github.com')
})
test("Should throw an error if asked for officenum",()=> {
    const result = testEngineer.officenum
    expect(result).not.toBe(true)
})