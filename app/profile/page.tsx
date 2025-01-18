/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Trophy,
  Gamepad2,
  Medal,
  Star,
  Settings,
  Crown,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    tournament: [],
    winnings: 0,
    points: 0,
    username: "",
  });
  useEffect(() => {
    const fetcher = async () => {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUser(data);
    };
    fetcher();
  }, []);
  return (
    <div className="min-h-screen bg-[#FFFFEA] py-12 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Profile Header */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#FF5E5B] p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="relative">
              <Avatar className="w-32 h-32 border-4 border-black">
                <AvatarImage src="/avatar.jpg" alt="Profile Picture" />
                <AvatarFallback>GP</AvatarFallback>
              </Avatar>
              <Badge className="absolute -top-2 -right-2 bg-[#00CECB] text-white border-2 border-black">
                PRO
              </Badge>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div>
                <h1 className="text-3xl font-black">{user.username}</h1>
                <p className="text-gray-600">Joined January 2024</p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="outline" className="border-2 border-black">
                  <Trophy className="w-4 h-4 mr-1" /> Tournament Winner
                </Badge>
                <Badge variant="outline" className="border-2 border-black">
                  <Star className="w-4 h-4 mr-1" /> Top Player
                </Badge>
                <Badge variant="outline" className="border-2 border-black">
                  <Medal className="w-4 h-4 mr-1" /> Verified
                </Badge>
              </div>

              <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                <Button className="bg-[#FF5E5B] hover:bg-[#FF5E5B]/90 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all">
                  Edit Profile
                </Button>
                <Button variant="outline" className="border-2 border-black">
                  <Settings className="w-4 h-4 mr-2" /> Settings
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="border-2 border-black p-3">
                <div className="text-2xl font-bold">
                  {user.tournament?.length || 0}
                </div>
                <div className="text-sm text-gray-600">Tournaments</div>
              </div>
              <div className="border-2 border-black p-3">
                <div className="text-2xl font-bold">{user.winnings}</div>
                <div className="text-sm text-gray-600">Wins</div>
              </div>
              <div className="border-2 border-black p-3">
                <div className="text-2xl font-bold">{user.points}</div>
                <div className="text-sm text-gray-600">Points</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="border-2 border-black p-1 bg-white">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger
              value="matches"
              className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white"
            >
              Match History
            </TabsTrigger>
            <TabsTrigger
              value="teams"
              className="data-[state=active]:bg-[#00CECB] data-[state=active]:text-white"
            >
              Teams
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-black">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Crown className="w-5 h-5" />
                    Current Season
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Rank Progress</span>
                      <span>Diamond II</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Win Rate</p>
                      <p className="font-bold">65%</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Games</p>
                      <p className="font-bold">248</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-black">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5" />
                    Main Games
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        game: "VALORANT",
                        hours: "450hrs",
                        rank: "Immortal",
                        src: "/valorant.jpg",
                      },
                      {
                        game: "League of Legends",
                        hours: "320hrs",
                        rank: "Diamond",
                        src: "/leagueoflegends.jpg",
                      },
                      {
                        game: "CS:GO",
                        hours: "180hrs",
                        rank: "Global Elite",
                        src: "/csgo.jpg",
                      },
                    ].map((game, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Image
                          src={game.src}
                          alt={game.game}
                          width={40}
                          height={40}
                          className="rounded border-2 border-black"
                        />
                        <div className="flex-1">
                          <p className="font-bold">{game.game}</p>
                          <p className="text-sm text-gray-600">{game.hours}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-2 border-black"
                        >
                          {game.rank}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-black">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Tournament MVP",
                        date: "2 days ago",
                        points: "+500",
                      },
                      {
                        title: "5 Win Streak",
                        date: "1 week ago",
                        points: "+200",
                      },
                      {
                        title: "First Place",
                        date: "2 weeks ago",
                        points: "+1000",
                      },
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-[#FFED66] w-10 h-10 flex items-center justify-center border-2 border-black">
                          <Trophy className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold">{achievement.title}</p>
                          <p className="text-sm text-gray-600">
                            {achievement.date}
                          </p>
                        </div>
                        <span className="text-[#00CECB] font-bold">
                          {achievement.points}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Matches */}
            <Card className="border-2 border-black">
              <CardHeader>
                <CardTitle>Recent Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      game: "VALORANT",
                      result: "Victory",
                      score: "13-8",
                      date: "2 hours ago",
                      kda: "24/12/8",
                      img: "/valorant.jpg",
                    },
                    {
                      game: "VALORANT",
                      result: "Defeat",
                      score: "11-13",
                      date: "5 hours ago",
                      kda: "18/15/6",
                      img: "/valorant.jpg",
                    },
                    {
                      game: "League of Legends",
                      result: "Victory",
                      score: "WIN",
                      date: "1 day ago",
                      kda: "12/3/15",
                      img: "/leagueoflegends.jpg",
                    },
                  ].map((match, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 border-2 border-black hover:bg-gray-50 transition-colors"
                    >
                      <Image
                        src={match.img}
                        alt={match.game}
                        width={48}
                        height={48}
                        className="rounded border-2 border-black"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold">{match.game}</h3>
                          <Badge
                            variant="outline"
                            className={`border-2 ${
                              match.result === "Victory"
                                ? "border-green-500 text-green-500"
                                : "border-red-500 text-red-500"
                            }`}
                          >
                            {match.result}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {match.score} • KDA: {match.kda}
                        </p>
                      </div>
                      <div className="text-sm text-gray-600">{match.date}</div>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card className="border-2 border-black">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Tournament Victor",
                      desc: "Win 10 tournaments",
                      progress: 70,
                    },
                    {
                      title: "Winning Streak",
                      desc: "Win 5 matches in a row",
                      progress: 100,
                    },
                    {
                      title: "Sharp Shooter",
                      desc: "Achieve 80% accuracy",
                      progress: 45,
                    },
                    {
                      title: "Team Leader",
                      desc: "Lead 5 teams to victory",
                      progress: 60,
                    },
                    {
                      title: "Community Star",
                      desc: "Receive 100 commendations",
                      progress: 25,
                    },
                    {
                      title: "Global Elite",
                      desc: "Reach top 1% rank",
                      progress: 90,
                    },
                  ].map((achievement, index) => (
                    <div
                      key={index}
                      className="border-2 border-black p-4 space-y-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-[#FFED66] w-10 h-10 flex items-center justify-center border-2 border-black">
                          <Trophy className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-bold">{achievement.title}</h3>
                          <p className="text-sm text-gray-600">
                            {achievement.desc}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Progress
                          value={achievement.progress}
                          className="h-2"
                        />
                        <div className="text-right text-sm text-gray-600">
                          {achievement.progress}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matches">
            <Card className="border-2 border-black">
              <CardContent className="p-6 space-y-4">
                {[
                  {
                    game: "VALORANT",
                    result: "Victory",
                    score: "13-8",
                    date: "2 hours ago",
                    kda: "24/12/8",
                    map: "Haven",
                    img: "/valorant.jpg",
                  },
                  {
                    game: "VALORANT",
                    result: "Defeat",
                    score: "11-13",
                    date: "5 hours ago",
                    kda: "18/15/6",
                    map: "Bind",
                    img: "/valorant.jpg",
                  },
                  {
                    game: "League of Legends",
                    result: "Victory",
                    score: "WIN",
                    date: "1 day ago",
                    kda: "12/3/15",
                    map: "Summoner's Rift",
                    img: "/leagueoflegends.jpg",
                  },
                  {
                    game: "CS:GO",
                    result: "Victory",
                    score: "16-14",
                    date: "2 days ago",
                    kda: "25/18/4",
                    map: "Dust II",
                    img: "/csgo.jpg",
                  },
                ].map((match, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 border-2 border-black hover:bg-gray-50 transition-colors"
                  >
                    <Image
                      src={match.img}
                      alt={match.game}
                      width={64}
                      height={64}
                      className="rounded border-2 border-black"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold">{match.game}</h3>
                        <Badge
                          variant="outline"
                          className={`border-2 ${
                            match.result === "Victory"
                              ? "border-green-500 text-green-500"
                              : "border-red-500 text-red-500"
                          }`}
                        >
                          {match.result}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {match.map} • {match.score}
                      </p>
                      <p className="text-sm text-gray-600">KDA: {match.kda}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">{match.date}</div>
                      <Button
                        variant="outline"
                        className="mt-2 border-2 border-black"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teams">
            <Card className="border-2 border-black">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Team Alpha",
                      game: "VALORANT",
                      role: "Captain",
                      members: 5,
                    },
                    {
                      name: "Pro Squad",
                      game: "League of Legends",
                      role: "Member",
                      members: 5,
                    },
                    {
                      name: "Elite Force",
                      game: "CS:GO",
                      role: "Member",
                      members: 5,
                    },
                    {
                      name: "Victory Legion",
                      game: "VALORANT",
                      role: "Captain",
                      members: 5,
                    },
                  ].map((team, index) => (
                    <div
                      key={index}
                      className="border-2 border-black p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <Avatar className="w-16 h-16 border-2 border-black">
                          <AvatarImage src="/placeholder.svg" alt={team.name} />
                          <AvatarFallback>{team.name[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h3 className="font-bold">{team.name}</h3>
                          <p className="text-sm text-gray-600">{team.game}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge
                              variant="outline"
                              className="border-2 border-black"
                            >
                              {team.role}
                            </Badge>
                            <span className="text-sm text-gray-600">
                              {team.members} members
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="border-2 border-black"
                        >
                          View Team
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
