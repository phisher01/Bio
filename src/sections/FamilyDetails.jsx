import InfoCard from '../components/common/InfoCard'
import SectionTitle from '../components/common/SectionTitle'
import { familyData } from '../data/profileData'

export default function FamilyDetails() {
  return (
    <section id="family" className="px-4 py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Family"
          title="Family Details"
          subtitle="A respectful introduction to family background and values."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard title="Family Members">
            <p>
              <span className="font-semibold text-wedding-wood">Father:</span> {familyData.father}
            </p>
            <p>
              <span className="font-semibold text-wedding-wood">Mother:</span> {familyData.mother}
            </p>
            <p>
              <span className="font-semibold text-wedding-wood">Siblings:</span> {familyData.siblings}
            </p>
          </InfoCard>

          <InfoCard title="Family Values">
            <p>{familyData.values}</p>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
