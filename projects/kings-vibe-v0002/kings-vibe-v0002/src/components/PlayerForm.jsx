import React, {useState} from 'react';

const PlayerForm = () => {

    const [player, setPlayer] = useState({
        firstName:'',
        lastName:'',
        position:'',
        minutes: 0,
        points: 0,
        rebounds: 0,
        assists: 0,
        steals: 0,
        blocks: 0,
        turnovers: 0,
        game:'',
        date:''
    })

    const [playerList, setPlayerList] = useState([]);
    const [formError, setFormError] = useState();

    const runValidations = () => {
        let isValid = true;
        if (player.firstName === '' || player.lastName === '' || player.position === '' || player.minutes === '' ||
            player.points === '' || player.rebounds === '' || player.assists === '' || player.steals === '' ||
            player.blocks === '' || player.turnovers === '' || player.game === '' || player.date === '') {
                console.log('All data fields required')
                isValid = false
                setFormError(false);
                console.log(formError)
                return isValid
            } else {
                return isValid
            }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = runValidations();
        if (isValid){
            console.log(isValid)
            // setPlayerList([...playerList, player]);
            setPlayerList(prevState => ([...prevState, player]))
            // resets the State to default values after State had been set (i.e. setPlayerList)
            setPlayer({
                firstName:'',
                lastName:'',
                position:'',
                minutes: 0,
                points: 0,
                rebounds: 0,
                assists: 0,
                steals: 0,
                blocks: 0,
                turnovers: 0,
                game:'',
                date:''
            })
            // clear user input from form fields
            document.getElementById('playerForm').reset();
            setFormError();
        } else {
            return isValid
        }
    }

    const handleOnChange = (e) => {
        // spread operator to grab all attributes from player object (i.e. firstName, lastName, etc.)
        // [e.traget.name] --> name is a keyword that points to each key of the object player in State
        // [e.target.value] --> value is a keyword that points to each value of the object player in State
        //setPlayer({...player, [e.target.name]: e.target.value})

        // prevState version of above setPlayer function call to access most updated State status
        // either function call is fine but prevState works 100% of the time; non prevState works in most cases
        // prevState still points to player State object
        // 1. access the most up to date State of player object which is a dictionary (prevState =>)
        // 2. spread all the key value pairs of said object in a new dictionary object denoted by the curly braces {} (...prevState,)
        // 3. then add to this new dictionary object each new key value pair [e.target.name]: e.target.value
        // where e.target.name represents the key and e.target.value represents the value
        setPlayer(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    return(
        <div>
            <form id="playerForm" onSubmit={handleSubmit}>
                <h2>Player Form</h2>
                <div className="errors">
                    {formError === false ? <p>All data fields required</p> : null}
                </div>
                <div className="formContainer">
                    <div className="labelInput">
                        <label>First Name</label>
                        <input type="text" name="firstName" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.firstName.length < 2 ? <p>First name must be at least 2 characters</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Last Name</label>
                        <input type="text" name="lastName" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.lastName.length < 2 ? <p>Last name must be at least 2 characters</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Position</label>
                        <input type="text" name="position" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.position.length < 5 ? <p>Position must be at least 5 characters</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Minutes</label>
                        <input type="text" name="minutes" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.minutes.length < 3 ? <p>Minutes must be at least 3 characters</p> : null}
                        {player.minutes < 0 ? <p>Minutes cannot be less than 0</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Points</label>
                        <input type="text" name="points" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.points.length < 1 ? <p>Points must be at least 1 character</p> : null}
                        {player.points < 0 ? <p>Points cannot be less than 0</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Rebounds</label>
                        <input type="text" name="rebounds" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.rebounds.length < 1 ? <p>Rebounds must be at least 1 character</p> : null}
                        {player.rebounds < 0 ? <p>Rebounds cannot be less than 0</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Assists</label>
                        <input type="text" name="assists" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.assists.length < 1 ? <p>Assists must be at least 1 character</p> : null}
                        {player.assists < 0 ? <p>Assists cannot be less than 0</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Steals</label>
                        <input type="text" name="steals" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.steals.length < 1 ? <p>Steals must be at least 1 character</p> : null}
                        {player.steals < 0 ? <p>Steals cannot be less than 0</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Blocks</label>
                        <input type="text" name="blocks" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.blocks.length < 1 ? <p>Blocks must be at least 1 character</p> : null}
                        {player.blocks < 0 ? <p>Blocks cannot be less than 0</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Turnovers</label>
                        <input type="text" name="turnovers" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.turnovers.length < 1 ? <p>Turnovers must be at least 1 character</p> : null}
                        {player.turnovers < 0 ? <p>Turnovers cannot be less than 0</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Game</label>
                        <input type="text" name="game" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.game.length < 3 ? <p>Game must be at least 3 character</p> : null}
                    </div>
                    <div className="labelInput">
                        <label>Date</label>
                        <input type="text" name="date" onChange={handleOnChange}/>
                    </div>
                    <div className="errors">
                        {player.date.length < 7 ? <p>Date must be at least 7 characters</p> : null}
                    </div>
                    <div className="addButton">
                        <button>Add Player</button>
                    </div>
                </div>
            </form>
            <div>
                <h2>Player Stats</h2>
                {
                    playerList.map((player, index) => (
                        <div key={index}>
                            <h3>{player.firstName} {player.lastName} | {player.position} | {player.game} | {player.date}</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>MIN</th>
                                        <th>PTS</th>
                                        <th>REB</th>
                                        <th>AST</th>
                                        <th>STL</th>
                                        <th>BLK</th>
                                        <th>TO</th>
                                    </tr>
                                    <tr>
                                        <td>{player.minutes}</td>
                                        <td>{player.points}</td>
                                        <td>{player.rebounds}</td>
                                        <td>{player.assists}</td>
                                        <td>{player.steals}</td>
                                        <td>{player.blocks}</td>
                                        <td>{player.turnovers}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default PlayerForm;