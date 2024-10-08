import './Form.css';
import { Button, TextField } from "@mui/material";

export default function Form() {
    return (
        <>
            <form>    
                <TextField id="outlined-basic" label="Mac" variant="outlined" />
                <TextField id="outlined-basic" label="Regra ACL" variant="outlined" />
                <Button variant="contained">Adicionar</Button>
            </form>
        </>
    );
}