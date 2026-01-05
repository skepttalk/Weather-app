import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDownIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Textarea } from '@/components/ui/textarea'

function PayRoll() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)


  return (
    <div>
      <div className="w-full ">
      <form action= "Form" >
        <div className='flex gap-10'>
        <div className="w-full">
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="Name">
                  Name
                </FieldLabel>
                <Input 
                  id="UserName"
                  placeholder="User Name"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="Email">
                  Email
                </FieldLabel>
                <Input type="email"
                  id="UserEmail"
                  placeholder="User Email"
                  required
                />
                <FieldDescription>
                  Eg:example@gmail.com
                </FieldDescription>
              </Field>
               <Field>
                <FieldLabel htmlFor="Company">
                  Company Name
                </FieldLabel>
                <Input 
                  id="companyName"
                  placeholder="Company Name"
                  required
                  
                />
              </Field>
              <div className="grid grid-cols-1 gap-4">
                <Field>
            <Label htmlFor="date" className="px-1">
        Date
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
                </Field>
                <Field>
                  <FieldLabel htmlFor="Status">
                    Status
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="SelectStatus">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="New Leads">New Leads</SelectItem>
                      <SelectItem value="Follow Ups">Follow Ups</SelectItem>
                      <SelectItem value="Under Review">Under Review</SelectItem>
                      <SelectItem value="Demo">Demo</SelectItem>
                      <SelectItem value="Negotiation">Negotiation</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                 <Field>
                  <FieldLabel htmlFor="Source">
                    Source
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="SelectSource">
                      <SelectValue placeholder="Select Source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Website">Website</SelectItem>
                      <SelectItem value="Linkedin">Linkedin</SelectItem>
                      <SelectItem value="Referral">Referral</SelectItem>
                      <SelectItem value="Email Campaign">Email Campaign</SelectItem>
                      <SelectItem value="Google Ads">Google Ads</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                  <Field>
                  <FieldLabel htmlFor="Status">
                    Priority
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="SelectPriority">
                      <SelectValue placeholder="Select Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
           <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="Address">
                  Address
                </FieldLabel>
                <Textarea
                  id="Address"
                  placeholder="Type Address"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="reset">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
        </div>
        <div className='w-full'>
          <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="Name">
                  Name
                </FieldLabel>
                <Input 
                  id="UserName"
                  placeholder="User Name"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="Email">
                  Email
                </FieldLabel>
                <Input type="email"
                  id="UserEmail"
                  placeholder="User Email"
                  required
                />
                <FieldDescription>
                  Eg:example@gmail.com
                </FieldDescription>
              </Field>
               <Field>
                <FieldLabel htmlFor="Company">
                  Company Name
                </FieldLabel>
                <Input 
                  id="companyName"
                  placeholder="Company Name"
                  required
                  
                />
              </Field>
              <div className="grid grid-cols-1 gap-4">
                <Field>
            <Label htmlFor="date" className="px-1">
        Date
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
                </Field>
                <Field>
                  <FieldLabel htmlFor="Status">
                    Status
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="SelectStatus">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="New Leads">New Leads</SelectItem>
                      <SelectItem value="Follow Ups">Follow Ups</SelectItem>
                      <SelectItem value="Under Review">Under Review</SelectItem>
                      <SelectItem value="Demo">Demo</SelectItem>
                      <SelectItem value="Negotiation">Negotiation</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                 <Field>
                  <FieldLabel htmlFor="Source">
                    Source
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="SelectSource">
                      <SelectValue placeholder="Select Source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Website">Website</SelectItem>
                      <SelectItem value="Linkedin">Linkedin</SelectItem>
                      <SelectItem value="Referral">Referral</SelectItem>
                      <SelectItem value="Email Campaign">Email Campaign</SelectItem>
                      <SelectItem value="Google Ads">Google Ads</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                  <Field>
                  <FieldLabel htmlFor="Status">
                    Priority
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="SelectPriority">
                      <SelectValue placeholder="Select Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
           <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="Address">
                  Address
                </FieldLabel>
                <Textarea
                  id="Address"
                  placeholder="Type Address"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
        </FieldGroup>
        </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default PayRoll