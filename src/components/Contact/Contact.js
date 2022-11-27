import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea, } from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useRef } from "react";
import { useScrollSection } from "../../context/ScrollContext";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import './Contact.css';
import Swal from "sweetalert2";


const Contact = () => {
    const { contact } = useScrollSection();
    const form = useRef();

    const formik = useFormik({
        initialValues: {
            fullname: "",
            email: "",
            confirmationEmail: "",
            message: "",
        },
        validationSchema: Yup.object({
            fullname: Yup.string()
                .required("Fullname is required"),
            email: Yup.string()
                .email("This is not a valid email address")
                .required("Email is required"),
            confirmationEmail: Yup.string()
                .email("This is not a valid email address")
                .required("Email is required")
                .oneOf([Yup.ref('email'), null], 'Email does not match'),
            message: Yup.string()
                .required("Message is required"),
        }),
        onSubmit: () => {
            emailjs.sendForm('service_ncjq4u7', 'template_aaww86p', form.current, 'ZkvA2Az6X8hl9WYXN')
            
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Message sent',
                showConfirmButton: false,
                timer: 1500
            })

            formik.handleReset();
        },
    });

    return (
        <section ref={contact} className="sectionContainer">
            <h2 className="sectionTitle"> Contact </h2>
            <form className='formContainer' onSubmit={formik.handleSubmit} ref={form}>
                <FormControl mb={8} isInvalid={formik.errors.fullname}>
                    <FormLabel color={"#11224d"} fontWeight="bold">
                        Full name
                    </FormLabel>
                    <Input
                        type="text"
                        placeholder="Enter your full name"
                        name="fullname"
                        size="lg"
                        _placeholder={{ color: '#11224d', opacity: '0.6' }}
                        color={"#11224d"}
                        backgroundColor={"#f98125"}
                        onChange={formik.handleChange}
                        value={formik.values.fullname}
                        errorBorderColor='red'
                    />
                    <FormErrorMessage>{formik.errors.fullname}</FormErrorMessage>
                </FormControl>
                <FormControl mb={8} isInvalid={formik.errors.email}>
                    <FormLabel color={"#11224d"} fontWeight="bold">
                        Email address
                    </FormLabel>
                    <Input
                        type="text"
                        placeholder="Enter your email address"
                        name="email"
                        size="lg"
                        _placeholder={{ color: '#11224d', opacity: '0.6' }}
                        color={"#11224d"}
                        backgroundColor={"#f98125"}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        errorBorderColor='red'
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl mb={8} isInvalid={formik.errors.confirmationEmail}>
                    <FormLabel color={"#11224d"} fontWeight="bold">
                        Confirm email address
                    </FormLabel>
                    <Input
                        type="text"
                        placeholder="Reenter your email address"
                        name="confirmationEmail"
                        size="lg"
                        _placeholder={{ color: '#11224d', opacity: '0.6' }}
                        color={"#11224d"}
                        backgroundColor={"#f98125"}
                        onChange={formik.handleChange}
                        value={formik.values.confirmationEmail}
                        errorBorderColor='red'
                    />
                    <FormErrorMessage>{formik.errors.confirmationEmail}</FormErrorMessage>
                </FormControl>
                <FormControl mb={8} isInvalid={formik.errors.message}>
                    <FormLabel color={"#11224d"} fontWeight="bold">
                        Message
                    </FormLabel>
                    <Textarea
                        placeholder="Enter your message"
                        name="message"
                        spacing={3}
                        _placeholder={{ color: '#11224d', opacity: '0.6' }}
                        color={"#11224d"}
                        backgroundColor={"#f98125"}
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        errorBorderColor='red'
                    />
                    <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
                </FormControl>
                <div className="buttonsContainer">
                <Button
                    className="downloadButton"
                    backgroundColor={"#f98125"}
                    color={"#11224d"}
                    type="submit"
                >
                    Submit
                </Button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
