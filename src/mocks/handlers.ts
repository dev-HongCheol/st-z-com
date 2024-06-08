import type { Image } from "@/app/(afterLogin)/home/_components/TweetWrapper";
import { faker } from "@faker-js/faker";
import { http, HttpResponse } from "msw";
function sleep(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
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
			},
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
		console.log("🚀 _ http.get _ params.userId:", params.userId);
		const userId = params.userId;
		return HttpResponse.json({
			userId: 1,
			nickName: "데브홍",
			id: userId,
			image: "/default_profile_normal.png",
		});
		/* return HttpResponse.json(
			{
				message: "no_search_user",
			},
			{
				status: 404,
			},
		); */
	}),

	http.get("/api/postRecommends", async ({ request }) => {
		const url = new URL(request.url);
		const cursor = Number(url.searchParams.get("cursor") || "0") || 0;

		await sleep(3000);

		if (cursor > 30) {
			return HttpResponse.json([]);
		}

		const json = [
			{
				postId: cursor + 1,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: cursor + 2,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: cursor + 3,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: cursor + 4,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: cursor + 5,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: cursor + 6,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: cursor + 7,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: cursor + 8,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: cursor + 9,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
		];
		return HttpResponse.json(json);
	}),

	http.get("/api/followingPosts", async () => {
		await sleep(5000);
		const json = [
			{
				postId: 1,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: 2,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: 3,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: 4,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
			{
				postId: 5,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: faker.lorem.text(),
			},
		];
		return HttpResponse.json(json);
	}),

	http.get("/api/search", ({ request }) => {
		const json = [
			{
				postId: 1,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: `${faker.lorem.text()}`,
			},
			{
				postId: 2,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: `${faker.lorem.text()}`,
			},
			{
				postId: 3,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: `${faker.lorem.text()}`,
			},
			{
				postId: 4,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: `${faker.lorem.text()}`,
			},
			{
				postId: 5,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: `${faker.lorem.text()}`,
			},
		];
		return HttpResponse.json(json);
	}),
	http.get("/api/posts/:userId", ({ params }) => {
		const userId = params.userId;
		const json = {
			postId: 1,
			User: {
				id: "tving124",
				nickname: "TVING티빙",
				image: "/iiLLo4_n_normal.jpg",
			},
			createAt: faker.date.between({
				from: "2024-05-20T00:00:00.000Z",
				to: "2024-05-30T00:00:00.000Z",
			}),
			Images: generateFakerImage(),
			content: `${userId} = ${faker.lorem.text()}`,
		};
		return HttpResponse.json(json);
	}),
	http.get("/api/users/:userId/posts/:postId", ({ params }) => {
		const userId = params.userId;
		const postId = params.postId;
		const json = [
			{
				postId: 1,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: `${userId}_${postId} = ${faker.lorem.text()}`,
			},
		];
		return HttpResponse.json(json);
	}),
	http.get("/api/posts/:postId/comments", ({ params }) => {
		const userId = params.userId;
		const postId = params.postId;
		const json = [
			{
				postId: 1,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: `${userId}_${postId} = ${faker.lorem.text()}`,
			},
			{
				postId: 2,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: `${userId}_${postId} = ${faker.lorem.text()}`,
			},
			{
				postId: 3,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: `${userId}_${postId} = ${faker.lorem.text()}`,
			},
			{
				postId: 4,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: `${userId}_${postId} = ${faker.lorem.text()}`,
			},
			{
				postId: 5,
				User: {
					id: "tving124",
					nickname: "TVING티빙",
					image: "/iiLLo4_n_normal.jpg",
				},
				createAt: faker.date.between({
					from: "2024-05-20T00:00:00.000Z",
					to: "2024-05-30T00:00:00.000Z",
				}),
				Images: generateFakerImage(),
				content: `${userId}_${postId} = ${faker.lorem.text()}`,
			},
		];
		return HttpResponse.json(json);
	}),
	http.get("/api/followRecommends", () => {
		return HttpResponse.json([
			{
				image: "/iiLLo4_n_normal.jpg",
				id: "tvingdotcom",
				nickName: "TVING티빙",
			},
			{
				image: faker.image.avatar(),
				id: "devHong",
				nickName: "데브홍",
			},
			{
				image: faker.image.avatar(),
				id: faker.person.firstName(),
				nickName: faker.person.fullName(),
			},
			{
				image: faker.image.avatar(),
				id: faker.person.firstName(),
				nickName: faker.person.fullName(),
			},
			{
				image: faker.image.avatar(),
				id: faker.person.firstName(),
				nickName: faker.person.fullName(),
			},
		]);
	}),
	http.get("/api/trends", () => {
		return HttpResponse.json([
			{
				trendId: 1,
				name: "하이브의 죄악",
				posts: 102441,
			},
			{
				trendId: 2,
				name: "하이브의 죄악",
				posts: 1041,
			},
			{
				trendId: 3,
				name: "하이브의 죄악",
				posts: 102441,
			},
			{
				trendId: 4,
				name: "하이브의 죄악",
				posts: 441,
			},
			{
				trendId: 5,
				name: "하이브의 죄악",
				posts: 141,
			},
			{
				trendId: 6,
				name: "하이브의 죄악",
				posts: 1022441,
			},
		]);
	}),
	http.get("/api/photos/:postId", ({ params }) => {
		const { postId } = params;
		return HttpResponse.json({
			postId: 5,
			User: {
				id: "tving124",
				nickname: "TVING티빙",
				image: "/iiLLo4_n_normal.jpg",
			},
			createAt: faker.date.between({
				from: "2024-05-20T00:00:00.000Z",
				to: "2024-05-30T00:00:00.000Z",
			}),
			Images: [
				{
					imageId: 1,
					link: faker.image.urlLoremFlickr(),
				},
			],
			content: `${postId}_ = ${faker.lorem.text()}`,
		});
	}),
];

const generateFakerImage = () => {
	const imageLength = Math.floor(Math.random() * 10);
	const images: Image[] = [];

	if (imageLength < 5) {
		for (let imageIndex = 0; imageIndex < imageLength; imageIndex++) {
			images.push({
				imageId: imageIndex,
				link: faker.image.urlLoremFlickr(),
			});
		}
	}

	return images;
};
