import { http } from 'clients/AxiosRequest'

interface Todo {
    userId?: number;
    id?: number;
    title?: string;
    completed?: boolean;
};

const findTodos = async (): Promise<Todo[]> => { return await http.get<Todo[]>("/todos") }
const findTodo = async (id: number): Promise<Todo> => { return await http.get<Todo>(`/todos/${id}`)}
const deleteTodo = async (id: number): Promise<Todo> => { return await http.delete<Todo>(`/todos/${id}`)}
const postTodo = async (param : Todo): Promise<Todo> => { return await http.post<Todo>('/todos', param) }
const putTodo = async (id: number, param: Todo): Promise<Todo> => { return await http.put<Todo>(`/todos/${id}`, param) }
const patchTodo = async (id: number, param: Todo): Promise<Todo> => { return await http.patch<Todo>(`/todos/${id}`, param) }

export const fetchTodo = {
    findTodos,
    findTodo,
    deleteTodo,
    postTodo,
    putTodo,
    patchTodo
}
