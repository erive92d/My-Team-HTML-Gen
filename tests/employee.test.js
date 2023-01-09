const Employee = require("../lib/employee");

test("Should create a new Object", () => {
  const newObject = new Employee();
  expect(typeof newObject).toBe("object");
});

test("Should create a name for the new Object", () => {
    const newName = new Employee('testname')
    expect(newName.name).toBe("testname")

});
test("Should get the ID by calling getId() function", ()=> {
    const testVar = new Employee("testname",'testID','testEmail')
   
    expect(testVar.getId()).toBe(console.log("testID"))
})
test("Should return Employee by calling getRole()", () => {
    const testVar = new Employee("testName",'testId','testEmail')
    const callingGetRole = testVar.getRole()
    expect(callingGetRole).toBe("Employee")
})