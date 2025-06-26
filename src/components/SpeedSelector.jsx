import './SpeedSelector.css'

function SpeedSelector({ speed, setSpeed }) {

    const speeds = [0.5, 0.75, 1, 1.5];

    const handleClick = (s) => {
        if (speed === s) {
            setSpeed(1);
        } else {
            setSpeed(s);
        }
    }

  return (
    <div>
        <div className="speed">
            <p>Speed</p>
            <div className='separator'></div>
            {speeds.map((s) => (
                <button
                key={s}
                className={`speed-btn ${speed === s ? 'active' : ''}`}
                onClick={() =>  handleClick(s)}
                >
                    {s}x
                </button>
            ))}
        </div>
    </div>
  );
}

export default SpeedSelector;