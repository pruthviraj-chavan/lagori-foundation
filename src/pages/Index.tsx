
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Scale, 
  UserPlus, 
  Briefcase, 
  GraduationCap, 
  HeartHandshake, 
  Droplet, 
  ArrowRight,
  Play,
  Users
} from "lucide-react";
import { PageTransition } from "../components/Transitions";
import ServiceCard from "../components/ServiceCard";
import ActivityCard from "../components/ActivityCard";
import TeamCard from "../components/TeamCard";
import YouTubeVideo from "../components/YouTubeVideo";

const Index = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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

    const sections = [statsRef.current, servicesRef.current, storiesRef.current, activitiesRef.current, videosRef.current, teamRef.current];
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
      <div className="overflow-hidden">
        {/* Hero Section with improved layout */}
        <section className="relative pt-20 pb-16 flex items-center bg-gradient-to-r from-lagori-900/90 to-lagori-700/80">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
              alt="Women Empowerment" 
              className="w-full h-full object-cover"
            />
            {/* Darker gradient overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-lagori-900/80 z-10"></div>
          </div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-white stagger-animate">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-lagori-200 font-medium mb-6">
                  महिला सशक्तीकरण
                </span>
                <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  महिलांना सक्षम बनवणे,<br /> जगण्याची नवी उमेद देणे
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl">
                  "महिला सशक्तीकरण हा केवळ योग्य मार्ग नाही, तर तो हुशारीचा मार्ग आहे. जेव्हा महिला यशस्वी होतात, तेव्हा संपूर्ण समाज समृद्ध होतो."
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://donate.stripe.com/test" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary"
                  >
                    Donate Now
                  </a>
                  <Link to="/about" className="btn-secondary bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-lagori-400/30 backdrop-blur-xl animate-float"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-lagori-300/30 backdrop-blur-xl animate-float"></div>
                <div className="glass-card p-6 animate-fade-in">
                  <img 
                    src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80" 
                    alt="Mrs. Sunanda Lagori" 
                    className="w-full h-auto rounded-xl mb-4"
                  />
                  <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                    Mrs. शुभांगी साखरे
                  </h3>
                  <p className="text-gray-200 mb-4">
                    संस्थापक आणि अध्यक्षा, लगोरी फाउंडेशन, कोल्हापूर
                  </p>
                  <Link to="/about" className="text-lagori-200 font-medium hover:text-white flex items-center">
                    'ती' चा प्रवास <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section-container bg-section-pattern">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                लगोरी फाउंडेशन बद्दल
              </span>
              <h2 className="section-title">तुमची साथ, एक मदतीचा हात</h2>
              <p className="section-subtitle">
                गेल्या सात वर्षांपासून, लागोरी फाउंडेशन महिलांना शिक्षण, मदत, आणि समुदाय उभारणीद्वारे सक्षम करण्यासाठी कार्यरत आहे.
              </p>
            </div>

            {/* Stats Section */}
            <div 
              ref={statsRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 opacity-0"
            >
              <div className="text-center p-6 bg-pink-gradient text-white rounded-2xl shadow-md">
                <div className="font-bold text-4xl mb-2">500+</div>
                <p>सक्रिय सदस्य</p>
              </div>
              <div className="text-center p-6 bg-purple-gradient text-white rounded-2xl shadow-md">
                <div className="font-bold text-4xl mb-2">7</div>
                <p>वर्षांची अविरत सेवा</p>
              </div>
              <div className="text-center p-6 bg-orange-gradient text-white rounded-2xl shadow-md">
                <div className="font-bold text-4xl mb-2">10,000+</div>
                <p>महिलांना मदत</p>
              </div>
              <div className="text-center p-6 bg-green-gradient text-white rounded-2xl shadow-md">
                <div className="font-bold text-4xl mb-2">10-15</div>
                <p>वैवाहिक जीवन पूर्ववत</p>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - Updated with YouTube Videos */}
        <section className="section-container bg-purple-gradient py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white font-medium mb-4">
                Featured Videos
              </span>
              <h2 className="section-title text-white">Our Impact in Action</h2>
              <p className="section-subtitle text-white/80">
                Watch these inspiring stories and see how Lagori Foundation is making a difference in women's lives.
              </p>
            </div>

            <div 
              ref={videosRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
            >
              <YouTubeVideo 
                videoId="ZrNUXQCxeLw"
                title="Women Empowerment Workshop"
                description="Learn how our workshops help women build confidence and skills."
                duration="4:32"
              />
              <YouTubeVideo 
                videoId="3m49c2WxOlY"
                title="Skill Development Program"
                description="Watch how we train women in various skills to gain financial independence."
                duration="6:15"
              />
              <YouTubeVideo 
                videoId="iXu2F9GPrXY"
                title="Success Stories"
                description="Listen to the inspiring stories of women who transformed their lives."
                duration="8:47"
              />
            </div>

            <div className="text-center mt-12">
              <a 
                href="https://www.youtube.com/channel/UCXgGY0wkgOzynnHvSEVmE3A" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary bg-white text-lagori-700 hover:bg-gray-100 inline-flex items-center"
              >
                View All Videos <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-container py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                Key Services & Initiatives
              </span>
              <h2 className="section-title">How We Make a Difference</h2>
              <p className="section-subtitle">
                Our comprehensive programs address various aspects of women's empowerment, from legal assistance to skill development.
              </p>
            </div>

            <div 
              ref={servicesRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
            >
              <ServiceCard 
                icon={<Scale size={32} />}
                title="Free Legal Assistance"
                description="Providing legal counsel and support to women facing injustice, ensuring their rights are protected and voices heard."
              />
              <ServiceCard 
                icon={<UserPlus size={32} />}
                title="Self-Reliance Programs"
                description="Building confidence and independence through workshops, mentorship, and emotional support systems."
              />
              <ServiceCard 
                icon={<GraduationCap size={32} />}
                title="Skill Development"
                description="Offering training in tailoring, cooking, two-wheeler driving, cake-making, and more to enhance employment opportunities."
              />
              <ServiceCard 
                icon={<Briefcase size={32} />}
                title="Business Support"
                description="Providing sewing machines, financial aid, and mentorship for underprivileged women to start their own businesses."
              />
              <ServiceCard 
                icon={<HeartHandshake size={32} />}
                title="Community Support"
                description="Distributing food, clothes, and essentials to disabled children and elderly people in need."
              />
              <ServiceCard 
                icon={<Droplet size={32} />}
                title="Disaster Relief Work"
                description="Responding to natural disasters by providing immediate relief and long-term rehabilitation support."
              />
            </div>
            
            <div className="text-center mt-12">
              <Link to="/about" className="btn-primary inline-flex items-center">
                Learn More About Our Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section - New Addition */}
        <section className="section-container bg-section-pattern py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                <Users size={16} className="inline mr-2" />
                Our Team
              </span>
              <h2 className="section-title">Meet The People Behind Lagori Foundation</h2>
              <p className="section-subtitle">
                Our dedicated team works tirelessly to uplift women and create a positive impact in the community.
              </p>
            </div>

            <div 
              ref={teamRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0"
            >
              <TeamCard 
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                name="Sunanda Lagori"
                role="Founder & President"
                bio="With over 15 years of experience in social work, Sunanda has dedicated her life to empowering women in underserved communities."
              />
              <TeamCard 
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
                name="Reema Patel"
                role="Legal Advisor"
                bio="A practicing lawyer with expertise in women's rights and family law, providing crucial legal support to women in need."
              />
              <TeamCard 
                image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                name="Priya Sharma"
                role="Program Director"
                bio="Coordinating various empowerment programs and ensuring effective implementation of all initiatives across communities."
              />
              <TeamCard 
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                name="Anjali Deshmukh"
                role="Community Outreach"
                bio="Passionate about community work, Anjali leads outreach efforts to identify and assist women who need support."
              />
            </div>

            <div className="text-center mt-12">
              <Link to="/about" className="btn-primary inline-flex items-center">
                Meet Our Whole Team <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Women's Power Section */}
        <section className="section-container bg-blue-gradient py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-lagori-800 font-medium mb-4">
                Women's Power
              </span>
              <h2 className="section-title text-gray-800">Inspiring Stories of Transformation</h2>
              <p className="section-subtitle text-gray-700">
                Meet the women who have transformed their lives with the help of Lagori Foundation.
              </p>
            </div>

            <div 
              ref={storiesRef} 
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center opacity-0"
            >
              <div>
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-lagori-300 rounded-full opacity-20"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1621346878414-47c854e8954c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                    alt="Success Story" 
                    className="rounded-2xl w-full h-auto relative z-10 shadow-xl"
                  />
                </div>
              </div>
              <div className="stagger-animate bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                  Success Story
                </span>
                <h3 className="font-playfair text-3xl font-bold mb-6 text-gray-800">
                  "Lagori Foundation gave me the strength to rebuild my life"
                </h3>
                <p className="text-gray-600 mb-6">
                  After facing domestic violence for years, I was left without hope and resources. The Lagori Foundation provided me with legal assistance, emotional support, and skill training that helped me start my own tailoring business. Today, I am financially independent and inspiring other women in my community.
                </p>
                <p className="text-gray-800 font-medium mb-8">
                  - Priya, Entrepreneur & Mentor
                </p>
                <Link to="/about" className="btn-primary inline-flex items-center">
                  More Stories <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Activities Section */}
        <section className="section-container py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                Latest Activities
              </span>
              <h2 className="section-title">Recent Events & Initiatives</h2>
              <p className="section-subtitle">
                Explore our recent activities, workshops, and community events making a difference.
              </p>
            </div>

            <div 
              ref={activitiesRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
            >
              <ActivityCard 
                image="https://images.unsplash.com/photo-1607748851687-ba9a10438621?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                title="Tailoring Workshop for Rural Women"
                date="June 15, 2023"
                description="A skill development workshop teaching tailoring skills to women from rural communities, providing them with a pathway to financial independence."
              />
              <ActivityCard 
                image="https://images.unsplash.com/photo-1529333166437-7feb33f752ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1969&q=80"
                title="Sankranti Haldi-Kunku Celebration"
                date="January 14, 2023"
                description="A cultural celebration bringing together women from different communities to celebrate the festival of Sankranti with traditional Haldi-Kunku ceremony."
              />
              <ActivityCard 
                image="https://images.unsplash.com/photo-1618377385526-83108e223cf6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                title="Legal Awareness Camp"
                date="March 8, 2023"
                description="An educational workshop on International Women's Day, informing women about their legal rights and available resources for addressing domestic violence."
              />
            </div>

            <div className="text-center mt-12">
              <Link to="/activities" className="btn-primary inline-flex items-center">
                View All Activities <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-pink-gradient text-white">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Join Us in Making a Difference
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto animate-fade-in animate-delay-100">
              Your support can help transform the lives of countless women. Together, we can create a more equitable and empowered future.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-200">
              <a 
                href="https://donate.stripe.com/test" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary bg-white text-lagori-700 hover:bg-gray-100"
              >
                Donate Now
              </a>
              <Link to="/contact" className="btn-secondary text-white border-white hover:bg-white/10">
                Get Involved
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
