export default function Work() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-4">
      <h1 className="font-bold mb-2 text-primary" style={{ fontSize: '32px' }}>My Work</h1>
      <div className="w-full max-w-7xl grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'repeat(3, 1fr)',
        columnGap: '4cm',
        rowGap: '0.01cm',
        marginLeft: '4cm',
        marginRight: '4cm',
        marginTop: '0.5cm',
        marginBottom: '0.5cm',
      }}>
        {/* Tile 1: EV Landscape (col 1, row 1) */}
        <div style={{ marginLeft: '2cm' }}>
          <h2 className="font-semibold mb-1 text-primary" style={{ fontSize: '24px', marginLeft: '2cm' }}>Understanding India&apos;s EV Landscape</h2>
          <section className="flex flex-col" style={{ background: '#fff', border: '1px solid #000', borderRadius: '0', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginLeft: '2cm', padding: '1cm' }}>
            <ul className="list-disc pl-6 space-y-[2em]">
              <li><a href="https://docs.google.com/document/d/1BJFj29FoZoGAZdDdp1NFgvFrq9tNFoq7pQnZoycVdWA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>Vecmocon - Investment Memo</a></li>
              <li><a href="https://docs.google.com/presentation/d/1UUzolm1iClh6VeYow-SZP26WVaUhvnmX4HinKSieY0s/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>Technology Roadmap: India&apos;s Electric Vehicle Market</a></li>
              <li><a href="https://docs.google.com/spreadsheets/d/1fuDQxsgkrsLezatZ-V5A_O-eqyzaXWWhSfV1ZnZ3jFI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>Database: Indian Electric Mobility Startups + Funding</a></li>
              <li><a href="https://docs.google.com/document/d/1DYiCpuAfYeQLGIfA9YKk4KEVBPeWgse7hMU_-sJBfs4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>Case Study: Innovation in India&apos;s EV 2W space</a></li>
            </ul>
          </section>
        </div>
        {/* Tile 2: R&D Policy (col 2, row 1) */}
        <div style={{ marginRight: '2cm' }}>
          <h2 className="font-semibold mb-1 text-primary" style={{ fontSize: '24px', marginRight: '2cm' }}>Making Sense of India&apos;s R&D Policy</h2>
          <section className="flex flex-col" style={{ paddingRight: '2cm', background: '#fff', border: '1px solid #000', borderRadius: '0', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginRight: '2cm', padding: '1cm' }}>
            <ul className="list-disc pl-6 space-y-[2em]">
              <li><a href="https://psa.gov.in/CMS/web/sites/default/files/publication/Tech%20Panorama%20for%20Atmanirbhar%20Bharat%20Report%20%E2%80%93%2008%20March%20Full%20Version%20%281%29.pdf" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>Report: Technology Panorama for Atmanirbhar Bharat</a></li>
              <li><a href="https://www.fast-india.org/wp-content/uploads/2023/12/Ease-of-Doing-Science.pdf" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>Report: India&apos;s Ease of Doing Science Index 2023</a></li>
              <li><a href="https://www.google.com/maps/d/u/0/viewer?mid=1PBF2RygKd25-MaF1rit3mnzEJ6W5mN0&ll=21.91752144715914%2C82.31865944999998&z=4" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>Interactive Map: India&apos;s Govt. Labs, State and Central Universities</a></li>
            </ul>
          </section>
        </div>
        {/* Tile 3: Explainers (col 1, row 2) */}
        <div style={{ marginLeft: '2cm' }}>
          <h2 className="font-semibold mb-1 text-primary" style={{ fontSize: '24px', marginLeft: '2cm' }}>Explainers</h2>
          <section className="flex flex-col" style={{ background: '#fff', border: '1px solid #000', borderRadius: '0', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginLeft: '2cm', padding: '1cm' }}>
            <ul className="list-disc pl-6 space-y-[2em]">
              <li><a href="https://twitter.com/KaustubhMisra" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>My Twitter Account</a></li>
              <li><a href="https://twitter.com/KaustubhMisra/status/1234567890123456789" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>🧵: Anusandhan National Research Foundation (ANRF)</a></li>
              <li><a href="https://twitter.com/KaustubhMisra/status/9876543210987654321" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>🧵: Indian Deeptech Startup Acquisitions</a></li>
              <li><a href="https://twitter.com/KaustubhMisra/status/1122334455667788990" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>🧵: India&apos;s Quantum Mission</a></li>
              <li><a href="https://twitter.com/KaustubhMisra/status/9988776655443322110" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>🧵: India&apos;s Mega Science Projects</a></li>
              <li><a href="https://twitter.com/KaustubhMisra/status/1029384756102938475" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>🧵: How University Rankings Work</a></li>
              <li><a href="https://twitter.com/KaustubhMisra/status/5647382910564738291" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>🧵: India&apos;s Space Missions</a></li>
              <li><a href="https://twitter.com/KaustubhMisra/status/1928374650192837465" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>🧵: Institutions, Labs and Companies Behind Chandrayaan-2</a></li>
            </ul>
          </section>
        </div>
        {/* Tile 4: India&apos;s climate landscape (col 2, row 2) */}
        <div style={{ marginRight: '2cm' }}>
          <h2 className="font-semibold mb-1 text-primary" style={{ fontSize: '24px', marginRight: '2cm' }}>
            India&apos;s climate landscape
          </h2>
          <section className="flex flex-col items-start justify-start" style={{ padding: '1cm', background: '#fff', border: '1px solid #000', borderRadius: '0', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginRight: '2cm' }}>
            <ul className="list-disc pl-6 space-y-[2em]">
              <li><a href="https://docs.google.com/document/d/1--NUE9d43itdCcxUUCBTzpyre0RnLjPkUuqcQ-HDSB4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>
                A Comparative Analysis of the World&apos;s Climate Action plans.
              </a></li>
            </ul>
          </section>
        </div>
        {/* Tile 5: Socials (col 1, row 3) */}
        <div style={{ marginLeft: '2cm' }}>
          <h2 className="font-semibold mb-1 text-primary" style={{ fontSize: '24px', marginLeft: '2cm' }}>Socials</h2>
          <section className="flex flex-col" style={{ background: '#fff', border: '1px solid #000', borderRadius: '0', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', marginLeft: '2cm', padding: '1cm' }}>
            <ul className="list-disc pl-6 space-y-[2em]">
              <li><a href="https://twitter.com/KaustubhMisra" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>My Twitter</a></li>
              <li><a href="https://www.linkedin.com/in/kaustubhmisra/" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>My LinkedIn</a></li>
              <li><a href="https://instagram.com/kaustubhmisra" target="_blank" rel="noopener noreferrer" className="text-primary font-bold underline" style={{ fontSize: '20px' }}>My Instagram</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
} 