import { useState } from "react";
import { useTranslation } from "react-i18next";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "emailjs-com";

export default function ContactFormSection() {
  const { t, i18n } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_axnr2ve",
        "template_prw5uim",
        formData,
        "9uyMYvvBSdrOb1Kb-"
      );
      toast.success("Message sent successfully!");
      setFormData({ name: "", company: "", email: "", message: "" });
    } catch (err) {
      console.error("Email send error", err);
      toast.error("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="mt-16 flex md:flex-row gap-4 flex-col-reverse  items-stretch">
        <div className="flex-col gap-4 flex md:w-1/2 w-full  md:h-auto h-[100vw] ">
          <h2 className="text-3xl md:text-[50px] font-extrabold">KAOUAFOOD</h2>
          <div className="flex items-stretch w-full relative h-full ">
            <img
              src="/images/map.png"
              alt={t("footer.map_alt")}
              className="rounded-xl object-cover h-full"
            />
            <div className="bg-[#b0133b] text-white text-[3vw] md:text-[1vw] px-3 py-2 rounded-xl shadow-xl font-semibold absolute bottom-0">
              {t("contact.address")}
            </div>
          </div>
        </div>

        <div className="md:hidden flex w-full justify-end md:text-[1vw] text-[3vw]">
          <button
            type="button"
            onClick={submitForm}
            disabled={isSubmitting}
            aria-busy={isSubmitting}
            className={`bg-black text-white px-6 py-2 my-[2vw] rounded-lg hover:bg-gray-800 flex md:w-[15%] w-[40%] self-end justify-between ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}
          >
            {isSubmitting ? t("contact.sending") || "Sending..." : t("contact.envoyer")} <span>→</span>
          </button>
        </div>

        <div className="flex flex-col md:w-1/2 ">
          <h3 className="md:text-[1vw] font-bold mb-4">{t("contact.form")}</h3>
          <form onSubmit={submitForm} className="flex flex-col gap-4 h-full">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder={t("contact.placeholders.name")}
              className="border rounded-3xl px-4 py-2 w-full"
            />
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              placeholder={t("contact.placeholders.company")}
              className="border rounded-3xl px-4 py-2 w-full"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder={t("contact.placeholders.phone")}
              className="border rounded-3xl px-4 py-2 w-full"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.placeholders.message")}
              className="border rounded-3xl px-4 py-2 w-full h-full resize-none"
            ></textarea>
          </form>
        </div>
      </div>

      <div className="md:flex hidden w-full justify-end md:text-[1vw] text-[3vw]">
        <button
          type="button"
          onClick={submitForm}
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className={`bg-black font-bold text-white px-6 py-2 my-[2vw] rounded-lg hover:bg-gray-800 flex md:w-[15%] w-[40%] self-end justify-between items-center ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}
        >
          {isSubmitting ? t("contact.sending") || "Sending..." : t("contact.envoyer")} {" "}
          <span className="ltr:hidden text-[1.5vw]">←</span>
          <span className="rtl:hidden text-[1.5vw]">→</span>
        </button>
      </div>
      <Toaster />
    </div>
  );
}
