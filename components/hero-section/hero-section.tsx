import { home_constants } from "@/utils/constants/home"
import NavBar from "./nav-bar"
import Button from "../button"
import Image from "next/image"

const HeroSection = () => {
  return (
    <>
        <NavBar />
        <div className="pt-[60px] max-w-[1280px] mx-auto px-[40px] lg:grid lg:grid-cols-[0.75fr_1fr] pb-10 gap-x-4 border-b border-content_color/50">
            <div className="lg:h-fit lg:my-auto flex flex-col items-center">
                <div className="border-b border-content_color/50 pb-10">
                    <div className="mb-5">
                        <h1 className="text-title_color leading-[1.3] my-[10px] tracking-[.01em] text-[35px] md:text-[45px] font-semibold text-center lg:text-start"> 
                            {home_constants.hero.head} 
                        </h1>
                        <p className="text-content_color font-sans text-[17px] text-center lg:text-start mb-[10px]"> 
                            {home_constants.hero.subscript} 
                        </p>
                    </div>
                    <div className="flex flex-col items-center sm:flex-row mx-auto w-fit lg:mx-0">
                        <Button 
                            label="Get Started"
                            variant="dark"
                            className="mb-5 sm:mr-5 sm:mb-0"
                        />
                        <a className="text-[20px] text-title_color hover:text-primary focus:text-primary transition-all duration-75 font-semibold" href=""> How it Work </a>
                    </div>
                </div>
                <div className="sm:px-12 pt-[40px] md:pt-[60px] items-center w-full sm:w-fit flex flex-col sm:flex-row lg:justify-around lg:w-full gap-x-5 relative">
                    <Image 
                        src={home_constants.images.support_center.src}
                        alt={home_constants.images.support_center.alt}
                        height={141}
                        width={110} 
                    />
                    <div className="w-[2px] h-[123px] bg-content_color/50 hidden sm:block" />
                    <div className="flex flex-col gap-y-[10px] items-center text-center sm:text-start sm:items-start">
                        <h2 className="text-[26px] text-title_color font-semibold"> 5 Star Awards </h2>
                        <p className="text-[18px] text-content_color"> For Customer Services </p>
                        <div className="flex gap-x-4 items-center">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Image 
                                    key={index} // Provide a unique key for each image
                                    src={home_constants.images.star.src}
                                    alt={home_constants.images.star.alt}
                                    height={31}
                                    width={30}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between items-center absolute w-full h-full -z-10 left-0">
                        <Image 
                            src={home_constants.images.support_left.src}
                            alt={home_constants.images.support_left.alt}
                            height={126}
                            width={51} 
                        />
                        <Image 
                            src={home_constants.images.support_right.src}
                            alt={home_constants.images.support_right.alt}
                            height={126}
                            width={51} 
                        />
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full mt-[60px] lg:mt-0">
                <Image 
                    src={home_constants.images.banner.src}
                    alt={home_constants.images.banner.alt}
                    width={0}
                    height={0}
                    sizes="(max-width: 767px) 92vw, (max-width: 991px) 708px, (max-width: 1279px) 94vw, 1200px"
                    className="w-full h-auto"
                />
            </div>
        </div>
        <div className="invisible lg:visible absolute top-0 xl:w-[64%] [@media(min-width:1440px)]:w-[936px] [@media(min-width:1556px)]:w-[1100px] right-0 -z-10">
            <Image 
                src={home_constants.images.banner_bg.src}
                alt={home_constants.images.banner.alt}
                width={936}
                height={936}
                sizes="100vw"
                className="w-full h-auto"
            />
        </div>
    </>
  )
}
export default HeroSection