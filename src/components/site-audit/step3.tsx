import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Step3FormData, SiteAuditFormData } from '@/types'

interface Step3Props {
  formData: Step3FormData;
  setFormData: (data: Partial<SiteAuditFormData>) => void;
}

export default function Step3({ formData, setFormData }: Step3Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="competitors">Main Competitors</Label>
        <Textarea
          id="competitors"
          name="competitors"
          value={formData.competitors}
          onChange={(e) => setFormData({ ...formData, competitors: e.target.value })}
          placeholder="List your main competitors"
          required
        />
      </div>
      <div>
        <Label htmlFor="currentChallenges">Current Challenges</Label>
        <Textarea
          id="currentChallenges"
          name="currentChallenges"
          value={formData.currentChallenges}
          onChange={(e) => setFormData({ ...formData, currentChallenges: e.target.value })}
          placeholder="What challenges are you facing with your current website?"
          required
        />
      </div>
    </div>
  )
}

