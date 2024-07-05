import React from 'react';


import ChooseState from './ChooseState/ChooseState';
import Humidity from './HUMIDITY/Humidity';
import Left from './Left/Left';
import WeekInfo from './WeekInfoCard/WeekInfo';
import HourlyInfo from './HourlyInfo/HourlyInfo';
const HomeComponents = ()=>{   
    return (
        <>
            <div className='homeWrap'>
                <div className='weatherSection'>
                    <Left />
                    <div className='rightSide'>
                        
                        <ChooseState/>
                          {/* <HourlyInfo/> */}
                        <WeekInfo />

                        <Humidity />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeComponents;


// 
// 34480b98aa332da53123a0ac63a4ea9d weather api key
// 34480b98aa332da53123a0ac63a4ea9d
// https://home.openweathermap.org/api_keys



// https://simplemaps.com/data/in-cities
// https://openweathermap.org/
// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// https://api.openweathermap.org/data/3.0/onecall?lat=20&lon=85&appid=34480b98aa332da53123a0ac63a4ea9d


