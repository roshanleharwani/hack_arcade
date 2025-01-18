'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Users, Search, Filter, Star, Shield, Gamepad2, ChevronRight } from 'lucide-react'
import Link from "next/link"


export default function TeamsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const teams = [
    {
      id: 1,
      name: 'Team Alpha',
      tag: 'ALP',
      logo: '/placeholder.svg',
      game: 'VALORANT',
      rank: '#1',
      rating: 2500,
      members: 5,
      wins: 45,
      losses: 12,
      status: 'verified',
      achievements: ['Tournament Winner', 'Regional Champion']
    },
    {
      id: 2,
      name: 'Phoenix Squad',
      tag: 'PHX',
      logo: '/placeholder.svg',
      game: 'CS:GO',
      rank: '#3',
      rating: 2350,
      members: 5,
      wins: 38,
      losses: 15,
      status: 'pro',
      achievements: ['Season MVP']
    },
    // Add more teams as needed
  ]

  return (
    <div className="min-h-screen bg-[#FFFFEA]">
      {/* Header */}
      <div className="bg-[#FF5E5B] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-4xl font-black text-white">Teams</h1>
              <p className="text-white/90">Browse and manage competitive teams</p>
            </div>
            <Button className="bg-white text-[#FF5E5B] hover:bg-white/90 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
              Create Team
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Total Teams', value: '156', icon: Users },
              { label: 'Active Players', value: '780', icon: Gamepad2 },
              { label: 'Tournaments Won', value: '45', icon: Trophy },
              { label: 'Total Prize Money', value: '$25,000', icon: Star },
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 border-2 border-white p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <stat.icon className="w-5 h-5 text-white" />
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search teams..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-2 border-black"
            />
          </div>
          <Button variant="outline" className="border-2 border-black">
            <Filter className="w-4 h-4 mr-2" /> Filters
          </Button>
        </div>

        {/* Teams List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="border-2 border-black p-1 bg-white">
            <TabsTrigger value="all" className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white">
              All Teams
            </TabsTrigger>
            <TabsTrigger value="verified" className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white">
              Verified
            </TabsTrigger>
            <TabsTrigger value="pro" className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white">
              Pro Teams
            </TabsTrigger>
            <TabsTrigger value="recruiting" className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white">
              Recruiting
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {teams.map((team) => (
              <Link
                key={team.id}
                href={`/teams/${team.id}`}
                className="block"
              >
                <Card className="border-2 border-black hover:bg-gray-50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <Avatar className="w-24 h-24 border-2 border-black">
                          <AvatarImage src={team.logo} />
                          <AvatarFallback>{team.tag}</AvatarFallback>
                        </Avatar>
                        {team.status === 'verified' && (
                          <Badge className="absolute -top-2 -right-2 bg-[#00CECB] text-white border-2 border-black">
                            <Shield className="w-4 h-4" />
                          </Badge>
                        )}
                        {team.status === 'pro' && (
                          <Badge className="absolute -top-2 -right-2 bg-[#FFED66] text-black border-2 border-black">
                            PRO
                          </Badge>
                        )}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold">{team.name}</h3>
                          <Badge variant="outline" className="border-2 border-black">
                            {team.game}
                          </Badge>
                          <Badge variant="outline" className="border-2 border-[#00CECB] text-[#00CECB]">
                            Rank {team.rank}
                          </Badge>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                          <div>
                            <div className="text-sm text-gray-600">Rating</div>
                            <div className="font-bold">{team.rating}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Members</div>
                            <div className="font-bold">{team.members}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Win/Loss</div>
                            <div className="font-bold text-green-600">{team.wins}/{team.losses}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-600">Win Rate</div>
                            <div className="font-bold">
                              {Math.round((team.wins / (team.wins + team.losses)) * 100)}%
                            </div>
                          </div>
                        </div>

                        {team.achievements.length > 0 && (
                          <div className="flex gap-2 mt-4">
                            {team.achievements.map((achievement, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="border-2 border-[#FF5E5B] text-[#FF5E5B]"
                              >
                                <Trophy className="w-3 h-3 mr-1" />
                                {achievement}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <Button variant="outline" className="border-2 border-black">
                          View Team <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </TabsContent>

          {/* Other tab contents would be similar but filtered */}
          <TabsContent value="verified">
            {teams.filter(team => team.status === 'verified').map((team) => (
              // Same team card structure as above
              <Link
                key={team.id}
                href={`/teams/${team.id}`}
                className="block"
              >
                {/* Team card content (same as above) */}
              </Link>
            ))}
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-8">
          <Button variant="outline" className="border-2 border-black" disabled>
            Previous
          </Button>
          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "default" : "outline"}
              className={`border-2 border-black ${
                page === 1 ? 'bg-[#00CECB] text-white' : ''
              }`}
            >
              {page}
            </Button>
          ))}
          <Button variant="outline" className="border-2 border-black">
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

