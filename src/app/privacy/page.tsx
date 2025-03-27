import Link from "next/link"
import { generateMetadataHelper } from "../componenets-global/MetaGenerator"
import { Metadata } from "next"
import Privacy from "../componenets-global/Privacy"

// This function generates the metadata for your page
export async function generateMetadata(): Promise<Metadata> {
  
  const content = {
    metaTitle: "Privacy Policy: Your Information Protection",
    metaDescription: "Read our Privacy Policy to understand how Auto VIN Lookup protects your information.",
    canonical: "https://www.autovinlookup.com/privacy", 
    title: "Privacy Policy: Your Information Protection",
    description: "Read our Privacy Policy to understand how Auto VIN Lookup protects your information.",
    type: "website" as const,
    seo: [],
  }

  // Use the helper function to generate metadata
  return generateMetadataHelper(content)
}

export default function PrivacyPolicy() {
  return (
    <>
      <Privacy/>
    </>
  )
}