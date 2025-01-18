'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Users, Gamepad2, Gift, Crown, Twitch, Menu, X, ChevronRight, Clock, DollarSign } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import {useRouter} from 'next/navigation'
export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  return (
    <div className="min-h-screen bg-[#FFFFEA]">
      {/* Sidebar Navigation */}
      <aside className={`
        fixed top-0 left-0 z-40 h-screen w-64 border-r-4 border-black bg-white
        transform transition-transform duration-200 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0
      `}>
        <div className="p-4 border-b-4 border-black h-[75.5px]">
          <Link href="/" className="flex items-center gap-2">
            <Trophy size={24} />
            <span className="font-black text-xl">TOURNEY.GG</span>
          </Link>
        </div>

        <nav className="p-4 space-y-2">
          {[
            { icon: Gamepad2, label: 'Tournaments', href: '/tournaments' },
            { icon: Users, label: 'My Teams', href: '/teams' },
            { icon: Twitch, label: 'Live Matches', href: '/live' },
            { icon: Crown, label: 'Leaderboard', href: '/leaderboard' },
            { icon: Gift, label: 'Rewards', href: '/rewards' },
          ].map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex items-center gap-3 p-3 hover:bg-[#00CECB]/10 rounded-lg transition-colors"
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="md:ml-64">
        {/* Top Navigation */}
        <header className="sticky top-0 z-30 border-b-4 border-black bg-white p-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex items-center gap-4 ml-auto">
              <Button onClick={() => router.push('/create-tournament')}
                variant="outline"
                className="border-2 border-black hover:bg-[#00CECB]/10"
              >
                Create Tournament
              </Button>
              <Avatar onClick={() => router.push('/profile')} className="border-2 cursor-pointer border-black">
                <AvatarImage src="/avatar.jpg" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-black mb-2">Welcome back, Trickdo!</h1>
            <p className="text-gray-600">{"Here's what's happening in your gaming world"}</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Active Tournaments', value: '12', icon: Trophy, color: 'bg-[#FF5E5B]' },
              { label: 'Total Winnings', value: '$2,450', icon: DollarSign, color: 'bg-[#00CECB]' },
              { label: 'Live Matches', value: '8', icon: Twitch, color: 'bg-[#FFED66]' },
              { label: 'Global Rank', value: '#156', icon: Crown, color: 'bg-[#D8D8D8]' },
            ].map((stat, index) => (
              <Card key={index} className="border-2 border-black">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`${stat.color} p-3 rounded-lg border-2 border-black`}>
                      <stat.icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upcoming Tournaments */}
            <Card className="lg:col-span-2 border-2 border-black">
              <CardHeader>
                <CardTitle>Upcoming Tournaments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: 'VALORANT Champions Tour',
                      game: 'Valorant',
                      time: '2h 15m',
                      prize: '$10,000',
                      participants: '32/32',
                      img:"/valorant.jpg"
                    },
                    {
                      title: 'League World Series',
                      game: 'League of Legends',
                      time: '1d 4h',
                      prize: '$5,000',
                      participants: '24/32',
                      img:"/worldseries.avif"
                    },
                    {
                      title: 'CS:GO Masters',
                      game: 'CS:GO',
                      time: '2d 12h',
                      prize: '$7,500',
                      participants: '16/16',
                      img:"/csgo.jpg"
                    },
                  ].map((tournament, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border-2 border-black hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Image
                          src={tournament.img}
                          alt={tournament.game}
                          width={48}
                          height={48}
                          className="rounded border-2 border-black"
                        />
                        <div>
                          <h3 className="font-bold">{tournament.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Badge variant="outline" className="border-2 border-black">
                              {tournament.game}
                            </Badge>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {tournament.time}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold">{tournament.prize}</p>
                          <p className="text-sm text-gray-600">{tournament.participants}</p>
                        </div>
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle>Top Players</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'ProGamer123', points: 2500, rank: 1 },
                    { name: 'EpicPlayer', points: 2350, rank: 2 },
                    { name: 'GameMaster', points: 2200, rank: 3 },
                    { name: 'VictoryKing', points: 2100, rank: 4 },
                    { name: 'LegendStatus', points: 2000, rank: 5 },
                  ].map((player, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 border-2 border-black hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-8 h-8 flex items-center justify-center font-bold">
                        #{player.rank}
                      </div>
                      <Avatar className="border-2 border-black">
                        <AvatarImage src="/placeholder.svg" />
                        <AvatarFallback>{player.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-bold">{player.name}</p>
                        <div className="flex items-center gap-2">
                          <Progress value={player.points / 30} className="h-2" />
                          <span className="text-sm text-gray-600">{player.points}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Live Matches */}
            <Card className="lg:col-span-2 border-2 border-black">
              <CardHeader>
                <CardTitle>Live Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      team1: 'Dragons',
                      team2: 'Phoenix',
                      game: 'League of Legends',
                      viewers: '1.2k',
                      score: '2 - 1',
                    },
                    {
                      team1: 'Ninjas',
                      team2: 'Warriors',
                      game: 'VALORANT',
                      viewers: '856',
                      score: '12 - 8',
                    },
                  ].map((match, index) => (
                    <div
                      key={index}
                      className="border-2 border-black p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <Badge variant="outline" className="border-2 border-black">
                          {match.game}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-red-500">
                          <span className="animate-pulse">●</span>
                          LIVE
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-center flex-1">
                          <Avatar className="mx-auto mb-2 border-2 border-black">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>{match.team1[0]}</AvatarFallback>
                          </Avatar>
                          <p className="font-bold">{match.team1}</p>
                        </div>
                        <div className="text-2xl font-bold px-4">{match.score}</div>
                        <div className="text-center flex-1">
                          <Avatar className="mx-auto mb-2 border-2 border-black">
                            <AvatarImage src="/placeholder.svg" />
                            <AvatarFallback>{match.team2[0]}</AvatarFallback>
                          </Avatar>
                          <p className="font-bold">{match.team2}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <Twitch size={14} />
                        {match.viewers} viewers
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rewards Progress */}
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle>Rewards Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    { title: 'Tournament MVP', progress: 75, reward: '500 Points' },
                    { title: 'Win Streak', progress: 40, reward: 'Exclusive Badge' },
                    { title: 'Community Champion', progress: 90, reward: 'Premium Skin' },
                  ].map((reward, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <p className="font-medium">{reward.title}</p>
                        <span className="text-sm text-gray-600">{reward.reward}</span>
                      </div>
                      <Progress value={reward.progress} className="h-2" />
                      <p className="text-sm text-gray-600 text-right">{reward.progress}%</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

