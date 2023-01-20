const Manager = require("../lib/manager")

const testManager = new Manager("testName",'testID','testEmail',123)

test("Should contain office number", ()=> {
    expect(testManager.officenum).toBe(123)
})
test("Should return role name after calling getRole() function", ()=> {
    const result = testManager.getRole()
    expect(result).toBe('Manager')
})