import type { Image } from "@/app/(afterLogin)/home/_components/TweetWrapper";
import { faker } from "@faker-js/faker";
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
			},
		);
	}),

	http.get("/api/postRecommends", () => {
		console.log("/api/postRecommends");

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
			{
				postId: 6,
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
				postId: 7,
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
				postId: 8,
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
				postId: 9,
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

	http.get("/api/followingPosts", () => {
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
