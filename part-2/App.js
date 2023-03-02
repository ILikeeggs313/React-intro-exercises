const App = () => {
    return(
        <div>
            <Tweet username = "abc12345" name = "aa" date = {new Date().toDateString()}  
            message = "hi" 
            />
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
