// TODO: Write code to define and export the Employee class
// //The first class is an Employee parent class with the following properties and methods:

// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() // Returns 'Employee'

class Employee {
    constructor(name, id, email){
        //   * name
        this.name = name;
        //   * id
        this.id = id;
        //   * email
        this.email = email;
    }
      getName() {
        return this.name;
      }
      getId() {
        return this.id;
      }
      getEmail() {
        return this.email;
      }
      getRole() {
        return "Employee";
      }
}
module.exports = Employee;
