let person = {
    showData() {
        console.log(this.firstName, this.secondName);
    }
}
person.firstName = 'Ivan';
person.secondName = 'Ivanov';
console.log(person);
person.showData();

let newPerson = Object.assign({}, person);

newPerson.firstName = 'Petro';
newPerson.secondName = 'Petriv';
console.log(newPerson);
person.showData();
newPerson.showData();