import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
    const initialState = {
        name: "",
        email: "",
      };

  //ESTADOS DEL COMPONENTE
  //estado del formulario
  const [data, setData] = useState(initialState);
  //estado del botón disabled
  const [btnDisabled, setBtnDisabled] = useState(true);
  //estado del mensaje de validación
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); //inicializamos navigate

// FUNCIONES
    const handleInputChange = (event) => {
       // console.log(event.target.name); //nombre del input en el que escribo
       // console.log(event.target.value); //lo que escribo
        if (data.name.length < 3) {
            setMessage("Name must be at least 3 characters");
            setBtnDisabled(true);
          } else {
            setMessage(null);
            setBtnDisabled(false);
          }
        setData({
          ...data, //para que no borre los valores que ya había
          [event.target.name]: event.target.value,
        });
      };

      //funcion que limpia el formulario
  const clearForm = () => {
    setData(initialState);
  };

      const handleSubmit = (e) => {
        e.preventDefault();
        //acciones formularios
        console.log("Datos formulario", data);
        localStorage.setItem("user", JSON.stringify(data))
        //limpiamos formulario
        clearForm(); //necesitamos el value en el input para poder modificar el status
        setMessage("Formulario enviado con éxito");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      };

    return (
        <div>
             <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={handleInputChange}
        name="name"
        value={data.name} //value conecta nuestro input con el estado. Nos permitira hacer el clear
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleInputChange}
        name="email"
        value={data.email}
      />
   <button disabled={btnDisabled} type="submit">
          Enviar
        </button>      {message}

</form>
        </div>
    );
  };
  
 

export default Contact

