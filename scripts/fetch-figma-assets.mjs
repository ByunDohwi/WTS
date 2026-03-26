#!/usr/bin/env node
/**
 * Figma 파일에서 메인 페이지 에셋 PNG를 받아 public/figma/에 저장합니다.
 * 사용: FIGMA_TOKEN=figd_... node scripts/fetch-figma-assets.mjs
 */
import { existsSync, readFileSync } from 'node:fs'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const envLocal = join(rootDir, '.env.local')
if (existsSync(envLocal)) {
  for (const line of readFileSync(envLocal, 'utf8').split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const i = t.indexOf('=')
    if (i === -1) continue
    const key = t.slice(0, i).trim()
    let val = t.slice(i + 1).trim().replace(/^["']|["']$/g, '')
    if (key === 'FIGMA_TOKEN' || key === 'FIGMA_API_KEY') {
      process.env[key] = val
    }
  }
}

const FILE_KEY = '68m2hQmGIKqe2SwTfIqAaj'
const TOKEN = process.env.FIGMA_TOKEN || process.env.FIGMA_API_KEY
const IDS = ['3:57', '3:58', '3:110', '11:44', '11:40']
const OUT = {
  '3:57': 'hero-rectangle.png',
  '3:58': 'hero-flower.png',
  '3:110': 'compare-image.png',
  '11:44': 'concepts-decor-left.png',
  '11:40': 'concepts-decor-right.png',
}

if (!TOKEN) {
  console.error('FIGMA_TOKEN 또는 FIGMA_API_KEY 환경 변수가 필요합니다.')
  process.exit(1)
}

const q = new URLSearchParams({
  ids: IDS.join(','),
  format: 'png',
  scale: '2',
})
const meta = await fetch(
  `https://api.figma.com/v1/images/${FILE_KEY}?${q}`,
  { headers: { 'X-Figma-Token': TOKEN } },
).then((r) => r.json())

if (meta.err) {
  console.error(meta)
  process.exit(1)
}

const { images } = meta
const root = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'figma')
await mkdir(root, { recursive: true })

for (const id of IDS) {
  const url = images[id]
  if (!url) {
    console.warn('no url for', id)
    continue
  }
  const buf = await fetch(url).then((r) => r.arrayBuffer())
  const name = OUT[id]
  await writeFile(join(root, name), Buffer.from(buf))
  console.log('wrote', name)
}
