// DatePicker.tsx
"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

function formatDate(date: Date | undefined) {
  if (!date) return ""
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function isValidDate(date: Date | undefined) {
  return !!date && !isNaN(date.getTime())
}

export function DatePicker({
  value,
  onChange,
}: {
  value?: string
  onChange: (date: string) => void
}) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(
    value ? new Date(value) : undefined
  )
  const [month, setMonth] = React.useState<Date | undefined>(date)
  const [textValue, setTextValue] = React.useState(formatDate(date))

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="block text-sm text-[#939393] font-medium mb-1">
        Date of Birth
      </Label>
      <div className="relative flex gap-2">
        <Input
          id="date"
          value={textValue}
          placeholder="June 01, 2025"
          className="bg-white pr-10 h-12"
          onChange={(e) => {
            const str = e.target.value
            setTextValue(str)
            const d = new Date(str)
            if (isValidDate(d)) {
              setDate(d)
              setMonth(d)
              onChange(d.toISOString()) 
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpen(true)
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(d) => {
                if (!d) return
                setDate(d)
                setTextValue(formatDate(d))
                setOpen(false)
                onChange(d.toISOString()) 
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
