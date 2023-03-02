const Tweet = (props) => {
    //take in username, name who wrote the tweet, date, message
    return(
        <div>
            <ul>
                <li> Username: </li> {props.username} 
                <li> Name: </li> {props.name}
                <li> Date: </li> {props.date}
                <li> message: </li> {props.message}
            </ul>
        </div>
    )
}