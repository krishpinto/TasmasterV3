// import { NextRequest, NextResponse } from "next/server";
// import { UserAuth } from "./context/AuthContext";

// const protectedRoutes = ["/user"];

// export default async function middleware(request: NextRequest) {
//   const { user } = await UserAuth();
//   const isProtected = protectedRoutes.some((route) =>
//     request.nextUrl.pathname.startsWith(route)
//   );

//   if (!user && isProtected) {
//     const absoluteUrl = new URL("/login", request.nextUrl.origin);
//     return NextResponse.redirect(absoluteUrl.toString());
//   }
//   return NextResponse.next();
// }
