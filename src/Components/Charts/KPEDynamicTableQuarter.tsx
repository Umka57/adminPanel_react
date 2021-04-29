import {useTypedSelector} from "../../Hooks/useTypeSelector";
import Chart from "react-google-charts";
import React, {useEffect} from "react";
import {useActions} from "../../Hooks/useActions";
import {List} from "@material-ui/core";

export function KPEDynamicTableQuarter(props:any) {
    const {destinations,fetch_loading_destination,fetch_error_destination} = useTypedSelector(state => state.destinations)
    const {destinationValues,fetch_loading_destinations_values,fetch_error_destinations_values} = useTypedSelector(state => state.destinationsValues)

    const concreteDestination = destinations?.filter(dest => dest.user == props.userId)

    const mapDynamicDataKPI = concreteDestination.flatMap(dest => {
        return destinationValues.filter(value => value.destination == dest.id).map(data=> {return [data.week,data.value]})})

    console.log(mapDynamicDataKPI)
        let data = [
        ['Неделя',...concreteDestination.map(destination=>destination.name)],
        mapDynamicDataKPI]
    console.log(data)
    return (
        <Chart chartType="AreaChart"
               width={400}
               height={400}
               loader={<div>Loading chart</div>}
               data={
                   data
               }
               options={{
                   title: 'Динамика выполнения КПЭ',
                   chartArea: {width: '100%'}
               }}
               legendToggle
        />
    );
}