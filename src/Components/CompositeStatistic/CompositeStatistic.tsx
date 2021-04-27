import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import {useActions} from "../../Hooks/useActions";
import Chart from "react-google-charts";
import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import css from "../Profile/Profile.module.css";

//Импорт графиков
import {KPEDynamicTableQuarter} from "../Charts/KPEDynamicTableQuarter"
import {KPETableCurrentDate} from "../Charts/KPETableCurrentDate"
import {fetchProrectors} from "../../Store/ActionCreator/prorectors";

const AdvancedUserCard: React.FC = () => {
    const {usertype} = useParams<any>()

    const {user} = useTypedSelector(state => state.user)
    const {positions} = useTypedSelector(state => state.positions)

    const {prorectors} = useTypedSelector(state => state.prorectors)
    const {structure} = useTypedSelector(state => state.structure)
    const {university} = useTypedSelector(state => state.university)

    const {destinations} = useTypedSelector(state => state.destinations)
    const {destinationValues} = useTypedSelector(state => state.destinationsValues)

    const {fetchUser,fetchDestinations,fetchDestinationsValues} = useActions()

    useEffect(()=> {
        switch (usertype){
            case 'prorector':
                prorectors.forEach(elem => {fetchUser(elem.id),fetchDestinations(elem.id),fetchDestinationsValues(elem.id)})
                break
            case 'structure':
                structure.forEach(elem => {fetchUser(elem.id),fetchDestinations(elem.id),fetchDestinationsValues(elem.id)})
                break
            case 'university':
                university.forEach(elem => {fetchUser(elem.id),fetchDestinations(elem.id),fetchDestinationsValues(elem.id)})
                break
        }
    },[])

    if(!user) return null

    return(
        <Card>
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
                        <KPETableCurrentDate/>
                        <KPEDynamicTableQuarter/>
                    </CardContent>
                </div>
            </Grid>
        </Card>
    );
}

export default class CompositeStatistic extends React.Component{

    render(){
        return(

        );
    }
}