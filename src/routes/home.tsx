import { Renderer } from '@composify/react/renderer'

const source = `
  <div>
    <Heading level={1}>Welcome to Composify!</Heading>
    <Text textAlign="center">This is a simple example.</Text>
  </div>
`

export default function HomeRoute() {
  return (
    <section className="mx-auto max-w-3xl p-6">
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <h2 className="m-0 text-xl font-semibold">Home</h2>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 text-slate-900 shadow-sm">
        <Renderer source={source} />
      </div>
    </section>
  )
}
