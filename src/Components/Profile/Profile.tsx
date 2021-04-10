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

const UserCard: React.FC = () =>  {
    const {id} = useParams<any>()
    const {users,loading_user,error_user} = useTypedSelector(state => state.user)
    const {positions,loading_positions,error_positions} = useTypedSelector(state => state.positions)

    console.log(users)
    return (
        <Card className={css.card}>
            {users.map(user =>
            <Grid container spacing={3}>
                <Grid item xl={12}>
                    Position
                    <Typography  className={css.position} variant='h4' component='h3' >{positions[user.position].position_name}</Typography>
                </Grid>
                <Grid item>
                    Photo
                    <CardMedia className={css.photo}
                               image={"https://img5.goodfon.ru/wallpaper/nbig/4/54/stefan-koidl-by-stefan-koidl-sky-dragon.jpg"}/>
                </Grid>
                <div className={css.details}>
                    <CardContent>
                        <Grid item>
                            FIO
                            <Typography>{user.lastname} {user.name} {user.patronymic}</Typography>
                        </Grid>
                        <Grid item xl={6}>
                            Integralnoe znacenie
                            <Typography>Интегральное значение</Typography>
                            Znacenie
                            <Typography>40%</Typography>
                        </Grid>
                        <Grid item xl={6}>
                            Ispolnitelnaya disciplina
                            <Typography>Исполнительная дисциплина</Typography>
                            Pokazateli
                            <Typography>20%</Typography>
                        </Grid>
                    </CardContent>
                </div>
            </Grid>)}
        </Card>
    );
}

function KPETableCurrentDate() {
    return (
        <Chart chartType={"ColumnChart"}
               width={400}
               height={400}
               loader={<div>Loading chart</div>}
               data={[
                   ['City', '2010 Population', '2000 Population'],
                   ['New York City, NY', 8175000, 8008000],
                   ['Los Angeles, CA', 3792000, 3694000],
                   ['Chicago, IL', 2695000, 2896000],
                   ['Houston, TX', 2099000, 1953000],
                   ['Philadelphia, PA', 1526000, 1517000],
               ]/*Enter data here*/}
               options={{
                   title: 'name',
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

function KPEDynamicTableQuarter() {
    return (
        <Chart chartType="AreaChart"
               width={400}
               height={400}
               loader={<div>Loading chart</div>}
               data={[
                   ['Year', 'Sales', 'Expenses'],
                   ['2013', 1000, 400],
                   ['2014', 1170, 460],
                   ['2015', 660, 1120],
                   ['2016', 1030, 540],
               ]/*Enter data here*/}
               options={{
                   title: 'name',
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