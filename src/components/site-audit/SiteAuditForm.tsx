"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
// import { ToastAction } from "@/components/ui/toast"
import Step1 from "@/components/site-audit/step1"
import Step2 from "@/components/site-audit/step2"
import Step3 from "@/components/site-audit/step3"
import Step4 from "@/components/site-audit/step4"
import { useToast } from "@/hooks/use-toast"
import "@/app/css/site-audit.css"

interface FormData {
  websiteUrl: string;
  businessType: string;
  mainGoal: string;
  targetAudience: string;
  competitors: string;
  currentChallenges: string;
  desiredOutcome: string;
  timeline: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
}

export default function SiteAuditForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
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
  const [showThankYou, setShowThankYou] = useState(false)

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
    formDataToSubmit.append("access_key", "21455ef4-d6aa-4abd-858a-8376cb4f30d2")
    formDataToSubmit.append("subject", "New Site Audit Request")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSubmit,
      })

      const data = await response.json()

      if (data.success) {
        setResult("Form Submitted Successfully")
        setShowThankYou(true)
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
      <Button  onClick={() => setIsOpen(true)}>
        Request Site Audit
      </Button>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {!showThankYou ? (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Site Audit Request</DialogTitle>
            </DialogHeader>
            <Progress value={progress} className="w-full" />
            <form onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <Step1
                  formData={formData}
                  setFormData={setFormData}
                />
              )}
              {currentStep === 2 && (
                <Step2
                  formData={formData}
                  setFormData={(data) => setFormData(prev => ({ ...prev, ...data }))}
                />
              )}
              {currentStep === 3 && (
                <Step3
                  formData={formData}
                  setFormData={(data) => setFormData(prev => ({ ...prev, ...data }))}
                />
              )}
              {currentStep === 4 && (
                <Step4
                  formData={formData}
                  setFormData={(data) => setFormData(prev => ({ ...prev, ...data }))}
                />
              )}
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
        ) : (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Thank You!</DialogTitle>
            </DialogHeader>
            <div className="py-6 text-center">
              <p className="mb-4">Thank you for requesting a site audit. We have received your submission and will review it shortly.</p>
              <p className="mb-6">We&apos;ll be in touch with you soon!</p>
              <Button onClick={() => {
                setShowThankYou(false)
                setIsOpen(false)
              }}>
                Close
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  )
}

