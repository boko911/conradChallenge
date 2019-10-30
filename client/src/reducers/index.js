let defaultState = {
    data: [],
    bookmarks: [],
    bookmarks_react: [],
    show_search_list: false
}

const mainReducer=(state = defaultState, action) => {
    switch (action.type) {
        case "SHOW_REPOS":
            return Object.assign({}, state, {
                data: action.response.data.items
            });
        case "SHOW_LIST":
            return Object.assign({}, state, {
                show_search_list: true
            });
        case "SHOW_BOOKMARKS":
            return(Object.assign({}, state, {
                bookmarks: action.response.data 
            }));
        case "ADD_BOOKMARK":
            return{
                ...state,
                bookmarks_react: [...state.bookmarks_react, action.payload]
            }
        case "DELETE_BOOKMARK":
            return{
                ...state,
                bookmarks_react: state.bookmarks_react.filter(bookmark => bookmark.id !== action.id)
            }
        default:
            return state;
    } 
}

export default mainReducer; 