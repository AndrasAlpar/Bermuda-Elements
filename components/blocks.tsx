export default function Blocks() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Empowering Traders with Expertise</h2>
            <p className="text-xl text-gray-400">
              We understand that trading can be complex and challenging. That's
              why we're here to provide you with the knowledge and tools you
              need to make informed decisions in the financial markets. Our
              expertise simplifies your trading workflow, so you can trade with
              confidence and achieve your financial goals.
            </p>
          </div>
          {/* Items */}
          <div
            className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none"
            data-aos-id-blocks
          >
            {/* 1st item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <h4 className="h4 mb-2">Proven Track Record</h4>
              <p className="text-lg text-gray-400 text-center">
                Trust in our history of success.
              </p>
            </div>

            {/* 2nd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <h4 className="h4 mb-2">Personalized Guidance</h4>
              <p className="text-lg text-gray-400 text-center">
                Tailored support for your trading journey.
              </p>
            </div>

            {/* 3rd item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <h4 className="h4 mb-2">Global Reach</h4>
              <p className="text-lg text-gray-400 text-center">
                Access global markets with ease.
              </p>
            </div>

            {/* 4th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <h4 className="h4 mb-2">Robust Risk Management</h4>
              <p className="text-lg text-gray-400 text-center">
                Protecting your investments is our priority.
              </p>
            </div>

            {/* 5th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <h4 className="h4 mb-2">Cutting-Edge Technology</h4>
              <p className="text-lg text-gray-400 text-center">
                Stay ahead of the curve with our technology-driven solutions.
              </p>
            </div>

            {/* 6th item */}
            <div
              className="relative flex flex-col items-center"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor="[data-aos-id-blocks]"
            >
              <svg
                className="w-16 h-16 mb-4"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              ></svg>
              <h4 className="h4 mb-2">Opportunities for Growth</h4>
              <p className="text-lg text-gray-400 text-center">
                Unlock your potential for financial growth with us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
