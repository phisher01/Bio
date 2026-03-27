import InfoCard from '../components/common/InfoCard'
import SectionTitle from '../components/common/SectionTitle'
import { profileData } from '../data/profileData'

export default function AboutMe() {
  return (
    <section id="about" className="px-4 py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="About"
          title="About Me"
          subtitle="A short introduction, education, profession, and interests that reflect values, lifestyle, and long-term goals."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <InfoCard title="Personal Introduction">
            <p>{profileData.intro}</p>
          </InfoCard>

          <InfoCard title="Core Details">
            <p>
              <span className="font-semibold text-wedding-wood">Education:</span> {profileData.education}
            </p>
            <p>
              <span className="font-semibold text-wedding-wood">Profession:</span> {profileData.profession}
            </p>
            <p>
              <span className="font-semibold text-wedding-wood">Location:</span> {profileData.location}
            </p>
            <p>
              <span className="font-semibold text-wedding-wood">Hobbies:</span> Reading, badminton, music, and meaningful travel
            </p>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
