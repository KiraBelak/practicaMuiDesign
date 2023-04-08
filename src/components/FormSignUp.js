import Button from "@mui/material/Button";
import { TextField, Switch, FormGroup, FormControlLabel } from "@mui/material";
import { useState } from "react";
// import { useEffect } from "react";


function FormSignUp(proprs) {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [promotions, setPromotions] = useState(true);
    const [news, setNews] = useState(true);
    const [error, setError] = useState({
        name: {
            error: false,
            message: "Deben ser almenos 3 caracteres",
        }
    })

    function validate() {
        const error = {};
        if (name.length < 3) {
            error.name = {
                error: true,
                message: "Deben ser almenos 3 caracteres",
            }
        }else{
            error.name = {
                error: false,
                message: "Deben ser almenos 3 caracteres",
            }
        }
        setError(error);
    }

    // useEffect(() => {
    //     console.log({name, lastName, email,});
    // }
    // , [name, lastName, email,]);
  return (
    <form onSubmit={(e)=>{
        e.preventDefault();
        proprs.handleSubmit({name, lastName, email, promotions, news});
    }
    
    }>
      <TextField
        id="name"
        fullWidth
        label="Nombre"
        variant="outlined"
        margin="normal"
        value={name}
        onBlur={validate}
        error={error.name.error}
        helperText={error.name.error? error.name.message: ""}
        onChange={(e) => {
            setName(e.target.value);
        }
        }
      />
      <TextField
        id="lastName"
        fullWidth
        label="Apellidos"
        variant="outlined"
        margin="normal"
        value={lastName}
        onChange={(e) => {
            setLastName(e.target.value);
        }
        }
      />
      <TextField
        id="email"
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        value={email}
        onChange={(e) => {
            setEmail(e.target.value);
        }
        }
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={promotions} onChange={(e)=>{setPromotions(!promotions)}}  />}
          label="Promociones"
        />
      </FormGroup>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={news} onChange={(e)=>{setNews(!news)}} />}
          label="Novedades"
        />
      </FormGroup>
      <Button variant="contained" type="submit">Registrarse</Button>
    </form>
  );
}

export default FormSignUp;
