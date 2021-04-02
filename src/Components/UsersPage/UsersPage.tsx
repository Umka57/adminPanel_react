import React, {useEffect} from "react";
import {DataGrid, GridColDef, GridRowsProp} from '@material-ui/data-grid';
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../Store/ActionCreator/user";
import {useActions} from "../../Hooks/useActions";

const columns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {field: 'age', headerName: 'Age', type: 'number', width: 90,},
    {field: 'fullName', headerName: 'Full name', description: 'This column has a value getter and is not sortable.', width: 160,},
];

const UsersTable: React.FC = () => {
    const {users,error,loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()
    
    useEffect(()=>{
        fetchUsers()
    },[])

    if(loading){
        //LOADING
    }
    if(error){
        //ERROR
    }
    return (<div style={{ height: 400, width: '100%' }}>
    <DataGrid rows={users} columns={columns} />
    </div>
    );
}

function Users(){
    return(
        <UsersTable/>
    );
}
export default Users;