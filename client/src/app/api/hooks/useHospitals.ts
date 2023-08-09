import { useCallback, useEffect, useState } from "react";
import {
    httpGetHospitals
} from "./requests";
import QueryParamsType from '../../../helpers/param'

// interface QueryParamsType {
//     page?: number;
//     limit?: number;
//     sortBy?: string;
//     order?: "asc" | "desc";
//   }

function useHospitals(queryParams: QueryParamsType) {
    const [hospitals, saveHospitals] = useState([]);

    const getHospitals = useCallback(async () => {
        const fetchedHospitals = await httpGetHospitals(queryParams);
        saveHospitals(fetchedHospitals)
    }, []);

    useEffect(() => {
        getHospitals();
    }, [getHospitals]);
    return hospitals;
}

export default useHospitals;