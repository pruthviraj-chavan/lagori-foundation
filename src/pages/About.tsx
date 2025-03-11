
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Award, Heart, Users, Calendar, Trophy } from "lucide-react";
import { PageTransition } from "../components/Transitions";

const About = () => {
  const founderRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Intersection Observer setup for animation triggers
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const sections = [founderRef.current, missionRef.current, timelineRef.current];
    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <PageTransition>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-lagori-600 text-white py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium mb-6 animate-fade-in">
              About Us
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in animate-delay-100">
              Our Story & Mission
            </h1>
            <p className="text-lg max-w-3xl mx-auto animate-fade-in animate-delay-200">
              Discover the journey, vision, and impact of Lagori Foundation in empowering women and transforming communities.
            </p>
          </div>
        </section>

        {/* Founder Section */}
        <section className="section-container">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div 
              ref={founderRef} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-0"
            >
              <div>
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-lagori-300 rounded-full opacity-20"></div>
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
                <p className="text-gray-600 mb-4">
                  As the Founder President of Lagori Foundation in Kolhapur, Mrs. Sunanda Rajesh Lagori has dedicated her life to uplifting women and creating positive change in her community.
                </p>
                <p className="text-gray-600 mb-6">
                  With a background in social work and a passion for women's empowerment, she has been the driving force behind numerous initiatives that have transformed the lives of thousands of women over the past four years.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Award className="text-lagori-600 mr-3" />
                    <span className="text-gray-800">Multiple Awards Recipient</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-lagori-600 mr-3" />
                    <span className="text-gray-800">500+ Active Members</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="text-lagori-600 mr-3" />
                    <span className="text-gray-800">10,000+ Women Helped</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-lagori-600 mr-3" />
                    <span className="text-gray-800">4+ Years of Service</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium mb-2">Contact Details:</p>
                  <p className="text-gray-600">Email: sunanda@lagorifoundation.org</p>
                  <p className="text-gray-600">Phone: +91 8668545201</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="section-container bg-lagori-50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                Our Purpose
              </span>
              <h2 className="section-title">Mission & Vision</h2>
              <p className="section-subtitle">
                Guiding principles that drive our work and shape our impact in the community.
              </p>
            </div>

            <div 
              ref={missionRef} 
              className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0"
            >
              <div className="glass-card bg-white p-8">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-lagori-700">Our Mission</h3>
                <p className="text-gray-600 mb-6">
                  To empower women through education, support systems, and skill development, enabling them to achieve economic independence and social equality. We strive to create safe spaces for women to heal, grow, and thrive in their communities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-lagori-100 p-1 rounded-full mr-3 mt-1">
                      <Heart size={16} className="text-lagori-600" />
                    </div>
                    <span className="text-gray-700">Provide legal and emotional support to women facing injustice</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-lagori-100 p-1 rounded-full mr-3 mt-1">
                      <Heart size={16} className="text-lagori-600" />
                    </div>
                    <span className="text-gray-700">Develop skills that lead to financial independence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-lagori-100 p-1 rounded-full mr-3 mt-1">
                      <Heart size={16} className="text-lagori-600" />
                    </div>
                    <span className="text-gray-700">Build confidence and self-reliance in vulnerable women</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card bg-white p-8">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-lagori-700">Our Vision</h3>
                <p className="text-gray-600 mb-6">
                  A society where every woman is empowered, respected, and has equal opportunities to reach her full potential. We envision communities where women are leaders, decision-makers, and catalysts for positive change.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-lagori-100 p-1 rounded-full mr-3 mt-1">
                      <Heart size={16} className="text-lagori-600" />
                    </div>
                    <span className="text-gray-700">Create a world where gender equality is the norm</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-lagori-100 p-1 rounded-full mr-3 mt-1">
                      <Heart size={16} className="text-lagori-600" />
                    </div>
                    <span className="text-gray-700">Establish networks of women supporting women</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-lagori-100 p-1 rounded-full mr-3 mt-1">
                      <Heart size={16} className="text-lagori-600" />
                    </div>
                    <span className="text-gray-700">Eliminate barriers to women's advancement in society</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Timeline Section */}
        <section className="section-container">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                Our Journey
              </span>
              <h2 className="section-title">Four Years of Growth</h2>
              <p className="section-subtitle">
                From humble beginnings to impactful presence, explore the milestones in our journey.
              </p>
            </div>

            <div 
              ref={timelineRef} 
              className="relative opacity-0"
            >
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-lagori-200"></div>

              {/* Year 1 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1">
                    <div className="mb-4 p-6 card hover-lift">
                      <h3 className="font-playfair text-2xl font-bold mb-2 text-gray-800">Foundation Established</h3>
                      <p className="text-gray-600">
                        Lagori Foundation was established with a mission to support women facing social injustice and domestic violence.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-lagori-600 text-white flex items-center justify-center relative z-10">
                      <Trophy size={20} />
                    </div>
                  </div>
                  <div className="flex-1 md:pl-12 order-3">
                    <div className="text-lagori-600 font-playfair text-2xl font-bold">2019</div>
                  </div>
                </div>
              </div>

              {/* Year 2 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 order-2 md:order-1">
                    <div className="text-lagori-600 font-playfair text-2xl font-bold md:text-right">2020</div>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-lagori-600 text-white flex items-center justify-center relative z-10">
                      <Trophy size={20} />
                    </div>
                  </div>
                  <div className="flex-1 md:pl-12 order-3">
                    <div className="mb-4 p-6 card hover-lift">
                      <h3 className="font-playfair text-2xl font-bold mb-2 text-gray-800">Expanding Services</h3>
                      <p className="text-gray-600">
                        Introduced skill development programs and expanded legal assistance services, helping over 1,000 women.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Year 3 */}
              <div className="relative mb-16">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 md:text-right order-2 md:order-1">
                    <div className="mb-4 p-6 card hover-lift">
                      <h3 className="font-playfair text-2xl font-bold mb-2 text-gray-800">Growing Community</h3>
                      <p className="text-gray-600">
                        Membership grew to 300+ active members, and the foundation began disaster relief work following floods in Kolhapur.
                      </p>
                    </div>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-lagori-600 text-white flex items-center justify-center relative z-10">
                      <Trophy size={20} />
                    </div>
                  </div>
                  <div className="flex-1 md:pl-12 order-3">
                    <div className="text-lagori-600 font-playfair text-2xl font-bold">2021</div>
                  </div>
                </div>
              </div>

              {/* Year 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-12 order-2 md:order-1">
                    <div className="text-lagori-600 font-playfair text-2xl font-bold md:text-right">2022-23</div>
                  </div>
                  <div className="order-1 md:order-2 mb-4 md:mb-0">
                    <div className="w-12 h-12 rounded-full bg-lagori-600 text-white flex items-center justify-center relative z-10">
                      <Trophy size={20} />
                    </div>
                  </div>
                  <div className="flex-1 md:pl-12 order-3">
                    <div className="mb-4 p-6 card hover-lift">
                      <h3 className="font-playfair text-2xl font-bold mb-2 text-gray-800">Major Milestones</h3>
                      <p className="text-gray-600">
                        Reached 500+ members and helped over 10,000 women. Recognized with multiple awards for community service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-lagori-600 to-lagori-700 text-white">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Be Part of Our Story
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto animate-fade-in animate-delay-100">
              Join us in our mission to empower women and transform communities. Your support makes a meaningful difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-200">
              <Link to="/contact" className="btn-primary bg-white text-lagori-700 hover:bg-gray-100">
                Join Our Team
              </Link>
              <Link to="/activities" className="btn-secondary text-white border-white hover:bg-white/10">
                Explore Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default About;
