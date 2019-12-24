const SERVER_NAME = "192.168.1.111"
const PORT = 3000
export const urlRegisterUser = () => {
    return `http://${SERVER_NAME}:${PORT}/users/register`
}
