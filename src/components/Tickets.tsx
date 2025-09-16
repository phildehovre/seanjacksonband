import React, { useEffect, useState } from "react";

const TicketSourceEvents: React.FC = () => {
	const [events, setEvents] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<unknown>();

	useEffect(() => {
		const fetchEvents = async () => {
			setLoading(true);
			try {
				const res = await fetch("/api/events");
				const data = await res.json();
				console.log(data);
				setEvents(data);
			} catch (err) {
				console.log(err);
				setError(err);
			}
		};
		fetchEvents();
	}, []);

	console.log(events);

	if (loading) return <p>Loading events...</p>;
	if (error) return <p className="text-red-500">Error: {String(error)}</p>;

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
