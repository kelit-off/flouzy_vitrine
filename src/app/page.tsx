"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import { FiArrowRight, FiBarChart2, FiGlobe, FiShield, FiZap, FiTrendingUp, FiLock, FiBell, FiCreditCard } from 'react-icons/fi';

export default function Home() {
	const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');

	return (
		<div className="bg-gray-900 text-white min-h-screen">
			{/* Header */}
			<header className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-800">
				<nav className="container mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<FiCreditCard className="w-6 h-6 text-green-500" />
						<span className="text-xl font-bold">Flouzy</span>
					</div>
					<div className="hidden md:flex items-center space-x-8">
						{/* <a href="#" className="text-gray-300 hover:text-white transition">À propos</a> */}
						<a href="#fonctionnalites" className="text-gray-300 hover:text-white transition">Fonctionnalités</a>
						{/* <a href="#" className="text-gray-300 hover:text-white transition">Tarifs</a> */}
						{/* <a href="#" className="text-gray-300 hover:text-white transition">Contact</a> */}
					</div>
					<Link href={"https://app.flouzy.fr"}>
						<button className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-full transition">
							Commencer
						</button>
					</Link>
				</nav>
			</header>

			{/* Hero Section */}
			<section className="pt-32 pb-20 px-6">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Prenez le Contrôle de<br />
						<span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
							Vos Dépenses et Économies
						</span>
					</h1>
					<p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
						Suivez vos dépenses en temps réel, analysez vos habitudes et économisez intelligemment
					</p>

					{/* Cards Display */}
					<div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
						<div className="relative w-80 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition border border-gray-700">
							<div className="flex items-center justify-between mb-4">
								<div className="flex items-center space-x-2">
									<FiCreditCard className="w-6 h-6" />
									<span className="font-semibold">Flouzy</span>
								</div>
								<span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">-15%</span>
							</div>
							<div className="text-sm text-gray-400 mb-2">Dépenses ce mois</div>
							<div className="text-3xl font-bold mb-3 text-red-400">2 450.80 EUR</div>
							<div className="flex gap-2 text-xs">
								<span className="bg-gray-700 px-2 py-1 rounded">Alimentation: 680€</span>
								<span className="bg-gray-700 px-2 py-1 rounded">Loisirs: 320€</span>
							</div>
							<div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-2xl"></div>
						</div>

						<FiArrowRight className="text-gray-600 hidden md:block" size={32} />

						<div className="relative w-80 h-48 bg-gradient-to-br from-green-900/50 to-emerald-900/50 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition border border-green-700/50">
							<div className="flex items-center justify-between mb-4">
								<div className="flex items-center space-x-2">
									<FiTrendingUp className="w-6 h-6" />
									<span className="font-semibold">Flouzy</span>
								</div>
								<span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">+22%</span>
							</div>
							<div className="text-sm text-gray-400 mb-2">Économies réalisées</div>
							<div className="text-3xl font-bold mb-3 text-green-400">1 875.30 EUR</div>
							<div className="flex gap-2 text-xs">
								<span className="bg-gray-700 px-2 py-1 rounded">Objectif: 2 500€</span>
							</div>
							<div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-2xl"></div>
						</div>
					</div>

					{/* Categories */}
					<div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
						<span className="flex items-center gap-2"><FiCreditCard size={16} /> Alimentation</span>
						<span className="flex items-center gap-2"><FiShield size={16} /> Transport</span>
						<span className="flex items-center gap-2"><FiGlobe size={16} /> Logement</span>
						<span className="flex items-center gap-2"><FiZap size={16} /> Loisirs</span>
						<span className="flex items-center gap-2"><FiTrendingUp size={16} /> Abonnements</span>
					</div>
				</div>
			</section>

			{/* Analyse Section */}
			<section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
				<div className="container mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-5xl font-bold mb-6">
								Analyse<br />Automatique<br />de Vos Dépenses
							</h2>
							<p className="text-green-400 mb-4">INTELLIGENCE ARTIFICIELLE</p>
							<p className="text-gray-300 leading-relaxed">
								Notre IA analyse vos habitudes de dépenses et vous propose des recommandations personnalisées
								pour économiser jusqu&apos;à 30% sur votre budget mensuel.
							</p>
						</div>
						<div className="relative">
							<div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl border border-green-500/30">
								<div className="flex items-center justify-between mb-6">
									<div className="flex items-center space-x-2">
										<FiBarChart2 className="w-6 h-6 text-green-400" />
										<span className="font-semibold">Analyse Mensuelle</span>
									</div>
								</div>
								<div className="space-y-3">
									<div className="flex justify-between items-center">
										<span className="text-sm">Alimentation</span>
										<span className="text-red-400 font-semibold">680.50 EUR</span>
									</div>
									<div className="w-full bg-gray-700 rounded-full h-2">
										<div className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full" style={{ width: '65%' }}></div>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-sm">Transport</span>
										<span className="text-yellow-400 font-semibold">320.00 EUR</span>
									</div>
									<div className="w-full bg-gray-700 rounded-full h-2">
										<div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{ width: '40%' }}></div>
									</div>
									<div className="flex justify-between items-center">
										<span className="text-sm">Loisirs</span>
										<span className="text-blue-400 font-semibold">250.30 EUR</span>
									</div>
									<div className="w-full bg-gray-700 rounded-full h-2">
										<div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '30%' }}></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Dashboard Preview */}
			<section className="py-20 px-6">
				<div className="container mx-auto text-center">
					<p className="text-green-500 text-sm uppercase tracking-wider mb-4">TABLEAU DE BORD INTELLIGENT</p>
					<h2 className="text-5xl font-bold mb-6">
						Visualisez Votre Situation<br />Financière en Temps Réel
					</h2>
					<p className="text-gray-400 mb-12 max-w-2xl mx-auto">
						Un tableau de bord complet qui vous donne une vue d&apos;ensemble de vos finances.
						Suivez vos objectifs d&apos;épargne, identifiez les dépenses excessives et prenez de meilleures décisions.
					</p>

					<div className="relative max-w-5xl mx-auto">
						<div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								<div className="md:col-span-2 bg-gray-800/50 rounded-xl p-6">
									<div className="flex items-center justify-between mb-4">
										<h3 className="font-semibold">Évolution des Dépenses</h3>
										<select className="bg-gray-700 rounded px-3 py-1 text-sm">
											<option>12 derniers mois</option>
										</select>
									</div>
									<div className="h-48 flex items-end justify-between gap-2">
										{[60, 55, 70, 50, 65, 45, 75, 55, 80, 50, 70, 45].map((h, i) => (
											<div key={i} className="flex-1 bg-gradient-to-t from-red-500 to-orange-400 rounded-t" style={{ height: `${h}%` }}></div>
										))}
									</div>
									<div className="flex justify-between mt-4 text-xs text-gray-400">
										<span>Jan</span>
										<span>Déc</span>
									</div>
								</div>
								<div className="space-y-4">
									<div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
										<div className="text-2xl font-bold mb-2 text-green-400">1 875 EUR</div>
										<div className="text-gray-400 text-sm mb-2">Économies</div>
										<div className="text-green-400 text-sm">↑ +22% ce mois</div>
									</div>
									<div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-6 border border-red-500/30">
										<div className="text-2xl font-bold mb-2 text-red-400">2 450 EUR</div>
										<div className="text-gray-400 text-sm mb-2">Dépenses</div>
										<div className="text-red-400 text-sm">↓ -8% ce mois</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Features Grid */}
			<section className="py-20 px-6 bg-gray-800/30" id='fonctionnalites'>
				<div className="container mx-auto">
					<div className="grid md:grid-cols-3 gap-8">
						{[
							{ icon: FiBarChart2, title: 'Suivi des Dépenses', desc: 'Catégorisez automatiquement vos dépenses et identifiez où va votre argent' },
							{ icon: FiTrendingUp, title: 'Objectifs d\'Épargne', desc: 'Définissez et suivez vos objectifs d\'épargne avec des recommandations personnalisées' },
							{ icon: FiBell, title: 'Alertes Intelligentes', desc: 'Recevez des notifications quand vous dépassez votre budget ou détectez des dépenses inhabituelles' },
							{ icon: FiZap, title: 'Rapports Mensuels', desc: 'Obtenez des analyses détaillées de vos habitudes financières chaque mois' },
							{ icon: FiLock, title: 'Budgets Personnalisés', desc: 'Créez des budgets par catégorie et restez dans vos limites' },
							{ icon: FiGlobe, title: 'Synchronisation Bancaire', desc: 'Connectez vos comptes bancaires pour un suivi automatique et sécurisé' }
						].map((feature, i) => (
							<div key={i} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition">
								<div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
									<feature.icon className="text-green-400" size={24} />
								</div>
								<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
								<p className="text-gray-400">{feature.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Mobile App Section */}
			<section className="py-20 px-6">
				<div className="container mx-auto">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-5xl font-bold mb-6">
								Gérez Vos Finances<br />Où Que Vous Soyez
							</h2>
							<p className="text-gray-400 mb-8">
								Accédez à vos finances depuis votre smartphone. Ajoutez des dépenses instantanément,
								consultez vos statistiques et recevez des conseils personnalisés pour mieux économiser.
							</p>
							<div className="space-y-4">
								{[
									{ icon: FiZap, title: 'Ajout Rapide', desc: 'Ajoutez une dépense en quelques secondes' },
									{ icon: FiBell, title: 'Notifications Intelligentes', desc: 'Alertes personnalisées sur vos dépenses' },
									{ icon: FiShield, title: 'Sécurisé', desc: 'Vos données sont cryptées et protégées' }
								].map((item, i) => (
									<div key={i} className="flex items-start gap-4">
										<div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
											<item.icon className="text-green-400" size={20} />
										</div>
										<div>
											<h4 className="font-semibold mb-1">{item.title}</h4>
											<p className="text-gray-400 text-sm">{item.desc}</p>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="relative">
							<div className="w-64 h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl mx-auto p-4 shadow-2xl border border-gray-700">
								<div className="bg-gray-900 rounded-2xl h-full p-4">
									<div className="text-sm mb-4 font-semibold">Flouzy</div>
									<div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 mb-4 border border-green-500/30">
										<div className="text-xs text-gray-400 mb-1">Économies totales</div>
										<div className="text-2xl font-bold text-green-400">1 875 EUR</div>
										<div className="text-xs text-green-400 mt-1">+22% ce mois</div>
									</div>
									<div className="text-xs font-semibold mb-2 text-gray-400">Dernières dépenses</div>
									<div className="space-y-2">
										<div className="bg-gray-800 rounded-lg p-3 text-sm">
											<div className="flex justify-between mb-1">
												<span className="text-xs">🍕 Restaurant</span>
												<span className="text-red-400 text-sm font-semibold">-45.50€</span>
											</div>
											<div className="text-xs text-gray-500">Aujourd&apos;hui</div>
										</div>
										<div className="bg-gray-800 rounded-lg p-3 text-sm">
											<div className="flex justify-between mb-1">
												<span className="text-xs">🚗 Essence</span>
												<span className="text-red-400 text-sm font-semibold">-68.00€</span>
											</div>
											<div className="text-xs text-gray-500">Hier</div>
										</div>
										<div className="bg-gray-800 rounded-lg p-3 text-sm">
											<div className="flex justify-between mb-1">
												<span className="text-xs">🛒 Supermarché</span>
												<span className="text-red-400 text-sm font-semibold">-125.80€</span>
											</div>
											<div className="text-xs text-gray-500">Il y a 2 jours</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			{/* <section className="py-20 px-6 bg-gray-800/30">
				<div className="container mx-auto">
					<div className="text-center mb-12">
						<p className="text-green-500 text-sm uppercase tracking-wider mb-4">TARIFICATION</p>
						<h2 className="text-5xl font-bold mb-6">Un Plan Adapté à Vos Besoins</h2>
						<div className="flex items-center justify-center gap-4 mb-8">
							<button
								onClick={() => setSelectedPlan('monthly')}
								className={`px-6 py-2 rounded-full transition ${selectedPlan === 'monthly' ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300'}`}
							>
								Mensuel
							</button>
							<button
								onClick={() => setSelectedPlan('yearly')}
								className={`px-6 py-2 rounded-full transition ${selectedPlan === 'yearly' ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-300'}`}
							>
								Annuel (Économisez 20%)
							</button>
						</div>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{[
							{ name: 'Gratuit', price: 0, features: ['Suivi de base des dépenses', 'Jusqu\'à 3 catégories', 'Rapport mensuel simple', 'Application mobile', 'Support par email'], popular: false },
							{ name: 'Premium', price: 4.99, features: ['Suivi illimité des dépenses', 'Catégories illimitées', 'Rapports détaillés et analyses IA', 'Objectifs d\'épargne avancés', 'Alertes intelligentes', 'Synchronisation bancaire', 'Support prioritaire'], popular: true },
							{ name: 'Famille', price: 9.99, features: ['Tout Premium inclus', 'Jusqu\'à 5 comptes liés', 'Budget familial partagé', 'Contrôle parental', 'Rapports consolidés', 'Support dédié'], popular: false }
						].map((plan, i) => (
							<div key={i} className={`bg-gray-800/50 rounded-2xl p-8 border ${plan.popular ? 'border-green-500' : 'border-gray-700'} relative`}>
								{plan.popular && (
									<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 px-4 py-1 rounded-full text-sm">
										Le Plus Populaire
									</div>
								)}
								<div className="text-center mb-6">
									<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-3xl">
										{plan.price === 0 ? '🎁' : plan.price < 10 ? '⭐' : '👨‍👩‍👧‍👦'}
									</div>
									<h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
									<div className="text-4xl font-bold mb-2">
										{plan.price === 0 ? 'Gratuit' : `${plan.price}€`}
										{plan.price > 0 && <span className="text-lg text-gray-400">/mois</span>}
									</div>
								</div>
								<button className={`w-full py-3 rounded-full mb-6 transition ${plan.popular ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-700 hover:bg-gray-600'}`}>
									{plan.price === 0 ? 'Commencer Gratuitement' : 'Choisir ce Plan'}
								</button>
								<ul className="space-y-3">
									{plan.features.map((feature, j) => (
										<li key={j} className="flex items-start gap-2 text-sm">
											<span className="text-green-400 mt-1">✓</span>
											<span className="text-gray-300">{feature}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section> */}

			{/* CTA Section */}
			<section className="py-20 px-6">
				<div className="container mx-auto text-center">
					<div className="max-w-4xl mx-auto bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-12 border border-green-500/30">
						<h2 className="text-5xl font-bold mb-6">Commencez à Économiser Dès Aujourd&apos;hui</h2>
						<p className="text-gray-300 mb-8">Rejoignez des milliers d&apos;utilisateurs qui ont déjà économisé en moyenne 30% sur leurs dépenses</p>
						<Link href={"https://app.flouzy.fr"}>
							<button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-full text-lg font-semibold transition inline-flex items-center gap-2">
								Essayer Gratuitement <FiArrowRight size={20} />
							</button>
						</Link>
						<p className="text-gray-400 text-sm mt-4">Sans carte bancaire • Annulez à tout moment</p>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-800/50 py-12 px-6 border-t border-gray-800">
				<div className="container mx-auto">
					<div className="grid md:grid-cols-4 gap-8 mb-8">
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<FiCreditCard className="w-6 h-6 text-green-500" />
								<span className="text-xl font-bold">Flouzy</span>
							</div>
							<p className="text-gray-400 text-sm">Gérez vos finances intelligemment</p>
						</div>
						{/* <div>
							<h4 className="font-semibold mb-4">ENTREPRISE</h4>
							<ul className="space-y-2 text-gray-400 text-sm">
								<li><a href="#" className="hover:text-white transition">À propos</a></li>
								<li><a href="#" className="hover:text-white transition">Carrières</a></li>
								<li><a href="#" className="hover:text-white transition">Presse</a></li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">RESSOURCES</h4>
							<ul className="space-y-2 text-gray-400 text-sm">
								<li><a href="#" className="hover:text-white transition">Blog</a></li>
								<li><a href="#" className="hover:text-white transition">Guides</a></li>
								<li><a href="#" className="hover:text-white transition">Support</a></li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-4">LÉGAL</h4>
							<ul className="space-y-2 text-gray-400 text-sm">
								<li><a href="#" className="hover:text-white transition">Confidentialité</a></li>
								<li><a href="#" className="hover:text-white transition">Conditions</a></li>
								<li><a href="#" className="hover:text-white transition">Cookies</a></li>
							</ul>
						</div> */}
					</div>
					<div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
						<p className="text-gray-400 text-sm">© 2025 Flouzy. Tous droits réservés.</p>
						{/* <div className="flex gap-4 mt-4 md:mt-0">
							<a href="#" className="text-gray-400 hover:text-white transition">Confidentialité</a>
							<a href="#" className="text-gray-400 hover:text-white transition">Conditions</a>
							<a href="#" className="text-gray-400 hover:text-white transition">Cookies</a>
						</div> */}
					</div>
				</div>
			</footer>
		</div>
	);
};