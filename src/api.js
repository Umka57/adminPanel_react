import * as axios from "axios"

const instance = axios.create({
    withCredentials:true,
    baseURL: "",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'}
})
export const getProrectors = (props) => {
    return instance.post("/prorectors", this.props).then(response => {return response.data})
}

export const getStruct = (props) => {
    return instance.post("/structs", this.props).then(response => {return response.data})
}

export const getUsers = (props) => {
    return instance.post("/users",this.props).then(response => {return response.data})
}

export const getUserData = (props) => {
    return instance.post("/userdata", this.props).then(response => {return response.data})
}