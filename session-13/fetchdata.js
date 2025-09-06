// const baseURL = 'https://jsonplaceholder.typicode.com/users/1';

// const fetchData = () => {
//     fetch(baseURL)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
//     })
// }

// fetchData();

const getTodo = ()=> {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching todo:', error);
    })
}

getTodo();