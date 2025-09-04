import ImageMosaic from "../../components/HomePage/ImageMosaic";
import Navbar from "../../components/Navbar";
import { TextFade } from "../../components/TextFade";


export default function HeroSection() {
  return (
    <div
      className=" w-full  md:px-[15vw] px-[10vw] py-8 relative flex flex-col items-start "
    >
      <ImageMosaic/>
      <Navbar variant="style2" />
      <TextFade className=" h-full w-full flex flex-col items-center text-center justify-end gap-[1.5vw] py-[2vw] leading-none pt-[20vw]">
            <h1 className="text-[5vw] font-bold "> KAOUAFOOD <br /> LE SITE</h1>
            <p className="text-[1.1vw]">Des questions ? Posez vos questions a notre <br /> chat bot.</p>
            <div className="bg-[#D70F38] text-white font-semibold rounded-full px-[2vw] py-[0.5vw] text-[1.2vw] ">DÉCOUVREZ TOUT CA!</div>
      </TextFade>
    </div>
  );
}
