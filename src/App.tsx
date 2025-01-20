import React, { useState } from 'react';
import { Upload, Image as ImageIcon, Download, AlertCircle, Eraser, Moon, Sun, Check, Star } from 'lucide-react';

function App() {
  const [image, setImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        simulateProcessing();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'} border-b fixed w-full top-0 z-50 transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 group">
              <div className="relative">
                <Eraser className={`w-7 h-7 ${isDark ? 'text-blue-400' : 'text-blue-600'} transform transition-transform duration-300 group-hover:rotate-12`} />
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300"></div>
              </div>
              <span className={`font-bold text-xl ${isDark ? 'text-white' : 'text-gray-900'} transition-colors duration-300`}>
                EraserAI
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>Features</a>
              <a href="#pricing" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>Pricing</a>
              <a href="#testimonials" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-300`}>Testimonials</a>
            </nav>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${isDark ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors duration-300`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className={`${isDark ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-lg transition-colors duration-300`}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <div className={`${isDark ? 'bg-gradient-to-br from-gray-900 to-blue-900' : 'bg-gradient-to-br from-blue-50 to-sky-50'} py-24 transition-colors duration-300`}>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className={`text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6 leading-tight transition-colors duration-300`}>
                Remove Background
                <span className="text-blue-500"> Instantly</span>
              </h1>
              <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-12 transition-colors duration-300`}>
                Professional background removal powered by AI. Get perfect results in seconds, 
                no design skills needed.
              </p>
              <div className="flex justify-center gap-4">
                <button className={`${isDark ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 inline-flex items-center gap-2`}>
                  <Upload className="w-5 h-5" />
                  Start Removing Background
                </button>
                <button className={`${isDark ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-50'} px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300`}>
                  View Examples
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            {!image ? (
              <div className="border-4 border-dashed border-gray-200 rounded-xl p-16">
                <div className="text-center">
                  <ImageIcon className="w-20 h-20 mx-auto text-gray-400 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">Upload your image</h3>
                  <p className="text-gray-600 mb-8">
                    Drop your image here or click to browse
                  </p>
                  <label className="cursor-pointer">
                    <span className={`${isDark ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-colors duration-300 text-lg font-semibold`}>
                      <Upload className="w-5 h-5" />
                      Choose Image
                    </span>
                    <input
                      type="file"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                  </label>
                  <p className="mt-6 text-gray-500">
                    Supports JPG, PNG • Max file size 10MB
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <ImageIcon className="w-5 h-5" />
                      Original Image
                    </h3>
                    <div className="aspect-square rounded-xl overflow-hidden bg-gray-50 border border-gray-200">
                      <img
                        src={image}
                        alt="Original"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Eraser className="w-5 h-5 text-blue-600" />
                      Result
                    </h3>
                    <div className="aspect-square rounded-xl overflow-hidden bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAOdEVYdFRpdGxlAEdyaWQgMTBweNHKVY0AAAAXdEVYdEF1dGhvcgBMYXBvIENhbGFtYW5kcmVp35EaKgAAABl0RVh0RGVzY3JpcHRpb24AV2l0aCBhIERFTEFZIDrjZi4iAAAARElEQVQ4jWNgYGBg+P//fwMxGGQGEyOx6kF6GGCagYFhA7EAbDMhzSAz/xNrM7oZA+8FRpAXYD6A4WEuJhkzqmA4hAEAiFQsuvcKQ2YAAAAASUVORK5CYII=')] border border-gray-200">
                      {isProcessing ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
                        </div>
                      ) : (
                        <img
                          src={image}
                          alt="Processed"
                          className="w-full h-full object-contain"
                        />
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <button
                    onClick={() => setImage(null)}
                    className="text-gray-600 hover:text-gray-800 transition-colors font-medium"
                  >
                    Upload another image
                  </button>
                  <button
                    className={`${isDark ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} text-white px-8 py-4 rounded-lg inline-flex items-center gap-2 transition-colors duration-300 text-lg font-semibold disabled:opacity-50`}
                    disabled={isProcessing}
                  >
                    <Download className="w-5 h-5" />
                    Download Result
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 py-24" id="features">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Professional Features
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need for perfect background removal results
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Upload className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Bulk Processing</h3>
                <p className="text-gray-600">
                  Process multiple images at once with our advanced batch processing feature
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <AlertCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Technology</h3>
                <p className="text-gray-600">
                  State-of-the-art AI models ensure precise and accurate background removal
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Instant Export</h3>
                <p className="text-gray-600">
                  Download your processed images in multiple formats including PNG and JPEG
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-24" id="pricing">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Choose the perfect plan for your needs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                <p className="text-gray-600 mb-6">Perfect for getting started</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$9</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>50 images per month</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Basic AI processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Email support</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </div>
              
              {/* Pro Plan */}
              <div className="bg-blue-600 p-8 rounded-2xl shadow-xl text-white transform scale-105">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Pro</h3>
                    <p className="opacity-90">Most popular choice</p>
                  </div>
                  <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="opacity-90">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Unlimited images</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Advanced AI processing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    <span>Bulk processing</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-blue-600 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                  Get Started
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-6">For large organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Unlimited images</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Custom AI models</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>24/7 phone support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>API access</span>
                  </li>
                </ul>
                <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 py-24" id="testimonials">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Trusted by Professionals
              </h2>
              <p className="text-xl text-gray-600">
                See what our customers have to say
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Professional Photographer",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
                  content: "The AI background removal is incredibly accurate. It saves me hours of manual editing work."
                },
                {
                  name: "Michael Chen",
                  role: "E-commerce Manager",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
                  content: "We process hundreds of product images daily. This tool has become essential for our workflow."
                },
                {
                  name: "Emma Davis",
                  role: "Digital Artist",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80",
                  content: "The quality of the background removal is outstanding. Best tool I've used so far."
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="#FBBF24" />
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Eraser className="w-6 h-6 text-blue-400" />
                <span className="font-bold text-xl">EraserAI</span>
              </div>
              <p className="text-gray-400">
                Professional background removal powered by artificial intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2024 EraserAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;