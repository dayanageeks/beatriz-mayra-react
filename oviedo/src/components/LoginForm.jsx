import react, { useState, useContext } from 'react'
import { useForm, useFormContext } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Auth/Auth";


const LoginForm = () => {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [error, setError] = useState("");
    console.log(login)
    const { register, handleSubmit,
        formState: { errors, isValid } } = useForm({ mode: "onChange" });

    const onSubmit = (formdata) => {
        console.log(JSON.stringify(formdata))
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formdata)

        };
        fetch("users/login", requestOptions)
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                console.log(res.data.token)
                login(res.data.token);
                if (res.error === null) {
                    navigate("/home");
                    localStorage.setItem("token", res.data.token)
                }
                else {
                    setError(res.error)
                }
            });
    }

    return (<>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <p>Email</p>
                <input type="text" name="email" placeholder="Email" {...register('email', {
                    required: 'Debes resgitrar un email',
                }
                )} />
            </label>

            <label>
                <p>Password</p>
                <input type="text" name="password" placeholder="Password" {...register('password', {
                    required: 'Debes registrarte con una contraseña',
                    pattern: {
                        // value: /^[0-9a-zA-Z]{6,16}$/,
                        message: 'La contraseña necesita letras y números de al menos 6 caracteres',
                    }
                }
                )} />
            </label>
            <button disabled={!isValid}>Enviar</button>
            <br></br>
        </form>
        <p>{error ? error : null}</p>
    </>
    )
}
export default LoginForm