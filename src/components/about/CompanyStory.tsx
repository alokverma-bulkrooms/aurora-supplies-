
const CompanyStory = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50 text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Story</span>
            </h1>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                Founded in 2009 in Bangalore, Karnataka, India, Aurora Supplies revolutionizes global sourcing 
                through AI-powered supplier networks.
              </p>
              <p>
                We connect businesses worldwide with trusted suppliers, 
                delivering optimized quotes in 24-48 hours.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-blue-200/50">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Key Milestones</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-800">2009 - Founded in Bangalore</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-800">2015 - AI Integration</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-gray-800">2024 - $1.5B+ Volume</div>
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
