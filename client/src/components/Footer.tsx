'use client';
const Footer = () => {
    return (
    <div className="flex max-md:flex-col max-md:items-center max-md:justify-between justify-between items-start pt-8 pb-8 pr-20 pl-20 w-[100%]">
        <div className="max-md:pb-12">
        <span className="font-satoshi text-2xl not-italic font-bold text-blue tracking-lesstightest">
          HealthHub
        </span>
        <span className="font-satoshi text-base not-italic font-bold color-light-black tracking-lessertightest">
          -360
        </span>
      </div>

      <div className="flex max-md:flex-col max-md:items-center items-start gap-20 w-[50%]">
        <div className="flex flex-col max-md:items-center items-start gap-4">
        <h5 className="text-lightash font-satoshi text-sm leading-5 font-medium not-italic">Resources</h5>
        <ul className="list-none flex max-md:items-center flex-col gap-4">
        <li className="text-light-black font-satoshi text-base font-medium not-italic leading-6 cursor-pointer">Blog</li>
        <li className="text-light-black font-satoshi text-base font-medium not-italic leading-6 cursor-pointer">Help center</li>
        <li className="text-light-black font-satoshi text-base font-medium not-italic leading-6 cursor-pointer">FAQs</li>
        </ul>
        </div>
        <div className="flex flex-col max-md:items-center items-start gap-4">
        <h5 className="text-lightash font-satoshi text-sm leading-5 font-medium not-italic">Company</h5>
        <ul className="list-none flex max-md:items-center flex-col gap-4">
        <li className="text-light-black font-satoshi text-base font-medium not-italic leading-6 cursor-pointer">About us</li>
        <li className="text-light-black font-satoshi text-base font-medium not-italic leading-6 cursor-pointer">Book Apppointments</li>
        <li className="text-light-black font-satoshi text-base font-medium not-italic leading-6 cursor-pointer">Careers</li>
        <li className="text-light-black font-satoshi text-base font-medium not-italic leading-6 cursor-pointer">Explore</li>
        </ul>
        </div>
        <div className="flex flex-col max-md:items-center items-start gap-4">
        <h5 className="text-lightash font-satoshi text-sm leading-5 font-medium not-italic">Legal</h5>
        <ul className="list-none flex max-md:items-center flex-col gap-4">
        <li className="text-light-black font-satoshi text-base font-medium not-italic leading-6 cursor-pointer">Terms of use</li>
        <li className="text-light-black font-satoshi text-base font-medium not-italic leading-6 cursor-pointer">Privacy Policy</li>
        </ul>
        </div>
      </div>
    </div>
        )
};

export default Footer