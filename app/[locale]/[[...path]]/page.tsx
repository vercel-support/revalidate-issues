// Reproduce: optional catch-all [[...path]] revalidation issue with empty path

export const revalidate = false

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
// You must return an empty array from generateStaticParams or utilize export const dynamic = 'force-static' in order to revalidate (ISR) paths at runtime.
export const dynamic = 'force-static'

// dynamicParams is NOT exported — defaults to true

export async function generateStaticParams() {
	return []
}

export default async function Page({
	params,
}: {
	params: Promise<{ locale: string; path?: string[] }>
}) {
	const { locale, path } = await params

	// Timestamp to verify if revalidation actually refreshed the page
	const renderedAt = new Date().toISOString()

	return (
		<div style={{ padding: 40, fontFamily: 'monospace' }}>
			<h1>
				/{locale}
				{path && path.length > 0 ? `/${path.join('/')}` : ''}
			</h1>
			<p>
				<strong>Rendered at:</strong> {renderedAt}
			</p>
			<p>
				<strong>Locale:</strong> {locale}
			</p>
			<p>
				<strong>Path param:</strong> {JSON.stringify(path ?? null)}
			</p>
			<hr />
			<p style={{ fontSize: 12, color: '#888' }}>
				If revalidation works, the timestamp above should change after calling the revalidate API and refreshing.
			</p>
		</div>
	)
}
