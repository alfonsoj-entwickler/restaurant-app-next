import { useState, useEffect, createContext } from "react";

const RestaurantContext = new createContext({});

const RestaurantProvider = ({children}: any) => {
    return(
        <RestaurantContext.Provider value={{}}>
            {children}
        </RestaurantContext.Provider>
    )
}

export {
    RestaurantProvider
}

export default RestaurantContext;