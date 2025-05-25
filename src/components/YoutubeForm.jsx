import { useFormik } from "formik";
import * as Yup from 'yup'

const YoutubeForm = () => {
    const initialValues = {
        name: '',
        email: '',
        channel: ''
    }

    const onSubmit = values => {
        console.log(values)
    }

    const validate = values => {
        let errors = {}

        if(!values.name) errors.name = 'Required.'
        if(!values.channel) errors.channel = 'Required.'
        if(!values.email) errors.email = 'Required.'

        return errors
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required.'),
        email: Yup.string().required('Required.').email('Invalid email'),
        channel: Yup.string().required('Required.')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    })

    return (
        <>
            <h1>useFormik Hook</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className="container">
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    // onChange={formik.handleChange}
                    // onBlur={formik.handleBlur}
                    // value={formik.values.name}
                    // the same as writing onChange, onBlur and value
                    {...formik.getFieldProps('name')}/>
                    {formik.touched.name && formik.errors.name ? <p className="error-message">{formik.errors.name}</p>: null}

                    <label htmlFor="email">Email</label>
                    <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}/>
                    {formik.touched.email && formik.errors.email? <p className="error-message">{formik.errors.email}</p>:null}

                    <label htmlFor="channel">Channel</label>
                    <input
                    type="text"
                    id="channel"
                    name="channel"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.channel}/>
                    {formik.touched.channel && formik.errors.channel?<p className="error-message">{formik.errors.channel}</p>:null}

                    <button type="submit">Guardar</button>
                </div>
            </form>
        </>
    )
}

export default YoutubeForm;
