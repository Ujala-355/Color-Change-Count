const PinkButton = ({ onColorChange }) => {
    const handleClick = () => {
        onColorChange('pink');
    };
    return (
        <div className="col pinkBox">
            <button className="colorButton pinkButton" onClick={handleClick}>Pink</button>
        </div>
    );
};

export default PinkButton;

