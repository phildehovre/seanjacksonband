import { render } from "react-dom";
import { useGoogleSheet } from "../hooks/useGoogleSheets";
import "./Events.scss";

type Concert = {
	Date: string;
	Artist: string;
	Venue: string;
	City: string;
	Ticket_link: string;
};

export default function Events() {
	const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;

	const { data: concerts, loading, error } = useGoogleSheet<Concert>(sheetUrl);

	if (loading) return <p>Loading concerts...</p>;
	if (error) return <p>Error: {error}</p>;

	const renderTicketUrl = (c: Concert) => {
		if (c.Ticket_link.length == 0) {
			return <div className="link_btn disabled">Coming soon!</div>;
		}
		return (
			<a
				href={c.Ticket_link.trim().replace(/^"|"$/g, "")}
				target="_blank"
				rel="noopener noreferrer"
				className="ml-2 link_btn"
			>
				Tickets
			</a>
		);
	};

	return (
		<div className="events_ctn">
			<h1 className="text-xl font-bold mb-2">Upcoming Shows</h1>
			<ul>
				{concerts.map((c, i) => (
					<li key={i} className="event mb-2">
						<span className="date">{c.Date}</span> {c.Artist}
						<span className="location">
							<p className="city">{c.City}</p>
							<p className="venue">{c.Venue}</p>
						</span>
						{renderTicketUrl(c)}
					</li>
				))}
			</ul>
		</div>
	);
}
