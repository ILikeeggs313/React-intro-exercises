const App = () => {
    return(
        <div>
           <FirstComponent /> 
           <NameComponent name = "An" /> 
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
