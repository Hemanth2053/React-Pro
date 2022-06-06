import React from 'react'
import useInput from '../CustonHooks/useInput'

function Form() {

    const initialData = {email:"", password:"",username:"",rememberMe:"false"};

    const {formData, handleChange, setFormData} = useInput(initialData)
    // const [formData, setFormData] = useState(initialData);

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({...formData, [name]: value})
    // }

    // const LoginData = {
    //     username_value : userName,
    //     password_value : password,
    // }

    const convertToChecked = ( name, value ) => ({
        target: {
            name,
            value,
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        
    }


  return (
    <div>
        <form > 
            <input 
            placeholder="username"
            name="email"
            value={formData.email}
            onChange={handleChange}
            ></input>
            <input 
            placeholder="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            ></input>
            <button onClick={handleSubmit}>submit</button>
            <input 
            type="checkbox"
            name="rememberme"
            value={formData.rememberme}
            onChange={(e) => handleChange(convertToChecked(e.target.name, e.target.checked))
            }></input>
        </form>
    </div>
  )
}

export default Form