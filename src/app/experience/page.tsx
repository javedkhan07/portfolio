export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Experience</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Software/IOT Engineer</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Jio PLatforms Limited (Reliance Jio) • June-2024 - August-2024
          </p>
          <p className="mt-4">
            ● Commissioning and Installation: Expertise in EV charging systems (CCS2, Type 2, socket types), solar energy solutions
            (polycrystalline & monocrystalline panels), Zigbee communication, device monitoring, and Jio SunGenie systems.
            ● System Optimization and Analysis: Skilled in debugging issues, report analysis, and enhancing system efficiency by up to 60%
            across streetlight monitoring (telematics, CCMS, NIC cards) and other IoT-based solutions.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Freelancer</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Previous Company • oct-2022 - April-2023
          </p>
          <p className="mt-4">
            ● WordPress Development: Designed and developed a news website integrating automatic plugins and APIs to fetch, schedule,
            and customize articles with SEO-friendly titles and descriptions, ensuring optimized content management.
            ● Traffic and Monetization: Achieved 3.3K organic webpage traffic within two months, generating $2.3 in revenue through
            Google AdSense by leveraging strategic content scheduling and SEO best practices.

          </p>
        </div>
      </div>
    </div>
  );
}
