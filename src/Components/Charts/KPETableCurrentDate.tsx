import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import {useActions} from "../../Hooks/useActions";
import Chart from "react-google-charts";

export function KPETableCurrentDate(props:any){

    const {destinations,fetch_loading_destination,fetch_error_destination} = useTypedSelector(state => state.destinations)

    console.log(destinations)
    const concreteDestination = destinations.filter(dest => dest.user == props.userId)

    const mapDataKPI = concreteDestination.map(destination => {return [destination.name,destination.percent_completion]})
    console.log(mapDataKPI)
    return (
        <Chart chartType={"ColumnChart"}
               width={400}
               height={400}
               loader={<div>Loading chart</div>}
               data={[
                   ["Назначение", "Процент выполнения"],
                   mapDataKPI
               ]}
               options={{
                   title: 'Выполнение КПЭ(на текущую дату)',
                   chartArea: {width: '100%'}
               }}
               legendToggle
        />
    );
}