
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
              src="https://drive.google.com/file/d/1hgqbwLbphaNss0x0PBaNtb7_x8SgCNiK/view?usp=drive_link" 
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
                    src="https://drive.google.com/file/d/1hgqbwLbphaNss0x0PBaNtb7_x8SgCNiK/view?usp=drive_link" 
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
                <div className="font-bold text-4xl mb-2">700+</div>
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
                महत्वाचे व्हिडिओ
              </span>
              <h2 className="section-title text-white">आमच्या कार्याचा प्रभाव अनुभवा</h2>
              <p className="section-subtitle text-white/80">
                महिलांना आत्मविश्वास आणि कौशल्ये मिळविण्यास मदत करणाऱ्या आमच्या कार्यशाळांबद्दल जाणून घ्या.
              </p>
            </div>

            <div 
              ref={videosRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
            >
              <YouTubeVideo 
                videoId="FSqslPRDl0s"
                title="महिला दिन विशेष"
                description="ती आणि तिचे विश्व उलगडण्याचा एक प्रयत्न !"
                duration="13:54"
              />
              <YouTubeVideo 
                videoId="94_kR46zHvk"
                title="स्वाभिमानी गृहउद्योग"
                description="ज्या महिलांनी नावे ठेवली त्यांच्यासाठीच सुरु केला महिला गृहउद्योग"
                duration="10:36"
              />
              <YouTubeVideo 
                videoId="hLnTLVjb91Q"
                title="लगोरी फाउंडेशनची यशोगाथा"
                description="लगोरी फाउंडेशनमुळे मला माझे जीवन पुन्हा उभारण्याची ताकद मिळाली..."
                duration="20:00"
              />
            </div>

            <div className="text-center mt-12">
              <a 
                href="https://www.youtube.com/@shubhangisakhare4679/featured" // youtubechannel link will be here
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary bg-white text-lagori-700 hover:bg-gray-100 inline-flex items-center"
              >
                सर्व व्हिडिओ पहा <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-container py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                मुख्य सेवा आणि उपक्रम
              </span>
              <h2 className="section-title">आम्ही बदल कसा घडवतो</h2>
              <p className="section-subtitle">
                आमच्या सर्वसमावेशक कार्यक्रमांमध्ये महिला सशक्तीकरणाचे विविध पैलू समाविष्ट आहेत, ज्यामध्ये कायदेशीर मदत ते कौशल्य विकासापर्यंतची सेवा दिली जाते.
              </p>
            </div>

            <div 
              ref={servicesRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
            >
              <ServiceCard 
                icon={<Scale size={32} />}
                title="मोफत कायदेशीर मदत"
                description="अन्यायाला तोंड देणाऱ्या महिलांना कायदेशीर सल्ला व मदत प्रदान करणे."
              />
              <ServiceCard 
                icon={<UserPlus size={32} />}
                title="स्वावलंबन कार्यक्रम"
                description="कार्यशाळा, मार्गदर्शन आणि भावनिक आधाराद्वारे महिलांना आत्मनिर्भर बनवणे."
              />
              <ServiceCard 
                icon={<GraduationCap size={32} />}
                title="कौशल्य विकास"
                description="शिवणकाम, स्वयंपाक, दुचाकी चालवणे, केक बनवणे यासारख्या विविध कौशल्यांचे प्रशिक्षण."
              />
              <ServiceCard 
                icon={<Briefcase size={32} />}
                title="व्यवसाय सहाय्य"
                description="गरजू महिलांना शिलाई मशीन, आर्थिक मदत आणि मार्गदर्शन प्रदान करणे."
              />
              <ServiceCard 
                icon={<HeartHandshake size={32} />}
                title="समुदाय मदतकार्य"
                description="दिव्यांग मुले आणि वृद्धांसाठी अन्न, कपडे व आवश्यक साहित्याचे वाटप."
              />
              <ServiceCard 
                icon={<Droplet size={32} />}
                title="आपत्ती निवारण कार्य"
                description="नैसर्गिक आपत्तीमध्ये तत्काळ मदत व दीर्घकालीन पुनर्वसन समर्थन."
              />
            </div>
            
            <div className="text-center mt-12">
              <Link to="/about" className="btn-primary inline-flex items-center">
                आमच्या सेवांबद्दल अधिक जाणून घ्या <ArrowRight size={16} className="ml-2" />
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
                आमची कार्यकारिणी
              </span>
              <h2 className="section-title">लगोरी फाउंडेशनसाठी कार्य करणारी समर्पित कार्यकारिणी</h2>
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
                name="शुभांगी साखरे"
                role="संस्थापक आणि अध्यक्षा"
                bio=" १५+ वर्षांचा सामाजिक कार्याचा अनुभव, शुभांगीने आपल्या जीवनाचा काही भाग मागासलेल्या समुदायांतील महिलांना सक्षम करण्यासाठी समर्पित केला आहे."
              />
              <TeamCard 
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
                name="ऐश्वर्या झांजगे"
                role="उपाध्यक्षा"
                bio="सामाजिक क्षेत्रातील युवा नेतृत्व आणि परिवर्तनाची परंपरा पुढे नेणारी सशक्त नारी"
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
                 संपूर्ण कार्यकारिणी बघा <ArrowRight size={16} className="ml-2" />
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
                सर्व उपक्रम पाहा <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-pink-gradient text-white">
          <div className="container max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              आमच्यासोबत बदला घडवा!
            </h2>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto animate-fade-in animate-delay-100">
              तुमच्या पाठिंब्याने आपण हजारो महिलांचे जीवन बदलू शकतो. चला, एकत्र येऊन समताधिष्ठित आणि सक्षम भविष्य घडवूया...
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-200">
              <a 
                href="https://donate.stripe.com/test" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary bg-white text-lagori-700 hover:bg-gray-100"
              >
                देणगी द्या
              </a>
              <Link to="/contact" className="btn-secondary text-white border-white hover:bg-white/10">
                सहभागी व्हा ...
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Index;
