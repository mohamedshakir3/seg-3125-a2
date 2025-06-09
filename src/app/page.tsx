import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
	Clock,
	MapPin,
	Phone,
	Mail,
	Wrench,
	Settings,
	Zap,
	Shield,
	Star,
	Calendar,
	CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-b">
				<div className="container mx-auto px-4 py-4 flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<Wrench className="h-8 w-8 text-primary" />
						<h1 className="text-2xl font-bold">CycleFix Pro</h1>
					</div>
					<nav className="hidden md:flex items-center space-x-6">
						<Link
							href="#services"
							className="text-sm font-medium hover:text-primary"
						>
							Services
						</Link>
						<Link
							href="#hours"
							className="text-sm font-medium hover:text-primary"
						>
							Hours
						</Link>
						<Link
							href="#location"
							className="text-sm font-medium hover:text-primary"
						>
							Location
						</Link>
						<Link
							href="#about"
							className="text-sm font-medium hover:text-primary"
						>
							About
						</Link>
					</nav>
					<Button>Book Appointment</Button>
				</div>
			</header>

			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl md:text-6xl font-bold mb-6">
						Expert Bike Repair Services
					</h2>
					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						Professional bicycle maintenance and repair services. Walk-ins
						welcome or book an appointment for guaranteed service.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="text-lg px-8">
							<Calendar className="mr-2 h-5 w-5" />
							Book Appointment
						</Button>
						<Button size="lg" variant="outline" className="text-lg px-8">
							<MapPin className="mr-2 h-5 w-5" />
							Find Us
						</Button>
					</div>
				</div>
			</section>

			{/* Quick Info Cards */}
			<section className="py-16 bg-muted/50">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-3 gap-6">
						<Card className="text-center">
							<CardHeader>
								<Clock className="h-12 w-12 text-primary mx-auto mb-4" />
								<CardTitle>Walk-ins Welcome</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									No appointment needed for basic services. First come, first
									served during business hours.
								</p>
							</CardContent>
						</Card>

						<Card className="text-center">
							<CardHeader>
								<MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
								<CardTitle>Convenient Location</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Located downtown with easy parking and bike rack access right
									outside our shop.
								</p>
							</CardContent>
						</Card>

						<Card className="text-center">
							<CardHeader>
								<Zap className="h-12 w-12 text-primary mx-auto mb-4" />
								<CardTitle>Quick Turnaround</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									Most repairs completed same day. Complex jobs typically ready
									within 2-3 business days.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="py-16">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<h3 className="text-3xl font-bold mb-4">Our Services</h3>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							From basic tune-ups to complete overhauls, we handle all your
							bicycle maintenance needs.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						<Card>
							<CardHeader>
								<Settings className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Basic Tune-Up</CardTitle>
								<CardDescription>Starting at $45</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm">
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Brake adjustment
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Gear shifting tune
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Chain lubrication
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Safety inspection
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<Wrench className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Wheel Service</CardTitle>
								<CardDescription>Starting at $25</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm">
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Flat tire repair
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Tube replacement
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Wheel truing
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Spoke replacement
									</li>
								</ul>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<Shield className="h-8 w-8 text-primary mb-2" />
								<CardTitle>Complete Overhaul</CardTitle>
								<CardDescription>Starting at $150</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-2 text-sm">
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Full disassembly
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Deep cleaning
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Component inspection
									</li>
									<li className="flex items-center">
										<CheckCircle className="h-4 w-4 text-green-500 mr-2" />
										Complete reassembly
									</li>
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Hours & Location Section */}
			<section className="py-16 bg-muted/50">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12">
						{/* Business Hours */}
						<div id="hours">
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center">
										<Clock className="h-6 w-6 mr-2 text-primary" />
										Business Hours
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex justify-between items-center">
										<span className="font-medium">Monday - Friday</span>
										<Badge variant="secondary">9:00 AM - 6:00 PM</Badge>
									</div>
									<Separator />
									<div className="flex justify-between items-center">
										<span className="font-medium">Saturday</span>
										<Badge variant="secondary">9:00 AM - 4:00 PM</Badge>
									</div>
									<Separator />
									<div className="flex justify-between items-center">
										<span className="font-medium">Sunday</span>
										<Badge variant="outline">Closed</Badge>
									</div>
									<div className="mt-6 p-4 bg-primary/10 rounded-lg">
										<p className="text-sm font-medium text-primary">
											💡 Walk-ins welcome during all business hours!
										</p>
										<p className="text-sm text-muted-foreground mt-1">
											For complex repairs, we recommend booking an appointment
											to ensure availability.
										</p>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Location & Contact */}
						<div id="location">
							<Card>
								<CardHeader>
									<CardTitle className="flex items-center">
										<MapPin className="h-6 w-6 mr-2 text-primary" />
										Location & Contact
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4">
									<div>
										<h4 className="font-medium mb-2">Address</h4>
										<p className="text-muted-foreground">
											123 Main Street
											<br />
											Downtown District
											<br />
											City, State 12345
										</p>
									</div>
									<Separator />
									<div className="space-y-3">
										<div className="flex items-center">
											<Phone className="h-4 w-4 mr-3 text-primary" />
											<span>(555) 123-BIKE</span>
										</div>
										<div className="flex items-center">
											<Mail className="h-4 w-4 mr-3 text-primary" />
											<span>info@cyclefixpro.com</span>
										</div>
									</div>
									<div className="mt-6">
										<Button className="w-full">
											<MapPin className="mr-2 h-4 w-4" />
											Get Directions
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h3 className="text-3xl font-bold mb-6">About CycleFix Pro</h3>
							<p className="text-lg text-muted-foreground mb-6">
								With over 15 years of experience in bicycle repair and
								maintenance, our certified mechanics are passionate about
								keeping you rolling smoothly.
							</p>
							<div className="space-y-4">
								<div className="flex items-center">
									<Star className="h-5 w-5 text-yellow-500 mr-2" />
									<span>Certified bicycle mechanics</span>
								</div>
								<div className="flex items-center">
									<Star className="h-5 w-5 text-yellow-500 mr-2" />
									<span>All bike types and brands</span>
								</div>
								<div className="flex items-center">
									<Star className="h-5 w-5 text-yellow-500 mr-2" />
									<span>Quality parts and accessories</span>
								</div>
								<div className="flex items-center">
									<Star className="h-5 w-5 text-yellow-500 mr-2" />
									<span>90-day service guarantee</span>
								</div>
							</div>
						</div>
						<div>
							<Image
								src="/placeholder.svg?height=400&width=600"
								alt="CycleFix Pro shop interior"
								width={600}
								height={400}
								className="rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-muted py-12">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-4 gap-8">
						<div>
							<div className="flex items-center space-x-2 mb-4">
								<Wrench className="h-6 w-6 text-primary" />
								<span className="text-lg font-bold">CycleFix Pro</span>
							</div>
							<p className="text-sm text-muted-foreground">
								Designed by: Mohamed Shakir, Fahmi Ahmed
							</p>
							<p className="text-sm pt-2 text-muted-foreground">
								Your trusted neighborhood bike repair shop since 2009.
							</p>
						</div>

						<div>
							<h4 className="font-semibold mb-4">Services</h4>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>Basic Tune-ups</li>
								<li>Wheel Service</li>
								<li>Brake Repair</li>
								<li>Complete Overhauls</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-4">Quick Links</h4>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li>
									<Link href="#services">Services</Link>
								</li>
								<li>
									<Link href="#hours">Hours</Link>
								</li>
								<li>
									<Link href="#location">Location</Link>
								</li>
								<li>
									<Link href="#about">About</Link>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="font-semibold mb-4">Contact</h4>
							<div className="space-y-2 text-sm text-muted-foreground">
								<p>(555) 123-BIKE</p>
								<p>info@cyclefixpro.com</p>
								<p>
									123 Main Street
									<br />
									City, State 12345
								</p>
							</div>
						</div>
					</div>

					<Separator className="my-8" />

					<div className="text-center text-sm text-muted-foreground">
						<p>
							&copy; {new Date().getFullYear()} CycleFix Pro. All rights
							reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	)
}
