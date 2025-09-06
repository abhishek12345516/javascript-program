const baseURL = 'https://jsonplaceholder.typicode.com/users/1';


const fetchData = async () => {
    try {
        const response = await fetch(baseURL);
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

fetchData();

const getTodo = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.log(error);
    }
}
getTodo();