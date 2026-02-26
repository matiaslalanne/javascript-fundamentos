import { Todo } from "../todos/models/todo.model";
const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'      
}
const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del tiempo'),
        new Todo('Piedra del espacio'),
        new Todo('Piedra de la realidad'),
        new Todo('Piedra del poder'),
    ],
    filter: Filters.All

}

const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

const loadStore = ( ) => {
    throw new Error('Not implemented');
}
/**
 * 
 * @param {String} description 
 */

const getTodos = ( filter = Filters.All ) => {
    switch ( filter ) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        default:
            throw new Error(`Option ${ filter } is not valid`);
    }
}

const addTodo = ( description ) => {
    if ( !description ) throw new Error('Description is required');
    state.todos.push( new Todo(description) );      
}

/**
 * 
 * @param {String} todoId 
 */

const toggleTodo = ( todoId ) => {
    throw new Error('Not implemented');
}
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}
const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done );
}

const setFilter = ( newFilter = Filters.All ) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodos,
}
