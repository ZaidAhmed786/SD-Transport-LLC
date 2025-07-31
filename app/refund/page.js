
import Layout from "@/components/layout/Layout"
export default function Refund() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={3} breadcrumbTitle="Refund Policy">
                <section className="contact-section pt-space pb-space">
         <div className="container my-5">
      <h5 className="pb-5">Refund Policy</h5>
      <h2>Your Rights Regarding Refunds</h2>
      <p className="my-3"><em>Last updated: Apr 4, 2025</em></p>

      <p className="my-3">
        A full refund will be issued if you choose to cancel our services within 5 days of making the payment. If you terminate our services after the initial 5 days, you will be charged an amount equivalent to the working hours put into the project. The balance will be credited to your account within 45 days of cancellation.
      </p>
   


      <h5 className="mt-5">  ❌ Cancellation Policy</h5>
      <p className="my-3">Cancellation of any agreed upon service should be done 10 days prior to the start of the next billing cycle. Cancellations made after the start of the billing cycle will result in an amount equivalent to the working hours put into the project during that month being billable.</p>
      <p className="my-3">If you signed up for our services but did not make use of them, you are still entitled to pay us. The amount of refund will be credited to the account from which the payment was made within 45 days of service cancellation.</p>

        <p className="mt-5">
            Write us at: <a href="mailto:refunds@sdtransportservice.com" className="text-primary">refunds@sdtransportservice.com</a> 
        </p>
    </div>
                </section>

            </Layout>
        </>
    )
}