import React from "react";
import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import Chart from "react-google-charts";
import css from './Profile.module.css';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
    },
});

function UserCard() {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Grid container spacing={3}>
                <CardContent>
                    <Grid item xs={6}>
                        {/*Photo*/}
                        <CardMedia
                            className={""}
                            image={"https://img5.goodfon.ru/wallpaper/nbig/4/54/stefan-koidl-by-stefan-koidl-sky-dragon.jpg"}/>
                    </Grid>
                    <Grid item xs={6}>
                        {/*Dolzhnost*/}
                        <Typography>
                            Valera
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {/*FIO*/}
                        <Typography>
                            Valera
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {/*Integralnoe znacenie*/}
                        <Typography>
                            Valera
                        </Typography>
                        {/*Znacenie*/}
                        <Typography>
                            Valera
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {/*Ispolnitelnaya disciplina*/}
                        <Typography>
                            Valera
                        </Typography>
                        {/*Pokazateli*/}
                        <Typography>
                            Valera
                        </Typography>
                    </Grid>
                </CardContent>
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
            <KPETableCurrentDate />
        </Grid>
        <Grid item xs={6}>
            <KPEDynamicTableQuarter/>
        </Grid>
    </Grid>
)
;

}

export default Profile;