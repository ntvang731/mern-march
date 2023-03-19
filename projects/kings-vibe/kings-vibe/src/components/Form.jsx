import React, {useState} from 'react';

const Form = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [minutes, setMinutes] = useState(0);
    const [points, setPoints] = useState(0);
    const [rebounds, setRebounds] = useState(0);
    const [assists, setAssists] = useState(0);
    const [steals, setSteals] = useState(0);
    const [blocks, setBlocks] = useState(0);
    const [turnovers, setTurnovers] = useState(0);
    const [game, setGame] = useState('');
    const [date, setDate] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [positionError, setPositionError] = useState('');
    const [minutesError, setMinutesError] = useState('');
    const [pointsError, setPointsError] = useState('');
    const [reboundsError, setReboundsError] = useState('');
    const [assistsError, setAssistsError] = useState('');
    const [stealsError, setStealsError] = useState('');
    const [blocksError, setBlocksError] = useState('');
    const [turnoversError, setTurnoversError] = useState('');
    const [gameError, setGameError] = useState('');
    const [dateError, setDateError] = useState('');

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setFirstNameError('First name must be at least 2 characters')
        } else {
            setFirstNameError('');
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 2) {
            setLastNameError('Last name must be at least 2 characters')
        } else {
            setLastNameError('');
        }
    }
    const handlePosition = (e) => {
        setPosition(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 5) {
            setPositionError('Position must be at least 5 character')
        } else {
            setPositionError('');
        }
    }
    const handleMinutes = (e) => {
        setMinutes(e.target.value);
        if(e.target.value < 0) {
            setMinutesError('Minutes must be at least 0')
        } else {
            setMinutesError('');
        }
    }
    const handlePoints = (e) => {
        setPoints(e.target.value);
        if(e.target.value < 0) {
            setPointsError('Points must be at least 0')
        } else {
            setPointsError('');
        }
    }
    const handleRebounds = (e) => {
        setRebounds(e.target.value);
        if(e.target.value < 0) {
            setReboundsError('Rebounds must be at least 0')
        } else {
            setReboundsError('');
        }
    }
    const handleAssists = (e) => {
        setAssists(e.target.value);
        if(e.target.value < 0) {
            setAssistsError('Assists must be at least 0')
        } else {
            setAssistsError('');
        }
    }
    const handleSteals = (e) => {
        setSteals(e.target.value);
        if(e.target.value < 0) {
            setStealsError('Steals must be at least 0')
        } else {
            setStealsError('');
        }
    }
    const handleBlocks = (e) => {
        setBlocks(e.target.value);
        if(e.target.value < 0) {
            setBlocksError('Blocks must be at least 0')
        } else {
            setBlocksError('');
        }
    }
    const handleTurnovers = (e) => {
        setTurnovers(e.target.value);
        if(e.target.value < 0) {
            setTurnoversError('Turnovers must be at least 0')
        } else {
            setTurnoversError('');
        }
    }
    const handleGame = (e) => {
        setGame(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 3) {
            setGameError('Game must be at least 3 characters')
        } else {
            setGameError('');
        }
    }
    const handleDate = (e) => {
        setDate(e.target.value);
        if(e.target.value.length > 0 && e.target.value.length < 8) {
            setDateError('Date must be at least 8 characters')
        } else {
            setDateError('');
        }
    }

    return(
        <div>
            <form>
                <div className="formContainer">
                    <div className="labelInput">
                        <label>First Name</label>
                        <input type="text" name="firstName" onChange={handleFirstName}/>
                    </div>
                    <div className="errors">
                        {firstNameError ? <p>{firstNameError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Last Name</label>
                        <input type="text" name="lastName" onChange={handleLastName}/>
                    </div>
                    <div className="errors">
                        {lastNameError ? <p>{lastNameError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Position</label>
                        <input type="text" name="position" onChange={handlePosition}/>
                    </div>
                    <div className="errors">
                        {positionError ? <p>{positionError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Minutes</label>
                        <input type="text" name="minutes" onChange={handleMinutes}/>
                    </div>
                    <div className="errors">
                        {minutesError ? <p>{minutesError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Points</label>
                        <input type="text" name="points" onChange={handlePoints}/>
                    </div>
                    <div className="errors">
                        {pointsError ? <p>{pointsError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Rebounds</label>
                        <input type="text" name="rebounds" onChange={handleRebounds}/>
                    </div>
                    <div className="errors">
                        {reboundsError ? <p>{reboundsError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Assists</label>
                        <input type="text" name="assists" onChange={handleAssists}/>
                    </div>
                    <div className="errors">
                        {assistsError ? <p>{assistsError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Steals</label>
                        <input type="text" name="steals" onChange={handleSteals}/>
                    </div>
                    <div className="errors">
                        {stealsError ? <p>{stealsError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Blocks</label>
                        <input type="text" name="blocks" onChange={handleBlocks}/>
                    </div>
                    <div className="errors">
                        {blocksError ? <p>{blocksError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Turnovers</label>
                        <input type="text" name="turnovers" onChange={handleTurnovers}/>
                    </div>
                    <div className="errors">
                        {turnoversError ? <p>{turnoversError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Game</label>
                        <input type="text" name="game" onChange={handleGame}/>
                    </div>
                    <div className="errors">
                        {gameError ? <p>{gameError}</p> : ""}
                    </div>
                    <div className="labelInput">
                        <label>Date</label>
                        <input type="text" name="date" onChange={handleDate}/>
                    </div>
                    <div className="errors">
                        {dateError ? <p>{dateError}</p> : ""}
                    </div>
                </div>
            </form>
            <div>
                <h2>Player Stats</h2>
                <h3>{firstName} {lastName} | {position} | {game} | {date}</h3>
                <table>
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
                        <td>{minutes}</td>
                        <td>{points}</td>
                        <td>{rebounds}</td>
                        <td>{assists}</td>
                        <td>{steals}</td>
                        <td>{blocks}</td>
                        <td>{turnovers}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}
export default Form;