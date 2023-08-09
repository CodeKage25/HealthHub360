import { useCallback, useEffect, useState } from "react";
import {
    httpGetHospitals
} from "./requests";
import QueryParamsType from '../../../helpers/param';
import HospitalsType from '../../../helpers/hospital';
import randomImages from '../../../helpers/randomImages';

function useHospitals(queryParams: QueryParamsType) {
    const [hospitals, saveHospitals] = useState([]);

    const getHospitals = useCallback(async () => {
        const fetchedHospitals = await httpGetHospitals(queryParams);
        const hospitalsWithImages = fetchedHospitals.map((hospital: any) => {
            const randomIndex = Math.floor(Math.random() * randomImages.length);
            const imageUrl = randomImages[randomIndex];
            return {
                ...hospital,
                image: imageUrl,
              };
        })
        saveHospitals(hospitalsWithImages);
    }, []);

    useEffect(() => {
        getHospitals();
    }, [getHospitals]);
    return hospitals;
}

export default useHospitals;