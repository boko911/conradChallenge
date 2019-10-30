import axios from 'axios';


export function getRepos(query) {
    return async dispatch => {
        try {
            return await axios.get('http://localhost:5000/api/search/'+query)
                .then((response) => {
                    dispatch(showRepos(response));
                })
        }
        catch (error){
            return (console.log(error))
        }
    }
}

export function showRepos(response) {
    return {
        type: "SHOW_REPOS",
        response
    }
}

export function showBookmarks(response) {
    return{
        type: "SHOW_BOOKMARKS",
        response
    }
}

export function showList() {
    return{
        type: "SHOW_LIST"
    }
}

export  function addBookmark(payload) {
        return  async () => { 
            try {
                return await axios.post('http://localhost:5000/api/bookmark/add', payload)
                    .then(() => console.log("Bookmark added"))
            }
            catch (error) {
                console.log(error);
            }
    }
}

export  function addBookmark_react(payload) {
    return {
        type : "ADD_BOOKMARK",
        payload
    }
}



export  function getBookmarks(){
    return async dispatch => {
        try {
            return await axios.get('http://localhost:5000/api/bookmark/show')
                .then((response) => {
                    dispatch(showBookmarks(response));
                })
        }
        catch (error){
            console.log(error)
        }
    }
}

export  function deleteBookmark(id) {
    return  async () => {
        try {
            return await axios.get('http://localhost:5000/api/bookmark/delete/'+id)
            .then(() => {
                console.log('BOOKMARK '+id+" has been removed")
            })
        }
        catch (error) {
            console.log(error)
        }
    }      
}

export function deleteBookmark_react(id) {
    return {
        type: "DELETE_BOOKMARK",
        id
    }
}
