"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Users, Eye, Trophy, Swords, ChevronRight } from "lucide-react";

export default function LiveMatchesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGame, setSelectedGame] = useState("all");

  const liveMatches = [
    {
      id: 1,
      tournament: "VALORANT Champions Tour 2024",
      game: "VALORANT",
      team1: { name: "Team Alpha", score: 12, logo: "/placeholder.svg" },
      team2: { name: "Phoenix Squad", score: 10, logo: "/placeholder.svg" },
      viewers: 12500,
      map: "Haven",
      round: "Semi-Finals",
      prizePool: "$10,000",
      streamUrl: "#",
    },
    {
      id: 2,
      tournament: "CS:GO Masters League",
      game: "CS:GO",
      team1: { name: "Global Elite", score: 14, logo: "/placeholder.svg" },
      team2: { name: "Nova Force", score: 14, logo: "/placeholder.svg" },
      viewers: 8750,
      map: "Dust II",
      round: "Finals",
      prizePool: "$15,000",
      streamUrl: "#",
    },
    // Add more matches as needed
  ];

  return (
    <div className="min-h-screen bg-[#FFFFEA]">
      {/* Header */}
      <div className="bg-[#00CECB] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-4xl font-black">Live Matches</h1>
              <p className="text-gray-800">
                Watch competitive matches happening right now
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge
                variant="outline"
                className="bg-white border-2 border-black px-4 py-2"
              >
                <div className="animate-pulse mr-2 h-2 w-2 rounded-full bg-red-500" />
                {liveMatches.length} Live Matches
              </Badge>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            {[
              { label: "Total Viewers", value: "45.2K", icon: Eye },
              { label: "Active Players", value: "124", icon: Users },
              { label: "Prize Money", value: "$35,000", icon: Trophy },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 border-2 border-white p-4 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <stat.icon className="w-5 h-5 text-white" />
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
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
              placeholder="Search matches..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-2 border-black"
            />
          </div>
          <Select value={selectedGame} onValueChange={setSelectedGame}>
            <SelectTrigger className="w-[180px] border-2 border-black">
              <SelectValue placeholder="Select game" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Games</SelectItem>
              <SelectItem value="valorant">VALORANT</SelectItem>
              <SelectItem value="csgo">CS:GO</SelectItem>
              <SelectItem value="lol">League of Legends</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Featured Match */}
        {liveMatches[0] && (
          <Card className="border-4 border-black bg-[#FF5E5B] text-white">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <div className="mb-4">
                    <Badge className="bg-white text-[#FF5E5B] border-2 border-black">
                      FEATURED MATCH
                    </Badge>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    {liveMatches[0].tournament}
                  </h2>
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline" className="border-2 border-white">
                      {liveMatches[0].game}
                    </Badge>
                    <Badge variant="outline" className="border-2 border-white">
                      {liveMatches[0].round}
                    </Badge>
                    <Badge variant="outline" className="border-2 border-white">
                      {liveMatches[0].map}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center mb-4">
                    <div className="text-center">
                      <Avatar className="w-20 h-20 mx-auto border-2 border-white mb-2">
                        <AvatarImage src={liveMatches[0].team1.logo} />
                        <AvatarFallback>
                          {liveMatches[0].team1.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="font-bold">
                        {liveMatches[0].team1.name}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">
                        {liveMatches[0].team1.score} -{" "}
                        {liveMatches[0].team2.score}
                      </div>
                      <div className="text-sm">LIVE</div>
                    </div>
                    <div className="text-center">
                      <Avatar className="w-20 h-20 mx-auto border-2 border-white mb-2">
                        <AvatarImage src={liveMatches[0].team2.logo} />
                        <AvatarFallback>
                          {liveMatches[0].team2.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div className="font-bold">
                        {liveMatches[0].team2.name}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      {liveMatches[0].viewers.toLocaleString()} viewers
                    </div>
                    <Button className="bg-white text-[#FF5E5B] hover:bg-white/90 border-2 border-black">
                      Watch Stream
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Other Live Matches */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">All Live Matches</h2>
          {liveMatches.map((match) => (
            <Card
              key={match.id}
              className="border-2 border-black hover:bg-gray-50 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge
                        variant="outline"
                        className="border-2 border-black"
                      >
                        {match.game}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-2 border-red-500 text-red-500"
                      >
                        <div className="animate-pulse mr-2 h-2 w-2 rounded-full bg-red-500" />
                        LIVE
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-2 border-black"
                      >
                        {match.round}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {match.tournament}
                    </h3>
                    <div className="grid grid-cols-3 gap-4 items-center mb-4">
                      <div className="text-center">
                        <Avatar className="w-16 h-16 mx-auto border-2 border-black mb-2">
                          <AvatarImage src={match.team1.logo} />
                          <AvatarFallback>{match.team1.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="font-bold">{match.team1.name}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">
                          {match.team1.score} - {match.team2.score}
                        </div>
                        <div className="text-sm text-gray-600">{match.map}</div>
                      </div>
                      <div className="text-center">
                        <Avatar className="w-16 h-16 mx-auto border-2 border-black mb-2">
                          <AvatarImage src={match.team2.logo} />
                          <AvatarFallback>{match.team2.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="font-bold">{match.team2.name}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Eye className="w-4 h-4" />
                          {match.viewers.toLocaleString()} viewers
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Trophy className="w-4 h-4" />
                          {match.prizePool}
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="border-2 border-black"
                      >
                        Watch Stream <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Matches Message */}
        {liveMatches.length === 0 && (
          <Card className="border-2 border-black">
            <CardContent className="p-12 text-center">
              <Swords className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-bold mb-2">No Live Matches</h3>
              <p className="text-gray-600">
                Check back later for more exciting matches!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
