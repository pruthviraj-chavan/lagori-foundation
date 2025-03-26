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
              <p className="text-lg md:text-xl max-w-3xl mx-auto">समर्थन, शिक्षण आणि समुदायाद्वारे महिलांना सक्षम करण्यासाठी समर्पित.</p>
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
                    src="/DSC.JPG" 
                    alt="सौ. शुभांगी साखरे" 
                    className="rounded-2xl w-full h-auto relative z-10 shadow-xl"
                  />
                </div>
              </div>
              <div className="stagger-animate">
                <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                  संस्थापकाबद्दल
                </span>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  सौ. शुभांगी साखरे
                </h2>
                <p className="text-gray-600 mb-6">
                  सौ. शुभांगी साखरे, महिला हक्कांसाठी लढणाऱ्या एक ध्येयवेड्या कार्यकर्त्या, यांनी २०१९ मध्ये लगोरी फाउंडेशनची स्थापना केली. सामाजिक कार्याचा भक्कम अनुभव आणि समाजातील महिलांसमोर उभ्या राहणाऱ्या आव्हानांची सखोल जाण यांच्या जोरावर, त्यांनी महिलांच्या जीवनात सकारात्मक बदल घडवण्यासाठी आपले संपूर्ण जीवन समर्पित केले आहे.                </p>
                <p className="text-gray-600 mb-6">
                  त्यांच्या सुदृढ नेतृत्वाखाली, लगोरी फाउंडेशनने एका लहानशा उपक्रमातून एक सुप्रसिद्ध स्वयंसेवी संस्थेपर्यंतचा यशस्वी प्रवास केला आहे. आजपर्यंत १०,००० हून अधिक महिलांच्या जीवनावर सकारात्मक प्रभाव टाकणारे अनेक कार्यक्रम आणि सेवा फाउंडेशनच्या माध्यमातून राबवले गेले आहेत.

त्यांचे दृष्टीकोन, समर्पण आणि अथक परिश्रम यांमुळे अनेक महिलांना नवा आत्मविश्वास, स्वावलंबन आणि न्याय मिळण्याचा मार्ग खुला झाला आहे.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Heart className="text-lagori-600 mr-3" size={20} />
                    <span className="text-gray-700">संस्थापक आणि अध्यक्षा, लगोरी फाउंडेशन, कोल्हापूर</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="text-lagori-600 mr-3" size={20} />
                    <span className="text-gray-700">सामाजिक सेवेसाठी अनेक पुरस्कारांची प्राप्ती</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="text-lagori-600 mr-3" size={20} />
                    <span className="text-gray-700">महिलांच्या सशक्तीकरणासाठी ११ वर्षे समर्पित सेवा</span>
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
                आमची ध्येय आणि दृष्टिकोन
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                आम्हाला पुढे नेणारी प्रेरक शक्ती
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-800">आमचे ध्येय</h3>
                <p className="text-gray-600">
                  महिलांना शिक्षण, मदत, आणि समुदाय उभारणीद्वारे सक्षम करणे, ज्यामुळे त्यांना आर्थिक स्वावलंबन, सामाजिक समानता, आणि व्यक्तिगत समाधान मिळवता येईल.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-playfair text-2xl font-bold mb-4 text-gray-800">आमची दृष्टिकोन</h3>
                <p className="text-gray-600">
                  एक अशी दुनिया जिथे प्रत्येक महिलेला समान संधी उपलब्ध असतील, ती भेदभाव आणि हिंसापासून मुक्त असेल, आणि ती समाजातील एक मूल्यवान सदस्य म्हणून आपली क्षमता पूर्ण करू शकेल.
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
                आमची मुख्य मूल्ये
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                आम्हाला मार्गदर्शन करणारी तत्त्वे
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "सहानुभूती आणि करुणा",
                  description: "आम्ही प्रत्येक परिस्थितीला समजून घेऊन आणि काळजीपूर्वक हाताळतो, प्रत्येक महिलेसमोरील अद्वितीय आव्हाने ओळखतो."
                },
                {
                  title: "सचोटी आणि पारदर्शकता",
                  description: "आम्ही प्रामाणिकपणा आणि मोकळेपणाने काम करतो, आमच्या सर्व कृती आणि निर्णयांमध्ये जबाबदारी सुनिश्चित करतो."
                },
                {
                  title: "समावेशकता आणि आदर",
                  description: "आम्ही विविधतेला महत्त्व देतो आणि प्रत्येकाशी त्यांची पार्श्वभूमी किंवा परिस्थिती काहीही असो, सन्मानाने वागतो."
                },
                {
                  title: "नाविन्य आणि अनुकूलता",
                  description: "आम्ही ज्या महिलांची सेवा करतो त्यांच्या वाढत्या गरजा पूर्ण करण्यासाठी आम्ही सतत नवीन आणि प्रभावी मार्ग शोधत असतो."
                },
                {
                  title: "सहयोग आणि भागीदारी",
                  description: "कायमस्वरूपी बदल घडवून आणण्यासाठी समुदाय, संस्था आणि व्यक्तींसोबत एकत्र काम करण्याच्या शक्तीवर आमचा विश्वास आहे."
                },
                {
                  title: "सबलीकरण आणि स्वातंत्र्य",
                  description: "आम्ही क्षमता आणि आत्मविश्वास निर्माण करण्यावर लक्ष केंद्रित करतो, ज्यामुळे महिलांना त्यांच्या भविष्याचे नियंत्रण स्वतःकडे घेता येते."
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

        {/* Growth Timeline Section - IMPROVED FOR MOBILE */}
        <section className="py-16 bg-lagori-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 rounded-full bg-lagori-100 text-lagori-600 font-medium mb-4">
                आमचा प्रवास
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                सात वर्षांची वाढ आणि प्रभाव
              </h2>
            </div>
            
            {/* Timeline for desktop */}
            <div className="relative hidden md:block">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lagori-300"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">{[
                  {
                    year: "2019",
                    title: "संस्थेची स्थापना",
                    description: "सौ. शुभांगी साखरे यांनी समर्पित स्वयंसेवकांच्या लहान टीमसह लागोरी फाउंडेशनची स्थापना केली."
                  },
                  {
                    year: "2020",
                    title: "पहिला मोठा उपक्रम",
                    description: "कायदेशीर मदत कार्यक्रमाची सुरुवात केली, ज्यामुळे १०० हून अधिक महिलांना कायदेशीर सल्ला व मदत मिळाली."
                  },
                  {
                    year: "2021",
                    title: "सेवांचा विस्तार",
                    description: "महिलांना आर्थिक स्वावलंबी बनवण्यासाठी शिवणकाम, स्वयंपाक आणि इतर कौशल्य प्रशिक्षण कार्यक्रम सुरू करण्यात आले."
                  },
                  {
                    year: "2022",
                    title: "समुदायाचा विस्तार",
                    description: "सक्रिय सदस्यांची संख्या ५०० हून अधिक झाली आणि कार्यक्रमांमुळे ५,००० हून अधिक महिलांना लाभ मिळाला."
                  },
                  {
                    year: "2023",
                    title: "राष्ट्रीय मान्यता",
                    description: "महिलांच्या सशक्तीकरण आणि समाजसेवेतील उल्लेखनीय योगदानासाठी अनेक पुरस्कार प्राप्त झाले"
                  },
                  {
                    year: "2025",
                    title: "सातत्यपूर्ण वाढ",
                    description: "महिला सशक्तीकरणाच्या कार्यात सातत्यपूर्ण वाढ सुरू आहे, ज्यामध्ये दरवर्षी अधिक महिला सामील होत आहेत आणि कार्यक्रमांचा प्रभाव वाढत आहे."
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
            
            {/* Mobile Timeline - improved mobile layout */}
            <div className="md:hidden">
              <div className="relative border-l-2 border-lagori-300 ml-4 pl-8">{[
                  {
                    year: "2019",
                    title: "संस्थेची स्थापना",
                    description: "सौ. शुभांगी साखरे यांनी समर्पित स्वयंसेवकांच्या लहान टीमसह लागोरी फाउंडेशनची स्थापना केली."
                  },
                  {
                    year: "2020",
                    title: "पहिला मोठा उपक्रम",
                    description: "कायदेशीर मदत कार्यक्रमाची सुरुवात केली, ज्यामुळे १०० हून अधिक महिलांना कायदेशीर सल्ला व मदत मिळाली."
                  },
                  {
                    year: "2021",
                    title: "सेवांचा विस्तार",
                    description: "महिलांना आर्थिक स्वावलंबी बनवण्यासाठी शिवणकाम, स्वयंपाक आणि इतर कौशल्य प्रशिक्षण कार्यक्रम सुरू करण्यात आले."
                  },
                  {
                    year: "2022",
                    title: "समुदायाचा विस्तार",
                    description: "सक्रिय सदस्यांची संख्या ५०० हून अधिक झाली आणि कार्यक्रमांमुळे ५,००० हून अधिक महिलांना लाभ मिळाला."
                  },
                  {
                    year: "2023",
                    title: "राष्ट्रीय मान्यता",
                    description: "महिलांच्या सशक्तीकरण आणि समाजसेवेतील उल्लेखनीय योगदानासाठी अनेक पुरस्कार प्राप्त झाले"
                  },
                  {
                    year: "2025",
                    title: "सातत्यपूर्ण वाढ",
                    description: "महिला सशक्तीकरणाच्या कार्यात सातत्यपूर्ण वाढ सुरू आहे, ज्यामध्ये दरवर्षी अधिक महिला सामील होत आहेत आणि कार्यक्रमांचा प्रभाव वाढत आहे."
                  }
                ].map((item, index) => (
                  <div key={index} className="mb-8 relative">
                    <div className="absolute -left-12 mt-1.5 w-6 h-6 rounded-full bg-lagori-500 border-2 border-white shadow"></div>
                    <div className="bg-white p-5 rounded-lg shadow-md">
                      <div className="font-bold text-lagori-600 text-xl mb-2">{item.year}</div>
                      <h3 className="font-playfair text-xl font-bold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
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
                आमची कार्यकारिणी
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                परिवर्तन घडवण्यास समर्पित
              </h2>
              <p className="text-gray-600">
                त्या उत्साही व्यक्तींना भेटा, जे महिलांच्या जीवनात सकारात्मक बदल घडवण्यासाठी अथक परिश्रम करत आहेत
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "शुभांगी साखरे",
                  position: "संस्थापक आणि अध्यक्षा",
                  image: "https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                },
                {
                  
                  name: " निकिता कापसे",
                  position: "उपाध्यक्षा",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                },
                {
                  name: "ऐश्वर्या झांजगे",
                  position: "सचिव",
                  image: "/aish.jpg"
                },
                {
                  name: "ललिता साखरे",
                  position: "संचालक",
                  image: "/l1.jpg"
                },
                {
                  name: "कमल झांजगे",
                  position: "संचालक",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                },
                {
                  name: "शारदा कापसे",
                  position: "संचालक",
                  image: "https://drive.google.com/uc?export=view&id=1hgqbwLbphaNss0x0PBaNtb7_x8SgCNiK"
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
