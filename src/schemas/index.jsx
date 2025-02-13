import * as Yup from "yup";
export const signUpSchema =Yup.object({
    email:Yup.string().email().required("Please Enter Validate Email"),
    password:Yup.string().min(6).required("Please Enter Validate Password"),
    ConfirmPassword:Yup.string().required().oneOf([Yup.ref('password'),null],"Password Must Match"),
}) 