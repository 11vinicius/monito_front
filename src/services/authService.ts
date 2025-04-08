import api from "."

export function loginService (email: string, password: string) {
    return api.post('signIn', {email, password})
}


   