const GreenButton=({onColorChange})=>{
    const handleClick = () => {
        onColorChange('green');
    };
    return(
        <>
            <div className="col greenBox">
                <button className="colorButton greenButton" onClick={handleClick}>Green</button>
            </div>
        </>
    )
}
export default GreenButton;
