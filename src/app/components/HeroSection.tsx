import SiteForm from "../componenets-global/SiteForm"
import { CheckCircle, Search, Shield } from "lucide-react"
import Image from "next/image"
import CustomButton from "./CustomButton"

interface HeroCta {
  text: string
  link: string
}

interface HeroProps {
  logoUrl?: string
  title?: string
  description?: string
  showForm?: boolean
  heroCta?: HeroCta[]
  reportType?: "VHR" | "WS" | "COLOR"
}

export default function HeroSection({
  logoUrl = "",
  title = "Free VIN Check – AutoVINLookup",
  description = "Find the VIN number at the corner of the dashboard, check the vehicle history report for free, search the comprehensive NMVTIS database to provide full vehicle history including recall and flood information, a must for any user wanting to understand their car’s past. Trust the reliable dashboard to buy a used car, truck, or SUV with confidence by ensuring a complete history is reviewed. Ensure the title, registration, and insurance are all in order before purchase. Get valuable vehicle information and model insights to make an informed decision about your unique vehicle. Our automotive database includes VIN records, owner history, and salvage reports for every digit and letter of the vehicle identification number, enabling users to access comprehensive car history.",
  showForm = true,
  heroCta = [],
  reportType = "VHR",
}: HeroProps) {
  return (
    <section className="w-full border-b border-gray-200">
      <div className="container px-4 py-12 md:py-20 mx-auto">
        {/* Header with optional logo */}
        <div className="flex items-center mb-8">
          {logoUrl && (
            <div className="mr-4">
              <Image
                src={logoUrl || "/placeholder.svg"}
                alt="Vehicle Lookup"
                width={64}
                height={64}
                className="h-16 w-auto object-contain"
              />
            </div>
          )}
          <div className="inline-flex items-center px-3 py-1 text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-full">
            <Shield className="w-4 h-4 mr-2 text-gray-600" />
            <span>Trusted Vehicle History Service</span>
          </div>
        </div>

        {/* Main content */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{title}</h1>

          <p className="text-gray-600 text-lg mb-8 leading-relaxed">{description}</p>

          {/* Form and Features Section */}
          {showForm && (
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Left Column - Form */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="mb-2 flex items-center">
                  <Search className="w-5 h-5 text-gray-600 mr-2" />
                  <span className="font-bold text-gray-900">Vehicle History Lookup</span>
                </div>
                {(reportType === "VHR" || reportType === "WS") && <SiteForm reportType={reportType} />}
                {reportType === "COLOR" && "COLOR FORM"}
              </div>

              {/* Right Column - Features and Trust */}
              <div className="space-y-6">
                {/* Feature highlights */}
                <div className="space-y-3">
                  <span className="font-bold text-gray-900">What You'll Get</span>
                  {[
                    { text: "Instant VIN Lookup Results" },
                    { text: "Comprehensive Vehicle History" },
                    { text: "Accident & Damage Reports" },
                    { text: "Title & Registration Info" },
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gray-700 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature.text}</span>
                    </div>
                  ))}
                </div>

                {/* Trust indicator */}
                <div className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4 border border-gray-200">
                    <Shield className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">Secure & Reliable Service</span>
                    <p className="text-gray-600">
                      Our vehicle history reports provide accurate, up-to-date information
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          {heroCta && heroCta.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-8">
              {heroCta.map((cta, index) => (
                <CustomButton
                  key={index}
                  text={cta.text}
                  href={cta.link}
                  variant={index === 0 ? "primary" : "secondary"}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}