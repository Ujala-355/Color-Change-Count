const BlackButton=({onColorChange})=>{
    const handleClick = () => {
        onColorChange('black');
    };
    return(
        <>
            <div className="col blackBox">
                <button className="colorButton blackButton" onClick={handleClick}>Black</button>
            </div>
        </>
    )
}
export default BlackButton;
