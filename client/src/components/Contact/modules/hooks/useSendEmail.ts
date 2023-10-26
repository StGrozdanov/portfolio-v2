import { useState } from "react";
import emailjs from 'emailjs-com';

export function useSendEmail(formRef: React.MutableRefObject<null>) {
    const [emailIsSent, setEmailIsSent] = useState(false);

    const sendEmailHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);
        const { name, email, description } = Object.fromEntries(formData);

        const formInputIsNotEmpty = email.toString().trim() !== '' && name.toString().trim() !== '' && description.toString().trim() !== '';

        const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID as string;
        const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID as string;
        const userId = process.env.REACT_APP_EMAIL_USER_ID as string;

        if (formInputIsNotEmpty) {
            emailjs
                .sendForm(serviceId, templateId, formRef.current as unknown as string, userId)
                .then(result => {
                    if (result.text == 'OK') {
                        setEmailIsSent(true);
                    } else {
                        console.log(`Email status: ${result.status}, message: ${result.text}`);
                    }
                })
                .catch(err => console.log(err));
        }
    }

    return {
        emailIsSent,
        sendEmailHandler,
    }
}