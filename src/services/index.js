import todoApi from "./apis/todo.api";
import { userApi } from "./apis/user.api";
import './axios.instance'
export default {
    todoList: todoApi,
    user: userApi
}