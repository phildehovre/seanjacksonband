import { useGoogleSheet } from "../hooks/useGoogleSheets";
import "./Events.scss";
import { useMemo, useState } from "react";
import Section from "./Section";

type Concert = {
	Date: string;
	Artist: string;
	Venue: string;
	City: string;
	Ticket_link: string;
};

// helper to parse both ISO and DD/MM/YYYY formats
const parseDate = (dateStr: string) => {
	if (!dateStr) return new Date(NaN);

	const trimmed = dateStr.trim();

	// European format DD/MM/YYYY
	if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(trimmed)) {
		const [day, month, year] = trimmed.split("/").map(Number);
		return new Date(year, month - 1, day);
	}

	// fallback: let JS parse (works for ISO YYYY-MM-DD)
	return new Date(trimmed);
};

export default function Events() {
	const sheetUrl = import.meta.env.VITE_GOOGLE_SHEET_URL;
	const { data: concerts, loading, error } = useGoogleSheet<Concert>(sheetUrl);

	// always compute sorted list safely
	const sortedConcerts = useMemo(() => {
		if (!Array.isArray(concerts)) return [];
		return [...concerts].sort(
			(a, b) => parseDate(a.Date).getTime() - parseDate(b.Date).getTime()
		);
	}, [concerts]);

	if (loading) return <p>Loading concerts...</p>;
	if (error) return <p>Error: {error}</p>;

	const renderTicketUrl = (c: Concert) => {
		if (!c.Ticket_link || c.Ticket_link.trim().length === 0) {
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
		<Section id="events">
			<div className="events_ctn">
				<h1 className="section_header">Upcoming Shows</h1>

				<ul>
					{sortedConcerts.map((c, i) => (
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
		</Section>
	);
}
