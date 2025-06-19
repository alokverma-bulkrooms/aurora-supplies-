
const CompanyStory = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              Our <span className="text-blue-400">Story</span>
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-gray-300">
              <p>
                Founded in 2009, Aurora Supplies emerged from a vision to revolutionize 
                international commodity trading through cutting-edge artificial intelligence 
                and data analytics.
              </p>
              <p>
                What started as a small trading firm has evolved into a global powerhouse, 
                connecting markets across continents and facilitating billions in trade volume 
                annually.
              </p>
              <p>
                Today, we leverage advanced AI algorithms to predict market trends, optimize 
                supply chains, and deliver unprecedented value to our partners worldwide.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Company Timeline</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold">2009</div>
                    <div className="text-blue-100">Company Founded</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold">2015</div>
                    <div className="text-blue-100">AI Integration</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold">2020</div>
                    <div className="text-blue-100">Global Expansion</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div>
                    <div className="font-semibold">2024</div>
                    <div className="text-blue-100">$2B+ Trade Volume</div>
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
