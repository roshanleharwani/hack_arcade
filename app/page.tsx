'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Trophy, Twitch, Gift, Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  return (
    <div className="min-h-screen bg-[#FFFFEA] overflow-hidden">
      {/* Navbar */}
      <nav className="border-4 border-black bg-[#00CECB] p-4 relative z-50">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="font-black text-2xl hover:skew-x-2 transition-transform">
            TOURNEY.GG
          </Link>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-[#00CECB] md:bg-transparent border-4 border-t-0 border-black md:border-0 p-4 md:p-0 gap-4 md:gap-8`}>
            <Link href="#features" className="font-bold hover:-translate-y-0.5 transition-transform">Features</Link>
            <Link href="#about" className="font-bold hover:-translate-y-0.5 transition-transform">About</Link>
            <Link href="#faq" className="font-bold hover:-translate-y-0.5 transition-transform">FAQ</Link>
            <Button onClick={() => router.push('/signup')} className="bg-[#FF5E5B] hover:bg-[#FF5E5B]/90 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFED66] rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00CECB] rounded-full blur-3xl opacity-50" />
        
        <div className="relative grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-black leading-tight">
              Level Up Your
              <span className="text-[#FF5E5B] block">Esports Game</span>
            </h1>
            <p className="text-xl text-gray-700">
              Host tournaments, compete with the best, and win amazing rewards on the ultimate esports platform.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-black text-white text-lg px-8 py-6 border-2 border-black shadow-[8px_8px_0px_0px_#00CECB] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all">
                Create Tournament
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2 border-black bg-white shadow-[8px_8px_0px_0px_#FFED66] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all">
                Join Event
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#D8D8D8] border-4 border-black p-8 rotate-3 transform hover:rotate-0 transition-transform">
              <Image
                src="/image1.jpg"
                alt="Esports Tournament"
                width={500}
                height={400}
                className="w-full border-2 border-black"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#00CECB] border-y-4 border-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Everything You Need to Win
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Trophy size={40} />,
                title: "Tournament Brackets",
                description: "Automated brackets and matchmaking for seamless competition"
              },
              {
                icon: <Twitch size={40} />,
                title: "Live Streaming",
                description: "Integrated streaming platform to broadcast your matches"
              },
              {
                icon: <Gift size={40} />,
                title: "Reward System",
                description: "Automatic prize distribution and leaderboard tracking"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_#FF5E5B] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all"
              >
                <div className="bg-[#FFED66] w-16 h-16 flex items-center justify-center border-2 border-black mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black">
                Built by Gamers,
                <span className="text-[#00CECB] block">for Gamers</span>
              </h2>
              <p className="text-xl text-gray-700">
                {"We're passionate about creating the best platform for esports tournaments. Our team consists of former pro players, tournament organizers, and tech enthusiasts."}
              </p>
              <div className="flex gap-4">
                <div className="bg-[#FF5E5B] border-2 border-black p-4">
                  <div className="text-3xl font-black">500+</div>
                  <div className="text-sm">Tournaments</div>
                </div>
                <div className="bg-[#FFED66] border-2 border-black p-4">
                  <div className="text-3xl font-black">50K+</div>
                  <div className="text-sm">Players</div>
                </div>
                <div className="bg-[#00CECB] border-2 border-black p-4">
                  <div className="text-3xl font-black">$100K</div>
                  <div className="text-sm">Prize Pool</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#D8D8D8] border-4 border-black p-8 -rotate-3 transform hover:rotate-0 transition-transform">
                <Image
                  src="/image2.jpg"
                  alt="About Us"
                  width={500}
                  height={400}
                  className="w-full border-2 border-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#FFED66] border-y-4 border-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "How do I create a tournament?",
                  answer: "Simply click the 'Create Tournament' button, choose your game, set the rules, and invite players. Our platform handles the rest!"
                },
                {
                  question: "What games are supported?",
                  answer: "We support all major esports titles including League of Legends, DOTA 2, CS:GO, Valorant, and more."
                },
                {
                  question: "How does the prize distribution work?",
                  answer: "Prizes are automatically distributed to winners through our secure payment system immediately after tournament completion."
                }
              ].map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border-4 border-black p-4"
                >
                  <AccordionTrigger className="text-lg font-bold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-[#FF5E5B] border-4 border-black p-12 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Ready to Dominate?
              </h2>
              <p className="text-xl text-white mb-8">
                Join thousands of players competing in tournaments daily. Sign up now and claim your spot!
              </p>
              <Button onClick={() => router.push('/signup')} className="bg-black text-white text-lg px-8 py-6 border-2 border-white shadow-[8px_8px_0px_0px_#FFED66] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none transition-all">
                Get Started Now
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00CECB] rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFED66] rounded-full blur-3xl opacity-20" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t-4 border-[#00CECB] py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-black text-2xl mb-4">TOURNEY.GG</h3>
              <p className="text-gray-400">
                The ultimate esports tournament platform for gamers worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Features</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">About</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Games</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">League of Legends</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">DOTA 2</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">CS:GO</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Valorant</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Twitter</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Discord</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Twitch</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">YouTube</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} TOURNEY.GG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

