ximport { useState, useEffect } from "react";
import { PageTransition } from "../components/Transitions";
import ActivityCard from "../components/ActivityCard";

// Sample activity data
const activitiesData = [
  {
    id: 1,
    title: "Tailoring Workshop",
    date: "2023-06-15",
    description: "A skill development workshop teaching tailoring skills to women from rural communities.",
    image: "https://images.unsplash.com/photo-1529333166437-7feb33f752ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 2,
    title: "Sankranti Haldi-Kunku Celebration",
    date: "2023-01-14",
    description: "A cultural celebration bringing together women from different communities to celebrate the festival of Sankranti.",
    image: "https://images.unsplash.com/photo-1529333166437-7feb33f752ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 3,
    title: "Legal Awareness Camp",
    date: "2023-03-08",
    description: "An educational workshop on International Women's Day, informing women about their legal rights.",
    image: "https://images.unsplash.com/photo-1529333166437-7feb33f752ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 4,
    title: "Self-Defense Training",
    date: "2022-11-20",
    description: "A workshop teaching women essential self-defense techniques to enhance personal safety.",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 5,
    title: "Financial Literacy Workshop",
    date: "2022-07-12",
    description: "A program designed to teach women basic financial concepts and money management skills.",
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 6,
    title: "Healthcare Awareness Drive",
    date: "2022-04-07",
    description: "A campaign to raise awareness about women's health issues and provide basic health checkups.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 7,
    title: "Entrepreneurship Seminar",
    date: "2021-10-15",
    description: "A seminar to encourage and guide women in starting their own businesses.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 8,
    title: "Disaster Relief Distribution",
    date: "2021-08-05",
    description: "Distribution of essential supplies to areas affected by flooding.",
    image: "https://images.unsplash.com/photo-1583468982228-19f19164aee3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2011&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 9,
    title: "Computer Skills Training",
    date: "2021-06-22",
    description: "A training program to teach basic computer skills to enhance employability.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 10,
    title: "Cultural Dance Workshop",
    date: "2021-03-30",
    description: "A workshop celebrating traditional dances and cultural heritage.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 11,
    title: "Community Garden Initiative",
    date: "2020-09-12",
    description: "A project to create a community garden providing fresh produce and bonding opportunities.",
    image: "https://images.unsplash.com/photo-1518012312832-96aea3c91144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 12,
    title: "Foundation Day Celebration",
    date: "2020-02-15",
    description: "Celebrating the first anniversary of Lagori Foundation with community members.",
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 13,
    title: "First Legal Aid Camp",
    date: "2019-11-05",
    description: "The inaugural legal assistance program providing free legal advice to women in need.",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 14,
    title: "Foundation Inauguration",
    date: "2019-06-01",
    description: "The official launch of Lagori Foundation with a mission to empower women.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  }
];

const Activities = () => {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedMonth, setSelectedMonth] = useState<string>("all");
  const [years, setYears] = useState<string[]>([]);
  const [months, setMonths] = useState<{id: string, name: string}[]>([]);
  const [filteredActivities, setFilteredActivities] = useState(activitiesData);

  // Extract unique years from activities data
  useEffect(() => {
    const uniqueYears = Array.from(
      new Set(
        activitiesData.map(activity => 
          new Date(activity.date).getFullYear().toString()
        )
      )
    ).sort().reverse();
    setYears(uniqueYears);
  }, []);

  // Update available months when year is selected
  useEffect(() => {
    if (selectedYear === "all") {
      setMonths([]);
      setSelectedMonth("all");
      return;
    }

    const activitiesInYear = activitiesData.filter(activity => 
      new Date(activity.date).getFullYear().toString() === selectedYear
    );

    const monthsInYear = Array.from(
      new Set(
        activitiesInYear.map(activity => {
          const date = new Date(activity.date);
          return date.getMonth().toString();
        })
      )
    ).sort((a, b) => parseInt(a) - parseInt(b));

    const monthOptions = monthsInYear.map(month => ({
      id: month,
      name: new Date(0, parseInt(month)).toLocaleString('default', { month: 'long' })
    }));

    setMonths(monthOptions);
    setSelectedMonth("all");
  }, [selectedYear]);

  // Filter activities based on selected year and month
  useEffect(() => {
    let filtered = activitiesData;

    if (selectedYear !== "all") {
      filtered = filtered.filter(activity => 
        new Date(activity.date).getFullYear().toString() === selectedYear
      );
    }

    if (selectedMonth !== "all") {
      filtered = filtered.filter(activity => 
        new Date(activity.date).getMonth().toString() === selectedMonth
      );
    }

    // Sort by date (newest first)
    filtered = [...filtered].sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    setFilteredActivities(filtered);
  }, [selectedYear, selectedMonth]);

  // Format date for display
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <PageTransition>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-lagori-600 to-lagori-700">
          <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[url('https://images.unsplash.com/photo-1632178151697-fd971baa906f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Activities</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                Explore our initiatives, events, and programs that are making a difference in women's lives.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-lagori-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6">
              <h2 className="font-playfair text-2xl font-bold mb-6 text-center text-gray-800">
                Filter Activities
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="year-select" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Year
                  </label>
                  <select
                    id="year-select"
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lagori-500 focus:border-lagori-500"
                  >
                    <option value="all">All Years</option>
                    {years.map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="month-select" className="block text-sm font-medium text-gray-700 mb-2">
                    Select Month
                  </label>
                  <select
                    id="month-select"
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-lagori-500 focus:border-lagori-500"
                    disabled={selectedYear === "all" || months.length === 0}
                  >
                    <option value="all">All Months</option>
                    {months.map(month => (
                      <option key={month.id} value={month.id}>{month.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="font-playfair text-3xl font-bold mb-4 text-center text-gray-800">
                {filteredActivities.length > 0 
                  ? "Activities & Events" 
                  : "No activities found for the selected filters"}
              </h2>
              {selectedYear !== "all" && (
                <p className="text-center text-gray-600">
                  Showing activities for 
                  {selectedMonth !== "all" 
                    ? ` ${months.find(m => m.id === selectedMonth)?.name} ${selectedYear}` 
                    : ` ${selectedYear}`}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredActivities.map(activity => (
                <ActivityCard
                  key={activity.id}
                  title={activity.title}
                  date={formatDate(activity.date)}
                  description={activity.description}
                  image={activity.image}
                  link={activity.link}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Activities;
