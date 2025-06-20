
const CompanyStory = () => {
  return (
    <section className="py-20 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">
              Our <span className="text-slate-300">Story</span>
            </h1>
            <div className="space-y-4 text-lg leading-relaxed text-slate-300">
              <p>
                Founded in 2009, Aurora Supplies revolutionizes global sourcing 
                through AI-powered supplier networks.
              </p>
              <p>
                We connect businesses worldwide with trusted suppliers, 
                delivering optimized quotes in 24-48 hours.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-slate-700 rounded-xl p-6 shadow-xl">
              <h3 className="text-xl font-bold mb-4">Key Milestones</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <div>
                    <div className="font-medium">2009 - Founded</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <div>
                    <div className="font-medium">2015 - AI Integration</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
                  <div>
                    <div className="font-medium">2024 - $1.5B+ Volume</div>
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
