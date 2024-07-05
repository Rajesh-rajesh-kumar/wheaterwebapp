import React, {useEffect} from 'react';
import cities from '../../Data/in.json';

import axios from "axios";

import  {UseWeatherAppContext} from '../../Context/Context';

const ChooseState = ()=>{
    

    const {state:{city}, dispatch} = UseWeatherAppContext();
    

    const handleChange = (e)=>{
        const selectedCity = cities.filter(
            (city) => city.city === e.target.value
        )[0]
        //console.log('selectedCity', selectedCity);
        dispatch({
            type:'SET_CITY',
            payload:{...selectedCity}
        })
    }


    const APIKEY = '34480b98aa332da53123a0ac63a4ea9d';   

    //   const APIKEY = '3b3b66b00af9ffd103ec576ffec9f4d4';
    let lat = city && city.lat ? city.lat : '';
    let long = city && city.lng ? city.lng : '';
    let exclude = 'minutely';
    const ULR =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=${exclude}&units=metric&lang=tr&appid=${APIKEY}`
    //    const URL=`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${APIKEY}`
     

    const fetchData = ()=>{
        axios(ULR).then((data)=>{
            let _daily = data.data.daily
            dispatch({
                type:'SET_DAILY',
                payload:_daily
            })
            
            console.log('data',data.data)
        })
    }
    useEffect(()=>{
       fetchData();
       // eslint-disable-next-line
    }, [city])

    return (
        <>
            <div className='stateWrap'>
                <select className='stateMenu' defaultValue={city} onChange={handleChange}>
                    {
                        cities && cities.length > 0  && cities.map((city)=>{
                            return(
                                <option key={`${city.population}${city.lat}`} value={city.city}>
                                    {city.city} -  {city.admin_name}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </>
    )
}

export default ChooseState;