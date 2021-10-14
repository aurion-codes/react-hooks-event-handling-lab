// Code Keypad Component Here

function Keypad(){

    function handleChange(event){
        console.log('Entering password...');
    }

    return (
        
    <input 
            type="password"
            name="search"
            onChange={handleChange}
            placeholder="Entering password..."
    />
    )
    
};

export default Keypad;