
import { PageTransition } from "../components/Transitions";
import { Award } from "lucide-react";

// Sample awards data
const awardsData = [
  {
    id: 1,
    title: "National Women's Empowerment Award",
    date: "2023-03-08",
    presenter: "Ministry of Women & Child Development",
    description: "Recognition for outstanding contribution to women's empowerment through innovative programs.",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    title: "Social Impact Award",
    date: "2022-11-15",
    presenter: "International NGO Federation",
    description: "Awarded for creating measurable social impact through sustainable initiatives and community engagement.",
    image: "https://images.unsplash.com/photo-1553484604-9f524520c793?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Community Service Excellence",
    date: "2022-06-30",
    presenter: "State Government of Maharashtra",
    description: "Honored for excellent service to the community, particularly for disaster relief work during floods.",
    image: "https://images.unsplash.com/photo-1618374645476-4a3672dba2c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
  },
  {
    id: 4,
    title: "Certificate of Merit",
    date: "2021-12-10",
    presenter: "Kolhapur Municipal Corporation",
    description: "Recognition for significant contribution to local community development and improvement of women's welfare.",
    image: "https://images.unsplash.com/photo-1577896851426-80e8a2a9303a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    title: "Vocational Training Recognition",
    date: "2021-08-15",
    presenter: "Chamber of Commerce",
    description: "Appreciation for excellence in providing vocational training programs that enhance women's employability.",
    image: "https://images.unsplash.com/photo-1587837073080-448bc6a2329b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  },
  {
    id: 6,
    title: "Entrepreneurship Development Award",
    date: "2020-10-22",
    presenter: "Small Business Association",
    description: "Recognition for efforts in fostering entrepreneurship among women and creating self-employment opportunities.",
    image: "https://images.unsplash.com/photo-1589558428577-44bc1c747e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
  }
];

const Awards = () => {
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
      <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 bg-pink-gradient">
          <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[url('https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Awards & Recognition</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">
                Celebrating the milestones and achievements of Lagori Foundation in women's empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-blue-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <Award size={48} className="mx-auto mb-6 text-lagori-600" />
              <h2 className="font-playfair text-3xl font-bold mb-6 text-gray-800">
                Our Journey of Excellence
              </h2>
              <p className="text-gray-600 mb-8">
                २०१९ मध्ये संस्थेच्या स्थापनेपासून, लगोरी फाउंडेशन महिलांच्या सक्षमीकरणाच्या क्षेत्रात आपली समर्पण आणि प्रभावासाठी ओळखली जात आहे. हे पुरस्कार आपल्या कर्तृत्व आणि महिलांमधील सकारात्मक बदल घडवण्यासाठी केलेल्या प्रयत्नांचा प्रतीक आहेत.
              </p>
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-lagori-500 rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Timeline Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="relative max-w-5xl mx-auto">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-lagori-200 via-lagori-400 to-lagori-600"></div>
              
              {/* Award Items */}
              <div className="space-y-16 md:space-y-32">
                {awardsData.map((award, index) => {
                  // Determine gradient based on index
                  const gradients = [
                    'bg-pink-gradient', 
                    'bg-purple-gradient', 
                    'bg-orange-gradient', 
                    'bg-green-gradient', 
                    'bg-blue-gradient',
                    'bg-pink-gradient'
                  ];
                  const gradient = gradients[index % gradients.length];
                  
                  return (
                    <div key={award.id} className="relative">
                      {/* Date Circle - Only visible on md and above */}
                      <div className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 ${gradient} rounded-full items-center justify-center text-white font-bold text-sm z-10`}>
                        {new Date(award.date).getFullYear()}
                      </div>
                      
                      {/* Mobile Date Badge - Only visible below md */}
                      <div className={`md:hidden ${gradient} text-white py-1 px-3 rounded-full inline-block mb-4`}>
                        {new Date(award.date).getFullYear()}
                      </div>
                      
                      <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        {/* Award Image */}
                        <div className="w-full md:w-1/2 p-4">
                          <div className="overflow-hidden rounded-xl shadow-lg">
                            <img
                              src={award.image}
                              alt={award.title}
                              className="w-full h-60 object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                        </div>
                        
                        {/* Award Content */}
                        <div className="w-full md:w-1/2 p-4">
                          <div className={`bg-white p-6 rounded-xl shadow-lg hover-lift ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} border-t-4 ${gradient.replace('bg-', 'border-')}`}>
                            <h3 className="font-playfair text-2xl font-bold mb-2 text-gray-800">
                              {award.title}
                            </h3>
                            <p className="text-lagori-600 mb-2">
                              <strong>Presented by:</strong> {award.presenter}
                            </p>
                            <p className="text-gray-500 mb-4">
                              {formatDate(award.date)}
                            </p>
                            <p className="text-gray-600">
                              {award.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-purple-gradient text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl font-bold mb-6">
                Join Us in Our Journey
              </h2>
              <p className="text-white/90 mb-8">
                We're grateful for the recognition our work has received, but our true reward is the positive change we see in the lives of women. Help us continue making a difference by getting involved or supporting our cause.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="btn-primary bg-white text-purple-700 hover:bg-gray-100">
                  Donate Now
                </a>
                <a href="/contact" className="btn-secondary text-white border-white hover:bg-white/10">
                  Get Involved
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Awards;
