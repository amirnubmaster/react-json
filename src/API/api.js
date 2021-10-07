export const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const API = {
    getData: (route) =>{
        return fetch(`${BASE_URL}/${route}`)
    }
}