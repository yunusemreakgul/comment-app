import React, {createContext} from "react"

const CommentContext = createContext()

function CommentContextProvider ({children, data}) {
    return (
        <CommentContext.Provider value={data}>{children}</CommentContext.Provider>
    );
}

function useComment(){
    const context = React.useContext (CommentContext);
    
    if (!context) {
        throw new Error("Error")
    }
    return context;
}

export {useComment, CommentContextProvider};