import { useFormik } from "formik";

const YoutubeForm = () => {
    const initialValues = {
        name: "ra",
        email: "ra",
        channel: ""
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

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}/>
            {formik.errors.name ? <p className="error-message">{formik.errors.name}</p>: null}

            <label htmlFor="email">Email</label>
            <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}/>
            {formik.errors.email? <p className="error-message">{formik.errors.email}</p>:null}

            <label htmlFor="channel">Channel</label>
            <input
            type="text"
            id="channel"
            name="channel"
            onChange={formik.handleChange}
            value={formik.values.channel}/>
            {formik.errors.channel?<p className="error-message">{formik.errors.channel}</p>:null}

            <button type="submit">Guardar</button>
        </form>
    )
}

export default YoutubeForm;
