import * as Yup from 'yup';

export const RegistrationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required'),
    password: Yup.string().required('This field is required').min(6, 'Should be at least 6 characters'),
});