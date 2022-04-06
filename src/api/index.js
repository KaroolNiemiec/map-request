import axios from "axios";
import React from "react";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async ({bounds}) => {
    
    try {
        
        const { data: { data } } = await axios.get(URL, {
            params: {
                bl_latitude: bounds.sw.lat,
                tr_latitude: bounds.ne.lat,
                bl_longitude: bounds.sw.lng,
                tr_longitude: bounds.ne.lng,
            },
            headers: {
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                'X-RapidAPI-Key': '52c60e3bc7msh33715b5dbc5bda6p14918bjsn05e2c2bcefd3'
            }
        })
        return data;
    } catch (error) {
        console.log(error)
    }
}
