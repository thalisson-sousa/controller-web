/* eslint-disable react/prop-types */
import './Form.css';
import { Button, TextField } from "@mui/material";
import axios from 'axios';

import { useForm } from "react-hook-form";

export default function Form({ data }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

    const onSubmit = (result) => axios.post('http://localhost:3330/add', result);

    return (
        <>
            <form>
                <TextField id="outlined-basic" label="Mac" variant="outlined" {...register("mac", { required: true })} />
                {errors.exampleRequired && <span>Campo obrigatório!</span>}
                <div className='formInputs'>
                    <TextField id="outlined-basic" label="Regra ACL" variant="outlined" defaultValue={data?.acl} {...register("acl", { required: true })} />
                    {errors.exampleRequired && <span>Campo obrigatório!</span>}

                    <TextField id="outlined-basic" label="Precedence" variant="outlined" defaultValue={data?.precedence} {...register("precedence", { required: true })} />
                    {errors.exampleRequired && <span>Campo obrigatório!</span>}
                </div>
                <Button onClick={handleSubmit(onSubmit)} variant="contained">Adicionar</Button>
            </form>
        </>
    );
}