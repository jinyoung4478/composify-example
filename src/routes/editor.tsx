import { useLoaderData, useNavigate, type LoaderFunctionArgs } from 'react-router'
import { Editor } from '@composify/react/editor'
import '@composify/react/style.css'
import '../components/catalog'

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params.slug ?? ''
  const res = await fetch(`http://localhost:9000/page/${slug}`)
  const { content } = await res.json().catch(() => ({}))

  return {
    slug,
    content: content ?? '<VStack />',
  }
}

export default function EditorPage() {
  const navigate = useNavigate()
  const { slug, content } = useLoaderData<typeof loader>()

  const handleSubmit = async (value: string) => {
    await fetch(`http://localhost:9000/page/${slug}`, {
      method: 'DELETE',
    }).catch(() => null)

    await fetch('http://localhost:9000/page', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: slug,
        content: value,
      }),
    })

    alert('Saved!')
    navigate(`/${slug}`)
  }

  return <Editor title={`Editing: ${slug}`} source={content} onSubmit={handleSubmit} />
}
