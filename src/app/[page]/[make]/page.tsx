import { notFound } from 'next/navigation'
import { cache } from 'react'
import { Metadata } from 'next'
import RepetitivePage, { generateMetadata as generateRepetitiveMetadata } from '@/app/componenets-global/RepetitivePage'

// Lazy load only the required data
const getContentMap = cache(async (page: string) => {
  switch (page) {
    case 'vin-decoder':
      return import('@/data/vinDecoderMakes.json').then(m => m.default)
    default:
      return {}
  }
})

export default async function DynamicMakePage({ params }: { params: Promise<{ page: string, make: string }> }) {
  const resolvedParams = await params;
  const contents = await getContentMap(resolvedParams.page)

  if (!contents || Object.keys(contents).length === 0) {
    notFound()
  }

  return <RepetitivePage contents={contents} params={resolvedParams} />
}

export async function generateMetadata({ params }: { params: Promise<{ page: string, make: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const contents = await getContentMap(resolvedParams.page)
  if (!contents || Object.keys(contents).length === 0) return {}
  return generateRepetitiveMetadata({ contents, params: resolvedParams})
}

export async function generateStaticParams() {
  const pages = ['vin-decoder']
  
  const allParams = []
  for (const page of pages) {
    const contents = await getContentMap(page)
    const makeParams = Object.keys(contents).map(make => ({ page, make }))
    allParams.push(...makeParams)
  }
  
  return allParams
}