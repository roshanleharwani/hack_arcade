/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Twitch, Clock , MessageSquare } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function TournamentPage() {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-[#FFFFEA]">
      {/* Tournament Header */}
      <div className="bg-[#FF5E5B] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-white">
            <div className="relative">
              <Image
                src="/valorant.jpg"
                alt="Tournament Banner"
                width={200}
                height={200}
                className="rounded-lg border-4 border-black"
              />
              <Badge className="absolute -top-2 -right-2 bg-[#00CECB] text-white border-2 border-black">
                LIVE
              </Badge>
            </div>
            
            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h1 className="text-4xl font-black">VALORANT Champions Tour 2024</h1>
                <p className="text-white/90">Organized by TOURNEY.GG</p>
              </div>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="bg-black/20 px-4 py-2 rounded-lg border-2 border-white">
                  <div className="text-2xl font-bold">$10,000</div>
                  <div className="text-sm">Prize Pool</div>
                </div>
                <div className="bg-black/20 px-4 py-2 rounded-lg border-2 border-white">
                  <div className="text-2xl font-bold">32</div>
                  <div className="text-sm">Teams</div>
                </div>
                <div className="bg-black/20 px-4 py-2 rounded-lg border-2 border-white">
                  <div className="text-2xl font-bold">Double</div>
                  <div className="text-sm">Elimination</div>
                </div>
              </div>

              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                <Button className="bg-white text-[#FF5E5B] hover:bg-white/90 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                  <Twitch className="w-4 h-4 mr-2" /> Watch Stream
                </Button>
                <Button className="bg-white text-[#FF5E5B] hover:bg-white/90 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                  <MessageSquare className="w-4 h-4 mr-2" /> Tournament Chat
                </Button>
               
              </div>
            </div>

            <div className="text-center space-y-2">
              <div className="bg-black/20 p-4 rounded-lg border-2 border-white">
                <Clock className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm">Next Match In</div>
                <div className="text-2xl font-bold">02:45:30</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Tabs defaultValue="bracket" className="space-y-6">
          <TabsList className="border-2 border-black p-1 bg-white">
            <TabsTrigger value="bracket" className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white">
              Bracket
            </TabsTrigger>
            <TabsTrigger value="matches" className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white">
              Matches
            </TabsTrigger>
            <TabsTrigger value="teams" className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white">
              Teams
            </TabsTrigger>
            <TabsTrigger value="rules" className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white">
              Rules
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bracket">
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle>Tournament Bracket</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <div className="min-w-[800px] p-4">
                    {/* Example bracket visualization */}
                    <div className="grid grid-cols-4 gap-8">
                      {/* Quarter Finals */}
                      <div className="space-y-8">
                        <div className="border-2 border-black p-4 bg-white">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="font-bold">Team Alpha</span>
                              <span>2</span>
                            </div>
                            <div className="border-t-2 border-black"></div>
                            <div className="flex justify-between items-center">
                              <span>Team Beta</span>
                              <span>0</span>
                            </div>
                          </div>
                        </div>
                        {/* Repeat for other quarter final matches */}
                        {[...Array(3)].map((_, i) => (
                          <div key={i} className="border-2 border-black p-4 bg-white">
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span>TBD</span>
                                <span>-</span>
                              </div>
                              <div className="border-t-2 border-black"></div>
                              <div className="flex justify-between items-center">
                                <span>TBD</span>
                                <span>-</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Semi Finals */}
                      <div className="space-y-16 mt-16">
                        {[...Array(2)].map((_, i) => (
                          <div key={i} className="border-2 border-black p-4 bg-white">
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span>TBD</span>
                                <span>-</span>
                              </div>
                              <div className="border-t-2 border-black"></div>
                              <div className="flex justify-between items-center">
                                <span>TBD</span>
                                <span>-</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Finals */}
                      <div className="space-y-32 mt-32">
                        <div className="border-2 border-black p-4 bg-white">
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span>TBD</span>
                              <span>-</span>
                            </div>
                            <div className="border-t-2 border-black"></div>
                            <div className="flex justify-between items-center">
                              <span>TBD</span>
                              <span>-</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Winner */}
                      <div className="mt-48">
                        <div className="border-2 border-black p-4 bg-[#FFED66]">
                          <Trophy className="w-6 h-6 mx-auto mb-2" />
                          <div className="text-center font-bold">Winner</div>
                          <div className="text-center text-sm">TBD</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matches">
            <Card className="border-2 border-black">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    {
                      team1: { name: 'Team Alpha', score: 2 },
                      team2: { name: 'Team Beta', score: 0 },
                      status: 'Completed',
                      round: 'Quarter Finals',
                      time: '2 hours ago'
                    },
                    {
                      team1: { name: 'Team Delta', score: 1 },
                      team2: { name: 'Team Gamma', score: 1 },
                      status: 'Live',
                      round: 'Quarter Finals',
                      time: 'Now'
                    },
                    {
                      team1: { name: 'Team Omega', score: '-' },
                      team2: { name: 'Team Sigma', score: '-' },
                      status: 'Upcoming',
                      round: 'Quarter Finals',
                      time: 'In 2h 45m'
                    },
                  ].map((match, index) => (
                    <div
                      key={index}
                      className="border-2 border-black p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">{match.round}</span>
                            <Badge
                              variant="outline"
                              className={`border-2 ${
                                match.status === 'Live'
                                  ? 'border-red-500 text-red-500'
                                  : match.status === 'Completed'
                                  ? 'border-green-500 text-green-500'
                                  : 'border-gray-500 text-gray-500'
                              }`}
                            >
                              {match.status}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 items-center">
                            <div className="text-right">
                              <span className="font-bold">{match.team1.name}</span>
                            </div>
                            <div className="text-center text-2xl font-bold">
                              {match.team1.score} - {match.team2.score}
                            </div>
                            <div className="text-left">
                              <span className="font-bold">{match.team2.name}</span>
                            </div>
                          </div>
                          <div className="text-center text-sm text-gray-600 mt-2">
                            {match.time}
                          </div>
                        </div>
                        <Button variant="outline" className="border-2 border-black">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teams">
            <Card className="border-2 border-black">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[...Array(8)].map((_, index) => (
                    <div
                      key={index}
                      className="border-2 border-black p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16 border-2 border-black">
                          <AvatarImage src="/avatar.jpg" />
                          <AvatarFallback>T{index + 1}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-bold">Team {index + 1}</h3>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="border-2 border-black">
                              Seed #{index + 1}
                            </Badge>
                            <span className="text-sm text-gray-600">
                              5 players
                            </span>
                          </div>
                        </div>
                        <Button variant="outline" className="border-2 border-black">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules">
            <Card className="border-2 border-black">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Tournament Format</h3>
                    <p className="text-gray-600">
                      Double elimination bracket with Best of 3 matches throughout the tournament.
                      Finals will be Best of 5.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Prize Distribution</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="border-2 border-black p-4 bg-[#FFED66]">
                        <Trophy className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">$5,000</div>
                        <div className="text-sm">1st Place</div>
                      </div>
                      <div className="border-2 border-black p-4 bg-[#D8D8D8]">
                        <Trophy className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">$3,000</div>
                        <div className="text-sm">2nd Place</div>
                      </div>
                      <div className="border-2 border-black p-4 bg-[#FF5E5B]">
                        <Trophy className="w-6 h-6 mb-2" />
                        <div className="text-2xl font-bold">$2,000</div>
                        <div className="text-sm">3rd Place</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Rules & Guidelines</h3>
                    <div className="space-y-4">
                      {[
                        "All players must be registered and verified",
                        "Teams must be present 15 minutes before their scheduled match",
                        "Each map has a specific veto process",
                        "Substitutes must be declared before the tournament starts",
                        "All matches will be monitored by tournament admins"
                      ].map((rule, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-6 h-6 flex items-center justify-center border-2 border-black rounded-full bg-[#00CECB] text-white flex-shrink-0">
                            {index + 1}
                          </div>
                          <p>{rule}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

