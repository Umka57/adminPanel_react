import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import {useActions} from "../../Hooks/useActions";
import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import css from "../Profile/Profile.module.css";
import {User} from "../../Types/user"
//Импорт графиков
import {KPEDynamicTableQuarter} from "../Charts/KPEDynamicTableQuarter"
import {KPETableCurrentDate} from "../Charts/KPETableCurrentDate"
import {fetchDestinations} from "../../Store/ActionCreator/destinations";
import {fetchDestinationsValues} from "../../Store/ActionCreator/destinationsValues";
import Users from "../UsersPage/UsersPage";

function AdvancedUserCard(props: any) {

    const {users} = useTypedSelector(state => state.users)
    const {positions} = useTypedSelector(state => state.positions)

    const selectedUser = users.find(value => value.id == props.userId)

    if (!selectedUser) return null

    return (
        <Card>
            <Grid container spacing={3}>
                <Grid item>
                    <CardMedia className={css.photo}
                               image={selectedUser.img_link}/>
                </Grid>
                <div className={css.details}>
                    <CardContent>
                        <Grid item xl={6}>
                            <Typography className={css.position} variant='h4'
                                        component='h1'>{positions[selectedUser.position].position_name}</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>{selectedUser.lastname} {selectedUser.name} {selectedUser.patronymic}</Typography>
                        </Grid>
                        <Grid item xl={6}>
                            <Typography>Интегральное значение</Typography>
                            <Typography>40%</Typography>
                        </Grid>
                        <Grid item xl={6}>
                            <Typography>Исполнительная дисциплина</Typography>
                            <Typography>20%</Typography>
                        </Grid>
                        <KPETableCurrentDate userId={selectedUser.id}/>
                        <KPEDynamicTableQuarter userId={selectedUser.id}/>
                    </CardContent>
                </div>
            </Grid>
        </Card>
    );
}

export default function CompositeStatistic() {

    const {usertype} = useParams<any>()

    const {prorectors} = useTypedSelector(state => state.prorectors)
    const {structure} = useTypedSelector(state => state.structure)
    const {university} = useTypedSelector(state => state.university)
    const {destinations} = useTypedSelector(state => state.destinations)

    const {fetchUser} = useActions()

    let param = prorectors
    let userList = Array()

    switch (usertype) {
        case 'structure':
            param = structure
            break;
        case 'university':
            param = university
            break;
    }

    useEffect(() => {
       userList = param.map(elem => {
            return fetchUser(elem.id), fetchDestinations(elem.id), destinations.map(dest => fetchDestinationsValues(dest.id))
        })
    }, [])

    // @ts-ignore
    return (
        <div>
        {userList.map(user => <div userId={user.id}/>)}
        </div>
    );
}