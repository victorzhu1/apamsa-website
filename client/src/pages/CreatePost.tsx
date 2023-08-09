import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const apiUrl = process.env.REACT_APP_API_URL;


export function CreatePost() {

    interface Announcement {
        title: string;
        body: string;
        date: string;
      }

    let navigate = useNavigate()

    const initialValues : Announcement = {
        title: "",
        body: "",
        date: "",
    }

    const onSubmitA = (data: Announcement) => {
        axios.post(`${apiUrl}/announcements`, data).then((response) => {
          navigate("/events");
        });
      };


    const validationSchemaA = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        body: Yup.string().required("Body is required"),
        date: Yup.string()
                .required("Date is required.")
                .matches(/^(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/\d{4}$/, "Invalid date format (mm/dd/yyyy)"),
    })

    return (
        <div className="create-post-page h-full w-screen flex flex-col items-center justify-center font-oswald">
            <div className='create-header w-full bg-slate-700 flex justify-center md:justify-start text-center'>
                <div className='exec-text-container mt-36 mb-4 md:ml-32'>
                    <h1 className='text-6xl text-white'>
                        CREATE A POST
                    </h1>
                </div>
            </div>
            <div className="create-container w-1/3 my-16 p-8 text-center border-4 border-slate-800">
                <Formik initialValues = {initialValues} onSubmit = {onSubmitA} validationSchema = {validationSchemaA}>
                    <Form className="formContainer flex flex-col">
                        <label className="text-3xl mb-2"> Title: </label>
                        <ErrorMessage name = "title" component="span"/>
                        <Field id="inputCreatePost" name="title" placeholder="ex...Title" className="border-2 p-2 mb-4"/>

                        <label className="text-xl mb-2"> Body: </label>
                        <ErrorMessage name = "body" component="span"/>
                        <Field
                            as="textarea"
                            id="inputCreatePost"
                            name="body"
                            placeholder="ex...Post"
                            className="border-2 p-2 mb-2"
                            rows={4}
                            style={{resize: "vertical" }}
                        />

                        <label className="text-xl mb-2"> Date: </label>
                        <ErrorMessage name = "date" component="span"/>
                        <Field id="inputCreatePost" name="date" placeholder="ex...4/12/2003" className="border-2 p-2 mb-2"/>

                        <button type = "submit" className="mt-4 px-4 py-2 text-white bg-slate-800 font-semibold hover:bg-opacity-75 transition duration-200"> Create a Post </button>
                    </Form>
                </Formik>
            </div>
        </div>
    )
    
}
