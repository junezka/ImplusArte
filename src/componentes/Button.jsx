import { useState } from "react"
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Button (){

    const[suscribete, setSuscribete]= useState (false)

    return(
        <>
        <button onClick={()=> {
            toast.success("Felicidades, Ya estas inscrito")
            setSuscribete(!suscribete)
        } }>
            {
                suscribete ? "Ya Comenzaste" :
                "Comienza"
            }
        </button>
        <ToastContainer/>
        
        </>
        
    )
    
}
export default Button