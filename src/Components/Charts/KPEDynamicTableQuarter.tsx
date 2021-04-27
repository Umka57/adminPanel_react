import {useTypedSelector} from "../../Hooks/useTypeSelector";
import Chart from "react-google-charts";
import React, {useEffect} from "react";
import {useActions} from "../../Hooks/useActions";

export const KPEDynamicTableQuarter:React.FC = () => {
    const {destinations,loading_destination,error_destination} = useTypedSelector(state => state.destinations)
    const {destinationValues,loading,error} = useTypedSelector(state => state.destinationsValues)

    const mapDynamicDataKPI = destinationValues.map(value => {return [[value.week],[value.value]]})

    return (
        <Chart chartType="AreaChart"
               width={400}
               height={400}
               loader={<div>Loading chart</div>}
               data={[
                   ['Неделя',destinations.map(destination=>destination.name)],
                   mapDynamicDataKPI
               ]}
               options={{
                   title: 'Динамика выполнения КПЭ',
                   chartArea: {width: '100%'}
               }}
               legendToggle
        />
    );
}