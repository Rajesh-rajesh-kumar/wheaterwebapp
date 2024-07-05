import React, {useState, useEffect} from 'react';
import  {UseWeatherAppContext} from '../../Context/Context';
import SingleCard from '../SingleCard/SingleCard';

const WeekInfo = ()=>{
    let {state:{daily}, dispatch} = UseWeatherAppContext();
    const [selectedCard, setSelectedCard] = useState(0);
    //console.log('daily', daily, 'current',current, UseWeatherAppContext());
    const updateCurrent = ()=>{
        return (
            dispatch({
                type:'SET_CURRENT',
                payload:daily[selectedCard]
            })
        )
    }
   useEffect(() => {
        updateCurrent();
        // eslint-disable-next-line
      }, [daily, selectedCard]);
    return (
        <>
            <div className='cardWrap'>
                <ul className='cardList'>
                    {
                       daily && daily.length > 0 ? daily.map((item, index)=>{
                        if (index < 7){
                            return (
                                    <SingleCard className={index === selectedCard ? "active" : ""} onClick={()=>{
                                        setSelectedCard(index)
                                        updateCurrent();
                                    }} item={item} key={index} />
                                )
                        }
                        return '';
                            
                        }) : ''
                    }
                </ul>
            </div>
        </>
    )
}

export default WeekInfo;