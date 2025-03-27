import RepetitivePage, { generateMetadata as generateRepetitiveMetadata } from '@/app/componenets-global/RepetitivePage'
import contents from '@/data/blogs.json'

export default async function Page({ params }: { params: Promise<{ page: string }> }) {
  const resolvedParams = await params;
  
  return (
    <RepetitivePage
      contents={contents}
      params={resolvedParams}
    />
  )
}

export async function generateMetadata({ params }: { params: Promise<{ page: string }> }) {
  const resolvedParams = await params;
  console.log(resolvedParams);
  return generateRepetitiveMetadata({ contents, params: resolvedParams })
}

export async function generateStaticParams() {
  return Object.keys(contents).map(page => ({ page }))
}