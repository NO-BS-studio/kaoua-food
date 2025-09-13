import ImageMosaic from "../../components/HomePage/ImageMosaic";
import Navbar from "../../components/Navbar";
import { TextFade } from "../../components/TextFade";


export default function HeroSection() {
  return (
    <div
      className=" w-full  md:px-[15vw] px-[10vw] py-8  relative flex flex-col items-start overflow-hidden "
    >
      <ImageMosaic/>
      <Navbar variant="style2" />
      <TextFade className=" h-full w-full flex flex-col items-center text-center justify-end gap-[1.5vw] py-[2vw] leading-none md:pt-[20vw] pt-[35vw]">
            <h1 className="md:text-[5vw] text-[10vw] font-bold "> KAOUAFOOD <br /> LE SITE</h1>
            <p className="md:text-[1.1vw] text-[2.2vw]">Des questions ? Posez vos questions a notre <br /> chat bot.</p>
            <div className="bg-[#D70F38] text-white font-semibold rounded-full md:px-[2vw] px-[4vw] py-[1vw] md:py-[0.5vw] md:text-[1.2vw] text-[2.4vw] ">DÉCOUVREZ TOUT CA!</div>
      </TextFade>
    </div>
  );
}
