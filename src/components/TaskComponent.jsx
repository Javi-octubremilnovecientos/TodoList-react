import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";

export const TaskComponent = ({ name, id, Del, fecha, setFecha,prioridad,setPriority }) => {
  
  const [completed, setcompleted] = useState(false);

  const [isDisabled, setisDisabled] = useState(true);

  const [valor, setvalue] = useState(name);

  const [open, setOpen] = useState(false);

  const [info, setinfo] = useState("");
  
  function addInfo(e) {
    setinfo(e.target.value)
  }

  function check() {
    setcompleted(!completed);
  }

  function setDis() {
    setisDisabled(!isDisabled);
  }

  function setValor(e) {
    setvalue(e.target.value);
  }


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const defaultColor = "grey";
  return (
    <>
      <div className="SingleTaskComp">
        <input
          type="text"
          value={valor}
          disabled={isDisabled ? true : false}
          onChange={(e) => setValor(e)}
        />

        <CircleIcon
          style={{
            fontSize: 19,
            color: 
            prioridad === "alta" ? "red" : 
            prioridad === "media" ? "orange" : 
            prioridad === "baja" ? "green" : defaultColor,
          }}
        />
        <label>{fecha}</label>
        <label>{completed ? "completed" : "uncompleted"}</label>
        <input type="checkbox" onChange={() => check()} />
        <button onClick={() => setDis()}>{isDisabled ? "edit" : "save"}</button>
        <button onClick={handleOpen}>Info</button>
        <button onClick={() => Del(id)}>Del</button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            height: 360,
            width: 300,
            top: "20%",
            left: "17%",
            backgroundColor: "purple",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            bgcolor: "#4c4b4b",
            color: "white",
          }}
        >
          <label>Tarea</label>
          <TextField
            id="standard-basic"
            variant="standard"
            value={valor}
            onChange={(e) => setValor(e)}
          />
          <label>Fecha de ejecución</label>
          <input id="standard-basic" 
          type="date" 
          variant="standard"
          value={fecha}
          onChange={(e)=>setFecha(id, e)} />
          <label>Info. adicional</label>
          <TextField
            id="standard-basic"
            variant="standard"
            value={info}
            onChange={(e) => addInfo(e)}
          />
          <Typography>Prioridad</Typography>
          <Box
            sx={{ display: "flex", justifyContent: "space-around", width: 200 }}
          >
            <label>alta</label>
            <input type="checkbox" name=""
            checked={prioridad == "alta"? true : false} 
            onChange={()=>setPriority(id, "alta")}/>
            <label>Media</label>
            <input type="checkbox" name=""
            checked={prioridad == "media"? true : false}
            onChange={()=>setPriority(id, "media")} />
            <label>baja</label>
            <input type="checkbox" name=""
            checked={prioridad == "baja"? true : false}
            onChange={()=>setPriority(id, "baja")} />
          </Box>
          <Button variant="contained" color="success" onClick={handleClose}>
            Save
          </Button>
        </Box>
      </Modal>
    </>
  );
};
