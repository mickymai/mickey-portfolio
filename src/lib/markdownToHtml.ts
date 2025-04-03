import { remark } from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown: string = '') {
  if (markdown.length === 0) {
    return ''
  }
  const result = await remark().use(html).process(markdown)
  return result.toString()
}
