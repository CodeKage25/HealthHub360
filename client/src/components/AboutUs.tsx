import Button from '../design-system/Button/Button'
const AboutUs = () => {
  return (
    <div className="max-md:pt-16 pt-24 pb-16 w-[100%] inline-flex flex-col items-center gap-[60px]">
      <div className="flex flex-col max-md:items-center items-start gap-[8px]">
        <h5 className="text-blue font-satoshi text-sm not-italic font-medium leading-5 lg:pr-24">
          ABOUT US
        </h5>
        <div className="flex max-md:flex-col max-md:gap-[30px] max-md:items-center items-start gap-[150px]">
          <h3 className="text-light-black font-satoshi not-italic max-sm:text-2xl text-[32px] leading-8 font-bold lg:pr-24">
            We aim to provide easy access to
            <br /> the best health care services
          </h3>
          <div className="flex flex-col max-md:items-center items-start gap-[16px]">
            <p className="text-lightash max-sm:text-center text-base leading-4 font-normal font-satoshi not-italic lg:pl-24">
              Healthhub360 is a platform where users can search for hosiptals in
              their areas,
              <br /> export hospital details for your records and enhance your
              healthcare <br /> experience by connecting with others and sharing
              valuable resources.
            </p>
            <div className="flex justify-center items-center">
              <Button
                styles={
                  'font-satoshi text-blue text-base leading-4 not-italic font-medium lg:pl-24'
                }
                onClick={() => {}}
                type={'button'}
                title={'View our services'}
                disabled={false}
              >
                View our services{' '}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ display: 'inline' }}
                >
                  <g id="ion:arrow-forward">
                    <path
                      id="Vector"
                      d="M10.4688 4.375L16.0938 10L10.4688 15.625M15.3125 10H3.90625"
                      stroke="#016FEB"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-sm:w-[350px] max-md:w-[500px]">
        <img src="/images/aboutus.png" alt="about us" />
      </div>
    </div>
  )
}

export default AboutUs
