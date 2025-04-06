import { Card, CardContent } from "@/components/ui/card"
import HeroSection from "./components/HeroSection"
import FAQBasic from "./componenets-global/FAQBasic"
import { generateMetadataHelper } from "./componenets-global/MetaGenerator"
import { SampleReportSection } from "./components/SampleReportSection"
import { Metadata } from "next"
import { AlertCircle, CheckCircle, FileText, Shield } from "lucide-react"

// This function generates the metadata for your page
export async function generateMetadata(): Promise<Metadata> {
  
  const content = {
    metaTitle: "Free Toyota VIN Decoder | ToyotanVinDecoder",
    metaDescription: "Free Toyota VIN Decoder - Get a free VIN Decoder and lookup the detailed Toyota vehicle history report with the Toyota VIN Number.",
    canonical: "https://www.autovinlookup.com/", 
    title: "Free Toyota VIN Decoder",
    description: "Get detailed information about your vehicle with our VIN Decoder tool",
    type: "website" as const,
    seo: [],
  }

  // Use the helper function to generate metadata
  return generateMetadataHelper(content)
}

export default function Home() {
  const faqItems = [
    {
      question: "What Information Does a Free VIN Check Provide?",
      answer: "A free VIN check provides free vehicle history data on a vehicle's make and model, ownership history, title status, insurance records, and reported incidents, offering buyers a comprehensive overview for confident purchasing decisions."
    },
    {
      question: "How to Perform a Free VIN Check to Check any VIN Online",
      answer: "Performing a free vehicle identification number lookup tool online involves entering the 17-character of vehicle identification number into a reputable VIN check service. This process allows buyers to access essential information about the vehicle's history before making a purchase decision."
    },
    {
      question: "For whom do we provide Vehicle History Reports?",
      answer: "Vehicle history reports are provided for buyers looking to purchase a used vehicle. These reports offer insights into crucial aspects of a car's past, facilitating informed decisions and ensuring transparency in the buying process. Register your vehicle with the number used to identify it, ensuring compliance with the terms and conditions. Steer clear of potential issues by checking the motor, including the 17-character VIN located on the driver-side door. Ensure door latches function properly and inspect for any fingerprint of repair or newer parts. Avoid a junk title brand by offering full transparency. Consider a fee for repair if necessary, especially for components like the wheel or truck built after 2009. Access a free car report and evaluate any title brand or repair history. Additionally, ensure the motor meets specifications, including the 350 engine for optimal performance."
    },
    {
      question: "Can You Buy a Used Car Without a Comprehensive Vehicle History Report?",
      answer: "While it is possible to buy a used car without a comprehensive vehicle history report, it is not advisable. Without this report, buyers risk missing vital information about a car's past, including accidents, flood damage, salvage title, and safety recalls that could impact the vehicle's reliability."
    },
    {
      question: "What details are included in a vehicle history report?",
      answer: "A vehicle history report offers key information like accident records, title status, past ownership, service history, odometer readings, theft records, recall updates, and more. This data allows potential buyers to evaluate a vehicle's condition and make informed choices."
    },
    {
      question: "How can a vehicle report be beneficial?",
      answer: "A vehicle report is packed with essential data on a car's history, including accident history, title details, theft records, and service history. This comprehensive insight can help you make confident decisions when buying or selling, ensuring you know a vehicle's background."
    },
    {
      question: "Can I look up a car's accident history?",
      answer: "Yes, you can check a vehicle's accident history by using its VIN with a car history lookup tool. You can also access accident records using a license plate lookup. These tools reveal title issues, accident reports, and other hidden records to boost buyer confidence."
    }
];


  return (
    <>
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-gray-50 to-white">
        <HeroSection />
      </div>

      <section className="w-full py-12 md:py-24 bg-gray-50 border-y border-gray-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 text-sm text-gray-600 bg-gray-100 border border-gray-200 rounded-full font-medium">
                Since 1981
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                VIN Check: Check the History of a Used Vehicle Record
              </h2>
              <p className="text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                When considering a used vehicle purchase, checking its history to uncover any airbag issues is vital. The
                vehicle history report provides detailed information about the car's past, including ownership transfers,
                accident records, title information, and more.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Why Checking the Vehicle History is Essential</h3>
                <p className="text-gray-600">
                  Checking the vehicle history is essential to ensure that you are not inheriting any hidden issues or
                  past damages with the used car. By reviewing the vehicle history report, you can uncover important
                  details such as previous accidents, flood damage, salvage title, and any potential recalls.
                </p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Key Components of a Vehicle History Report</h3>
                <p className="text-gray-600">
                  A comprehensive vehicle history report typically includes information about the vehicle's registration,
                  maintenance records, insurance claims, and any reported incidents or damages, making it a valuable tool
                  for potential buyers of vehicles in the US.
                </p>
              </div>

              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-3 text-gray-900">How a VIN Lookup Provides Insight</h3>
                <p className="text-gray-600">
                  A VIN Number Check is a unique identifier that provides reports on a vehicle's history. You'll gain
                  up-to-date information on the car's make and model, ownership history, title status, insurance records,
                  and any reported incidents.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <div className="inline-flex items-center justify-center p-1 bg-gray-100 rounded-full mb-4">
              <div className="px-3 py-1 text-sm font-medium text-gray-900 bg-white rounded-full">
                Always Check Before Buying
              </div>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Before finalizing a used car purchase, it's crucial to always check the vehicle's history. By conducting a
              VIN check and reviewing the full vehicle history report, you can verify the car's authenticity, ownership
              details, and any potential red flags.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-white border-b border-gray-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="inline-block px-3 py-1 text-sm text-gray-600 bg-gray-100 border border-gray-200 rounded-full font-medium mb-4">
              Vehicle History
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-4">
              Auto VIN Lookup: Vehicle History Insight
            </h2>
            <p className="text-gray-600 md:text-xl/relaxed">
              A free VIN Lookup Tool provides valuable insights into a vehicle's past, aiding in informed decisions. By
              examining ownership transfers, accident records, and title information, buyers can unearth hidden issues. A
              comprehensive vehicle history report offers details on registration, maintenance, and reported incidents,
              empowering buyers to assess a car's condition before purchase.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                How a Free Vehicle Identification Number Lookup Tool Helps in Making Informed Decisions
              </h3>
              <p className="text-gray-600">
                Conducting a VIN Number Lookup aids buyers in uncovering crucial details about a vehicle's history,
                including ownership transfers, accident records, and title information, which is essential for cars and
                light trucks. By accessing this data, buyers can make buying decisions before purchasing a used car.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Importance of a Comprehensive Vehicle History Report
              </h3>
              <p className="text-gray-600">
                A comprehensive vehicle history report offers detailed insights into a car's past, including registration,
                maintenance records, insurance claims, and reported incidents. This thorough overview enables buyers to
                evaluate a vehicle's condition and make well-informed purchasing choices.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                Top Reasons to Utilize Best Free VIN Check Services
              </h3>
              <p className="text-gray-600">
                Free VIN Lookup Tools services offer a cost-effective means to access critical information about a
                vehicle's history. By utilizing these services, buyers can verify a car's authenticity, ownership details,
                and any potential red flags that may impact their decision to buy.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-block px-4 py-1.5 text-sm text-gray-600 bg-gray-100 border border-gray-200 rounded-full font-medium">
              Vehicle History Insights
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-12">
            <div className="inline-block px-4 py-1 text-sm bg-white border border-gray-300 rounded-full font-medium text-gray-700 mb-4">
              VEHICLE HISTORY GUIDE
            </div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4 text-center">Auto VIN Lookup Guide</h2>
            <div className="w-40 h-0.5 bg-gray-300 mx-auto mb-6"></div>
            <p className="text-gray-600 text-center max-w-2xl">
              Understanding how to properly use an Auto VIN Lookup tool can help you make informed decisions when
              purchasing a used vehicle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-900 font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">How to Use Auto VIN Lookup</h3>
                </div>

                <ol className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">1.</span>
                    <span className="text-gray-700">
                      Locate your vehicle's VIN on the driver's side door, windshield, or dashboard.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">2.</span>
                    <span className="text-gray-700">Enter the 17-digit VIN in the Auto VIN Lookup tool.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-500 mr-2">3.</span>
                    <span className="text-gray-700">
                      Review the comprehensive vehicle history report for detailed insights.
                    </span>
                  </li>
                </ol>

                <div className="bg-gray-50 p-4 border-l-4 border-gray-300">
                  <p className="text-gray-600 italic text-sm">
                    The VIN (Vehicle Identification Number) is a unique 17-character code that serves as your vehicle's
                    fingerprint.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                    <span className="text-gray-900 font-bold">2</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-900">Vehicle History Insights</h3>
                </div>

                <p className="text-gray-700 mb-6">
                  A free VIN Lookup Tool provides valuable insights into a vehicle's past, aiding in informed decisions.
                  By examining ownership transfers, accident records, and title information, buyers can unearth hidden
                  issues.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Ownership history",
                    "Accident records",
                    "Title information",
                    "Maintenance records",
                    "Reported incidents",
                    "Registration details",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gray-900/5 -m-3 rounded-xl transform rotate-1"></div>
            <Card className="relative bg-white border border-gray-200 shadow-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                    <span className="text-gray-900 font-bold text-sm">i</span>
                  </div>
                  <h4 className="text-xl font-serif font-bold text-gray-900">Did You Know?</h4>
                </div>
                <p className="text-gray-700 italic">
                  Free VIN Lookup Tools services offer a cost-effective means to access critical information about a
                  vehicle's history. By utilizing these services, buyers can verify a car's authenticity, ownership
                  details, and any potential red flags that may impact their decision to buy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Report Section */}
      <SampleReportSection
        title="Sample of the Report"
        imageSrc="/Toyota-Avalon-Sample-Report.webp"
        buttonLink="/Toyota-VIN-Decoder-Sample-Report-4T1FZ1FB1LU051174.pdf"
        buttonText="Get a Sample Report"
        quote="Uncover your Toyota's story with our comprehensive VIN report."
      />

      {/* FAQ Section */}
      <FAQBasic title="Frequently Asked Questions" items={faqItems} />

      {/* Other Makes Section */}
      {/* <UrlList dataSource='makesList' urlPrefix='https://www.chassisvin.com/vin-decoder' /> */}
      {/* <UrlList dataSource='statesList' urlPrefix='https://www.chassisvin.com/license-plate-lookup' /> */}
    </>
  )
}
