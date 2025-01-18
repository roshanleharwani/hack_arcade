/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Medal, Crown, Swords, Target, Gamepad2, ArrowUp, ArrowDown, Minus } from 'lucide-react'
import Image from "next/image"

export default function LeaderboardPage() {
  const [selectedGame, setSelectedGame] = useState('all')
  const [selectedPeriod, setSelectedPeriod] = useState('all-time')

  const leaderboardData = [
    {
      rank: 1,
      previousRank: 2,
      name: "ProGamer123",
      avatar: "/placeholder.svg",
      team: "Team Ninja",
      points: 2500,
      winRate: "76%",
      earnings: "$45,000",
      games: {
        valorant: "Immortal",
        csgo: "Global Elite",
        lol: "Diamond I"
      }
    },
    {
      rank: 2,
      previousRank: 1,
      name: "EpicPlayer",
      avatar: "/placeholder.svg",
      team: "Elite Squad",
      points: 2350,
      winRate: "72%",
      earnings: "$38,000",
      games: {
        valorant: "Radiant",
        csgo: "Supreme",
        lol: "Master"
      }
    },
    {
      rank: 3,
      previousRank: 3,
      name: "GameMaster",
      avatar: "/placeholder.svg",
      team: "Phoenix",
      points: 2200,
      winRate: "70%",
      earnings: "$32,000",
      games: {
        valorant: "Immortal",
        csgo: "Global Elite",
        lol: "Diamond II"
      }
    },
    // Add more players...
  ]

  const getRankChange = (current: number, previous: number) => {
    if (current < previous) {
      return <ArrowUp className="h-4 w-4 text-green-500" />
    } else if (current > previous) {
      return <ArrowDown className="h-4 w-4 text-red-500" />
    }
    return <Minus className="h-4 w-4 text-gray-500" />
  }

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-[#FFED66]" />
      case 2:
        return <Medal className="h-6 w-6 text-[#D8D8D8]" />
      case 3:
        return <Crown className="h-6 w-6 text-[#FF5E5B]" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-[#FFFFEA]">
      {/* Header */}
      <header className="border-b-4 border-black bg-[#00CECB] p-6">
        <div className="container mx-auto">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-black">Global Leaderboard</h1>
              <p className="text-lg">Compete with the best players worldwide</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Select value={selectedGame} onValueChange={setSelectedGame}>
                <SelectTrigger className="bg-white w-[180px] border-4 border-black">
                  <SelectValue placeholder="Select Game" />
                </SelectTrigger>
                <SelectContent className="border-4 border-black">
                  <SelectItem value="all">All Games</SelectItem>
                  <SelectItem value="valorant">VALORANT</SelectItem>
                  <SelectItem value="csgo">CS:GO</SelectItem>
                  <SelectItem value="lol">League of Legends</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="bg-white w-[180px] border-4 border-black">
                  <SelectValue placeholder="Select Period" />
                </SelectTrigger>
                <SelectContent className="border-4 border-black">
                  <SelectItem value="all-time">All Time</SelectItem>
                  <SelectItem value="season">Current Season</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="week">This Week</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <section className="container mx-auto p-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Trophy className="h-8 w-8 text-[#FFED66]" />,
              label: "Total Prize Pool",
              value: "$250,000"
            },
            {
              icon: <Swords className="h-8 w-8 text-[#FF5E5B]" />,
              label: "Active Players",
              value: "15,423"
            },
            {
              icon: <Target className="h-8 w-8 text-[#00CECB]" />,
              label: "Tournaments",
              value: "156"
            },
            {
              icon: <Gamepad2 className="h-8 w-8 text-[#D8D8D8]" />,
              label: "Games",
              value: "12"
            }
          ].map((stat, index) => (
            <Card key={index} className="border-4 border-black">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="rounded-xl border-2 border-black bg-white p-2">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Leaderboard */}
      <section className="container mx-auto p-6">
        <Card className="border-4 border-black">
          <CardHeader className="border-b-4  bg-white p-4">
            <Tabs defaultValue="global" className="w-full">
              <TabsList className="flex w-full gap-2 rounded-xl border-4 border-black  bg-white p-2">
                <TabsTrigger
                  value="global"
                  className="flex-1 rounded-lg border-2   font-mono data-[state=active]:bg-[#00CECB] data-[state=active]:text-black"
                >
                  Global
                </TabsTrigger>
                <TabsTrigger
                  value="regional"
                  className="flex-1 rounded-lg border-2   font-mono data-[state=active]:bg-[#00CECB] data-[state=active]:text-black"
                >
                  Regional
                </TabsTrigger>
                <TabsTrigger
                  value="friends"
                  className="flex-1 rounded-lg border-2   font-mono data-[state=active]:bg-[#00CECB] data-[state=active]:text-black"
                >
                  Friends
                </TabsTrigger>
              </TabsList>
              <TabsContent value="global">
                <div className="grid grid-cols-12 gap-4 border-b-2 border-black bg-[#FFFFEA] p-4 font-bold">
                  <div className="col-span-1 text-center">Rank</div>
                  <div className="col-span-3">Player</div>
                  <div className="col-span-2">Team</div>
                  <div className="col-span-2 text-center">Points</div>
                  <div className="col-span-2 text-center">Win Rate</div>
                  <div className="col-span-2 text-right">Earnings</div>
                </div>
                {leaderboardData.map((player, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-12 gap-4 border-b-2 border-black p-4 hover:bg-gray-50"
                  >
                    <div className="col-span-1 flex items-center justify-center gap-2">
                      <div className="flex items-center gap-1">
                        <span className="font-bold">{player.rank}</span>
                        {getRankChange(player.rank, player.previousRank)}
                      </div>
                      {getRankIcon(player.rank)}
                    </div>
                    <div className="col-span-3 flex items-center gap-3">
                      <Image
                        src={player.avatar || "/placeholder.svg"}
                        alt={player.name}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-black"
                      />
                      <div>
                        <div className="font-bold">{player.name}</div>
                        <div className="flex gap-1">
                          {Object.entries(player.games).map(([game, rank], i) => (
                            <span
                              key={i}
                              className="rounded-full border border-black bg-[#FFFFEA] px-2 py-0.5 text-xs"
                            >
                              {rank}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center">
                      <span className="rounded-lg border-2 border-black bg-[#FFFFEA] px-2 py-1 text-sm">
                        {player.team}
                      </span>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <Crown className="h-4 w-4 text-[#FFED66]" />
                        <span className="font-bold">{player.points}</span>
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-center">
                      <div className="w-24 rounded-full border-2 border-black bg-gray-200">
                        <div
                          className="rounded-full bg-[#00CECB] px-2 py-1 text-center text-sm text-white"
                          style={{ width: player.winRate }}
                        >
                          {player.winRate}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 flex items-center justify-end font-bold text-[#FF5E5B]">
                      {player.earnings}
                    </div>
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="regional">
                <p className="p-4 text-center">Regional leaderboard content goes here.</p>
              </TabsContent>
              <TabsContent value="friends">
                <p className="p-4 text-center">Friends leaderboard content goes here.</p>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </section>
    </div>
  )
}