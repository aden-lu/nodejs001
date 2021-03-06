var Sequelize = require('sequelize');
var DataTypes = Sequelize.DataTypes;
var Promise = Sequelize.Promise;
var url = "postgres://postgres:admin@localhost:5432/test";
//var sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
var sequelize = new Sequelize(url
    // , {schema: "alu"}
);

var User = sequelize.define('User', {username: DataTypes.STRING});
var Task = sequelize.define('Task', {title: DataTypes.STRING, active: DataTypes.BOOLEAN});
var Label = sequelize.define("Label", {title: DataTypes.STRING, 'isActive': DataTypes.BOOLEAN});

User.belongsToMany(Task, {through: "UserTasks"});
Task.belongsToMany(User, {through: "UserTasks"});

Task.hasMany(Label);
Label.belongsTo(Task);

// Task.sync({force: true}).then(function () {
//     User.sync({force: true});
// })

sequelize.sync({force: true}).then(function () {
    console.log('Table created!');
    return Promise.all([
        User.create({username: "John"}),
        Task.create({title: "Get rick", active: true}),
        Task.create({title: "Die trying", active: false})
    ]);
}).spread(function (john, task1, task2) {
    console.log(JSON.stringify(john));
    console.log(JSON.stringify(task1));
    console.log(JSON.stringify(task2));
    tasks = [task1, task2];
    return john.setTasks(tasks);
}).spread(function (data) {
    // User.find({where: {username: 'John'}}).then(function (john) {
    //     console.log(JSON.stringify(john))
    //     return john.getTasks({
    //         where: {
    //             active: true
    //         }
    //     });// execute innerjoin sql with UserTasks ;
    // }).then(function (tasks) {
    //     console.log(JSON.stringify(tasks));
    // });

    User.find({
        where: {username: 'John'},
        include: [{
            model: Task, required: false,
            where: {active: true},
            include: [{model: Label, required: false, where: {isActive: false}}]
        }]
    }).then(function (john) {
        console.log(JSON.stringify(john));
    });
});


