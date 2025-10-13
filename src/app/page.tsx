// App.jsx
import React from "react";

const features = [
	{
		title: "Fixez vos limites",
		description:
			"Définissez des objectifs de dépenses pour ne pas dépasser votre budget chaque mois.",
		icon: "💰",
	},
	{
		title: "Épargne automatique",
		description:
			"Lorsque vous atteignez vos objectifs, Flouzy met automatiquement de côté vos économies.",
		icon: "🏦",
	},
	{
		title: "Investissez facilement",
		description:
			"Utilisez vos fonds mis de côté pour investir directement depuis l’app et faire fructifier votre argent.",
		icon: "📈",
	},
];

const testimonials = [
	{
		name: "Sophie L.",
		comment:
			"Grâce à Flouzy, j’ai pu contrôler mes dépenses et commencer à investir facilement. Une vraie révolution pour mes finances !",
	},
	{
		name: "Marc D.",
		comment:
			"La fonctionnalité d’objectifs de dépenses m’a aidé à économiser sans effort et à automatiser mes investissements.",
	},
];

export default function App() {
	return (
		<div className="font-sans bg-gray-50 text-gray-900">
			{/* Hero */}
			<header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex flex-col justify-center items-center h-screen text-center px-4">
				<div>
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Flouzy</h1>
					<p className="text-lg md:text-xl max-w-2xl mb-8">
						Économisez, atteignez vos objectifs et investissez facilement grâce à
						Flouzy, votre assistant financier intelligent.
					</p>
					<a
						href="#download"
						className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
					>
						Téléchargez l'app
					</a>
					
				</div>
			</header>

			<section className="flex flex-row px-64 py-20">
				{/* Information */}
				<div>
					<h2 className="text-3xl">Suivre vos dépenses et vos objectif</h2>
					<p></p>
					<div className="flex flex-col">
						{/* faq */}
						<div className="px-2 border border-neutral-300 rounded-lg text-neutral-600">
							<h3 className="text-xl">Surveiller vos dépense</h3>
							<p>
								Suivez vos dépense et si vous dépasser votre objectif
							</p>
						</div>
					</div>
				</div>
				{/* Image (possibilité que elle change en fonction du faq) */}
				<div>

				</div>
			</section>

			{/* Features */}
			<section className="py-20 px-4 text-center">
				<h2 className="text-3xl font-bold mb-4">Comment ça fonctionne</h2>
				<p className="max-w-xl mx-auto mb-12 text-gray-700">
					Flouzy vous aide à maîtriser vos dépenses, à mettre de l’argent de
					côté automatiquement et à investir intelligemment.
				</p>
				<div className="flex flex-wrap justify-center gap-8">
					{features.map((feature) => (
						<div
							key={feature.title}
							className="bg-white rounded-xl shadow-lg p-8 max-w-xs flex-1"
						>
							<div className="text-4xl mb-4">{feature.icon}</div>
							<h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
							<p className="text-gray-600">{feature.description}</p>
						</div>
					))}
				</div>
			</section>

			{/* How it works */}
			<section className="py-20 px-4 bg-indigo-50 text-center">
				<h2 className="text-3xl font-bold mb-4">Atteignez vos objectifs</h2>
				<p className="max-w-xl mx-auto mb-12 text-gray-700">
					1️⃣ Définissez un budget et un objectif de dépenses.
					2️⃣ Suivez vos dépenses en temps réel.
					3️⃣ Flouzy met automatiquement de côté l’argent économisé.
					4️⃣ Vous pouvez investir vos fonds directement depuis l’app.
				</p>
				<div className="flex justify-center gap-4">
					<a
						href="#download"
						className="bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition"
					>
						Commencez maintenant
					</a>
				</div>
			</section>

			{/* Testimonials */}
			<section className="py-20 px-4 text-center">
				<h2 className="text-3xl font-bold mb-4">Ils ont testé Flouzy</h2>
				<p className="max-w-xl mx-auto mb-12 text-gray-700">
					Découvrez ce que nos utilisateurs pensent de Flouzy.
				</p>
				<div className="flex flex-wrap justify-center gap-8">
					{testimonials.map((t, index) => (
						<div
							key={index}
							className="bg-white rounded-xl shadow-lg p-8 max-w-sm flex-1"
						>
							<p className="text-gray-700 mb-4">"{t.comment}"</p>
							<p className="font-semibold text-indigo-600">- {t.name}</p>
						</div>
					))}
				</div>
			</section>

			{/* Call to action */}
			<section id="download" className="py-20 px-4 bg-indigo-600 text-white text-center">
				<h2 className="text-3xl font-bold mb-4">
					Prêt à prendre le contrôle de vos finances ?
				</h2>
				<p className="max-w-xl mx-auto mb-8">
					Téléchargez Flouzy dès maintenant et commencez à économiser et investir
					facilement.
				</p>
				<a
					href="#"
					className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition"
				>
					Télécharger sur iOS / Android
				</a>
			</section>

			{/* Footer */}
			<footer className="py-8 text-center text-gray-300 text-sm">
				&copy; 2025 Flouzy. Tous droits réservés.
			</footer>
		</div>
	);
}
