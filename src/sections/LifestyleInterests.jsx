import InfoCard from '../components/common/InfoCard'
import PillList from '../components/common/PillList'
import SectionTitle from '../components/common/SectionTitle'
import { lifestyleData } from '../data/profileData'

export default function LifestyleInterests() {
  return (
    <section id="lifestyle" className="bg-white/70 px-4 py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Lifestyle"
          title="Lifestyle & Interests"
          subtitle="Interests and personality traits that shape day-to-day life and compatibility."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <InfoCard title="Hobbies">
            <PillList items={lifestyleData.hobbies} />
          </InfoCard>

          <InfoCard title="Travel Interests">
            <PillList items={lifestyleData.travelInterests} />
          </InfoCard>

          <InfoCard title="Food Preferences">
            <PillList items={lifestyleData.foodPreferences} />
          </InfoCard>

          <InfoCard title="Personality Traits">
            <PillList items={lifestyleData.personalityTraits} />
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
