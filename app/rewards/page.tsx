'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Gift, Trophy, Star, Clock, ChevronRight, Gamepad2, Target, Users } from 'lucide-react'
import Image from "next/image"

export default function RewardsPage() {
  const [userPoints, setUserPoints] = useState(2450)
  const [userLevel, setUserLevel] = useState(15)

  const availableRewards = [
    { id: 1, name: "Pro Gaming Chair", points: 5000, image: "/placeholder.svg" },
    { id: 2, name: "Gaming Headset", points: 3000, image: "/placeholder.svg" },
    { id: 3, name: "Premium Subscription", points: 1000, image: "/placeholder.svg" },
    { id: 4, name: "Exclusive In-Game Item", points: 500, image: "/placeholder.svg" },
    { id: 5, name: "Tournament Entry Ticket", points: 2000, image: "/placeholder.svg" },
  ]

  const rewardHistory = [
    { id: 1, name: "Exclusive In-Game Item", date: "2025-01-15", points: 500 },
    { id: 2, name: "Premium Subscription", date: "2024-12-20", points: 1000 },
    { id: 3, name: "Tournament Entry Ticket", date: "2024-11-05", points: 2000 },
  ]

  const pointEarningMethods = [
    { icon: <Trophy className="h-6 w-6" />, title: "Win Tournaments", description: "Earn up to 1000 points per tournament win" },
    { icon: <Star className="h-6 w-6" />, title: "Daily Check-in", description: "Get 50 points every day you log in" },
    { icon: <Users className="h-6 w-6" />, title: "Refer Friends", description: "Earn 200 points for each friend who joins" },
    { icon: <Target className="h-6 w-6" />, title: "Complete Challenges", description: "Various challenges with point rewards" },
  ]

  return (
    <div className="min-h-screen bg-[#FFFFEA]">
      {/* Header */}
      <header className="border-b-4 border-black bg-[#00CECB] p-6">
        <div className="container mx-auto">
          <h1 className="text-4xl font-black">Rewards Center</h1>
          <p className="text-lg">Redeem your points for exclusive rewards!</p>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          {/* Main Content */}
          <div className="space-y-6">
            {/* User Points and Level */}
            <Card className="border-4 border-black">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">Your Rewards</h2>
                    <p className="text-sm text-gray-600">Keep earning to unlock more!</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-black text-[#FF5E5B]">{userPoints}</div>
                    <div className="text-sm text-gray-600">Total Points</div>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">Level {userLevel}</span>
                    <span className="text-sm text-gray-600">Next level: {(userLevel + 1) * 1000} points</span>
                  </div>
                  <Progress value={(userPoints % 1000) / 10} className="h-4 w-full rounded-full border-2 border-black bg-gray-200" />
                </div>
              </CardContent>
            </Card>

            {/* Available Rewards */}
            <Card className="border-4 border-black">
              <CardHeader className="border-b-4 border-black bg-[#FF5E5B] p-4">
                <h2 className="text-2xl font-bold text-white">Available Rewards</h2>
              </CardHeader>
              <CardContent className="p-4">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {availableRewards.map((reward) => (
                    <Card key={reward.id} className="group relative border-2 border-black transition-transform  ">
                      <CardContent className="p-4">
                        <div className="aspect-square overflow-hidden rounded-lg border-2 border-black">
                          <Image
                            src={reward.image || "/placeholder.svg"}
                            alt={reward.name}
                            width={200}
                            height={200}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <h3 className="mt-2 font-bold">{reward.name}</h3>
                        <div className="mt-1 flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Gift className="h-4 w-4 text-[#FF5E5B]" />
                            <span className="font-bold">{reward.points}</span>
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-2 border-black"
                            disabled={userPoints < reward.points}
                          >
                            Redeem
                          </Button>
                        </div>
                      </CardContent>
                      <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full rounded-lg border-2 border-black bg-[#D8D8D8] transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reward History */}
            <Card className="border-4 border-black">
              <CardHeader className="border-b-4 border-black bg-[#D8D8D8] p-4">
                <h2 className="text-2xl font-bold">Reward History</h2>
              </CardHeader>
              <CardContent className="p-4">
                <ScrollArea className="h-[200px] rounded-md border-2 border-black p-4">
                  {rewardHistory.map((item) => (
                    <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-2 last:border-b-0">
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm text-gray-600">{item.date}</div>
                      </div>
                      <Badge variant="outline" className="border-2 border-black">
                        {item.points} points
                      </Badge>
                    </div>
                  ))}
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How to Earn Points */}
            <Card className="border-4 border-black">
              <CardHeader className="border-b-4 border-black bg-[#FFED66] p-4">
                <h2 className="text-2xl font-bold">How to Earn Points</h2>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {pointEarningMethods.map((method, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="rounded-full border-2 border-black bg-[#00CECB] p-2 text-white">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-bold">{method.title}</h3>
                        <p className="text-sm text-gray-600">{method.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="border-t-4 border-black bg-[#FFED66] p-4">
                <Button className="w-full border-2 border-black bg-black text-white hover:bg-[#FF5E5B]">
                  View All Challenges
                </Button>
              </CardFooter>
            </Card>

            {/* Quick Actions */}
            <Card className="border-4 border-black">
              <CardHeader className="border-b-4 border-black bg-[#00CECB] p-4">
                <h2 className="text-2xl font-bold">Quick Actions</h2>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Button className="w-full justify-between border-2 border-black">
                    <span className="flex items-center gap-2">
                      <Gamepad2 className="h-4 w-4" />
                      Join a Tournament
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between border-2 border-black">
                    <span className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Invite Friends
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button className="w-full justify-between border-2 border-black">
                    <span className="flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Daily Challenge
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

