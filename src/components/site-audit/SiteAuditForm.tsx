"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ToastAction } from "@/components/ui/toast"
import Step1 from "@/components/site-audit/step1"
import Step2 from "@/components/site-audit/step2"
import Step3 from "@/components/site-audit/step3"
import Step4 from "@/components/site-audit/step4"
import { useToast } from "@/hooks/use-toast"

export default function SiteAuditForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    websiteUrl: "",
    businessType: "",
    mainGoal: "",
    targetAudience: "",
    competitors: "",
    currentChallenges: "",
    desiredOutcome: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
  })
  const [result, setResult] = useState("")
  const { toast } = useToast()

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setResult("Sending....")

    const formDataToSubmit = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value)
    })
    formDataToSubmit.append("access_key", "YOUR_ACCESS_KEY_HERE")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      })

      const data = await response.json()

      if (data.success) {
        setResult("Form Submitted Successfully")
        toast({
          title: "Success",
          description: "Your audit request has been submitted successfully!",
        })
        setIsOpen(false)
        setCurrentStep(1)
        setFormData({} as typeof formData)
      } else {
        console.log("Error", data)
        setResult(data.message)
        toast({
          title: "Error",
          description: data.message,
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setResult("An error occurred while submitting the form.")
      toast({
        title: "Error",
        description: "An error occurred while submitting the form.",
        variant: "destructive",
      })
    }
  }

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Request Site Audit</Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Site Audit Request</DialogTitle>
          </DialogHeader>
          <Progress value={progress} className="w-full" />
          <form onSubmit={handleSubmit}>
            {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} />}
            {currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} />}
            {currentStep === 3 && <Step3 formData={formData} setFormData={setFormData} />}
            {currentStep === 4 && <Step4 formData={formData} setFormData={setFormData} />}
            <div className="flex justify-between mt-4">
              <Button type="button" onClick={handlePrevious} disabled={currentStep === 1}>
                Previous
              </Button>
              {currentStep < totalSteps ? (
                <Button type="button" onClick={handleNext}>
                  Next
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </div>
          </form>
          {result && <p className="mt-4 text-sm text-center">{result}</p>}
        </DialogContent>
      </Dialog>
    </>
  )
}

