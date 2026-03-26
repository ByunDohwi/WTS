import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IocPage } from './site'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IocPage />
  </StrictMode>,
)
