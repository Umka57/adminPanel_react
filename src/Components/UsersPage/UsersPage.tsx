import React, {useEffect} from "react";
import {DataGrid, GridColDef, GridRowsProp} from '@material-ui/data-grid';
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../Store/ActionCreator/user";
import {useActions} from "../../Hooks/useActions";

const columns:GridColDef[] = [
    { field: 'email', headerName: 'email', width: 70 },
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'name', headerName: 'name', width: 130 },
    { field: 'patronymic', headerName: 'Отчество', width: 130 },
    { field: 'position', headerName: 'Отчество', width: 130 },
    { field: 'role', headerName: 'Отчество', width: 130 },
    {field: 'telephone', headerName: 'telephone', width: 90,},
];

const UsersTable: React.FC = () => {
    const {users,error,loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()
    
    useEffect(()=>{
        fetchUsers()
        console.log(users)
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