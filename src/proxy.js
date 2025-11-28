// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function proxy(request) {
//   return NextResponse.redirect(new URL('/login', request.url))
// }
 
// // Alternatively, you can use a default export:
// // export default function proxy(request) { ... }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/manageProduct/:path*',
// }





import { NextResponse } from "next/server";

// Middleware function
export function proxy(request) {
  // Firebase token cookie check
  const token = request.cookies.get("token")?.value;

  if (!token) {
    // Token nai = login page e redirect
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Token ache = page access allow
  return NextResponse.next();
}

// Middleware kon route apply hobe
export const config = {
  matcher: ["/manageProduct/:path*", "/addProduct/:path*"],
};
