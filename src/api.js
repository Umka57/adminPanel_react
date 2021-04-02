import * as axios from "axios"

const instance = axios.create({
    withCredentials:true,
    baseURL: "http://127.0.0.1:5000",
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
export const destinationsGetPossible = (props) => {
    return instance.post("/destinations.getPossible", this.props).then(response => {return response.data})
}
export const destinationsGetValues = (props) => {
    return instance.post("/destinations.getValues", this.props).then(response => {return response.data})
}
export const DestinationsGet = (props) => {
    return instance.post("/destinations.get", this.props).then(response => {return response.data})
}