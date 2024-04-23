import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: [
    '/',
    '/demo',
    '/register',
    '/login',
    '/demo/weekly',
    '/demo/analytic',
    '/demo/setting',
    '/api/pray/:id',
    '/api/pray',
  ],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
}
