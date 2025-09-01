import ContactUs from "@/components/Contact-us/contact-us";
import ContactUsFill from "@/components/Contact-us/contact-us-form";
export default function ContactUsPage () {
    return(
      <div className="flex flex-col md:flex-row justify-center">
        <ContactUs />
        <ContactUsFill />
      </div>
            
    )
}

