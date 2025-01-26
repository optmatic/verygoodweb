import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Step2FormData, SiteAuditFormData } from '@/types'

interface Step2Props {
  formData: Step2FormData;
  setFormData: (data: Partial<SiteAuditFormData>) => void;
}

export default function Step2({ formData, setFormData }: Step2Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="mainGoal">Main Goal of the Website</Label>
        <Textarea
          id="mainGoal"
          name="mainGoal"
          value={formData.mainGoal}
          onChange={(e) => setFormData({ ...formData, mainGoal: e.target.value })}
          placeholder="Increase sales, generate leads, etc."
          required
        />
      </div>
      <div>
        <Label htmlFor="targetAudience">Target Audience</Label>
        <Textarea
          id="targetAudience"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
          placeholder="Describe your ideal customer"
          required
        />
      </div>
    </div>
  )
}

