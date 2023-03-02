const Person = (props) => {
    let reply;
    if (props. age < 18){
        reply = "go study!"
    } else {
        reply = "go vote"
    }
    //a map to make a list of hobbies
    const hobbiesList = props.hobbies.map(h => <li> {props.hobby} </li>)
    return(
        <div>
            <ul>
                <li> Name: {props.name} </li>
                <li> Age: {props.age} </li>
                <ul>
                    Hobbies: {hobbiesList}
                </ul>
            </ul>
            <h3> {reply} </h3>
        </div>
    )
}