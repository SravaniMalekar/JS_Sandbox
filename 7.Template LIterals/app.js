const person = 'John Doe';
const age = 28;
const city = 'New York';
const job = 'Developer';
let html;

function hello(){
    return 'Heyo!';
}
//Without template strings(es5)
html = '<ul><li>Name ' + person + '</li><li>Age:' + age + '</li><li>Job: '+ job + '</li><li>City:' + city + '</li></ul>';

html = '<ul>' +
'<li>Name: ' +person + '</li>' +
'<li>Age: ' +age + '</li>' +
'<li>Job:' + job + '</li>'+
'<li>City:' + city + '</li>'+
'</ul>';


//With template strings (es6)

html = `
    <ul>
        <li>Name : ${person} </li>
        <li>Age : ${age} </li>
        <li>Job : ${job} </li>
        <li>City : ${city} </li>
        <li> ${4+3} </li>
        <li> ${hello()}</li>
        <li> ${age > 30 ? 'Over 30' : 'Under 30'}</li>

    </ul>
`


document.body.innerHTML = html;