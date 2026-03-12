import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	const body = await request.json()
	const { path } = body

	if (!path || typeof path !== 'string') {
		return NextResponse.json({ error: "Missing 'path' in request body" }, { status: 400 })
	}

	console.log(`[revalidate] revalidatePath('${path}')`)
	if (path.split('/').length < 3) {
		revalidatePath(path, 'page')
	} else {
		revalidatePath(path)
	}

	return NextResponse.json({ revalidated: true, path, time: new Date().toISOString() })
}
