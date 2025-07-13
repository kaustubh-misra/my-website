import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-row items-center justify-center px-4">
      {/* Left tile: Image */}
      <div className="flex-1 flex items-center justify-center">
        <Image
          src="/about-photo.jpg"
          alt="Profile photo"
          width={450}
          height={450}
          className="rounded-lg object-cover shadow-lg"
        />
      </div>
      {/* Right tile: Content */}
      <div className="flex-1 flex flex-col justify-center items-start pl-8" style={{ paddingRight: '3cm' }}>
        <h1 className="font-bold mb-6 text-primary" style={{ fontSize: '24px' }}>About Me</h1>
        <div className="max-w-2xl text-primary space-y-6 text-left" style={{ fontSize: '24px' }}>
          <p>
            A policy and systems thinking specialist with work experience across domains of technology, climate and social impact through roles in government &amp; industry.
          </p>
          <p>
            My tech policy work spans successful projects with Ministry of Electronics and Information Technology (MeitY), Office of the Principal Scientific Advisor to the Govt. of India (PSA) &amp; Department of Science &amp; Technology (DST). My key works are contributions to the the drafting of National Policy on Electronics, 2024 &amp; providing research benchmarks for government funding for innovations in EV Battery and Solar Cell technologies under DST&apos;s 1 Lakh Crore Innovation Fund.
          </p>
          <p>
            I am currently leading programs on funding &amp; partnerships around &ldquo;tech for social good&rdquo; for Samagata Foundation, associated with Kailash Nadh, CTO Zerodha.
          </p>
          <p>
            If you have an interesting idea for tech for social/climate good, reach out to me at <a href="mailto:kaustubh@samagata.org" className="underline text-primary"><b>kaustubh@samagata.org</b></a>!
          </p>
        </div>
      </div>
    </div>
  );
}
