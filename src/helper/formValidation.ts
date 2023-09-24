import * as Yup from "yup";

const getCharacterValidationError = (str: string) => {
    return `Your password must have at least 1 ${str} character`;
  };
  
export const validateSchema = Yup.object().shape ({
    schoolName: Yup.string().required("School Name must be at least 5 characters long."),
    schoolType: Yup.string().required("Please select a school type."),
    schoolMailId: Yup.string().email("Invalid email format.").required("This field is required"),
    principalContact:Yup.string().email("Invalid email format.").required("This field is required"),
    contactNumber: Yup.string().required("Contact Number is required."),
    createPassword: Yup.string().required("Please enter a password")    
    .min(8, "Password must have at least 8 characters")    
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
    confirmPassword: Yup.string()
    .required("This field is required")
    .test("passwords-match", "Passwords must match", function(value) {
        return this.parent.createPassword === value;
    }),
});

export const editSchoolSchema = Yup.object().shape({
    schoolName: Yup.string().required("School Name must be at least 5 characters long."),

})

export const planSchema = Yup.object().shape ({
    planName: Yup.string().required("School Name must be at least 5 characters long."),
    planType: Yup.string().required("Please select a plan type."),
    
});



export const loginSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email address')
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .required('Email is required')
    .test('contains-at', 'Invalid email/phone', function (value) {
        return /@/.test(value); // Check if value contains '@'
      }),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')    
    .test('contains-uppercase', 'Password must contain at least one uppercase letter', function (value) {
      return /[A-Z]/.test(value); // Check if value contains at least one uppercase letter
    })
    .test('contains-special-character', 'Password must contain at least one special character', function (value) {
      return /[!@#$%^&*()-_=+{}[]|;:'",.<>?`~]/.test(value); // Check if value contains at least one special character
    }),
})


export const PasswordSecuritySchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current Password is required"),
  newPassword: Yup.string()
    .required("New Password is required")
    .min(8, "New Password must be at least 8 characters long"),
  confirmNewPassword: Yup.string()
    .required("Confirm New Password is required")
    .oneOf([Yup.ref("newPassword")], "Passwords must match"),
});