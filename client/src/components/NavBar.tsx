import Button from '../design-system/Button/Button'
const NavBar = () => {
  return (
    <nav className="bg-white h-[94px] flex justify-between items-center pt-5 pb-5 pr-20 pl-20">
      <div className=""><span className="font-satoshi text-2xl non-italic font-bold text-blue tracking-lesstightest">HealthHub</span><span className="font-satoshi text-base non-italic font-bold color-light-black tracking-lessertightest">-360</span></div>
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-8">
          <div>
            <Button
              handleClick={() => {}}
              styles={'font-satoshi text-ash non-italic font-medium tracking-lesstight hover:text-light-black'}
              type={'button'}
              title={'Home'}
              disabled={false}
            >
              Home
            </Button>
          </div>
          <div>
            <Button
              handleClick={() => {}}
              styles={'font-satoshi text-ash non-italic font-medium tracking-lesstight hover:text-light-black'}
              type={'button'}
              title={'About Us'}
              disabled={false}
            >
              About Us
            </Button>
          </div>
          <div>
            <Button
              handleClick={() => {}}
              styles={' font-satoshi text-ash non-italic font-medium tracking-lesstight hover:text-light-black'}
              type={'button'}
              title={'Explore'}
              disabled={false}
            >
              Explore
            </Button>
          </div>
          <div>
            <Button
              handleClick={() => {}}
              styles={'font-satoshi text-ash non-italic font-medium tracking-lesstight hover:text-light-black'}
              type={'button'}
              title={'Contact'}
              disabled={false}
            >
              Contact
            </Button>
          </div>
        </div>
        <div>
          <Button
            handleClick={() => {}}
            styles={'flex items-center w-[141px] justify-center pt-4 pb-4 font-satoshi text-base font-medium not-italic rounded-lg bg-blue gap-2 tracking-lesstight text-white hover:bg-regal-blue'}
            type={'button'}
            title={'Get Started'}
            disabled={false}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
