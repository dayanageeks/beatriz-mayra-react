import react from 'react';
import { useForm, useFormContext } from 'react-hook-form'
import { useNavigate } from "react-router-dom";

// Styles
import { Button } from 'reactstrap';

const CrearUsuario = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });

    const onSubmit = (formdata) => {
        const requestOptions = {

            method: "POST",
            headers: { "Content-Type": "application/json", "auth-token": localStorage.getItem("token") },
            body: JSON.stringify(formdata),

        };
        fetch("/users", requestOptions).then((res) => res.json()).then((res) => {

            navigate("/ListaUsuarios");
        });
    };
    return (
        <body>
            <div className="container">
                <br></br>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group">
                        <label>
                            Nombre
                            <input className="form-control" name="name" type="text" placeholder="Nombre" {...register('name', {
                                required: 'Debes introducir un nombre'
                            }
                            )} />
                        </label>
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>
                            Email
                            <input className="form-control" name="email" placeholder="Email" {...register('email', {
                                required: 'Debes resgitrar un email',
                            }
                            )} />
                        </label>
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>
                            Rol
                            <select className="form-control" id="option" placeholder="Rol" {...register('role', {
                                required: 'Debes introducir un rol',
                            }
                            )}>
                                <option></option>
                                <option value="1">Administrativo</option>
                                <option value="2">Profesor</option>
                                <option value="3">Economico</option>
                            </select>
                        </label>
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>
                            Password
                            <input className="form-control" type="password" name="password" placeholder="Password" {...register('password', {
                                required: 'Debes registrarte con una contraseña',
                                pattern: {
                                    value: /^[0-9a-zA-Z]{6,16}$/,
                                    message: 'La contraseña necesita letras y números de al menos 6 caracteres',
                                }
                            }
                            )} />
                        </label>
                    </div>
                    <br></br>

                    <Button color="success" type="submit" disabled={!isValid}>Crear</Button>

                </form>
            </div>
        </body>

    )
}
export default CrearUsuario;