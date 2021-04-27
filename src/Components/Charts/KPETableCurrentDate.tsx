import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import {useActions} from "../../Hooks/useActions";
import Chart from "react-google-charts";

export const KPETableCurrentDate: React.FC = () => {

    const {destinations,loading_destination,error_destination} = useTypedSelector(state => state.destinations)
    const {destinationValues,loading,error} = useTypedSelector(state => state.destinationsValues)

    const mapDataKPI = destinations.map(destination => {return [[destination.name],[destination.percent_completion]]})

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