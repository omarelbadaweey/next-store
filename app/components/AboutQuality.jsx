
function AboutQuality() {
  return (
      <section>


    <div className="w-full bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-20 px-6 md:px-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold">
            Q
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Quality Assurance
          </h3>
          <p className="text-gray-600 text-sm">
            We carefully select and review every product to ensure top quality
            and customer satisfaction.
          </p>
        </div>

        {/* Fast Delivery */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold">
            ⚡
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Fast Delivery
          </h3>
          <p className="text-gray-600 text-sm">
            Your orders are processed and shipped quickly — because we value
            your time.
          </p>
        </div>

        {/* Support */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold">
            💬
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            24/7 Support
          </h3>
          <p className="text-gray-600 text-sm">
            Our support team is always available to assist you with any
            questions or issues.
          </p>
        </div>

        {/* Modern Experience */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xl font-bold">
            ✨
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Modern Experience
          </h3>
          <p className="text-gray-600 text-sm">
            Enjoy a clean, responsive, and modern design built with the latest
            web technologies.
          </p>
        </div>
      </div>
    </div>


      </section>
  )
}

export default AboutQuality