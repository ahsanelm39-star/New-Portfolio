import { PROJECTS } from '@/data/projects';
import Hero from '@/components/Hero';
import SelectedWork from '@/components/SelectedWork';
import SpecializationMatrix from '@/components/SpecializationMatrix';
import DifferentiatorSection from '@/components/DifferentiatorSection';
import GccExperienceSection from '@/components/GccExperienceSection';
import ServicesPreview from '@/components/ServicesPreview';
import AboutStoryPreview from '@/components/AboutStoryPreview';
import FinalCta from '@/components/FinalCta';

export default function HomePage() {
  return (
    <div className="relative">
      <Hero />
      <SelectedWork projects={PROJECTS} />
      <SpecializationMatrix />
      <DifferentiatorSection />
      <GccExperienceSection />
      <ServicesPreview />
      <AboutStoryPreview />
      <FinalCta />
    </div>
  );
}
