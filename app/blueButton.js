const BlueButton=({onColorChange})=>{
    const handleClick = () => {
        onColorChange('blue');
    };
    return(
        <>
            <div className="col blueBox">
                <button className="colorButton blueButton" onClick={handleClick}>Blue</button>
            </div>
        </>
    )
}
export default BlueButton;
