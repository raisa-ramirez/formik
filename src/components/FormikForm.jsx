import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from 'yup'
import ErrorText from "./ErrorText";

const FormikForm = () => {
    const initialValues = {
        name: '',
        email: '',
        channel: '',
        comments: '',
        social: {
            facebook: '',
            twitter: ''
        },
        phoneNumbers: [],
        languages: ['']
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required.'),
        email: Yup.string().required('Required.').email('Invalid email.'),
        channel: Yup.string().required('Required.'),
        social: Yup.object({
            facebook : Yup.string().required('Required.').url('Invalid URL.')
        }),
        phoneNumbers: Yup.array()
        .of(Yup.string())
        .test(
            'at-least-one-filled',
            'You must enter at least one phone number.',
            (arr) => Array.isArray(arr) && arr.some((val) => val && val.trim() !== '')
        ),
    })

    const onSubmit = (values) => {
        console.log(values)
    }

    const customValidation = (val) => {
        let error = ''
        if(!val){
            error = 'Required field.'
        }
        return error
    }

    return (
        <>
            <h1>Formik Components</h1>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            // validateOnChange={false}
            // validateOnBlur={false}
            >
                <Form>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="name">Name</label>
                            <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"/>
                            <ErrorMessage name="name" component={ErrorText}/>
                        </div>
                        <div className="col">
                            <label htmlFor="email">Email</label>
                            <Field
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Your email"/>
                            <ErrorMessage name="email" component={ErrorText}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="channel">Channel</label>
                            <Field
                            type="text"
                            id="channel"
                            name="channel"
                            placeholder="Your Youtube channel"/>
                            <ErrorMessage name="channel" component={ErrorText}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="facebook">Facebook Profile</label>
                            <Field type="text" id="facebook" name="social.facebook" placeholder="Your FB profile"/>
                            <ErrorMessage name="social.facebook" component={ErrorText}/>
                        </div>
                        <div className="col">
                            <label htmlFor="twitter">Twitter Profile</label>
                            <input type="text" id="twitter" name="twitter" placeholder="Your TW profile"/>
                            <ErrorMessage name="twitter" component={ErrorMessage}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="primaryPhone">Primary Phone</label>
                            <Field type="text" id="primaryPhone" name="phoneNumbers[0]" placeholder="Phone number"/>
                            <ErrorMessage name="phoneNumbers" component={ErrorText}/>
                        </div>
                        <div className="col">
                            <label htmlFor="secondaryPhone">Secondary Phone</label>
                            <Field type="text" id="secondaryPhone" name="phoneNumbers[1]" placeholder="Phone number"/>
                            <ErrorMessage name="phoneNumbers" component={ErrorText}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="languages">Languages</label>

                            <FieldArray name="languages">
                                {(props) => {
                                    const { form, push, remove } = props
                                    const { languages } = form.values
                                    // console.log(props)
                                    return (<div>
                                    {
                                        languages.map((name, index) => (<div key={index} className="languages">
                                            <Field name={`languages[${index}]`} className="custom-input"/>
                                            {
                                                index>0 && <button type="button" onClick={() => remove(index)}>-</button>
                                            }
                                            <button type="button" onClick={() => push('')}>+</button>
                                        </div>))
                                    }
                                    </div>)
                                }}
                            </FieldArray>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label htmlFor="comments">Comments</label>
                            <Field
                            as="textarea"
                            id="comments"
                            name="comments"
                            placeholder="Your comments"
                            validate={customValidation}/>
                            <ErrorMessage name="comments" component={ErrorText}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <button type="submit">Guardar</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </>
    )
}

export default FormikForm;
