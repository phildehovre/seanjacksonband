// import About from "../components/About";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";

function HomePage() {
	return (
		<main>
			<Hero />
			<Testimonials />
			<Carousel />
			<Feature />
			<Contact />
		</main>
	);
}

export default HomePage;
