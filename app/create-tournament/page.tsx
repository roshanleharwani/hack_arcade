'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Trophy, Gamepad2, CalendarIcon, Gift, ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link"

export default function CreateTournament() {
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<Date>()
  const [formData, setFormData] = useState({
    name: '',
    game: '',
    description: '',
    format: '',
    teamSize: '',
    maxTeams: '',
    entryFee: '',
    prizePool: '',
    rules: '',
    startDate: '',
    startTime: '',
    streamRequired: false,
    allowSpectators: true,
  })

  const updateFormData = (field: string, value: string | boolean) => {
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
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/home" className="inline-block mb-6">
            <h1 className="font-black text-2xl hover:skew-x-2 transition-transform flex items-center gap-2">
              <Trophy size={24} />
              TOURNEY.GG
            </h1>
          </Link>
        </div>

        {/* Creation Card */}
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
                    <Trophy size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Tournament Details</h2>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Tournament Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => updateFormData('name', e.target.value)}
                      className="border-2 border-black"
                      placeholder="Enter tournament name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Game</Label>
                    <Select
                      value={formData.game}
                      onValueChange={(value) => updateFormData('game', value)}
                    >
                      <SelectTrigger className="border-2 border-black">
                        <SelectValue placeholder="Select game" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="valorant">VALORANT</SelectItem>
                        <SelectItem value="csgo">CS:GO</SelectItem>
                        <SelectItem value="lol">League of Legends</SelectItem>
                        <SelectItem value="dota2">Dota 2</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => updateFormData('description', e.target.value)}
                      className="border-2 border-black min-h-[100px]"
                      placeholder="Describe your tournament"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Tournament Format */}
            <div className={step === 2 ? 'block' : 'hidden'}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#FFED66] w-12 h-12 flex items-center justify-center border-2 border-black">
                    <Gamepad2 size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Tournament Format</h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Format</Label>
                    <RadioGroup
                      value={formData.format}
                      onValueChange={(value) => updateFormData('format', value)}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      {[
                        { value: 'single', label: 'Single Elimination' },
                        { value: 'double', label: 'Double Elimination' },
                        { value: 'round', label: 'Round Robin' },
                        { value: 'swiss', label: 'Swiss System' },
                      ].map((format) => (
                        <div
                          key={format.value}
                          className="flex items-center space-x-2 border-2 border-black p-4 hover:bg-gray-50"
                        >
                          <RadioGroupItem value={format.value} id={format.value} />
                          <Label htmlFor={format.value}>{format.label}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="teamSize">Team Size</Label>
                      <Select
                        value={formData.teamSize}
                        onValueChange={(value) => updateFormData('teamSize', value)}
                      >
                        <SelectTrigger className="border-2 border-black">
                          <SelectValue placeholder="Select team size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Solo (1v1)</SelectItem>
                          <SelectItem value="2">Duos (2v2)</SelectItem>
                          <SelectItem value="5">5v5</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="maxTeams">Maximum Teams</Label>
                      <Select
                        value={formData.maxTeams}
                        onValueChange={(value) => updateFormData('maxTeams', value)}
                      >
                        <SelectTrigger className="border-2 border-black">
                          <SelectValue placeholder="Select max teams" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="8">8 Teams</SelectItem>
                          <SelectItem value="16">16 Teams</SelectItem>
                          <SelectItem value="32">32 Teams</SelectItem>
                          <SelectItem value="64">64 Teams</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Prize Pool */}
            <div className={step === 3 ? 'block' : 'hidden'}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#FFED66] w-12 h-12 flex items-center justify-center border-2 border-black">
                    <Gift size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Prize & Entry</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="entryFee">Entry Fee (USD)</Label>
                      <Input
                        id="entryFee"
                        type="number"
                        value={formData.entryFee}
                        onChange={(e) => updateFormData('entryFee', e.target.value)}
                        className="border-2 border-black"
                        placeholder="0.00"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="prizePool">Prize Pool (USD)</Label>
                      <Input
                        id="prizePool"
                        type="number"
                        value={formData.prizePool}
                        onChange={(e) => updateFormData('prizePool', e.target.value)}
                        className="border-2 border-black"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rules">Prize Distribution Rules</Label>
                    <Textarea
                      id="rules"
                      value={formData.rules}
                      onChange={(e) => updateFormData('rules', e.target.value)}
                      className="border-2 border-black min-h-[100px]"
                      placeholder="Describe how the prize pool will be distributed"
                    />
                  </div>

                  <div className="bg-[#00CECB]/10 border-2 border-black p-4">
                    <h3 className="font-bold mb-2">Suggested Distribution</h3>
                    <ul className="space-y-2 text-sm">
                      <li>1st Place: 50% ({formData.prizePool ? `$${Number(formData.prizePool) * 0.5}` : '$0.00'})</li>
                      <li>2nd Place: 30% ({formData.prizePool ? `$${Number(formData.prizePool) * 0.3}` : '$0.00'})</li>
                      <li>3rd Place: 20% ({formData.prizePool ? `$${Number(formData.prizePool) * 0.2}` : '$0.00'})</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Schedule & Settings */}
            <div className={step === 4 ? 'block' : 'hidden'}>
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#FFED66] w-12 h-12 flex items-center justify-center border-2 border-black">
                    <CalendarIcon size={24} />
                  </div>
                  <h2 className="text-2xl font-bold">Schedule & Settings</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Start Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal border-2 border-black"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="startTime">Start Time</Label>
                      <Select
                        value={formData.startTime}
                        onValueChange={(value) => updateFormData('startTime', value)}
                      >
                        <SelectTrigger className="border-2 border-black">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }, (_, i) => (
                            <SelectItem
                              key={i}
                              value={`${i.toString().padStart(2, '0')}:00`}
                            >
                              {`${i.toString().padStart(2, '0')}:00`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-2 border-black p-4">
                      <div className="space-y-0.5">
                        <Label>Require Stream</Label>
                        <p className="text-sm text-gray-500">
                          Participants must stream their matches
                        </p>
                      </div>
                      <Switch
                        checked={formData.streamRequired}
                        onCheckedChange={(checked) => updateFormData('streamRequired', checked)}
                      />
                    </div>

                    <div className="flex items-center justify-between border-2 border-black p-4">
                      <div className="space-y-0.5">
                        <Label>Allow Spectators</Label>
                        <p className="text-sm text-gray-500">
                          Let others watch the matches
                        </p>
                      </div>
                      <Switch
                        checked={formData.allowSpectators}
                        onCheckedChange={(checked) => updateFormData('allowSpectators', checked)}
                      />
                    </div>
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
                  'Create Tournament'
                ) : (
                  <>
                    Next <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link
            href="/home"
            className="text-sm text-gray-600 hover:text-gray-900 underline underline-offset-4"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

