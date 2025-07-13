export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <h1 className="font-bold mb-10 text-primary" style={{ fontSize: '32px' }}>Blog</h1>
      <section
        className="flex flex-col items-center justify-center"
        style={{
          minHeight: '300px',
          background: '#fff',
          border: '1px solid #000',
          borderRadius: '0',
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
          padding: '1.5cm',
          marginLeft: '7.5cm',
          marginRight: '7.5cm',
          width: 'calc(100vw - 15cm)',
          maxWidth: '100%',
        }}
      >
        <div className="flex flex-col items-start justify-center w-full" style={{ gap: '2.0em' }}>
          <ul className="list-disc pl-6 space-y-[2em]">
            <li><a href="https://www.investindia.gov.in/team-india-blogs/india-australia-ecta-deal-partnership" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold" style={{ fontSize: '24px' }}>Thoughts on India-Australia Economic Cooperative Trade Agreement</a></li>
            <li><a href="https://navrangashoka.wordpress.com/2021/03/31/foucault-from-the-valley-sovereignty-and-biopower-through-the-lens-of-vishal-bhardwajs-haider/" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold" style={{ fontSize: '24px' }}>Foucault, From The Valley: Sovereignty And Biopower Through The Lens Of Vishal Bhardwaj&apos;s Haider</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
} 