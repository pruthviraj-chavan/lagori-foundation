
import { Heart, Award, Clock } from "lucide-react";
import { PageTransition } from "../components/Transitions";

const About = () => {
  return (
    <PageTransition>
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-lagori-600 to-lagori-700">
          <div className="absolute inset-0 mix-blend-overlay opacity-20 bg-[url('https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Lagori Foundation</h1>
              <p className="text-lg md:text-xl max-w-3xl mx-auto">Dedicated to empowering women through support, education, and community.</p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-lagori-200 rounded-full opacity-60"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                    alt="Mrs. Sunanda Rajesh Lagori" 
                    className="rounded-2xl w-full h-auto relative z-10 shadow-xl"
                  />
                </div>
              </div>
              <div className="stagger-animate">
                <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                  About the Founder
                </span>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Mrs. Sunanda Rajesh Lagori
                </h2>
                <p className="text-gray-600 mb-6">
                  Mrs. Sunanda Rajesh Lagori, a passionate advocate for women's rights, founded the Lagori Foundation in 2019. With a background in social work and a deep understanding of the challenges faced by women in society, she has dedicated her life to creating meaningful change.
                </p>
                <p className="text-gray-600 mb-6">
                  Under her leadership, the foundation has grown from a small community initiative to a recognized NGO that has positively impacted the lives of over 10,000 women through various programs and services.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Heart className="text-lagori-600 mr-3" size={20} />
                    <span className="text-gray-700">Founder & President, Lagori Foundation</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-lagori-600 mr-3" size={20} />
                    <span className="text-gray-700">Recipient of numerous awards for social service</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-lagori-600 mr-3" size={20} />
                    <span className="text-gray-700">Four years of dedicated service to women's empowerment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-lagori-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                Our Mission & Vision
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                What Drives Us Forward
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-gray-600">
                  To empower women through education, support, and community building, enabling them to achieve financial independence, social equality, and personal fulfillment.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-gray-600">
                  A world where every woman has equal opportunities, is free from discrimination and violence, and can fulfill her potential as a valued member of society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                Our Core Values
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Principles That Guide Us
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Empathy & Compassion",
                  description: "We approach every situation with understanding and care, recognizing the unique challenges faced by each woman."
                },
                {
                  title: "Integrity & Transparency",
                  description: "We operate with honesty and openness, ensuring accountability in all our actions and decisions."
                },
                {
                  title: "Inclusivity & Respect",
                  description: "We value diversity and treat everyone with dignity, regardless of their background or circumstances."
                },
                {
                  title: "Innovation & Adaptability",
                  description: "We continuously seek new and effective ways to address the evolving needs of the women we serve."
                },
                {
                  title: "Collaboration & Partnership",
                  description: "We believe in the power of working together with communities, organizations, and individuals to create lasting change."
                },
                {
                  title: "Empowerment & Independence",
                  description: "We focus on building capabilities and confidence, enabling women to take control of their own futures."
                }
              ].map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover-lift">
                  <h3 className="font-playfair text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Timeline Section */}
        <section className="py-16 bg-lagori-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                Our Journey
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Four Years of Growth & Impact
              </h2>
            </div>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lagori-300"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {[
                  {
                    year: "2019",
                    title: "Foundation Established",
                    description: "Mrs. Sunanda Lagori established the Lagori Foundation with a small team of dedicated volunteers."
                  },
                  {
                    year: "2020",
                    title: "First Major Initiative",
                    description: "Launched the first legal assistance program, helping over 100 women with legal counsel and support."
                  },
                  {
                    year: "2021",
                    title: "Expanding Services",
                    description: "Added vocational training programs in tailoring, cooking, and other skills to help women become financially independent."
                  },
                  {
                    year: "2022",
                    title: "Community Growth",
                    description: "Membership grew to over 500 active participants, with programs reaching more than 5,000 women."
                  },
                  {
                    year: "2023",
                    title: "National Recognition",
                    description: "Received multiple awards for outstanding contribution to women's empowerment and community service."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'order-last pl-8'}`}>
                      <div className="p-6 bg-white rounded-xl shadow-lg hover-lift">
                        <div className="font-bold text-lagori-600 text-xl mb-2">{item.year}</div>
                        <h3 className="font-playfair text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-lagori-500 border-4 border-white shadow"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                Our Team
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Dedicated to Making a Difference
              </h2>
              <p className="text-gray-600">
                Meet the passionate individuals who work tirelessly to bring positive change in the lives of women.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sunanda Lagori",
                  position: "Founder & President",
                  image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                },
                {
                  name: "Anjali Sharma",
                  position: "Program Director",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                },
                {
                  name: "Priya Patel",
                  position: "Legal Advisor",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                },
                {
                  name: "Meera Desai",
                  position: "Skill Development Coordinator",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
                },
                {
                  name: "Rajesh Kumar",
                  position: "Outreach Coordinator",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                },
                {
                  name: "Neha Verma",
                  position: "Community Engagement Specialist",
                  image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-lift">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl font-bold mb-1 text-gray-800">{member.name}</h3>
                    <p className="text-lagori-600">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;
