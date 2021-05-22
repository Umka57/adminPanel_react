import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import {useActions} from "../../Hooks/useActions";
import {Card, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import css from "./CompositeStatistic.module.css";
import {User} from "../../Types/user"
//Импорт графиков
import {KPEDynamicTableQuarter} from "../Charts/KPEDynamicTableQuarter"
import {KPETableCurrentDate} from "../Charts/KPETableCurrentDate"
import {fetchDestinations} from "../../Store/ActionCreator/destinations";
import {fetchDestinationsValues} from "../../Store/ActionCreator/destinationsValues";
import Users from "../UsersPage/UsersPage";
import {render} from "react-dom";

function AdvancedUserCard(props: any) {

    const {users} = useTypedSelector(state => state.users)
    const {positions} = useTypedSelector(state => state.positions)

    const selectedUser = users.find(value => value.id == props.userId)

    if (!selectedUser) return null

    return (
        <Card className={css.card}>
            <CardMedia className={css.photo} image={selectedUser.img_link}/>
            <CardContent>
                <div className={css.content}>
                    <Typography variant='h4' component='h1'>{positions[selectedUser.position].position_name}</Typography>
                    <Typography>{selectedUser.lastname} {selectedUser.name} {selectedUser.patronymic}</Typography>
                    <Typography>Интегральное значение</Typography>
                    <Typography>40%</Typography>
                    <Typography>Исполнительная дисциплина</Typography>
                    <Typography>20%</Typography>
                </div>
                <div className={css.graphs}>
                    <KPETableCurrentDate userId={props.userId} width={200} height={200}/>
                    <KPEDynamicTableQuarter userId={props.userId} width={200} height={200}/>
                </div>
            </CardContent>
        </Card>
    );
}

export default function CompositeStatistic() {

    const {usertype} = useParams<any>()

    const {users} = useTypedSelector(state => state.users)
    const {prorectors} = useTypedSelector(state => state.prorectors)
    const {structure} = useTypedSelector(state => state.structure)
    const {university} = useTypedSelector(state => state.university)

    const {destinations} = useTypedSelector(state => state.destinations)
    const {destinationValues} = useTypedSelector(state => state.destinationsValues)

    const {fetchUser} = useActions()

    let param = Array()

    switch (usertype) {
        case 'prorectors':
            param = prorectors
            break;
        case 'structure':
            param = structure
            break;
        case 'university':
            param = university
            break;
    }

    useEffect(() => {
       param.map(elem => (
           fetchDestinations(elem.id),
           fetchDestinationsValues(destinations.filter(dest => dest.user == elem.id).map(item => item.id))))
    }, [usertype])

    // @ts-ignore
    return (
        <div>
        {param.map(selectedUser => <Card key={selectedUser.id} className={css.card}>
            <CardMedia className={css.photo} image={selectedUser.img_link ? selectedUser.img_link : "http://www.churchnb.org/wp-content/uploads/No.jpg"}/>
            <CardContent>
                <div className={css.content}>
                    <Typography variant='h3' component='h1'>{"добавить позицию"}</Typography>
                    <Typography variant={'h4'} component={'h2'}>{selectedUser.lastname} {selectedUser.name} {selectedUser.patronymic}</Typography>
                    <Typography>Интегральное значение</Typography>
                    <Typography>40%</Typography>
                    <Typography>Исполнительная дисциплина</Typography>
                    <Typography>20%</Typography>
                </div>
                <div className={css.graphs}>
                    <KPETableCurrentDate userId={selectedUser.id} width={300} height={200}/>
                    <KPEDynamicTableQuarter userId={selectedUser.id} width={300} height={200}/>
                </div>
            </CardContent>
        </Card>)}
        </div>
    );
}