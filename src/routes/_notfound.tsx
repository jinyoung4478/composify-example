import { Link } from 'react-router-dom'

export default function NotFoundRoute() {
  return (
    <section className="mx-auto max-w-3xl p-6">
      <h2 className="m-0 text-xl font-semibold">404</h2>
      <p className="mt-2 text-slate-600">페이지를 찾을 수 없습니다.</p>
      <Link className="mt-4 inline-block text-blue-600 hover:underline" to="/">
        홈으로
      </Link>
    </section>
  )
}
