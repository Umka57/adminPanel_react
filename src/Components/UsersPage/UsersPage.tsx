import React, {useEffect} from "react";
import {DataGrid, GridColDef, GridRowsProp} from '@material-ui/data-grid';
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../Store/ActionCreator/users";
import {useActions} from "../../Hooks/useActions";

const columns:GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'lastname', headerName: 'Фамилия', width: 130 },
    { field: 'name', headerName: 'Имя', width: 130 },
    { field: 'patronymic', headerName: 'Отчество', width: 130 },
    { field: 'email', headerName: 'Почта', width: 130 },
    {field: 'telephone', headerName: 'Телефон', width: 130,},
    { field: 'position', headerName: 'Должность', width: 130 },
    { field: 'role', headerName: 'Роль', width: 130 }
];

const UsersTable: React.FC = () => {
    const {users,error_user,loading_user} = useTypedSelector(state => state.user)
    const {roles,error_roles,loading_roles} = useTypedSelector(state => state.roles)
    const {positions,error_positions,loading_positions} = useTypedSelector(state => state.positions)

    const {fetchUsers,fetchRoles,fetchPositions} = useActions()
    
    useEffect(()=>{
        fetchUsers()
        fetchRoles()
        fetchPositions()
    },[])

   /* user.map{user=> user.position = {}}*/
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