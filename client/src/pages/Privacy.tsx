import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-light py-20 md:py-32">
          <div className="container">
            <h1 className="mb-6" style={{ fontFamily: "'Chewy', cursive", color: "#FF6B4A" }}>Privacy Policy</h1>
            <p className="text-lg" style={{ fontFamily: "'Space Mono', monospace" }}>
              Last updated: April 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-dark py-20 md:py-32">
          <div className="container max-w-3xl">
            <div className="space-y-8" style={{ fontFamily: "'Space Mono', monospace" }}>
              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">1. Introduction</h2>
                <p>
                  Cutlyst Studios ("we", "our", or "us") operates the Cutlyst website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                </p>
              </div>

              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">2. Information Collection and Use</h2>
                <p className="mb-4">
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                </p>
                <h3 className="font-bold mb-2">Types of Data Collected:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Personal Data: Name, email address, phone number, cookies and usage data</li>
                  <li>Usage Data: Browser type, IP address, pages visited, time and date of visit</li>
                  <li>Project Information: Video files, briefs, and project details you provide</li>
                </ul>
              </div>

              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">3. Use of Data</h2>
                <p>
                  Cutlyst Studios uses the collected data for various purposes:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-4">
                  <li>To provide and maintain our Service</li>
                  <li>To notify you about changes to our Service</li>
                  <li>To allow you to participate in interactive features of our Service</li>
                  <li>To provide customer support</li>
                  <li>To gather analysis or valuable information so we can improve our Service</li>
                  <li>To monitor the usage of our Service</li>
                </ul>
              </div>

              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">4. Security of Data</h2>
                <p>
                  The security of your data is important to us but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>
              </div>

              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">5. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-4">
                  Email: privacy@cutlyst.com<br />
                  Address: Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
