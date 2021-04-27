import React, {useEffect} from "react";
import {useParams} from "react-router-dom"

//Импорт элементов из библиотеки Material Ui
import {
    Card,
    CardContent,
    CardMedia,
    Grid,
    Paper,
    Table, TableBody,
    TableContainer,
    TableHead, TableRow, TableCell,
    Typography, Input, Button, FormControl
} from "@material-ui/core";

import SaveIcon from '@material-ui/icons/Save';
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

const UserCard: React.FC = () =>  {
    const {id} = useParams<any>()

    const {user,loading_user,error_user} = useTypedSelector(state => state.user)
    const {positions,loading_positions,error_positions} = useTypedSelector(state => state.positions)
    const {destinations,loading_destination,error_destination} = useTypedSelector(state => state.destinations)
    const {destinationValues,loading,error} = useTypedSelector(state => state.destinationsValues)

    const {fetchUser,fetchPositions,fetchDestinations,fetchDestinationsValues} = useActions()

    useEffect(()=> {
        fetchPositions()
        fetchUser(id)
        fetchDestinations(id)
        fetchDestinationsValues(id)
    },[])

    if(!user) return null

    return (
        <Card className={css.card}>
            <Grid container spacing={3}>
                <Grid item>
                    <CardMedia className={css.photo}
                               image={"https://img5.goodfon.ru/wallpaper/nbig/4/54/stefan-koidl-by-stefan-koidl-sky-dragon.jpg"}/>
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
            </Grid>)
        </Card>
    );
}

const AddDestinationDataTable: React.FC = () => {

        return (
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Направление </TableCell>
                            <TableCell align="right">Показатель результативности</TableCell>
                            <TableCell align="right">Верификация значения показателя</TableCell>
                            <TableCell align="right">План на 1 квартал</TableCell>
                            <TableCell align="right">Текущее значение показателя</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            <TableRow>
                                <FormControl>
                                    <TableCell component="th" scope="row"><Input name={'destinationName'} placeholder="Название" inputProps={{ 'aria-label': 'description' }} required={true}/></TableCell>
                                    <TableCell align="right"><Input name={'destinationPerformanceIndicator'} placeholder="значение" inputProps={{ 'aria-label': 'description' }} required={true}/></TableCell>
                                    <TableCell align="right"><Input name={''} placeholder="документ, курирующая служба" inputProps={{ 'aria-label': 'description' }} required={true}/></TableCell>
                                    <TableCell align="right"><Input placeholder="план" inputProps={{ 'aria-label': 'description' }} required={true}/></TableCell>
                                    <TableCell align="right"><Input placeholder="значение" inputProps={{ 'aria-label': 'description' }} required={true}/></TableCell>
                                </FormControl>
                            </TableRow>
                    </TableBody>
                </Table>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={css.button}
                    startIcon={<AddIcon />}>
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    className={css.button}
                    startIcon={<SaveIcon />}>
                    Сохранить
                </Button>
            </TableContainer>
        );
}

export default class Profile extends React.Component{

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <UserCard/>
                </Grid>
                <Grid item xs={6}>
                    <KPETableCurrentDate/>
                </Grid>
                <Grid item xs={6}>
                    <KPEDynamicTableQuarter/>
                </Grid>
            </Grid>
        )
    }
}