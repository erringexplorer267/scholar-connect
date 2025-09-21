import React, { useState } from 'react';
import { Search, Star, Calendar, Clock, BookOpen, User, Mail, Phone, MapPin, Award, ChevronRight, ArrowLeft, Filter } from 'lucide-react';

const ScholarConnectWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedScholar, setSelectedScholar] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Sample data for scholars
  const scholars = [
    {
      id: 1,
      name: "Dr. Margaret Thompson",
      title: "Retired Mathematics Professor",
      expertise: ["Advanced Calculus", "Statistics", "Linear Algebra"],
      rating: 4.9,
      reviews: 127,
      hourlyRate: 45,
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      bio: "With 35 years of teaching experience at MIT, I specialize in making complex mathematical concepts accessible to students of all levels. My passion lies in helping students overcome their fear of mathematics and discover its beauty.",
      availability: "Mon-Fri, 9 AM - 5 PM",
      experience: "35 years",
      education: "Ph.D. Mathematics, Harvard University",
      languages: ["English", "French"],
      category: "mathematics"
    },
    {
      id: 2,
      name: "Prof. James Chen",
      title: "Former Computer Science Department Head",
      expertise: ["Python Programming", "AI/ML", "Data Structures"],
      rating: 4.8,
      reviews: 93,
      hourlyRate: 60,
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      bio: "Former department head at Stanford with extensive industry experience at Google and Microsoft. I bridge the gap between academic theory and practical application in computer science.",
      availability: "Tue-Sat, 10 AM - 6 PM",
      experience: "28 years",
      education: "Ph.D. Computer Science, Stanford University",
      languages: ["English", "Mandarin"],
      category: "technology"
    },
    {
      id: 3,
      name: "Dr. Sarah Williams",
      title: "Retired Literature Professor",
      expertise: ["Creative Writing", "British Literature", "Poetry Analysis"],
      rating: 4.9,
      reviews: 156,
      hourlyRate: 40,
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1494790108755-2616c5e10fb5?w=150&h=150&fit=crop&crop=face",
      bio: "Published author and former Yale professor with a passion for nurturing creative minds. I help students find their unique voice in writing and develop critical thinking skills through literature.",
      availability: "Mon-Thu, 1 PM - 7 PM",
      experience: "30 years",
      education: "Ph.D. English Literature, Yale University",
      languages: ["English", "Spanish"],
      category: "literature"
    },
    {
      id: 4,
      name: "Dr. Robert Kumar",
      title: "Former Physics Department Chair",
      expertise: ["Quantum Physics", "Thermodynamics", "Research Methods"],
      rating: 4.7,
      reviews: 89,
      hourlyRate: 55,
      location: "Chicago, IL",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Retired physics professor with groundbreaking research in quantum mechanics. I make complex physics concepts understandable and exciting for students at all levels.",
      availability: "Mon-Fri, 8 AM - 4 PM",
      experience: "32 years",
      education: "Ph.D. Physics, University of Chicago",
      languages: ["English", "Hindi"],
      category: "science"
    },
    {
      id: 5,
      name: "Ms. Elena Rodriguez",
      title: "Master Musician & Former Conservatory Teacher",
      expertise: ["Piano", "Music Theory", "Composition"],
      rating: 4.9,
      reviews: 201,
      hourlyRate: 50,
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "Concert pianist and former professor at Juilliard. I believe music is a universal language that enriches lives and develops discipline, creativity, and emotional intelligence.",
      availability: "Flexible schedule",
      experience: "25 years",
      education: "Master of Music, Juilliard School",
      languages: ["English", "Spanish", "Italian"],
      category: "arts"
    },
    {
      id: 6,
      name: "Dr. Michael Brooks",
      title: "Retired Business School Dean",
      expertise: ["Strategic Management", "Entrepreneurship", "Leadership"],
      rating: 4.8,
      reviews: 134,
      hourlyRate: 75,
      location: "Atlanta, GA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      bio: "Former dean of Wharton Business School with 20 years of C-suite experience. I help aspiring entrepreneurs and business leaders develop the skills needed for success in today's competitive market.",
      availability: "Mon-Fri, 9 AM - 6 PM",
      experience: "40 years",
      education: "MBA Harvard Business School",
      languages: ["English"],
      category: "business"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Fields' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'technology', name: 'Technology' },
    { id: 'literature', name: 'Literature' },
    { id: 'science', name: 'Science' },
    { id: 'arts', name: 'Arts' },
    { id: 'business', name: 'Business' }
  ];

  const filteredScholars = scholars.filter(scholar => {
    const matchesSearch = scholar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scholar.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || scholar.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const HomePage = () => (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
            Learn from the <span className="text-purple-300">Masters</span>
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Connect with retired professors and industry experts who are passionate about sharing their decades of knowledge and experience with the next generation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('scholars')}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Find a Mentor
            </button>
            <button
              onClick={() => setCurrentPage('booking')}
              className="bg-transparent border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Join as Scholar
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Why Choose Scholar Connect?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-xl text-center hover:bg-gray-600 transition-colors duration-300">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Knowledge</h3>
              <p className="text-gray-300">Learn from professors and industry leaders with decades of real-world experience.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl text-center hover:bg-gray-600 transition-colors duration-300">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Flexible Scheduling</h3>
              <p className="text-gray-300">Book sessions that fit your schedule with our easy-to-use booking system.</p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl text-center hover:bg-gray-600 transition-colors duration-300">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Personalized Learning</h3>
              <p className="text-gray-300">Get one-on-one attention tailored to your specific learning goals and pace.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-16">Popular Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map((category, index) => (
              <div
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentPage('scholars');
                }}
                className="bg-gradient-to-r from-purple-800 to-purple-600 p-6 rounded-xl cursor-pointer hover:from-purple-700 hover:to-purple-500 transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                <p className="text-purple-100">Expert mentors available</p>
                <ChevronRight className="w-6 h-6 text-white mt-2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ScholarsPage = () => (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={() => setCurrentPage('home')}
            className="mr-4 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-4xl font-bold text-white">Find Your Mentor</h1>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:gap-4">
          <div className="flex-1 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
          </div>
          <div className="relative">
            <Filter className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-800 text-white pl-10 pr-8 py-3 rounded-lg border border-gray-700 focus:border-purple-500 focus:outline-none appearance-none"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Scholars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredScholars.map(scholar => (
            <div key={scholar.id} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300">
              <div className="flex items-start mb-4">
                <img
                  src={scholar.image}
                  alt={scholar.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{scholar.name}</h3>
                  <p className="text-purple-300 text-sm mb-2">{scholar.title}</p>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white ml-1">{scholar.rating}</span>
                    <span className="text-gray-400 ml-2">({scholar.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {scholar.expertise.slice(0, 3).map((skill, index) => (
                    <span key={index} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{scholar.location}</span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-white">${scholar.hourlyRate}</span>
                  <span className="text-gray-400 text-sm">/hour</span>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedScholar(scholar);
                    setCurrentPage('profile');
                  }}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold transition-colors duration-300"
                >
                  View Profile
                </button>
                <button
                  onClick={() => {
                    setSelectedScholar(scholar);
                    setCurrentPage('booking');
                  }}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg font-semibold transition-colors duration-300"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredScholars.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No scholars found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );

  const ProfilePage = () => {
    if (!selectedScholar) return null;

    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={() => setCurrentPage('scholars')}
              className="mr-4 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-4xl font-bold text-white">Scholar Profile</h1>
          </div>

          {/* Profile Header */}
          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <img
                src={selectedScholar.image}
                alt={selectedScholar.name}
                className="w-32 h-32 rounded-full object-cover mb-6 md:mb-0 md:mr-8"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedScholar.name}</h2>
                <p className="text-purple-300 text-lg mb-4">{selectedScholar.title}</p>
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white ml-2 text-lg">{selectedScholar.rating}</span>
                  <span className="text-gray-400 ml-2">({selectedScholar.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-white">${selectedScholar.hourlyRate}</span>
                  <span className="text-gray-400 text-lg ml-2">/hour</span>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <button
                  onClick={() => setCurrentPage('booking')}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors duration-300"
                >
                  Book Session
                </button>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* About */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">About</h3>
              <p className="text-gray-300 leading-relaxed">{selectedScholar.bio}</p>
            </div>

            {/* Quick Info */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">{selectedScholar.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">{selectedScholar.availability}</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">{selectedScholar.experience} experience</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-gray-300">{selectedScholar.education}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise & Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Expertise */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Areas of Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {selectedScholar.expertise.map((skill, index) => (
                  <span key={index} className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {selectedScholar.languages.map((language, index) => (
                  <span key={index} className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const BookingPage = () => {
    const [bookingData, setBookingData] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      duration: '60',
      subject: '',
      message: ''
    });

    const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error'

    const handleInputChange = (e) => {
      setBookingData({
        ...bookingData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // In a real app, this would be an API call to submit the booking
      // For this example, we'll just show a success message
      console.log('Booking request submitted:', bookingData);
      setSubmissionStatus('success');
      setTimeout(() => {
        setSubmissionStatus(null);
        setCurrentPage('home');
      }, 3000); // Reset status and navigate back after 3 seconds
    };

    return (
      <div className="min-h-screen bg-gray-900 py-8">
        <div className="max-w-2xl mx-auto px-4">
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={() => selectedScholar ? setCurrentPage('profile') : setCurrentPage('scholars')}
              className="mr-4 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <h1 className="text-4xl font-bold text-white">Book a Session</h1>
          </div>

          {/* Scholar Info (if selected) */}
          {selectedScholar && (
            <div className="bg-gray-800 rounded-xl p-6 mb-8">
              <div className="flex items-center">
                <img
                  src={selectedScholar.image}
                  alt={selectedScholar.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{selectedScholar.name}</h3>
                  <p className="text-purple-300">{selectedScholar.title}</p>
                  <p className="text-gray-400">${selectedScholar.hourlyRate}/hour</p>
                </div>
              </div>
            </div>
          )}

          {/* Booking Form */}
          <div className="bg-gray-800 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submissionStatus === 'success' && (
                <div className="bg-green-500 text-white p-4 rounded-lg mb-4 text-center">
                  Session booking request submitted successfully! The scholar will contact you shortly.
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={bookingData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={bookingData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Subject/Topic *</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={bookingData.subject}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                    placeholder="What would you like to learn?"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">Preferred Date *</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={bookingData.date}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Preferred Time *</label>
                  <input
                    type="time"
                    name="time"
                    required
                    value={bookingData.time}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Duration (minutes)</label>
                  <select
                    name="duration"
                    value={bookingData.duration}
                    onChange={handleInputChange}
                    className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                  >
                    <option value="30">30 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="120">120 minutes</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-medium mb-2">Additional Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={bookingData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white p-3 rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
                  placeholder="Tell us more about your learning goals or any specific requirements..."
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-lg transition-colors duration-300"
                >
                  Submit Booking Request
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentPage('scholars')}
                  className="px-6 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Main render logic
  return (
    <div>
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'scholars' && <ScholarsPage />}
      {currentPage === 'profile' && <ProfilePage />}
      {currentPage === 'booking' && <BookingPage />}
    </div>
  );
};

export default ScholarConnectWebsite;
