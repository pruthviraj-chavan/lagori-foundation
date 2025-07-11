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
import { activitiesData } from './Activities';

const Index = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const storiesRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const videosRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

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

  const recentActivities = activitiesData
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <PageTransition>
      <div className="overflow-hidden">
        <section className="relative pt-20 pb-16 flex items-center bg-gradient-to-r from-lagori-900/90 to-lagori-700/80">
          <div className="absolute inset-0 z-0">
            <img 
              src="/DSC.JPG" 
              alt="Women Empowerment" 
              className="w-full h-full object-cover"
              width="1200"
              height="800"
              loading="eager"
              fetchPriority="high"
            />
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
                    देणगी द्या
                  </a>
                  <Link to="/about" className="btn-secondary bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/20">
                    अधिक जाणून घ्या
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-lagori-400/30 backdrop-blur-xl animate-float"></div>
                <div className="absolute -bottom-5 -right-5 w-20 h-20 rounded-full bg-lagori-300/30 backdrop-blur-xl animate-float"></div>
                <div className="glass-card p-6 animate-fade-in">
                  <img 
                    src="/DSC.JPG" 
                    alt="Mrs. Shubhangi Sakhare" 
                    className="w-full h-auto rounded-xl mb-4"
                    width="400"
                    height="300"
                    loading="lazy"
                  />
                  <p className="font-playfair text-2xl font-bold text-black mb-2">
                    सौ. शुभांगी साखरे
                  </p>
                  <p className="text-black-200 mb-4">
                    संस्थापक आणि अध्यक्षा, लगोरी फाउंडेशन, कोल्हापूर
                  </p>
                  <Link 
                    to="/about" 
                    className="text-black font-medium hover:text-white flex items-center"
                    >
                  'ती' चा प्रवास <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-container bg-section-pattern">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                लगोरी फाउंडेशन बद्दल
              </span>
              <h2 className="section-title">तुमची साथ, एक मदतीचा हात</h2>
              <p className="section-subtitle">
                गेल्या सात वर्षांपासून, लगोरी फाउंडेशन महिलांना शिक्षण, मदत, आणि समुदाय उभारणीद्वारे सक्षम करण्यासाठी कार्यरत आहे.
              </p>
            </div>

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
                href="https://www.youtube.com/@shubhangisakhare4679/featured"
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary bg-white text-lagori-700 hover:bg-gray-100 inline-flex items-center"
              >
                सर्व व्हिडिओ पहा <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

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

        <section className="section-container bg-section-pattern py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                <Users size={16} className="inline mr-2" />
                आमची कार्यकारिणी
              </span>
              <h2 className="section-title">लगोरी फाउंडेशनसाठी कार्य करणारी समर्पित कार्यकारिणी</h2>
              <p className="section-subtitle">
                आमची समर्पित टीम महिलांना उन्नत करण्यासाठी आणि समाजात सकारात्मक प्रभाव निर्माण करण्यासाठी अथक परिश्रम करते.
              </p>
            </div>

            <div 
              ref={teamRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 opacity-0"
            >
              <TeamCard 
                image="/a1.jpeg"
                name="शुभांगी साखरे"
                role="संस्थापक आणि अध्यक्षा"
                bio=" १०+ वर्षांचा सामाजिक कार्याचा अनुभव, शुभांगीने आपल्या जीवनाचा काही भाग मागासलेल्या समुदायांतील महिलांना सक्षम करण्यासाठी समर्पित केला आहे."
              />
              <TeamCard 
                image="/n1.jpeg"
                name="निकिता कापसे"
                role="उपाध्यक्षा"
                bio="सामुदायिक कार्याबद्दल उत्साही असलेल्या निकिता मदतीची गरज असलेल्या महिलांची ओळख पटवण्यासाठी आणि त्यांना सहाय्य करण्यासाठी प्रयत्नांचे नेतृत्व करते."
              />
              <TeamCard 
                image="/aish.jpg"
                name="ऐश्वर्या झांजगे"
                role="सचिव"
                bio="सामाजिक क्षेत्रातील युवा नेतृत्व आणि परिवर्तनाची परंपरा पुढे नेणारी सशक्त नारी."
              />
              <TeamCard 
                image="/l1.jpg"
                name="ललिता साखरे"
                role="संचालक"
                bio="विविध सशक्तीकरण कार्यक्रमांचे समन्वय साधणे आणि समुदायांमध्ये सर्व उपक्रम प्रभावीपणे राबवण्याची खात्री करणे."
              />
            </div>

            <div className="text-center mt-12">
              <Link to="/about" className="btn-primary inline-flex items-center">
                 संपूर्ण कार्यकारिणी बघा <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

        <section className="section-container bg-blue-gradient py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-lagori-800 font-medium mb-4">
                Women's Power
              </span>
              <h2 className="section-title text-gray-800">परिवर्तनाच्या प्रेरणादायी कथा</h2>
              <p className="section-subtitle text-gray-700">
                लगोरी फाउंडेशनच्या मदतीने ज्यांनी आपले जीवन बदलले आहे अशा महिलांना भेटा.
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
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
                    alt="Success Story" 
                    className="rounded-2xl w-full h-auto relative z-10 shadow-xl"
                  />
                </div>
              </div>
              <div className="stagger-animate bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-lg">
                <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                  यशोगाथा
                </span>
{/*                 <h3 className="font-playfair text-3xl font-bold mb-6 text-black">
                  "लगोरी फाउंडेशनने मला माझे जीवन नव्याने उभारण्याची ताकद दिली."
                </h3> */}
                <p className="text-gray-600 mb-6">
                  वर्षानुवर्षे घरगुती हिंसाचार सहन केल्यानंतर, मी आशा आणि साधनांविना उरले होते. लगोरी फाउंडेशनने मला कायदेशीर मदत, भावनिक पाठबळ आणि कौशल्य प्रशिक्षण दिले, ज्यामुळे मी स्वतःचा शिवण व्यवसाय सुरू करू शकले. आज मी आर्थिकदृष्ट्या स्वतंत्र आहे आणि माझ्या समुदायातील इतर महिलांसाठी प्रेरणास्थान आहे.
                </p>
                <p className="text-gray-800 font-medium mb-8">
                  - Priya, Entrepreneur & Mentor
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-container py-20">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                Latest Activities
              </span>
              <h2 className="section-title">अलीकडील उपक्रम आणि घडामोडी</h2>
              <p className="section-subtitle">
                आमच्या अलीकडील उपक्रम, कार्यशाळा आणि समाजसेवा कार्यक्रमांविषयी जाणून घ्या, जे समाजात सकारात्मक बदल घडवत आहेत.
              </p>
            </div>

            <div 
              ref={activitiesRef} 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0"
            >
               {recentActivities.map(activity => (
                <ActivityCard 
                  key={activity.id}
                  image={activity.image}
                  title={activity.title}
                  date={activity.date}
                  description={activity.description}
                  link={activity.link}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/activities" className="btn-primary inline-flex items-center">
                सर्व उपक्रम पाहा <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </section>

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
              <Link to="/contact" className="btn-secondary text-lagori-700 border-white hover:bg-white/10">
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
