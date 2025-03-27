import Link from "next/link"
import { Car, FileText, Store, ArrowRight } from "lucide-react"
import SourceAndPartner from "../componenets-global/SourceAndPartner"
import { Metadata } from "next"
import { generateMetadataHelper } from "../componenets-global/MetaGenerator"
import ServiceList from "../componenets-global/ServiceList"

// This function generates the metadata for your page
export async function generateMetadata(): Promise<Metadata> {
  
  const content = {
    metaTitle: "About Us | Our Mission and Values",
    metaDescription: "Learn about Auto VIN Lookup, our journey, and vision for enhancing vehicle information experiences. Discover what drives us forward.",
    canonical: "https://www.autovinlookup.com/about-us", 
    title: "About Us | Our Mission and Values",
    description: "Learn about Auto VIN Lookup, our journey, and vision for enhancing vehicle information experiences. Discover what drives us forward.",
    type: "website" as const,
    seo: [],
  }

  // Use the helper function to generate metadata
  return generateMetadataHelper(content)
}

export default function AboutUsPage() {
  return (
    <div className="min-h-screen w-full font-serif">
      {/* Hero Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary text-center mb-6">About {process.env.SITE_NAME}</h1>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
          <div className="bg-white/70 backdrop-blur-sm p-8 border-2 border-primary/20 shadow-lg">
            <p className="text-foreground/80 leading-relaxed text-lg text-center mb-6">
              {process.env.SITE_NAME} is your reliable source for decoding vehicle VINs. We offer accurate and
              comprehensive VIN decoding services for all vehicle types and models, covering VINs from 17
              characters long, i.e., from modern cars to trucks.
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg text-center">
              Our dedication to accuracy, trust, and data transparency ensures that every piece of information decoded
              from the VIN is precise and reliable. This enables car buyers to confidently verify the specifications,
              features, and factory details of any vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">What We Do</h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
          <div className="vintage-card p-6 border-2 border-primary/20">
            <p className="text-foreground/80 leading-relaxed mb-4">
              At {process.env.SITE_NAME}, we instantly decode all VINs and provide comprehensive vehicle details in
              an easily downloadable and printable PDF format.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Our tool is affordable, reliable, and fast. It allows users to obtain detailed reports about their
              vehicles in just a few seconds, ensuring a seamless and efficient experience from start to finish.
            </p>
          </div>
        </div>
      </section>

      <ServiceList />

      {/* Mission and Vision Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Our Mission and Vision</h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
          <div className="vintage-card p-8 border-2 border-primary/20 text-center">
            <p className="text-foreground/80 leading-relaxed">
              Our mission and vision are to empower buyers, sellers, dealers, and enthusiasts with the ability to
              easily and swiftly access accurate and comprehensive vehicle information through our reliable VIN decoding
              service.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Contact Us</h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8"></div>
          <div className="vintage-card p-8 border-2 border-primary/20 text-center">
            <p className="text-foreground/80 leading-relaxed mb-4">
              Do you have questions or feedback? Contact our friendly support team at{" "}
              <a href="mailto:info@autovinlookup.com" className="text-primary hover:underline">
                info@{process.env.SITE_NAME}
              </a>{" "}
              or speak to us on live chat. We&apos;re here to assist you round the clock.
            </p>
            <p className="text-foreground/80 leading-relaxed font-semibold">
              Thank you for choosing {process.env.SITE_NAME}.
            </p>
          </div>
        </div>
      </section>

      {/* Source */}
      <SourceAndPartner/>
    </div>
  )
}