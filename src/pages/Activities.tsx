
import { useState, useEffect } from "react";
import { PageTransition } from "../components/Transitions";

interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
  month: string;
  year: string;
  image: string;
}

const Activities = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2023");
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [availableMonths, setAvailableMonths] = useState<string[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Sample activities data
  const activities: Activity[] = [
    {
      id: 1,
      title: "International Women's Day Celebration",
      description: "A grand celebration of International Women's Day, featuring inspiring talks, cultural performances, and recognition of women achievers from the community.",
      date: "March 8, 2023",
      month: "March",
      year: "2023",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 2,
      title: "Tailoring Workshop for Rural Women",
      description: "A skill development workshop teaching tailoring skills to women from rural communities, providing them with a pathway to financial independence.",
      date: "June 15, 2023",
      month: "June",
      year: "2023",
      image: "https://images.unsplash.com/photo-1607748851687-ba9a10438621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 3,
      title: "Sankranti Haldi-Kunku Celebration",
      description: "A cultural celebration bringing together women from different communities to celebrate the festival of Sankranti with traditional Haldi-Kunku ceremony.",
      date: "January 14, 2023",
      month: "January",
      year: "2023",
      image: "https://images.unsplash.com/photo-1529333166437-7feb33f752ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80"
    },
    {
      id: 4,
      title: "Legal Awareness Camp",
      description: "An educational workshop on women's legal rights, focusing on domestic violence laws, marriage rights, property rights, and available resources for legal assistance.",
      date: "April 22, 2023",
      month: "April",
      year: "2023",
      image: "https://images.unsplash.com/photo-1618377385526-83108e223cf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 5,
      title: "Disaster Relief Distribution",
      description: "Distribution of essential supplies and relief packages to flood-affected areas in Kolhapur, supporting families in rebuilding their lives after the natural disaster.",
      date: "August 10, 2022",
      month: "August",
      year: "2022",
      image: "https://images.unsplash.com/photo-1587187177677-43bc082c749f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 6,
      title: "Elderly Care Program",
      description: "A community initiative to provide care, companionship, and essential supplies to elderly individuals living alone or in challenging circumstances.",
      date: "October 5, 2022",
      month: "October",
      year: "2022",
      image: "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
    },
    {
      id: 7,
      title: "Two-Wheeler Training for Women",
      description: "A practical training program teaching women how to ride two-wheelers, enhancing their mobility and independence in daily life.",
      date: "May 20, 2021",
      month: "May",
      year: "2021",
      image: "https://images.unsplash.com/photo-1626335843600-ea2d714a72f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
      id: 8,
      title: "Gauri-Ganpati Celebration",
      description: "A traditional celebration of the Gauri-Ganpati festival, bringing together community members to honor cultural traditions and strengthen social bonds.",
      date: "September 12, 2021",
      month: "September",
      year: "2021",
      image: "https://images.unsplash.com/photo-1642094893858-2be253b5c9f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    }
  ];

  // Available years for filtering
  const years = ["2023", "2022", "2021", "2020", "2019"];

  // Get available months for selected year
  useEffect(() => {
    const yearActivities = activities.filter(activity => activity.year === selectedYear);
    const months = [...new Set(yearActivities.map(activity => activity.month))];
    setAvailableMonths(months);
    setSelectedMonth("");
  }, [selectedYear]);

  // Filter activities based on selected year and month
  useEffect(() => {
    let filtered = activities.filter(activity => activity.year === selectedYear);
    
    if (selectedMonth) {
      filtered = filtered.filter(activity => activity.month === selectedMonth);
    }
    
    setFilteredActivities(filtered);
  }, [selectedYear, selectedMonth]);

  const openActivityModal = (activity: Activity) => {
    setSelectedActivity(activity);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedActivity(null);
  };

  return (
    <PageTransition>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-lagori-600 text-white py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium mb-6 animate-fade-in">
              Our Activities
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in animate-delay-100">
              Events & Initiatives
            </h1>
            <p className="text-lg max-w-3xl mx-auto animate-fade-in animate-delay-200">
              Explore our activities, workshops, and community events by year and month.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-16 bg-lagori-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="mb-8 animate-fade-in">
                <h2 className="font-playfair text-2xl font-bold mb-4 text-center text-gray-800">
                  Filter Activities by Year & Month
                </h2>
                <p className="text-center text-gray-600 mb-6">
                  Select a year and month to view specific activities and events.
                </p>
              </div>

              <div className="space-y-6 animate-fade-in animate-delay-100">
                {/* Year Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Year</label>
                  <div className="flex flex-wrap gap-2">
                    {years.map(year => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={`px-4 py-2 rounded-full transition-all ${
                          selectedYear === year 
                            ? 'bg-lagori-600 text-white' 
                            : 'bg-white text-gray-800 hover:bg-lagori-100'
                        }`}
                      >
                        {year}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Month Selection */}
                {availableMonths.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Select Month</label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedMonth("")}
                        className={`px-4 py-2 rounded-full transition-all ${
                          selectedMonth === "" 
                            ? 'bg-lagori-600 text-white' 
                            : 'bg-white text-gray-800 hover:bg-lagori-100'
                        }`}
                      >
                        All Months
                      </button>
                      {availableMonths.map(month => (
                        <button
                          key={month}
                          onClick={() => setSelectedMonth(month)}
                          className={`px-4 py-2 rounded-full transition-all ${
                            selectedMonth === month 
                              ? 'bg-lagori-600 text-white' 
                              : 'bg-white text-gray-800 hover:bg-lagori-100'
                          }`}
                        >
                          {month}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Activities Display Section */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-center text-gray-800 animate-fade-in">
              {selectedMonth ? `${selectedMonth} ${selectedYear} Activities` : `${selectedYear} Activities`}
            </h2>

            {filteredActivities.length === 0 ? (
              <div className="text-center py-12 animate-fade-in">
                <p className="text-gray-600 text-lg">
                  No activities found for this selection. Please try a different year or month.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {filteredActivities.map((activity, index) => (
                  <div 
                    key={activity.id} 
                    className="card overflow-hidden cursor-pointer hover-lift"
                    onClick={() => openActivityModal(activity)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={activity.image}
                        alt={activity.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-3 text-sm text-lagori-600">
                        <span>{activity.date}</span>
                      </div>
                      <h3 className="font-playfair text-xl font-bold mb-3 text-gray-800">{activity.title}</h3>
                      <p className="text-gray-600 line-clamp-3 mb-4">
                        {activity.description}
                      </p>
                      <button className="text-lagori-600 font-medium hover:text-lagori-700 transition-colors inline-flex items-center">
                        View Details 
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Activity Detail Modal */}
        {isModalOpen && selectedActivity && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedActivity.image} 
                  alt={selectedActivity.title} 
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 text-gray-800 hover:text-lagori-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-4 text-sm text-lagori-600">
                  <span>{selectedActivity.date}</span>
                </div>
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  {selectedActivity.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {selectedActivity.description}
                </p>
                <div className="bg-lagori-50 p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-gray-800 mb-2">Impact</h4>
                  <p className="text-gray-600">
                    This activity directly impacted over 50 women, providing them with valuable skills, support, and resources to improve their lives and communities.
                  </p>
                </div>
                <div className="flex justify-end">
                  <button 
                    onClick={closeModal}
                    className="px-4 py-2 text-lagori-600 hover:text-lagori-700 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </PageTransition>
  );
};

export default Activities;
