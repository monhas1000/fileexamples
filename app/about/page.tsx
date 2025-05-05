export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">About File Examples</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Learn more about our service and how we can help you with sample files.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            File Examples was created to provide developers, designers, and content creators with easy access to sample
            files for testing and development purposes. Our goal is to simplify the process of finding test files in
            various formats.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">What We Offer</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We provide a wide range of sample files across multiple categories including video, audio, documents,
            images, fonts, ebooks, and code. All files are available for free download and can be used for testing,
            development, and educational purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">How It Works</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Simply browse our categories, find the file type you need, and download it with a single click. No
            registration required, no limits on downloads, and no hidden fees. Our service is completely free and will
            always remain so.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions, suggestions, or would like to contribute sample files to our collection, please
            reach out to us at contact@fileexamples.com.
          </p>
        </section>
      </div>
    </div>
  )
}
