'use client';
import { useState } from 'react';
import Button from '../design-system/Button/Button'
const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="bg-white h-[94px] lg:w-[100%] md:w-[100%] lg:flex  sm:w-[100%] justify-between items-center pt-6 lg:pt-5 lg:pb-5 pl-6 md:pl-6 lg:pr-20 lg:pl-20">
      <div className=""><span className="font-satoshi text-2xl non-italic font-bold text-blue tracking-lesstightest">HealthHub</span><span className="font-satoshi text-base non-italic font-bold color-light-black tracking-lessertightest">-360</span></div>
      <section className="MOBILE-MENU lg:hidden">
          <div
            className="HAMBURGER-ICON absolute top-0 right-0 px-8 py-8 space-y-2"
            onClick={() => setToggle((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-5 animate-pulse bg-gray-600"></span>
          </div>

          <div className={toggle ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setToggle(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex pt-24 flex-col justify-between items-center gap-8">
        <div className="flex flex-col gap-8">
          <div>
            <Button
              onClick={() => {}}
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
              onClick={() => {}}
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
              onClick={() => {}}
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
              onClick={() => {}}
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
            onClick={() => {}}
            styles={'flex items-center w-[141px] justify-center pt-4 pb-4 font-satoshi text-base font-medium not-italic rounded-lg bg-blue gap-2 tracking-lesstight text-white hover:bg-regal-blue'}
            type={'button'}
            title={'Get Started'}
            disabled={false}
          >
            Get Started
          </Button>
        </div>
      </div>
          </div>
        </section>
      

      <div className="DESKTOP-MENU hidden lg:flex items-center gap-8">
        <div className="flex items-center gap-8">
          <div>
            <Button
              onClick={() => {}}
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
              onClick={() => {}}
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
              onClick={() => {}}
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
              onClick={() => {}}
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
            onClick={() => {}}
            styles={'flex items-center w-[141px] justify-center pt-4 pb-4 font-satoshi text-base font-medium not-italic rounded-lg bg-blue gap-2 tracking-lesstight text-white hover:bg-regal-blue'}
            type={'button'}
            title={'Get Started'}
            disabled={false}
          >
            Get Started
          </Button>
        </div>
      </div>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </nav>
  )
}

export default NavBar
