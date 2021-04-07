import * as axios from "axios"

const instance = axios.create({
    withCredentials:true,
    baseURL: "http://127.0.0.1:5000",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'}
})

export const getProrectors = (positionId = 2,roleId= 2) => {
    return instance.post("/users.getPossible", this.props).then(response => {return response.data})
}

export const getStruct = (position = 3,role= 2) => {
    return instance.post("/users.getPossible",{positionId: position,roleId: role}).then(response => {return response.data})
}

export const getUsers = (positionId = 0,roleId= 0) => {
    return instance.post("/users.getPossible",this.props).then(response => {return response.data})
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