import {useTypedSelector} from "../../Hooks/useTypeSelector";
import Chart from "react-google-charts";
import React, {useEffect, useState} from "react";
import {useActions} from "../../Hooks/useActions";
import {List} from "@material-ui/core";

export function KPEDynamicTableQuarter(props:any) {
    const {destinations,fetch_loading_destination,fetch_error_destination} = useTypedSelector(state => state.destinations)
    const {destinationValues,fetch_loading_destinations_values,fetch_error_destinations_values} = useTypedSelector(state => state.destinationsValues)

    const concreteDestination = destinations.filter(dest => dest.user == props.userId)

    const [state,setstate] = useState({})

    useEffect(()=>{
        setTimeout(() => setstate({}),1000)
        return () => {
            //Очистить данные
        }
    },[props.id])

    console.log('concreteDestination',concreteDestination)
    console.log("values",destinationValues)
    console.log("state",state)

    const result:any = {}

    const mapDynamicDataKPI = concreteDestination
                        .map( dest => (destinationValues
                        .filter( fil => fil.destination == dest.id )
                            .map( value => {
                            console.log("val",value)
                            return ([value.week,value.value])
                        }))).flat().
        forEach((item, idx) => {
            const [key, value] = item;
            if (!result[key]) result[key] = [key, value];
            else result[key] = [...result[key], value]
        })
    console.log('result',result)
        let data = [
        ['Неделя',...concreteDestination.flatMap(destination=>destination.name)], ...Object.keys(result).map(key => result[key])]

    console.log('data',data)

    return (
        <Chart chartType="AreaChart"
               width={600}
               height={600}
               loader={<div>Loading chart</div>}
               data={
                   data
               }
               options={{
                   isStacked: false,
                   title: 'Динамика выполнения КПЭ',
                   vAxis: {
                       minValue: 0,
                       maxValue: 100,
                       ticks: [0, 20, 50, 80, 100],
                   },
                   chartArea: { width: '50%', height: '60%' }
               }}
               legendToggle
        />
    );
}