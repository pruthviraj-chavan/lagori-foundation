
import { PageTransition } from "../components/Transitions";
import { Award } from "lucide-react";

// Sample awards data
const awardsData = [
  {
    id: 1,
    title: "रणरागिनी पुरस्कार",
    date: "2023-09-24",
    presenter: " हील रायडर्स अडवेंचेर फाउंडेशन",
    description: "हील रायडर्स अडवेंचर फाउंडेशनने लगोरी फाउंडेशनला रणरागिनी पुरस्काराने सन्मानित करून, भवानी मंडप येथील ऐतिहासिक कमानीला तोरण बांधण्याच्या सोहळ्यात सहभागाची संधी दिली.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/487852774_122101258154821707_966822609445007318_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=GeR5qjxsjekQ7kNvwEOrjkt&_nc_oc=Adl2ZBrPl2OlH2B2XtIoBsDcaQzffL47ftGojPoWxTk293wd5YbjN9_K34ZtsrcQ4hrFj2xsjBXLWiSJ8_gyjbmU&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=1xmWn43gQqieEx29o4Qp8A&oh=00_AfF4ZmjEO1i3L1-_eATj_8KroxsDL-vW4kSUVe6cZpRlYg&oe=67F9FCF6"
  },
  {
    id: 2,
    title: "शाही दसरा शोभायात्रेतील उत्कृष्ट सहभाग पुरस्कार",
    date: "2023-10-23",
    presenter: "जिल्हाधिकारी कार्यालय महाराष्ट्र शासन पर्यटन विभाग",
    description: "शाही दसरा शोभायात्रेतील प्रांतीय वेशभूषेच्या थीम मध्ये उत्कृष्ट सहभाग दाखवून, नियोजनबद्ध आणि सुंदर प्रस्तुती करणाऱ्या लगोरी फाउंडेशन कोल्हापूरच्या सभासदांचा सन्मान.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/395646018_6636886959714499_5412929873604728551_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=fuwTC3Sy-ZAQ7kNvwGyBxXo&_nc_oc=AdmMCKZ0DQDgp6dlbKik5lcCE-yhBCMjYFj8IsBMvEsJMnvxZK-Sn5oFuxRoG-zMrlyLZslIPz1Y66Jmx3IOcLT4&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=lbKnH4xb1CDy5gjk314AYw&oh=00_AfEF9GW_VE8aKCVdXLCI1mEkivVRSqS8WDOkrFf64nkC1w&oe=67F9F36F"
  },
  {
    id: 3,
    title: "राज्य स्तरीय गौरव पुरस्कार महिला सक्षमिकरण पुरस्कार",
    date: "2022-06-22",
    presenter: "आम्ही कोल्हापूरी फौंडेशन",
    description: "महिला सशक्तीकरणासाठी उल्लेखनीय योगदान ",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/485147179_9245520482184454_443428015467753969_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KKljJa-vNSUQ7kNvwGV1y40&_nc_oc=Adk_-Lp5Yoe7UEx2UQVyBX5bzu1uLbUicjuBROrNdNSJRKyNJ_3Z72_F0uexVFkUOGH9DjQINxbpIqo5DrxIBdqc&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=sYOzU-bDmeuuB0e4UgIzeA&oh=00_AfFZ-Hha0NUjSMOQmhoNd2zY1dmKIGQlBD2CCA0gadMtSw&oe=67FA0FAD"
  },
  {
    id: 4,
    title: "सन्मान स्त्रीशक्ती पुरस्कार",
    date: "2021-03-015",
    presenter: "जायंट्स ग्रुप ऑफ कोल्हापूर पर्ल",
    description: "महिलांच्या सामर्थ्य आणि समाजातील योगदानाबद्दल दिला जातो, ज्याने त्यांना एक नवीन ऊर्जा आणि प्रेरणा दिली आहे.",
    image: "https://scontent.fblr1-10.fna.fbcdn.net/v/t1.6435-9/160683978_3702273463175878_2437741425696289663_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0zzhDkFxBxsQ7kNvgGkE2d7&_nc_oc=AdndqDbMwjev9MBKygXTiw-_ahfObS_lT_pRmURZDiAdnoTJZ63iBVSm26iZWjOzzPyVYFM_i4DiJH_4asyiuU6B&_nc_zt=23&_nc_ht=scontent.fblr1-10.fna&_nc_gid=gmqWAu198hAAtIY49xFxOA&oh=00_AYEUo_JHlg3K6qi6wKhnt5zuoYng9vHdFAd-UlwWYbVqEg&oe=68107D63"
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
  
 const sortedAwardsData = [...awardsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

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
                महिला सशक्तीकरणातील लगोरी फाउंडेशनच्या टप्पे आणि यशस्वी वाटचालाचा उत्सव!
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
                {sortedAwardsData.map((award, index) => {
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
                आमच्या प्रवासात सामील व्हा
              </h2>
              <p className="text-white/90 mb-8">
                आमच्या कार्याला मिळालेल्या मान्यतेबद्दल आम्ही मनःपूर्वक आभारी आहोत, पण आमच्यासाठी खरी पुरस्कार म्हणजे महिलांच्या जीवनात झालेला सकारात्मक बदल. आमच्या सोबत जोडून घ्या किंवा आमच्या उद्दिष्टाला पाठिंबा देऊन हा बदल घडविण्यास मदत करा.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="btn-primary bg-white text-purple-700 hover:bg-gray-100">
                  देणगी द्या
                </a>
                <a href="/contact" className="btn-secondary text-purple-700 border-white hover:bg-white/10">
                  सहभागी व्हा
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
