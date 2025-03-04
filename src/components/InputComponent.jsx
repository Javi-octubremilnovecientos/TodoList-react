


export const InputComponent = ({ InputValue, setValue, addTask}) => {
  

  

  return (
    <div className="InputComp">
      <input type="text" value={InputValue} onChange={setValue} />
      <button onClick={addTask}>+</button>
    
 
    </div>
  );
};
