import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CircleIcon from "@mui/icons-material/Circle";

export const TaskComponent = ({ name, id, Del }) => {
  const [completed, setcompleted] = useState(false);

  const [isDisabled, setisDisabled] = useState(true);

  const [valor, setvalue] = useState(name);

  const [open, setOpen] = useState(false);

  const [date, setdate] = useState();

  const [info, setinfo] = useState("");

  const [priority, setpriority] = useState("");

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

  const addDate = (e) => setdate("deadtime " + e.target.value);
  const addInfo = (e) => setinfo(e.target.value);

  function baja() {
    setpriority([]);
  }

  return (
    <div style={{backgroundColor:"green"}}>
      <div className="SingleTaskComp"   style={{backgroundColor:"green"}}>
        <input
          type="text"
          value={valor}
          disabled={isDisabled ? true : false}
          onChange={(e) => setValor(e)}
          multiline
        />

        <CircleIcon
          style={{
            fontSize: 19,
            color:
            priority === "baja"
            ? "green"
            : priority === "media"
            ? "orange"
            : priority === "alta"
            ? "red"
            : "gray",
          }}
        />
        <label>{date}</label>
        <label>{completed ? "completed" : "uncompleted"}</label>
        <input type="checkbox" onChange={() => check()} />
        <button onClick={() => setDis()}>{isDisabled ? "edit" : "save"}</button>
        <button onClick={handleOpen}>Info</button>
        <button onClick={() => Del(id)}>Del</button>
      </div>
      <Modal 
      open={open} 
      onClose={handleClose}>
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
          <input
            id="standard-basic"
            type="date"
            variant="standard"
            value="date"
            onChange={(e) => addDate(e)}
          />
          <label>Info. adicional</label>
          <TextField
            id="standard-basic"
            multiline
            variant="standard"
            value={info}
            onChange={(e) => addInfo(e)}
          />
          <Typography>Prioridad</Typography>
          <Box
            sx={{ display: "flex", justifyContent: "space-around", width: 200 }}
          >
            <label>alta</label>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={()=>setpriority("alta")}
            />
            <label>Media</label>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={()=>setpriority("media")}
            />
            <label>baja</label>
            <input
              type="checkbox"
              name=""
              id=""
              onChange={()=>setpriority("baja")}
            />
          </Box>
          <Button variant="contained" color="success"
          onClick={handleClose}>
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
