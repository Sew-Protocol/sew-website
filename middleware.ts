import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BYPASS_PATHS = (process.env.SOFT_LAUNCH_BYPASS || '').split(',').filter(Boolean)

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (BYPASS_PATHS.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
