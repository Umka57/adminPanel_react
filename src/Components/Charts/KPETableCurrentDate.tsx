import React, {useEffect} from "react";
import {useTypedSelector} from "../../Hooks/useTypeSelector";
import Chart from "react-google-charts";
import css from "./chartsStyle.module.css"

export function KPETableCurrentDate(props:any){

    const {destinations} = useTypedSelector(state => state.destinations)

    const concreteDestination = destinations.filter(dest => dest.user == props.userId)

    let data = [["Неделя","Значение"],...concreteDestination.map(destination => ([destination.name,destination.percent_completion]))]

    return (
        <Chart chartType={"ColumnChart"} className={css.columnChart}
               width={props.width}
               height={props.height}
               loader={<div>Loading chart</div>}
               data={ data }
               options={{
                   legend: {position: 'bottom',maxLines: 4},
                   hAxis: { title: 'Назначение', titleTextStyle: { color: '#333',size: '14px' } },
                   vAxis: { title: "%", minValue: 0, maxValue: 100},
                   title: 'Выполнение КПЭ(на текущую дату)',
                   titleTextStyle: {},
                   chartArea: {width: '75%',height: '80%'}
               }}
        />
    );
}