import InfoCard from '../components/common/InfoCard'
import PillList from '../components/common/PillList'
import SectionTitle from '../components/common/SectionTitle'
import { professionalData, profileData } from '../data/profileData'

export default function ProfessionalDetails() {
  return (
    <section id="professional" className="bg-white/70 px-4 py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <SectionTitle
          eyebrow="Career"
          title="Professional Details"
          subtitle="Professional journey, current role, key capabilities, and selected project highlights."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard title="Work Experience">
            {professionalData.workExperience.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <p>
              <span className="font-semibold text-wedding-wood">Current Company:</span> {profileData.company}
            </p>
          </InfoCard>

          <InfoCard title="Skills">
            <PillList items={professionalData.skills} />
          </InfoCard>

          <InfoCard title="Projects">
            <div className="space-y-3">
              {professionalData.projects.map((project) => (
                <article key={project.title} className="rounded-2xl bg-wedding-cream p-4">
                  <h4 className="font-semibold text-wedding-wood">{project.title}</h4>
                  <p className="mt-1 text-sm text-wedding-muted">{project.description}</p>
                </article>
              ))}
            </div>
          </InfoCard>
        </div>
      </div>
    </section>
  )
}
