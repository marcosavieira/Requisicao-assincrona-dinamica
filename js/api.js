const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/todos/1',
  timeout: 1000,
  headers: { 'Content-Type': 'Application/json' }
});