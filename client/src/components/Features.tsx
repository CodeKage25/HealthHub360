'use client';
const Features = () => {
    return (
        <div className="flex max-md:flex-col max-md:items-center items-start pt-10 pb-10 pr-20 pl-20 bg-blue gap-[60px]">
            <div className="flex flex-col items-start gap-[12px] flex-[1_0_0]">
                <div className="flex items-start p-2.5 gap2.5 rounded-[60px] bg-white">
                    <img src="/icons/search.svg" alt="search icon" />
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                    <h5 className="text-white font-satoshi text-xl font-medium not-italic leading-7">Search Hospitals</h5>
                    <p className="text-white opacity-80 font-satoshi text-base leading-6 font-normal not-italic">Find the best hospitals near you without<br/> any hassle</p>
                </div>
            </div>
            <div className="flex flex-col items-start gap-[12px] flex-[1_0_0]">
                <div className="flex items-start p-2.5 gap2.5 rounded-[60px] bg-white">
                    <img src="/icons/hospital-outline.svg" alt="hospital icon" />
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                    <h5 className="text-white font-satoshi text-xl font-medium not-italic leading-7">Access Best Doctors</h5>
                    <p className="text-white opacity-80 font-satoshi text-base leading-6 font-normal not-italic">Get full access to the best doctors in the<br/> market to attend to you</p>
                </div>
            </div>
            <div className="flex flex-col items-start gap-[12px] flex-[1_0_0]">
                <div className="flex items-start p-2.5 gap2.5 rounded-[60px] bg-white">
                    <img src="/icons/heart-line.svg" alt="heart icon" />
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                    <h5 className="text-white font-satoshi text-xl font-medium not-italic leading-7">Favorite Hospitals</h5>
                    <p className="text-white opacity-80 font-satoshi text-base leading-6 font-normal not-italic">Always gain access to your favorite<br/> hospitals anytime.</p>
                </div>
            </div>
            <div className="flex flex-col items-start gap-[12px] flex-[1_0_0]">
                <div className="flex items-start p-2.5 gap2.5 rounded-[60px] bg-white">
                    <img src="/icons/share-outline.svg" alt="share icon" />
                </div>
                <div className="flex flex-col items-start gap-1 self-stretch">
                    <h5 className="text-white font-satoshi text-xl font-medium not-italic leading-7">Share Hospitals</h5>
                    <p className="text-white opacity-80 font-satoshi text-base leading-6 font-normal not-italic">Introduce your friends to hospitals you like<br/> for the best treatment</p>
                </div>
            </div>
        </div>
    )
};

export default Features