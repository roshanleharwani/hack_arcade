"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Trophy,
  Search,
  Users,
  Clock,
  ChevronRight,
  Filter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function TournamentsListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState([
    {
      _id: "",
      name: "",
      game: "",
      description: "",
      format: "",
      teamSize: null,
      maxTeam: null,
      entryFees: null,
      prizePool: null,
      startDate: "",
      startTime: "",
      stream: null,
      spectators: null,
      user: "",
    },
  ]);
  const router = useRouter();
  const games = [
    {
      id: "csgo",
      name: "CS:GO",
      image: "/csgo.jpg",
      activeTournaments: 8,
      totalPrizePool: "$35,000",
      color: "bg-[#00CECB]",
    },
    {
      id: "lol",
      name: "League of Legends",
      image: "/leagueoflegends.jpg",
      activeTournaments: 15,
      totalPrizePool: "$45,000",
      color: "bg-[#FFED66]",
    },
    {
      id: "dota2",
      name: "Dota 2",
      image: "/dota2.jpg",
      activeTournaments: 10,
      totalPrizePool: "$40,000",
      color: "bg-[#D8D8D8]",
    },
  ];

  // const tournaments = [
  //   {
  //     id: 1,
  //     game: "VALORANT",
  //     name: "VALORANT Champions Tour 2024",
  //     prizePool: "$10,000",
  //     teams: "32/32",
  //     startTime: "2h 15m",
  //     status: "live",
  //     image: "/valorant.jpg",
  //   },
  //   {
  //     id: 2,
  //     game: "VALORANT",
  //     name: "Winter Championship",
  //     prizePool: "$5,000",
  //     teams: "24/32",
  //     startTime: "1d 4h",
  //     status: "upcoming",
  //     image: "/valorant.jpg",
  //   },
  //   {
  //     id: 3,
  //     game: "CS:GO",
  //     name: "CS:GO Masters League",
  //     prizePool: "$7,500",
  //     teams: "16/16",
  //     startTime: "Now",
  //     status: "live",
  //     image: "/csgo.jpg",
  //   },
  // ];

  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("/api/tournaments/");
      const data = await response.json();
      console.log(data);
      setEvents(data);
    };
    fetcher();
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFEA]">
      {/* Header */}
      <div className="bg-[#00CECB] border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-4xl font-black">Tournaments</h1>
              <p className="text-gray-800">
                Find and join tournaments across different games
              </p>
            </div>
            <Button
              onClick={() => router.push("/create-tournament")}
              className="bg-black text-white hover:bg-black/90 border-2 border-black shadow-[4px_4px_0px_0px_#FF5E5B] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            >
              Create Tournament
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Games Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Popular Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {games.map((game) => (
              <Link
                key={game.id}
                href={`/tournaments/${game.id}`}
                className="block"
              >
                <Card className="border-2 border-black hover:translate-y-[-4px] transition-transform ">
                  <CardContent className="p-0">
                    <div
                      className={`${game.color} p-4 border-b-2 border-black`}
                    >
                      <Image
                        src={game.image || "/placeholder.svg"}
                        alt={game.name}
                        width={80}
                        height={80}
                        className="rounded border-2 border-black min-h-16"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-xl mb-2">{game.name}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            Active Tournaments
                          </span>
                          <span className="font-bold">
                            {game.activeTournaments}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">
                            Total Prize Pool
                          </span>
                          <span className="font-bold">
                            {game.totalPrizePool}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <Input
              placeholder="Search tournaments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 border-2 border-black"
            />
          </div>
          <Button variant="outline" className="border-2 border-black">
            <Filter className="w-4 h-4 mr-2" /> Filters
          </Button>
        </div>

        {/* Tournaments List */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="border-2 border-black p-1 bg-white">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white"
            >
              All Tournaments
            </TabsTrigger>
            <TabsTrigger
              value="live"
              className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white"
            >
              Live Now
            </TabsTrigger>
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white"
            >
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {events.map((tournament) => (
              <Link
                key={tournament._id}
                href={`/tournament/${tournament._id}`}
                className="block"
              >
                <Card className="border-2 border-black hover:bg-gray-50 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-6">
                      <Image
                        src={"/placeholder.svg"}
                        alt={tournament.name}
                        width={120}
                        height={120}
                        className="rounded border-2 border-black"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className="border-2 border-black"
                          >
                            {tournament.game}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`border-2 ${
                              new Date(tournament.startDate).toDateString() ===
                              new Date().toDateString()
                                ? "border-red-500 text-red-500"
                                : "border-gray-500 text-gray-500"
                            }`}
                          >
                            {new Date(tournament.startDate).toDateString() ===
                              new Date().toDateString() && "🔴 "}
                            {new Date(tournament.startDate).toDateString() ===
                            new Date().toDateString()
                              ? "LIVE"
                              : "UPCOMING"}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2">
                          {tournament.name}
                        </h3>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <Trophy className="w-4 h-4" />
                            {tournament.prizePool}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {tournament.maxTeam}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {tournament.startTime}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className="w-6 h-6 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </TabsContent>

          {/* Other tab contents would be similar but filtered */}
          <TabsContent value="live">
            {events
              .filter(
                (t) =>
                  new Date(t.startDate).toDateString() ===
                  new Date().toDateString()
              )
              .map((tournament) => (
                // Same tournament card structure as above
                <Link
                  key={tournament._id}
                  href={`/tournament/${tournament._id}`}
                  className="block"
                >
                  <Card className="border-2 border-black hover:bg-gray-50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-6">
                        <Image
                          src={"/placeholder.svg"}
                          alt={tournament.name}
                          width={120}
                          height={120}
                          className="rounded border-2 border-black"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge
                              variant="outline"
                              className="border-2 border-black"
                            >
                              {tournament.game}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="border-2 border-red-500 text-red-500"
                            >
                              🔴 LIVE
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold mb-2">
                            {tournament.name}
                          </h3>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Trophy className="w-4 h-4" />
                              {tournament.prizePool}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {tournament.maxTeam}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {tournament.startTime}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
