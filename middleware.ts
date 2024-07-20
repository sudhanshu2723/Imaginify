import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

// Define the protected routes
const isProtectedRoute = createRouteMatcher([
  // Match all routes except /api/webhooks
  '/((?!api/webhooks).*)'
]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  // Update the matcher to cover all routes
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
