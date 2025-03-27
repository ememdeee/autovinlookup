import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import CustomButton from "./CustomButton"

interface SampleReportSectionProps {
  title: string
  imageSrc: string
  buttonLink: string
  buttonText: string
  quote?: string
}

export function SampleReportSection({ title, imageSrc, buttonLink, buttonText, quote }: SampleReportSectionProps) {
  return (
    <section className="w-full py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900 text-center">{title}</h2>
        <div className="w-32 h-1 bg-gray-800 mx-auto mb-8"></div>

        <Card className="bg-white border border-gray-200 shadow-sm overflow-hidden">
          <CardContent className="p-6">
            <div className="relative w-full h-auto mb-6 border border-gray-200">
              <Image
                src={imageSrc || "/placeholder.svg?height=1080&width=1920"}
                alt={title}
                width={1920}
                height={1080}
                className="w-full h-auto"
              />
            </div>
            <div className="text-center">
              <CustomButton variant="secondary" size="small" text={buttonText} href={buttonLink} />
            </div>
          </CardContent>
        </Card>

        {quote && (
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic font-serif">&apos;{quote}&apos;</p>
          </div>
        )}
      </div>
    </section>
  )
}