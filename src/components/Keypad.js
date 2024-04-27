// Code Keypad Component Here

// function handleChange(e){
//     console.log(`${e.target.name}: ${e.target.value}`);
// }

function Keypad (){
    return (
      <div>
        <form>
          <input
            type="password"
            name="password"
            onChange={() => console.log("Entering password...")}
            // onChange={()=> handleChange()}
          ></input>
        </form>
      </div>
    );
}

export default Keypad;