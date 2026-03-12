import Link from 'next/link'

export default function Home() {
	return (
		<div style={{ padding: 40, fontFamily: 'monospace' }}>
			<h1>Revalidation Reproduction</h1>
			<h2>Pages (locale in generateStaticParams):</h2>
			<ul>
				<li>
					<Link href="/en">/en (root - path=[])</Link>
				</li>
				<li>
					<Link href="/en/about-us">/en/about-us (subpage)</Link>
				</li>
			</ul>
			<h2>Pages (locale NOT in generateStaticParams):</h2>
			<ul>
				<li>
					<Link href="/fr">/fr (root - path=[])</Link>
				</li>
				<li>
					<Link href="/fr/about-us">/fr/about-us (subpage)</Link>
				</li>
			</ul>
			<h2>Revalidation API:</h2>
			<pre>{`curl -X POST https://revalidate-issues.vercel.app/api/revalidate -H 'Content-Type: application/json' -d '{"path": "/en"}'`}</pre>
			<pre>{`curl -X POST https://revalidate-issues.vercel.app/api/revalidate -H 'Content-Type: application/json' -d '{"path": "/en/about-us"}'`}</pre>
			<pre>{`curl -X POST https://revalidate-issues.vercel.app/api/revalidate -H 'Content-Type: application/json' -d '{"path": "/fr"}'`}</pre>
			<pre>{`curl -X POST https://revalidate-issues.vercel.app/api/revalidate -H 'Content-Type: application/json' -d '{"path": "/fr/about-us"}'`}</pre>
		</div>
	)
}
