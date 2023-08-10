import HospitalsType from '../helpers/hospital';
import { useMemo } from "react";
import Button from '../design-system/Button/Button'
interface HospitalsProps {
    hospitals: HospitalsType[];
  }
const Hospitals: React.FC<HospitalsProps> = ({ hospitals }) => {
    const hospitalBody = useMemo(() => {
        return hospitals.map((hospital, index) => (
        <div key={index} className="flex flex-col items-start gap-4 pl-4 pr-4 cursor-pointer shadow-lg hover:shadow-light-black">
                <div className="flex items-center justify-center pt-4">
                    <img className="rounded" src={hospital.image} alt="hospital image" />
                </div>
                <div className="flex flex-col items-start gap-3">
                    <div className="flex flex-col items-start gap-1">
                        <div>{hospital.name}</div>
                        <div>{hospital.location}, { hospital.state}</div>
                    </div>
                    <div>&#11088; <span>4.5</span></div>
                </div>
          </div>  
        ))
    }, [hospitals])
    return (
        <div className="inline-flex flex-col items-center w-[100%] pt-20 gap-[32px]">
            <h3 className="text-light-black font-satoshi text-[32px] non-italic font-bold leading-8 pb-6">Hospitals near you</h3>
            <div className="grid grid-cols-4 grid-rows-2 gap-[16px]">{ hospitalBody }</div>
            <div>
                <Button
                styles={'rounded-lg bg-blue w-[150px] flex justify-center items-center h-[54px] text-white font-satoshi non-italic text-base leading-6 font-medium hover:bg-light-black'}
                onClick={() => {}}
                type={'button'}
                title={'Explore More'}
                disabled={false}
                >
                    Explore More
                </Button>
            </div>
        </div>
    )
}

export default Hospitals