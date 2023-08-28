import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const apiUrl = process.env.REACT_APP_API_URL;


export function Login() {

    interface User {
        username: string;
        password: string;
      }

    let navigate = useNavigate()

    const initialValues : User = {
        username: "",
        password: "",
    }

    const onSubmitA = (data: User) => {
        axios.post(`${apiUrl}/announcements`, data).then((response) => {
          navigate("/events");
        });
      };


    const validationSchemaA = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
        
    })

    return (
        <div className="login-page h-full w-screen flex flex-col items-center justify-center font-oswald">
            <div className='login-header w-full bg-slate-700 flex justify-center md:justify-start text-center'>
                <div className='login-text-container mt-36 mb-4 md:ml-32'>
                    <h1 className='text-6xl text-white'>
                        LOGIN
                    </h1>
                </div>
            </div>
            <div className="login-container w-3/4 md:w-1/3 my-16 p-8 text-center border-4 border-slate-800">
                <Formik initialValues = {initialValues} onSubmit = {onSubmitA} validationSchema = {validationSchemaA}>
                    <Form className="formContainer flex flex-col">
                        <label className="text-3xl mb-2"> Username: </label>
                        <ErrorMessage name = "username" component="span"/>
                        <Field id="inputLogin" name="username" className="border-2 p-2 mb-4"/>

                        <label className="text-3xl mb-2"> Password: </label>
                        <ErrorMessage name = "password" component="span"/>
                        <Field id="inputLogin" name="password" className="border-2 p-2 mb-4"/>

                        <button type = "submit" className="mt-4 px-4 py-2 text-white bg-slate-800 font-semibold hover:bg-opacity-75 transition duration-200"> Log in </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
    
}
