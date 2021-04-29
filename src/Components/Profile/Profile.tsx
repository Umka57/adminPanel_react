import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"

//Импорт элементов из библиотеки Material Ui
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography, Button,
} from "@material-ui/core";
import {DataGrid, GridColDef} from "@material-ui/data-grid";
import AddIcon from '@material-ui/icons/Add';

//Импорт css модуля для стилизации объектов
import css from './Profile.module.css'

//Компоненты Redux
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import {useActions} from "../../Hooks/useActions";
import {fetchPositions} from "../../Store/ActionCreator/positions";

//Импорт графиков
import {KPEDynamicTableQuarter} from "../Charts/KPEDynamicTableQuarter"
import {KPETableCurrentDate} from "../Charts/KPETableCurrentDate"

const DestinationsTable: React.FC =()=>{
    const {id} = useParams<any>()

    const {destinations,fetch_loading_destination,fetch_error_destination} = useTypedSelector(state => state.destinations)
    const {destinationValues,fetch_loading_destinations_values,fetch_error_destinations_values} = useTypedSelector(state => state.destinationsValues)

    const {fetchDestinations,fetchDestinationsValues} = useActions()

    useEffect(()=>{
        fetchDestinations(id)
        fetchDestinationsValues(id)
    },[])

    const columns:GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'name', headerName: 'Направление', width: 200 },
        { field: 'performance_indicator', headerName: 'Показатель результативности, значение', width: 130 },
        { field: 'verification_indicator_value', headerName: 'Верификация значения показателя (документ, курирующая служба)', width: 130 },
        { field: 'verification', headerName: 'Тип верификации', width: 130,},
        { field: 'plan', headerName: 'План на квартал', width: 130 },
        { field: 'year', headerName: 'Должность', width: 130 },
        { field: 'present_value', headerName: 'Текущее значение показателя', width: 130 },
        { field: 'value', headerName: 'Значение', width: 130 },
        { field: 'percent_completion', headerName: 'Процент выполнения', width: 130 },
    ];

    /*let data = [destinations.map(destination => { return[
            [destination.name],
            [destination.performance_indicator],
            [destination.verification_indicator_value],
            [destination.verification],
            [destination.plan],
            [destination.present_value]]}),
        destinationValues.map(destinationValue => {return [destinationValue.value]})
        ]*/
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={[destinations,destinationValues]} columns={columns} />
            <Button
                variant="contained"
                color="primary"
                size="medium"
                className={css.button}
                startIcon={<AddIcon/>}>
                onClick={}
            </Button>
        </div>
    );
}
const UserCard: React.FC = () =>  {
    const {id} = useParams<any>()

    const {user,loading_user,error_user} = useTypedSelector(state => state.user)
    const {positions,loading_positions,error_positions} = useTypedSelector(state => state.positions)

    const {fetchUser,fetchPositions} = useActions()

    useEffect(()=> {
        fetchPositions()
        fetchUser(id)
    },[])

    if(!user) return null

    return (
        <Card className={css.card}>
            <Grid container spacing={3}>
                <Grid item>
                    <CardMedia className={css.photo}
                               image={user.img_link}/>
                </Grid>
                <div className={css.details}>
                    <CardContent>
                        <Grid item xl={6}>
                            <Typography  className={css.position} variant='h4' component='h1'>{positions[user.position].position_name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>{user.lastname} {user.name} {user.patronymic}</Typography>
                        </Grid>
                        <Grid item xl={6}>
                            <Typography>Интегральное значение</Typography>
                            <Typography>40%</Typography>
                        </Grid>
                        <Grid item xl={6}>
                            <Typography>Исполнительная дисциплина</Typography>
                            <Typography>20%</Typography>
                        </Grid>
                    </CardContent>
                </div>
                <div>
                    {/*<DestinationsTable/>*/}
                </div>
            </Grid>
        </Card>
    );
}

export default function Profile(){
        const {id} = useParams<any>()

        const {destinations} = useTypedSelector( state => state.destinations)
        const {destinationValues} = useTypedSelector(state => state.destinationsValues)
        const {fetchDestinations,fetchDestinationsValues} = useActions()

        useEffect( ()=> {
            fetchDestinations(id)
            console.log('id',id)
        },[id])

        useEffect(()=>{
            if(destinations.length && !destinationValues.length && id){
                let destfil = destinations.filter(dest => dest.user == id).map(item => item.id)

                fetchDestinationsValues(destfil)
            }
        },[id,destinations.length,destinationValues.length])

        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <UserCard/>
                </Grid>
                <Grid item xs={6}>
                    <KPETableCurrentDate userId={id}/>
                </Grid>
                <Grid item xs={6}>
                    <KPEDynamicTableQuarter userId={id}/>
                </Grid>
            </Grid>
        )

}