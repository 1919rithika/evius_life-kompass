import Breadcrumb from "@/components/ui/breadcrumb";
import Footer from "@/components/ui/footer";
export default function Imprint() {
  return (
    <>
      <Breadcrumb />
      <div className="container mx-auto px-4 py-8 mt-10 max-w-6xl">
  <h1 className="text-3xl font-bold mb-20 text-center">Imprint</h1>
  <div className="prose max-w-none">
    <h2 className="text-2xl font-semibold mt-8 mb-4">Legal Information</h2>
    <p className="mb-4">
      This imprint is published in accordance with Section 5 of the German Telemedia Act (TMG). The information provided here is intended to comply with statutory requirements and ensure transparency.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Service Provider</h2>
    <p className="mb-4">
      <strong>Company Name:</strong> Evius Life GmbH <br />
      <strong>Address:</strong> 123 Innovation Avenue, Tech Park, Berlin, Germany <br />
      <strong>Managing Directors:</strong> John Doe, Jane Smith
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
    <p className="mb-4">
      <strong>Phone:</strong> +49 30 123456789 <br />
      <strong>Email:</strong> info@eviuslife.com <br />
      <strong>Website:</strong>{" "}
      <a href="https://www.eviuslife.com" className="text-blue-600 hover:underline">
        www.eviuslife.com
      </a>
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Commercial Register</h2>
    <p className="mb-4">
      <strong>Registration Court:</strong> Local Court of Berlin <br />
      <strong>Registration Number:</strong> HRB 123456
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Tax Information</h2>
    <p className="mb-4">
      <strong>VAT Identification Number:</strong> DE123456789 <br />
      <strong>Tax Office:</strong> Tax Office Berlin-Mitte
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Editorial Responsibility</h2>
    <p className="mb-4">
      The individual responsible for the content of this website under Section 18 MStV (German State Media Treaty):
    </p>
    <p className="mb-4">
      John Doe <br />
      Address: 123 Innovation Avenue, Tech Park, Berlin, Germany <br />
      Phone: +49 30 123456789 <br />
      Email: john.doe@eviuslife.com
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Disclaimer</h2>
    <p className="mb-4">
      The content on this website has been created with the utmost care. However, we cannot guarantee the accuracy, completeness, or up-to-date nature of the information. As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obliged to monitor transmitted or stored third-party information or investigate circumstances that indicate illegal activity.
    </p>
    <p className="mb-4">
      Obligations to remove or block the use of information under general laws remain unaffected. Any liability in this respect is only possible from the point in time at which we become aware of a specific legal violation. Upon becoming aware of such violations, we will remove this content immediately.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Links to External Websites</h2>
    <p className="mb-4">
      Our website contains links to external websites over which we have no control. Therefore, we cannot accept any responsibility for their content. The respective provider or operator of these sites is always responsible for their content. The linked sites were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.
    </p>
    <p className="mb-4">
      However, permanent monitoring of the linked pages' content is not reasonable without concrete evidence of a violation. If we become aware of any legal violations, we will remove such links immediately.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
    <p className="mb-4">
      All content, texts, images, and graphics used on this website are protected by copyright law. Any reproduction, processing, distribution, or any form of commercialization of such material requires prior written consent from Evius Life GmbH or the respective rights holder.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Online Dispute Resolution</h2>
    <p className="mb-4">
      The European Commission provides a platform for online dispute resolution (ODR):{" "}
      <a
        href="https://ec.europa.eu/consumers/odr"
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://ec.europa.eu/consumers/odr
      </a>
    </p>
    <p className="mb-4">
      We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Liability for Advertisements</h2>
    <p className="mb-4">
      The respective author or distributor is solely responsible for the content of advertisements, banners, and external promotions displayed on our website.
    </p>

    <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to This Imprint</h2>
    <p className="mb-4">
      We reserve the right to make changes to this imprint to reflect updates in legal regulations or changes to our services. Please refer back to this page regularly to stay informed about the latest information.
    </p>
  </div>
      </div>
      <Footer/>
    </>
  );
}
