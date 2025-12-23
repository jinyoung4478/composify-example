import '../components/catalog'

import { Renderer } from '@composify/react/renderer'
import { type LoaderFunctionArgs, useLoaderData } from 'react-router'

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug ?? ''
  const res = await fetch(`http://localhost:9000/page/${slug}`)
  const { content } = await res.json().catch(() => ({}))

  if (!content) {
    throw new Response('', { status: 404 })
  }

  return { slug, content }
}

export default function Page() {
  const { slug, content } = useLoaderData<typeof loader>()

  return (
    <main className="p-4">
      <section className="flex items-end justify-between mb-4">
        <h1 className="text-2xl">{slug}</h1>
        <a href={`/${slug}/edit`} className="text-blue-500 hover:underline">
          Editor
        </a>
      </section>
      <section>
        <Renderer source={content} />
      </section>
    </main>
  )
}
