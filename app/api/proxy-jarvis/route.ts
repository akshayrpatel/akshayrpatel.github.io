import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	try {
		const { inputs } = await req.json();
		const server_jarvis_api_url_chat =
			process.env.SERVER_JARVIS_API_URL_CHAT || "";
		const response = await fetch(server_jarvis_api_url_chat, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				inputs: inputs,
			}),
		});

		const data = await response.json();
		console.log("LLM API response data:", data);
		const msg = data.message || "Sorry, I couldn't answer that.";
		return NextResponse.json({ message: msg });
	} catch (error) {
		return NextResponse.json(
			{ message: "Error contacting LLM API." + error },
			{ status: 500 }
		);
	}
}
