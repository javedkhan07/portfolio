export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Experience</h1>
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Senior Software Engineer</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Company Name • 2021 - Present
          </p>
          <p className="mt-4">
            Led the development of key features for the company's main product.
            Collaborated with cross-functional teams to deliver high-quality
            software solutions.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Software Engineer</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Previous Company • 2018 - 2021
          </p>
          <p className="mt-4">
            Developed and maintained web applications using React and Node.js.
            Implemented responsive designs and improved application performance.
          </p>
        </div>
      </div>
    </div>
  );
}
