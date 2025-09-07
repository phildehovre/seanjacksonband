import React, { useEffect, useState } from "react";

const TicketSourceEvents: React.FC = () => {
	const [events, setEvents] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const apiKey = import.meta.env.VITE_TICKETSOURCE_API_KEY;

				if (!apiKey) {
					throw new Error("Missing API key (VITE_TICKETSOURCE_API_KEY).");
				}

				// Build Basic Auth header (password is blank)
				const authHeader = `Bearer ${apiKey}`;

				const res = await fetch("https://api.ticketsource.io/events", {
					headers: {
						Authorization: authHeader,
						"Content-Type": "application/json",
					},
				});

				if (!res.ok) {
					throw new Error(`Error: ${res.status} ${res.statusText}`);
				}

				const data = await res.json();
				setEvents(data.events || data); // adjust depending on API shape
			} catch (err: any) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	console.log(events);

	if (loading) return <p>Loading events...</p>;
	if (error) return <p className="text-red-500">Error: {error}</p>;

	return (
		<div>
			<h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
			{events.length === 0 ? (
				<p>No events found.</p>
			) : (
				<ul className="space-y-2">
					{events.map((event: any) => (
						<li key={event.id} className="border p-2 rounded">
							<strong>{event.name}</strong>
							{event.start_date && (
								<p>Date: {new Date(event.start_date).toLocaleString()}</p>
							)}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default TicketSourceEvents;
