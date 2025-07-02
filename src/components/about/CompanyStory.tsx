
const CompanyStory = () => {
  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-gray-900">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Journey</span>
            </h1>
            <div className="space-y-4 text-base lg:text-lg leading-relaxed text-gray-700">
              <p>
                Headquartered in Bangalore, Aurora Supplies is transforming global sourcing with AI-driven efficiency and deep industry expertise.
              </p>
              <p>
                Our platform connects businesses with verified suppliers and delivers competitive quotes in 24–48 hours, powered by years of experience in procurement and logistics.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-xl p-6 shadow-xl border border-gray-200">
              <h3 className="text-lg lg:text-xl font-bold mb-4 text-green-600">Key Milestones</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm lg:text-base">Built on experience – Years of sourcing and supply chain expertise</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm lg:text-base">AI from day one – Smart, scalable, and efficient sourcing</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-900 text-sm lg:text-base">Rapid growth – Projected to cross $1.5B+ in sourcing volume*</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
