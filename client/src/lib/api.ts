import axios from 'axios'
import { Todo } from '../types/todo'

const BASE_URL = "http://localhost:3001/api"
const axiosInstance = axios.create({ baseURL: BASE_URL })

export const getTodosIds = async () => {
    return (await (axiosInstance.get<Todo[]>('todos'))).data.map((todo) => { todo })
}