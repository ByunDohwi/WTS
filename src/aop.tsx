import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DetailPage, concepts } from './site'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DetailPage concept={concepts[2]} />
  </StrictMode>,
)
