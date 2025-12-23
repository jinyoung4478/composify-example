import { createBrowserRouter } from 'react-router-dom'

import './components/catalog'

import Page, { loader as pageLoader } from './routes/page.tsx'
import EditorRoute, { loader as editLoader } from './routes/editor.tsx'
import HomeRoute from './routes/home'
import NotFoundRoute from './routes/_notfound'

export const router = createBrowserRouter([
  { path: '/', Component: HomeRoute },
  { path: '/:slug', Component: Page, loader: pageLoader },
  { path: '/:slug/edit', Component: EditorRoute, loader: editLoader },
  { path: '*', Component: NotFoundRoute },
])
