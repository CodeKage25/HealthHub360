import HospitalsType from '../../helpers/hospital'
import { useMemo } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import Button from '../../design-system/Button/Button'
interface HospitalsProps {
  hospitals: HospitalsType[]
  searchQuery: string
  isLoading: boolean
}
const Hospitals: React.FC<HospitalsProps> = ({
  hospitals,
  searchQuery,
  isLoading,
}) => {
  const filteredHospitals = useMemo(() => {
    return hospitals.filter(
      (hospital) =>
        hospital.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hospital.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [hospitals, searchQuery])

  const hospitalBody = useMemo(() => {
    return filteredHospitals.map((hospital, index) => (
      <div
        key={index}
        className="flex flex-col items-start gap-4  cursor-pointer shadow-lg hover:shadow-light-black"
      >
        <div className="flex items-center justify-center pt-4 w-[100%]">
          <img className="rounded " src={hospital.image} alt="hospital image" />
        </div>
        <div className="flex flex-col items-start gap-3 pl-2">
          <div className="flex flex-col items-start gap-1">
            <div className="text-light-black font-satoshi text-xl non-italic leading-7 font-medium">
              {hospital.name}
            </div>
            <div className="text-ash font-satoshi text-base leading-6 font-normal">
              {hospital.location}, {hospital.state}
            </div>
          </div>
          <div>
            &#11088;{' '}
            <span className="text-light-black font-satoshi text-base leading-6 non-italic font-medium">
              4.5
            </span>
          </div>
        </div>
      </div>
    ))
  }, [filteredHospitals])
  return (
    <div className="inline-flex flex-col items-center w-[100%] pt-20 gap-[32px]">
      <h3 className="text-light-black font-satoshi text-[32px] non-italic font-bold leading-8 pb-6">
        Hospitals near you
      </h3>
      {/* Show loader while isLoading is true */}
      {isLoading ? (
        <div>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#016FEB"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </div>
      ) : (
        // Render hospitalBody when not loading
        <div className="grid max-sm:grid-cols-1 max-sm:grid-rows-8 max-md:grid-cols-2 max-md:grid-rows-4 grid-cols-4 grid-rows-2 gap-[16px] pr-6 pl-6">
          {hospitalBody}
        </div>
      )}
      <div>
        <Button
          styles={
            'rounded-lg bg-blue w-[150px] flex justify-center items-center h-[54px] text-white font-satoshi non-italic text-base leading-6 font-medium hover:bg-light-black'
          }
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
