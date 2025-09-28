import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50">
          <div className="h-full w-full bg-repeat" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Logo */}
          <div className="mb-8 sm:mb-12">
            <Image
              src="/fadefactory.jpg"
              alt="Fade Factory Logo"
              width={300}
              height={300}
              priority
              className="mx-auto rounded-2xl shadow-2xl shadow-blue-500/20 border-2 border-blue-400/30 hover:border-blue-400/60 transition-all duration-500 transform hover:scale-105"
            />
          </div>

          {/* Main Content */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-tight">
              FADE FACTORY
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-blue-300 font-light italic tracking-wide">
              &ldquo;Always Fresh&rdquo;
            </p>

            {/* Services Preview */}
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-blue-400 text-3xl mb-4">✂️</div>
                <h3 className="text-lg font-semibold mb-2">Premium Cuts</h3>
                <p className="text-gray-300 text-sm">Expert barbers crafting the perfect style</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-blue-400 text-3xl mb-4">🎨</div>
                <h3 className="text-lg font-semibold mb-2">Fresh Styles</h3>
                <p className="text-gray-300 text-sm">Modern techniques and classic craftsmanship</p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-blue-400 text-3xl mb-4">⭐</div>
                <h3 className="text-lg font-semibold mb-2">Premium Care</h3>
                <p className="text-gray-300 text-sm">Exceptional service and attention to detail</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-black/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent">
            Visit Us Today
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left">
                <h3 className="text-xl font-semibold mb-4 text-blue-300 flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  Location
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  570 Highway 8, Unit 3<br />
                  Stoney Creek, Ontario<br />
                  Canada
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left">
                <h3 className="text-xl font-semibold mb-4 text-blue-300 flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  Contact
                </h3>
                <a 
                  href="tel:2896560504" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
                >
                  (289) 656-0504
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 border border-blue-400/30">
                <h3 className="text-2xl font-bold mb-4">Ready for a Fresh Look?</h3>
                <p className="text-blue-100 mb-6">Experience the Fade Factory difference with our expert barbers and premium service.</p>
                <button className="w-full bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-300 transform hover:scale-105 shadow-lg">
                  Book Your Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 Fade Factory. Always Fresh.
          </p>
        </div>
      </footer>
    </div>
  );
}
