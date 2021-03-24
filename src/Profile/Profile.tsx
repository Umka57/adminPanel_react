import React from "react";
import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import Chart from "react-google-charts";
import css from './Profile.module.css';

function UserCard() {
    /*const classes = useStyles();*/
    return (
        <Card className={css.card}>
            <Grid container spacing={3}>
                <Grid item xl={12}>
                    {/*Position*/}
                    <Typography  className={css.position} variant='h4' component='h3' >Проректор по воспитательной деятельности</Typography>
                </Grid>
                <Grid item>
                    {/*Photo*/}
                    <CardMedia className={css.photo}
                               image={"https://img5.goodfon.ru/wallpaper/nbig/4/54/stefan-koidl-by-stefan-koidl-sky-dragon.jpg"}/>
                </Grid>
                <div className={css.details}>
                    <CardContent>
                        <Grid item>
                            {/*FIO*/}
                            <Typography>Иванов Иван Иванович</Typography>
                        </Grid>
                        <Grid item xl={6}>
                            {/*Integralnoe znacenie*/}
                            <Typography>Интегральное значение</Typography>
                            {/*Znacenie*/}
                            <Typography>40%</Typography>
                        </Grid>
                        <Grid item xl={6}>
                            {/*Ispolnitelnaya disciplina*/}
                            <Typography>Исполнительная дисциплина</Typography>
                            {/*Pokazateli*/}
                            <Typography>20%</Typography>
                        </Grid>
                    </CardContent>
                </div>
            </Grid>
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

function Profile() {
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
        ;

}

export default Profile;