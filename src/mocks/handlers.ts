import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.post("/api/login", () => {
    return HttpResponse.json(
      {
        userId: 1,
        nickName: "devhong",
        id: "devhong620",
        image: "/default_profile_normal.png",
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
        },
      }
    );
  }),

  http.post("/api/logOut", () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(null, {
      headers: {
        "Set-Cookie": "connect.sid=;HttpOnly;Path=/;Max-Age=0",
      },
    });
  }),

  http.get("/api/users/:userId", ({ params }) => {
    const userId = params.userId;
    return HttpResponse.json(
      {
        userId: 1,
        nickName: "데브홍",
        id: "devhong620",
        image: "/default_profile_normal.png",
      },
      {
        headers: {
          "Set-Cookie": "connect.sid=msw-cookie;HttpOnly;Path=/",
        },
      }
    );
  }),
];
