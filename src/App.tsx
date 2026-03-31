import type { ReactElement } from 'react';
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import PlatformOverview from "./components/platform-overview";
import { heroContent, heroStats } from './mock';
// import WarehouseVisuals from './components/warehouse-visuals';
import HowItWorks from './components/how-it-works';
import ServicesDeployment from './components/services-deployment';
import UseCases from './components/use-cases';
import WhyCARTN from './components/why-cartn';
import CTASection from './components/cta-section';
import Footer from './components/footer';

function App(): ReactElement {
  return (
    <div className="min-h-screen flex flex-col bg-sand-50 text-ink-500">
      <Navbar />
      <main className="flex-1 bg-transparent text-ink-500">
        <Hero {...heroContent} stats={heroStats} />
        <PlatformOverview />
        <HowItWorks />
        {/* <WarehouseVisuals /> */}
        <ServicesDeployment />
        <UseCases />
        <WhyCARTN />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
