import Image from "next/image";

const HomeBanner = () => {
    return ( 
        <div className="relative bg-[#e4e4e4] rounded-lg">
            <div className ="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                <div className=",b-8 md:mb-0 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Tech Reviews</h1>
                    <p className="text-lg md:text-xl text-black mb-2">One stop for all tech reviews</p>
                </div>

                <div className ="w-1/2 relative aspect-video">
                    <Image src='/Tec.png' fill alt="Logo" className="object-contain" />
                </div>
            </div>
        </div>
     );
}
 
export default HomeBanner;