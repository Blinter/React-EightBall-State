import './EightBall.css'
import { useState } from 'react'
import PropTypes from 'prop-types';

function EightBall({ database }) {
    const [msg, setMsg] = useState("Think of a question");
    const [color, setColor] = useState("black");

    const getRandom = () =>
        database[Math.floor(Math.random() * database.length)];

    function handleClick() {
        const { msg, color } = getRandom();
        setMsg(msg);
        setColor(color);
    }

    return (
        <button style={{ backgroundColor: color }} className="eightBall" onClick={handleClick}>
            <span>{msg}</span>
        </button>
    )
}

EightBall.propTypes = {
    database: PropTypes.arrayOf(
        PropTypes.shape({
            msg: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export { EightBall }