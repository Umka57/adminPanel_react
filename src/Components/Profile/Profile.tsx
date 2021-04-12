import React, {useEffect} from "react";
//Библиотка для отправки http запросов
import axios from 'axios'
//Импорт элементов из библиотеки Material Ui
import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
//Импорт библиоткеки для создания графиков
import Chart from "react-google-charts";
//Импорт css модуля для стилизации объектов
import css from './Profile.module.css';
import {getProrectors, getStruct, getUserData} from "../../api";
import {useParams} from "react-router-dom"
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import {useActions} from "../../Hooks/useActions";
import {fetchPositions} from "../../Store/ActionCreator/positions";

const UserCard: React.FC = () =>  {
    const {id} = useParams<any>()

    const {user,loading_user,error_user} = useTypedSelector(state => state.user)
    const {positions,loading_positions,error_positions} = useTypedSelector(state => state.positions)
    const {destinations,loading,error} = useTypedSelector(state => state.destinations)

    const {fetchUser,fetchPositions,fetchDestinations} = useActions()

    useEffect(()=> {
        fetchPositions()
        fetchUser(id)
        fetchDestinations(id)
    },[])

    if(!user) return null

    console.log("user",user)

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

const KPETableCurrentDate: React.FC = () => {
    const {id} = useParams<any>()

    const {destinations,loading_destination,error_destination} = useTypedSelector(state => state.destinations)
    const {destinationValues,loading,error} = useTypedSelector(state => state.destinationsValues)

    const {fetchDestinations,fetchDestinationsValues} = useActions()

    useEffect(()=> {
        fetchDestinations(id)
        let values = {destinations.map(destination => {if(destination.user == id) {// @ts-ignore
            fetchDestinationsValues(destination.id)}}), (destinationsValues.map(value => value)})}
    },[])

    if(!destinations) return null

    return (
        <Chart chartType={"ColumnChart"}
               width={400}
               height={400}
               loader={<div>Loading chart</div>}
               data={[
                   ['Назначение','значение'],
               ]}
               options={{
                   title: 'Выполнение КПЭ(на текущую дату)',
                   chartArea: {width: '100%'},
                   hAxis: {
                       minValue: 0,
                   },
                   vAxis: {
                   },
               }}
               legendToggle
        />
    );
}

function KPEDynamicTableQuarter() {
    return (
        <Chart chartType="AreaChart"
               width={400}
               height={400}
               loader={<div>Loading chart</div>}
               data={[
                   ['Назначение','значение'],
               ]}
               options={{
                   title: 'Динамика выполнения КПЭ',
                   chartArea: {width: '100%'},
                   hAxis: {
                       title: 'Name x axis',
                       minValue: 0,
                   },
                   vAxis: {
                       title: 'Name y axis',
                   },
               }}
               legendToggle
        />
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