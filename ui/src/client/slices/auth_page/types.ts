export interface initialInterface {
    registration_data: {
        email: string,
        password: string,
        name: string,
    },
    logging_data: {
        email: string,
        password: string
    },
    current_user: {
        email: string,
        name: string,
        uid: string,
        email_verified: boolean,
    },
    isLogging: boolean,
    isOpenRegistration: boolean,
}
