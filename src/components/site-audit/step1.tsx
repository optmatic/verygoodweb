import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface Step1Props {
  formData: {
    websiteUrl: string;
    businessType: string;
  };
  setFormData: (data: any) => void;
}

export default function Step1({ formData, setFormData }: Step1Props) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="websiteUrl">Website URL</Label>
        <Input
          id="websiteUrl"
          name="websiteUrl"
          value={formData.websiteUrl}
          onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
          placeholder="https://example.com"
          required
        />
      </div>
      <div>
        <Label htmlFor="businessType">Type of Business</Label>
        <Input
          id="businessType"
          name="businessType"
          value={formData.businessType}
          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
          placeholder="E-commerce, SaaS, etc."
          required
        />
      </div>
    </div>
  )
}

