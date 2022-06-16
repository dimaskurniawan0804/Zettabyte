// Question
// Given a object data, return the data multiple by 3 and sort the data.
// Expected output : { j: 0, k: 9, i: 18, l: 36 }

const data = { i: 6, j: null, k: 3, l: 12 };

function result(data) {

    let sortable = [];
    for (let key in data) {
        sortable.push([key, data[key] * 3]);
    }

    sortable.sort(function (a, b) {
        return a[1] - b[1];
    });

    let result = {};
    sortable.forEach(function (item) {
        result[item[0]] = item[1];
    })

    return (result);
}

console.log(result(data));