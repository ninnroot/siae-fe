import MemberShipFill from "@/components/Membership-form/membership-fill";
import MemberShipFooter from "@/components/Membership-form/membership-form-footer";
import FormHeader from "@/components/Membership-form/membership-form-header";


export default function MembershipFormPage(){
    return (
        <>
        <FormHeader />
        <MemberShipFill />
        <MemberShipFooter />

        </>
    )
}