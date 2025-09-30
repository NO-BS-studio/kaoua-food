import { useTranslation } from "react-i18next";

export default function ContactFormSection() {
    const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="mt-16 flex md:flex-row gap-4 flex-col-reverse  items-stretch">

        
        <div className="flex-col gap-4 flex md:w-1/2 w-full  md:h-auto h-[100vw] ">
          <h2 className="text-3xl md:text-[50px] font-extrabold">KAOUAFOOD</h2>
          <div className="flex items-stretch w-full relative h-full ">
            <img
              src="/images/map.png"
              alt="Map"
              className="rounded-xl object-cover h-full"
            />
            <div className="bg-[#b0133b] text-white text-[3vw] md:text-[1vw] px-3 py-2 rounded-xl shadow-xl font-semibold absolute bottom-0">
              Adresse : Domaine Halimi Property N°260 lot 193 Section 03 local
              B, Hamadi W.Boumerdes – Algeria
            </div>
          </div>
        </div>

        <div className="md:hidden flex w-full justify-end md:text-[1vw] text-[3vw]">
        <button className="bg-black text-white px-6 py-2 my-[2vw] rounded-lg hover:bg-gray-800 flex md:w-[15%] w-[40%] self-end justify-between">
          {t("contact.envoyer")} <span>→</span>
        </button>
      </div>


        <div className="flex flex-col md:w-1/2 ">
          <h3 className="md:text-[1vw] font-bold mb-4">{t("contact.form")}</h3>
          <form className="flex flex-col gap-4 h-full">
            <input
              type="text"
              placeholder="Nom et Prénom"
              className="border rounded-3xl px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Entreprise"
              className="border rounded-3xl px-4 py-2 w-full"
            />
            <input
              type="text"
              placeholder="Téléphone"
              className="border rounded-3xl px-4 py-2 w-full"
            />
            <textarea
              placeholder="Message"
              className="border rounded-3xl px-4 py-2 w-full h-full resize-none"
              
            ></textarea>
          </form>
        </div>
      </div>



      <div className="md:flex hidden w-full justify-end md:text-[1vw] text-[3vw]">
        <button className="bg-black text-white px-6 py-2 my-[2vw] rounded-lg hover:bg-gray-800 flex md:w-[15%] w-[40%] self-end justify-between">
          {t("contact.envoyer")} <span>→</span>
        </button>
      </div>

    </div>
  );
}
