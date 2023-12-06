function skillsMember() {
    var member = {
        name: 'John Doe',
        age: 30,
        skills: ['js', 'html', 'css'],
        salary: 1000,
        getSalary: function() {
            return this.salary;
        },
        setSalary: function(salary) {
            this.salary = salary;
        }
    };
    return member;
}