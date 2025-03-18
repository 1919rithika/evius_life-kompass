import Breadcrumb from "@/components/ui/breadcrumb";
import Footer from "@/components/ui/footer";

export default function Cookies() {
  return (
    <>
      <Breadcrumb />
      <div className="container mx-auto px-4 py-8 mt-10 max-w-6xl">
        <h1 className="text-3xl font-bold mb-20 text-center">Cookie Policy</h1>
        <div className="prose max-w-none">
          <p>This is our cookie policy explaining how we use cookies.</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences, analyzing how you use our site, and supporting our website&apos;s functionality.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Cookies</h2>
          <p className="mb-4">
            At Evius Life, we use cookies for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Ensuring our website functions properly</li>
            <li>Improving website performance and speed</li>
            <li>Remembering your preferences and settings</li>
            <li>Analyzing how visitors use our website</li>
            <li>Personalizing your experience</li>
            <li>Supporting our security features</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and maintaining your session. The website cannot function properly without these cookies.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Performance Cookies</h3>
          <p className="mb-4">
            Performance cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve our website&apos;s performance and user experience.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Functionality Cookies</h3>
          <p className="mb-4">
            These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features. They may also be used to provide services you have requested.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
          <p className="mb-4">
            We use analytics cookies to gather information about how visitors use our website. This helps us improve our website&apos;s structure and content. These cookies collect information in an anonymous form, including the number of visitors, where visitors came from, and which pages they visited.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cookie Duration</h2>
          <p className="mb-4">
            Cookies we use can be categorized based on how long they remain on your device:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Session Cookies:</strong> These are temporary cookies that expire when you close your browser.</li>
            <li><strong>Persistent Cookies:</strong> These remain on your device until they expire or you delete them manually.</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Cookies</h2>
          <p className="mb-4">
            Some cookies are placed by third-party services that appear on our pages. We use these services to enhance our website&apos;s functionality and analyze usage patterns. These third-party services include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Google Analytics for website traffic analysis</li>
            <li>Authentication services for secure login</li>
            <li>Social media plugins for content sharing</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Managing Cookies</h2>
          <p className="mb-4">
            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by clicking on the appropriate opt-out links provided in the cookie banner or by adjusting your browser settings.
          </p>

          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>View cookies stored on your device</li>
            <li>Allow, block, or delete cookies</li>
            <li>Set preferences for certain websites</li>
            <li>Configure browser settings to reject all cookies</li>
          </ul>

          <p className="mb-4">
            Please note that blocking certain cookies may impact your experience on our website, as some features may not function properly.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Browser-Specific Instructions</h2>
          <p className="mb-4">
            To manage cookies in your browser, follow these instructions:
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3">Google Chrome</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>Click the menu icon (three dots) at the top right</li>
            <li>Select "Settings"</li>
            <li>Click "Privacy and security"</li>
            <li>Choose "Cookies and other site data"</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-3">Mozilla Firefox</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>Click the menu icon (three lines) at the top right</li>
            <li>Select "Options" (Windows) or "Preferences" (Mac)</li>
            <li>Choose "Privacy & Security"</li>
            <li>Navigate to the "Cookies and Site Data" section</li>
          </ol>

          <h3 className="text-xl font-semibold mt-6 mb-3">Safari</h3>
          <ol className="list-decimal pl-6 mb-4">
            <li>Click "Safari" in the top menu</li>
            <li>Choose "Preferences"</li>
            <li>Select the "Privacy" tab</li>
            <li>Manage your cookie settings</li>
          </ol>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Data Collection and Privacy</h2>
          <p className="mb-4">
            The information we collect through cookies helps us understand our users better and improve our services. We handle all data in accordance with our Privacy Policy and applicable data protection laws.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Updates to This Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for operational, legal, or regulatory reasons. We encourage you to periodically review this page to stay informed about our use of cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Email: privacy@eviuslife.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Address: 123 Privacy Street, Digital City, DC 12345</li>
          </ul>

          <p className="mb-4">
            By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
}
