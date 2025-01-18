'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ChevronLeft, ChevronRight, Gamepad2, Trophy, Users } from 'lucide-react'
import Link from "next/link"

export default function SignUpPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gamingExperience: 5,
    preferredPlatform: '',
    favoriteGame: '',
    playStyle: '',
    gamerTag: '',
  })

  const updateFormData = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="min-h-screen bg-[#FFFFEA] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Logo and Navigation */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <h1 className="font-black text-2xl hover:skew-x-2 transition-transform">
              TOURNEY.GG
            </h1>
          </Link>
        </div>

        {/* Registration Card */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#FF5E5B]">
          {/* Progress Bar */}
          <div className="flex border-b-4 border-black">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className={`flex-1 h-2 ${
                  num <= step ? 'bg-[#00CECB]' : 'bg-gray-200'
                } transition-colors`}
              />
            ))}
          </div>

          {/* Form Content */}
          <div className="p-8">
            {/* Step 1: Basic Information */}
            <div className={step === 1 ? 'block' : 'hidden'}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#FFED66] w-12 h-12 flex items-center justify-center border-2 border-black">
                    <Users size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Basic Information</h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      placeholder="What should we call you ?"
                      value={formData.username}
                      onChange={(e) => updateFormData('username', e.target.value)}
                      className="border-2 border-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your gamers email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="border-2 border-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a Cheat Code 🔒"
                      value={formData.password}
                      onChange={(e) => updateFormData('password', e.target.value)}
                      className="border-2 border-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your Cheat Code 🤫"
                      value={formData.confirmPassword}
                      onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                      className="border-2 border-black"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Gaming Experience */}
            <div className={step === 2 ? 'block' : 'hidden'}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#FFED66] w-12 h-12 flex items-center justify-center border-2 border-black">
                    <Trophy size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Gaming Experience</h2>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <Label>Years of Gaming Experience</Label>
                    <div className="space-y-4">
                      <Slider
                        value={[formData.gamingExperience]}
                        onValueChange={(value) => updateFormData('gamingExperience', value[0])}
                        max={20}
                        step={1}
                        className="w-full"
                      />
                      <div className="text-center font-bold">
                        {formData.gamingExperience} years
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Platform</Label>
                    <RadioGroup
                      value={formData.preferredPlatform}
                      onValueChange={(value) => updateFormData('preferredPlatform', value)}
                      className="grid grid-cols-2 gap-4"
                    >
                      {['PC', 'Console', 'Mobile', 'Multiple'].map((platform) => (
                        <div key={platform} className="flex items-center space-x-2">
                          <RadioGroupItem value={platform} id={platform} />
                          <Label htmlFor={platform}>{platform}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Game Preferences */}
            <div className={step === 3 ? 'block' : 'hidden'}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#FFED66] w-12 h-12 flex items-center justify-center border-2 border-black">
                    <Gamepad2 size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Game Preferences</h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="favoriteGame">Favorite Game</Label>
                    <Select
                      value={formData.favoriteGame}
                      onValueChange={(value) => updateFormData('favoriteGame', value)}
                    >
                      <SelectTrigger className="border-2 border-black">
                        <SelectValue placeholder="Select your main game" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="lol">League of Legends</SelectItem>
                        <SelectItem value="dota2">Dota 2</SelectItem>
                        <SelectItem value="csgo">CS:GO</SelectItem>
                        <SelectItem value="valorant">Valorant</SelectItem>
                        <SelectItem value="fortnite">Fortnite</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Play Style</Label>
                    <RadioGroup
                      value={formData.playStyle}
                      onValueChange={(value) => updateFormData('playStyle', value)}
                      className="grid gap-4"
                    >
                      {[
                        'Competitive - I play to win',
                        'Casual - I play for fun',
                        'Social - I play to meet people',
                        'Creative - I enjoy exploring games',
                      ].map((style) => (
                        <div key={style} className="flex items-center space-x-2">
                          <RadioGroupItem value={style} id={style} />
                          <Label htmlFor={style}>{style}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Final Details */}
            <div className={step === 4 ? 'block' : 'hidden'}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#FFED66] w-12 h-12 flex items-center justify-center border-2 border-black">
                    <Users size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Final Details</h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="gamerTag">Gamer Tag</Label>
                    <Input
                      id="gamerTag"
                      type="text"
                      placeholder="Enter your gamer tag"
                      value={formData.gamerTag}
                      onChange={(e) => updateFormData('gamerTag', e.target.value)}
                      className="border-2 border-black"
                    />
                    <p className="text-sm text-gray-500">
                      This is how other players will see you in tournaments
                    </p>
                  </div>

                  <div className="bg-[#00CECB]/10 border-2 border-black p-4">
                    <h3 className="font-bold mb-2">Almost there!</h3>
                    <p className="text-sm text-gray-600">
                      {"By clicking Complete Registration, you agree to our Terms of Service and Privacy Policy.You'll be ready to join tournaments and compete with players worldwide!"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                onClick={prevStep}
                variant="outline"
                className={`border-2 border-black ${
                  step === 1 ? 'invisible' : ''
                }`}
              >
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              
              <Button
                onClick={step === 4 ? () => console.log('Form submitted:', formData) : nextStep}
                className="bg-[#FF5E5B] hover:bg-[#FF5E5B]/90 text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
              >
                {step === 4 ? (
                  'Complete Registration'
                ) : (
                  <>
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center flex flex-col justify-center items-center gap-5">
          <Link
            href="/signin"
            className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4"
          >
            Already a member? Sign In
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

