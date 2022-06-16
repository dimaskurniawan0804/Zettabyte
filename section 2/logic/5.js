/**
 * Direction
 * Divide students to all of groups & students must sorted by first name
 * 
 * Expected Result
 * [
 *   [
 *     { "firstName": "Belle", "lastName": "Norton" },
 *     { "firstName": "Finnley", "lastName": "Rennie" }
 *   ],
 *   [
 *     { "firstName": "Kai", "lastName": "Lyons" },
 *     { "firstName": "Peyton", "lastName": "Gardner" }
 *   ],
 *   [{ "firstName": "Tatiana", "lastName": "Dickerson" }]
 * ]
 */
const students = [
    { firstName: 'Kai', lastName: 'Lyons' },
    { firstName: 'Belle', lastName: 'Norton' },
    { firstName: 'Finnley', lastName: 'Rennie' },
    { firstName: 'Tatiana', lastName: 'Dickerson' },
    { firstName: 'Peyton', lastName: 'Gardner' },
];

const groups = 3;

function result(students, groups) {
    // your code here
    const studentsLength = students.length;
    const remainder = studentsLength % groups;
    const sortStudents = students.sort((a, b) => { return a.firstName > b.firstName ? 1 : -1 });
    let counter = 0
    const result = [];
    let group = [];

    for (let i = 0; i < sortStudents.length; i++) {
        group.push(sortStudents[i])
        counter++
        if (counter === remainder) {
            counter = 0
            result.push(group)
            group = []
        }
    }
    result.push(group)

    return result;
}

console.log(result(students, groups));