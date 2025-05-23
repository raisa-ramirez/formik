import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'

const FormikForm = () => {
    const initialValues = {
        name: '',
        email: '',
        channel: ''
    }

    const onSubmit = values => {
        console.log(values)
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required.'),
        email: Yup.string().required('Required.').email('Invalid email'),
        channel: Yup.string().required('Required.')
    })

    return (
        <>
            <h1>Formik Components</h1>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                <Form>
                    <label htmlFor="name">Name</label>
                    <Field
                    type="text"
                    id="name"
                    name="name"/>
                    <ErrorMessage name="name" component="p" className="error-message"/>

                    <label htmlFor="email">Email</label>
                    <Field
                    type="text"
                    id="email"
                    name="email"/>
                    <ErrorMessage name="email" component="p" className="error-message"/>

                    <label htmlFor="channel">Channel</label>
                    <Field
                    type="text"
                    id="channel"
                    name="channel"/>
                    <ErrorMessage name="channel" component="p" className="error-message"/>

                    <button type="submit">Guardar</button>
                </Form>
            </Formik>
        </>
    )
}

export default FormikForm;
