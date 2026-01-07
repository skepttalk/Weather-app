import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

function TaskProject() {
  const [open, setOpen] = useState(false);

  const initialState = {
    name: "",
    email: "",
    phone: "",
    date: "",
    status: "",
    source: "",
    priority: "",
    industryType: "",
    jobTitle: "",
    companyName: "",
    interestedProduct: "",
    leadSource: "",
    leadType: "",
    leadOwner: "",
    address: "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem("formData") || "[]");
    existingData.push(formData);
    localStorage.setItem("formData", JSON.stringify(existingData));
    setFormData(initialState);
  };

  return (
    <div className="w-full flex justify-center">
      <form className="w-full max-w-6xl" onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="flex gap-10">
            <div className="w-full">
              <FieldSet>
                <Field>
                  <FieldLabel>Name</FieldLabel>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </Field>

                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    type="email"
                   pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <FieldDescription>Eg: example@gmail.com</FieldDescription>
                </Field>

                <Field>
                  <FieldLabel>Phone No</FieldLabel>
                  <Input
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    type="tel"
                   pattern="[0-9]{10}"
                  />
                </Field>

                <Field>
                  <Label>Date</Label>
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-48 justify-between font-normal"
                      >
                        {formData.date || "Select date"}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        onSelect={(d) => {
                          handleChange("date", d?.toLocaleDateString());
                          setOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </Field>

                <Field>
                  <FieldLabel>Status</FieldLabel>
                  <Select
                    value={formData.status}
                    onValueChange={(v) => handleChange("status", v)}
                  >
                    <SelectTrigger>
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
                  <FieldLabel>Source</FieldLabel>
                  <Select
                    value={formData.source}
                    onValueChange={(v) => handleChange("source", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Website">Website</SelectItem>
                      <SelectItem value="Linkedin">Linkedin</SelectItem>
                      <SelectItem value="Referral">Referral</SelectItem>
                      <SelectItem value="Email Campaign">
                        Email Campaign
                      </SelectItem>
                      <SelectItem value="Google Ads">Google Ads</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel>Priority</FieldLabel>
                  <Select
                    value={formData.priority}
                    onValueChange={(v) => handleChange("priority", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Low">Low</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel>Address</FieldLabel>
                  <Textarea
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    className="resize-none"
                  />
                </Field>
              </FieldSet>
            </div>

            <div className="w-full">
              <FieldSet>
                <Field>
                  <FieldLabel>Lead Type</FieldLabel>
                  <Select
                    value={formData.leadType}
                    onValueChange={(v) => handleChange("leadType", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Lead Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Student">Student</SelectItem>
                      <SelectItem value="Company">Company</SelectItem>
                      <SelectItem value="Startup">Startup</SelectItem>
                      <SelectItem value="Freelancer">Freelancer</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel>Job Title</FieldLabel>
                  <Input
                    value={formData.jobTitle}
                    onChange={(e) => handleChange("jobTitle", e.target.value)}
                  />
                </Field>

                <Field>
                  <FieldLabel>Industry Type</FieldLabel>
                  <Input
                    value={formData.industryType}
                    onChange={(e) =>
                      handleChange("industryType", e.target.value)
                    }
                  />
                </Field>

                <Field>
                  <FieldLabel>Company Name</FieldLabel>
                  <Input
                    value={formData.companyName}
                    onChange={(e) =>
                      handleChange("companyName", e.target.value)
                    }
                  />
                </Field>

                <Field>
                  <FieldLabel>Interested Product(s)</FieldLabel>
                  <Input
                    value={formData.interestedProduct}
                    onChange={(e) =>
                      handleChange("interestedProduct", e.target.value)
                    }
                  />
                </Field>

                <Field>
                  <FieldLabel>Lead Source</FieldLabel>
                  <Input
                    value={formData.leadSource}
                    onChange={(e) => handleChange("leadSource", e.target.value)}
                  />
                </Field>

                <Field>
                  <FieldLabel>Lead Owner</FieldLabel>
                  <Input
                    value={formData.leadOwner}
                    onChange={(e) => handleChange("leadOwner", e.target.value)}
                  />
                </Field>
              </FieldSet>
            </div>
          </div>

          <FieldSeparator />

          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button
              variant="outline"
              type="reset"
              onClick={() => setFormData(initialState)}
            >
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  );
}

export default TaskProject;
