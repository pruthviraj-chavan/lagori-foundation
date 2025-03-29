import { useState, useEffect } from "react";
import { PageTransition } from "../components/Transitions";
import ActivityCard from "../components/ActivityCard";

// Sample activity data
const activitiesData = [
  {
    id: 1,
    title: "वार्षिक स्नेहसंमेलन २०२४ जल्लोषात साजरे!",
    date: "2024-01-06",
    description: "लगोरी फाउंडेशन आयोजित वार्षिक संमेलन 2024 अतिशय उत्साहात धुमधडाक्यात आयोजित करण्यात आली. यावेळी प्रमुख पाहुणे माननीय उदयानी साळुंखे (संचालक कोल्हापूर मध्यवर्ती बँक ) लाभल्या.सौ संध्या घोटणे, वैशालीताई महाडिक, मंगल ताई खुडे,स्मिता खामकर, स्मिता गिरी,उज्ज्वला पटेल,राधिका खडके, पूजा आरडे, सविता रायकर यांच्या उपस्थिती मध्ये हा कार्यक्रम पार पडला.",
    image: "https://scontent.fblr20-1.fna.fbcdn.net/v/t39.30808-6/472425465_8841973732539133_7434182902718126087_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-nDQ0njCsMIQ7kNvgENT27p&_nc_oc=AdlmRCE9Yuo4KZtHONOuEjuZ25lLZsm_zvc2NpnUlRM3Ece2y7dfoqnwm-C1WC2rcxBONyRBAMs3Bgq30ebGPJtk&_nc_zt=23&_nc_ht=scontent.fblr20-1.fna&_nc_gid=7ZSxjIGjAEfmO3xMr_2Ukg&oh=00_AYHMg-knXFwDuS0nGu2lt7mvhayi9S3MJCPEOj-MJxwnzQ&oe=67EE37AC",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid03qTgCq5rxGRq4L2XHRa49kR2mvUWFfwmtsGapVzpzYH5NJqAsHb1sF5J3AULTJY7l"
  },
  {
    id: 2,
    title: "संक्रांतीचा हळदी-कुंकू सोहळा – स्त्री शक्तीचा उत्सव",
    date: "2025-01-24",
    description: "लगोरी फाउंडेशनच्या वतीने यंदाही मकर संक्रांतीचा हळदी-कुंकू सोहळा मोठ्या उत्साहात आणि पारंपरिक पद्धतीने साजरा करण्यात आला. या कार्यक्रमात महिलांनी संक्रांतीचे विशेष औक्षण, सुवासिनी पूजन आणि तिळगूळ वाटप करून एकमेकींना तिळगूळ घ्या, गोड गोड बोला असा स्नेहाचा संदेश दिला.",
    image: "https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/474938186_8936530623083443_1136913187730060467_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=g2_VB-oF7F8Q7kNvgEYYXit&_nc_oc=AdkOc8i7549Zj9J_qyFfBhbJaapEDfufec2LBXnBO3qjD9LRZgJpHXKtv18SQdx89EWbfht_lDS30aERISbKgePd&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=s2fNWSTDh73-uZOhc5w82g&oh=00_AYH8bB8XDhyH3KNZo3JZVDAmX8n0xmr1hIY9riIxZUq_xw&oe=67EE1520",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0s9USZ4Z9AhB6MwAEKvsvXpGpp47X2YJXShJmhftKoLRA2e9tzhjTq4pTarqaSikcl"
  },
  {
    id: 3,
    title: "शारदीय नवरात्र उत्सवानिमित्त महारॅली चे आयोजन. लगोरी फाउंडेशन चा सहभाग",
    date: "2023-24-10",
    description: "शारदीय नवरात्र उत्सवानिमित्त महारॅलीचे आयोजन करण्यात आले, ज्यामध्ये लगोरी फाउंडेशनने उत्स्फूर्त सहभाग घेतला. या महारॅलीच्या माध्यमातून महिलांच्या सशक्तीकरणाचा संदेश देण्यात आला आणि समाजात एकात्मतेची भावना वृद्धिंगत करण्याचा प्रयत्न करण्यात आला.",
    image: "https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/462883143_8352776588125519_4756712244573059595_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=TNm3rZQWER4Q7kNvgEKobyS&_nc_oc=AdkmzhvdWPRczWhmnA-xMpXIj_Qicmt2z1n-dBxTtRbNy8HL2hVQohPD6AydGxFn7xyX_0TgA0gbJeSaoEqdpqmX&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=Sk7p3JTUCanol0MemtMm9w&oh=00_AYFvFi7Bd38Eug0FsyR9CNXjeuLSBmefdyX-2I4myChkLg&oe=67EE29FC",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid029c5ZeahA3iWcpzVkCsjkriaFoN299vUUnKKtepE8xCYkFsLjizi9ydvcZjkDLTy8l"
  },
  {
    id: 4,
    title: "कोल्हापुरातील महिलांचा एल्गार!",
    date: "2024-08-24",
    description: "कोल्हापुरातील स्त्री शक्ती एल्गार करत एकत्र येऊन स्त्री शक्तीला न्याय मागण्यासाठी, होणाऱ्या अन्यायासाठी संरक्षण मागण्यासाठी स्त्री शक्तीचा कायदा कडक करून स्त्रियांना न्याय मिळावा ज्या नराधमांनी वाईट कृत्य केलं त्यांना फाशीची शिक्षा व्हावी. किंवा त्यांना महिलांच्या हाती सोपवा व महिला त्याचा निर्णय घेतील या आशयाचं निवेदन कलेक्टर ऑफिस समोर घोषणाबाजी करून कलेक्टर साहेबांकडे देण्यात आलं यावेळी कोल्हापुरातील महिलांसाठी कार्यरत असणाऱ्या लगोरी फाउंडेशनच्या शुभांगी साखरे यांच्या सोबत अनेक महिला भगिनी उपस्थित होत्या.",
    image: "https://scontent.fblr20-4.fna.fbcdn.net/v/t39.30808-6/457045255_7986698728066642_395586655646034403_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jcOcijwa2mEQ7kNvgFWBkio&_nc_oc=Adkdg_S0cENqBxt4MJFFWPLC5DOIvGCvMo9M5TGJjfm0DlcyaVHrTb2xrLRhIuZEZT8Bbfp5NPDovV5AAGZxljTU&_nc_zt=23&_nc_ht=scontent.fblr20-4.fna&_nc_gid=bxknj-Ok4T_XCgUsDGSAIQ&oh=00_AYGJ828vuvYyMK9nDf87e6J0-gDq2JH4gUzyYRHL6xyUkw&oe=67EE24D3",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0357HU3PVBfcwC18xQJiE9mAW92dPCJpuUg2hUsRh9pDNjKzk54iX2BQjkrHG9aaqPl"
  },
  {
    id: 5,
    title: "लगोरी फाउंडेशन आयोजित श्रावण कुंकूमार्चन सोहळा",
    date: "2024-08-20",
    description: "संस्थापक अध्यक्ष शुभांगी साखरे यांच्या संकल्पनेतून मिरजकर तिकटी विठ्ठल मंदिर येथे अतिशय भक्ती पूर्ण वातावरणात संपन्न झाला. सौ मेघाताई भांबोरीकर यांनी श्री सूक्त पठण केले तर महिलांनी अतिशय सुंदर भजने म्हटली. कार्यक्रम अतिशय उत्स्फूर्त आणि चांगल्या रीतीने पार पाडण्यासाठी सुप्रिया कोरडे धनश्री जाधव गुंजन जाधव विराज कापसे यांचे सहकार्य लाभले.",
    image: "https://scontent.fblr20-1.fna.fbcdn.net/v/t39.30808-6/455859994_7940823609320821_5589129017939324552_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HldKVa6EV5EQ7kNvgF8Kb4d&_nc_oc=Adkiob8Gi5eDIAE_yUOrLlUjJggm_mlObQg7cF8WeoqDsT0EAWrgDqCe_qrFxAF_2BWj6lukhEl5cWZBlx3ScNfI&_nc_zt=23&_nc_ht=scontent.fblr20-1.fna&_nc_gid=rcpUaCkW_JpkCiolfkVCQQ&oh=00_AYGnUXwQufOudswKfcCIMHXtnjLGZIJY2EZsy4UfC4nEQg&oe=67EE2F9D",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02nEDVCUHeqSssLFCGdFBYUcGA9ix62Co9Z17V8em56oicpYJNVPbFBLQzQjqhPMAZl"
  },
  {
    id: 6,
    title: "लगोरी फाउंडेशनकडून पंचगंगा स्मशानभूमीत ५००० शेणी दान उपक्रम!",
    date: "2024-05-16",
    description: "लगोरी फाउंडेशनच्या संस्थापक अध्यक्ष शुभांगी साखरे यांच्या संकल्पनेतून आज १६ मे २०२४ रोजी पंचगंगा स्मशानभूमीत ५००० शेणी दान उपक्रम राबविण्यात आला. या उपक्रमामुळे समाजात एकता आणि मदतीचा हात देण्याचे एक महत्त्वाचे कार्य घडले आहे. लगोरी फाउंडेशनच्या अंतर्गत अशा प्रकारचे अनेक उपक्रम वेळोवेळी राबवले जातात.",
    image: "https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/441881171_7436085976461256_4758713055987682142_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=koTD6i8CdmYQ7kNvgGcthdh&_nc_oc=AdmKAC1bOQbjKF13rE1x4OhNgdZGkdr6Ebknhd3RcYC3kqNr3mfG3-p1TRKTmvVD0sfSSWFawGA8pMK0HhLkMH1F&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=_48FYMrL3Hx9qgRyVFySEQ&oh=00_AYGHh-jrLW4-tLgzrnKmnZhMo0ljSeduBA8NSZ61feejZg&oe=67EE0B41",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02AkG5dQ4adxhUUF3zLBgVbbCE96LZnFGHXswLY4GrV9hE5UvMiRZhAPZqzPtBYFMel"
  },
  {
    id: 7,
    title: "लगोरी बहुउद्देशीय संस्था व भालकर्स नृत्यम यांच्या संयुक्त विद्यमाने चोंण्डेश्वरी हॉलमध्ये उत्साही रासदांडिया कार्यक्रम संपन्न",
    date: "2019-10-07",
    description: "लगोरी बहुउद्देशिय संस्था आणि भालकर्स नृत्यम यांच्या संयुक्त विद्यमाने ५ ऑक्टोबर २०२४ रोजी चोंण्डेश्वरी हॉल, मंगळवार पेठ येथे रासदांडिया उत्साहात आणि उत्स्फुर्त प्रतिसादात आयोजित करण्यात आला. यावेळी ३ व ४ ऑक्टोबर रोजी नृत्य दिग्दर्शक संग्राम भालकर व त्यांची टीम यांनी दांडिया कार्यशाळेचं आयोजन केलं. या कार्यक्रमाला 'लागिरं झालं जी' फेम राहुल मगदुम (राहुल्या), सिनेकलाकार नम्रता साळोखे, आर जे सुमित, देवस्थान कमिटी अध्यक्षा सौ. वैशालीताई क्षीरसागर, प्रतिमा वेलफेअर च्या सौ. प्रतिमा ताई पाटील यांसह अनेक मान्यवर उपस्थित होते.",
    image: "https://scontent.fblr20-1.fna.fbcdn.net/v/t1.6435-9/71594749_131501241564477_2063957705302736896_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6RBWuMASgxUQ7kNvgE31gy-&_nc_oc=AdkchR9r8yfzUXitjsMkLsY5STX5GuW0r0a25TUujo6v_X2tBv05XdVhaJ8fJPJgfjkSaqyt5NPdKDOjs1bPASP5&_nc_zt=23&_nc_ht=scontent.fblr20-1.fna&_nc_gid=Vrd4INkLXeL8VgslapzKUw&oh=00_AYHZeXT69F3WyWk1DTOJDCTfBlT6HWfhMIDVmJ3I5Bh4SA&oe=680FDBF1",
    link: "https://www.facebook.com/permalink.php?story_fbid=pfbid0AzMFUmKfq9bob1ctwuE2PxCFnqWRWFA9JNCGz1UC9mQNAdS2W3qVo1G38xBybyBel&id=111149750266293"
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
