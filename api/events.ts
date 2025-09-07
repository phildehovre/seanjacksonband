export default async function handler(req, res) {
	try {
		const apiKey = process.env.VITE_TICKETSOURCE_API_KEY;
		if (!apiKey) throw new Error("Missing TicketSource API key");

		const response = await fetch("https://api.ticketsource.io/events", {
			headers: { Authorization: `Bearer ${apiKey}` },
		});

		if (!response.ok)
			throw new Error(`TicketSource API error: ${response.status}`);

		const data = await response.json();
		res.status(200).json(data);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
}
