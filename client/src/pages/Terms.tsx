import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="section-light py-20 md:py-32">
          <div className="container">
            <h1 className="mb-6" style={{ fontFamily: "'Chewy', cursive", color: "#FF6B4A" }}>Terms of Service</h1>
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
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">1. Terms</h2>
                <p>
                  By accessing and using the Cutlyst Studios website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">2. Use License</h2>
                <p className="mb-4">
                  Permission is granted to temporarily download one copy of the materials (information or software) on Cutlyst Studios' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Modifying or copying the materials</li>
                  <li>Using the materials for any commercial purpose or for any public display</li>
                  <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                  <li>Removing any copyright or other proprietary notations from the materials</li>
                  <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                </ul>
              </div>

              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">3. Disclaimer</h2>
                <p>
                  The materials on Cutlyst Studios' website are provided on an 'as is' basis. Cutlyst Studios makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">4. Limitations</h2>
                <p>
                  In no event shall Cutlyst Studios or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Cutlyst Studios' website, even if Cutlyst Studios or an authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>

              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">5. Accuracy of Materials</h2>
                <p>
                  The materials appearing on Cutlyst Studios' website could include technical, typographical, or photographic errors. Cutlyst Studios does not warrant that any of the materials on its website are accurate, complete, or current. Cutlyst Studios may make changes to the materials contained on its website at any time without notice.
                </p>
              </div>

              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">6. Links</h2>
                <p>
                  Cutlyst Studios has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Cutlyst Studios of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>

              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">7. Modifications</h2>
                <p>
                  Cutlyst Studios may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </div>

              <div>
                <h2 style={{ color: "#FF6B4A", fontSize: "24px" }} className="mb-4">8. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
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
