import { generateMetadataHelper } from "../componenets-global/MetaGenerator"
import { Metadata } from "next"
import Terms from "../componenets-global/Terms"

// This function generates the metadata for your page
export async function generateMetadata(): Promise<Metadata> {
  
  const content = {
    metaTitle: "Terms and Conditions: Your Agreement with Us",
    metaDescription: "Review the Terms and Conditions of Auto VIN Lookup to understand your rights, responsibilities, and our policies.",
    canonical: "https://www.autovinlookup.com/terms", 
    title: "Terms and Conditions: Your Agreement with Us",
    description: "Review the Terms and Conditions of Auto VIN Lookup to understand your rights, responsibilities, and our policies.",
    type: "website" as const,
    seo: [],
  }

  // Use the helper function to generate metadata
  return generateMetadataHelper(content)
}

export default function TermsAndConditions() {
  return (
    <>
    <Terms/>
    </>
  )
}