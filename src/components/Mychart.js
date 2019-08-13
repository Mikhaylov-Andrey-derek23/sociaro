import React from 'react';
import Highcharts from 'highcharts'; 
import HighchartsReact from 'highcharts-react-official';
import {connect} from 'react-redux';
import {avtorization} from '../actions/avtorization'

class Mychart extends React.Component{

     
    componentDidMount(){
        this.props.onLoadData();
    }

    render(){
        const tbody = [...this.props.data];
        tbody.shift();
        const channelSet = new Set();
        const channel = [];
        this.props.data.forEach(val => {
            channelSet.add(val.Channel)
        })
        channelSet.forEach(val=>{
            channel.push(val);
        })
        channel.splice(0, 1);
        const hData1 = [];
        const hData2 = [];
        const hData3 = [];
       
            tbody.forEach(el =>{
                if(el.Channel === 'Display Network'){
                    hData1.push(el.ADS_FIVE_WATCHED)
                }
                if(el.Channel === 'Search Network'){
                    hData2.push(el.ADS_FIVE_WATCHED)
                }
                if(el.Channel === 'YouTube Videos'){
                    hData3.push(el.ADS_FIVE_WATCHED)
                }
            })


        const options = {
            title: {
            text:  'Chart ADS_FIVE_WATCHED'
            },
            
            xAxis: {
                type: 'datetime',
                dateTimeLabelFormats: {
                    day: '%Y<br/>%m-%d',
                    week: '%Y-%m-%d',
                    month: '%Y-%m',
                    year: '%Y'
                }
            },
            time: {
                timezone: 'Europe/Moscow'
            },
            series: [{
                pointStart: Date.UTC(2019, 5, 3),
                pointInterval: 1,
                data: hData1
            },
            {
                pointStart: Date.UTC(2019, 5, 3),
                pointInterval: 1,
                data: hData2
            },
            {
                pointStart: Date.UTC(2019, 5, 3),
                pointInterval: 1,
                data: hData3
            }
            ]
           }
          
        return(
            <div className="wrapper">
                <div className="container">
                    <div className="list">
                        {channel.map((el, index) => 
                            <div className="button" key={index}>{el}</div>    
                        )}
                    </div>
                    <div className="chart">
                        <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                        />
                        <div className="containerTable">
                        <table className="table" width="100%" border="1px solid black">
                            <tbody>
                                <tr className="tr">
                                   <th>Channel</th>
                                   <th>Date</th>
                                   <th>Media Source</th>
                                   <th>ADS_FIVE_WATCHED</th>
                                   <th>ADS_VIDEOAD_WATCHED</th>
                                   <th>Add_Friend_Request</th>
                                </tr>
                                {this.props.data.length > 0 ? tbody.map((e, index )=>
                                    <tr className="tr" key={index}>
                                        <td>{e.Channel}</td>
                                        <td>{
                                            new Date(e.Date).getFullYear() +' year ' + (new Date(e.Date).getMonth() + 1)+ ' mounth ' +new Date(e.Date).getDay() + ' day ' + new Date(e.Date).getHours() + ' hours ' + new Date(e.Date).getMinutes() + ' minut.'
                                            }</td>
                                        <td>{e['Media Source']}</td>
                                        <td>{e.ADS_FIVE_WATCHED}</td>
                                        <td>{e.ADS_VIDEOAD_WATCHED}</td>
                                        <td>{e.Add_Friend_Request}</td>
                                    </tr>
                                ) : ""}
                                </tbody>
                            </table>
                            </div>
                    </div>
                    
                </div>
                 
            </div>
        )
    }
}

export default connect(
    state=>({
        data : state.data
    }),
    dispatch=>({
        onLoadData: ()=>{
            dispatch(avtorization());
        }
       
    })
)(Mychart);