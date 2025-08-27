import ContactUs from "@/components/Contact-us/contact-us";
import ContactUsFill from "@/components/Contact-us/contact-us-form";
export default function ContactUsPage () {
    return(
        <div className = "flex gap-15 justify-center">
          <ContactUs />
          <ContactUsFill />
        </div>
      
    )
}

