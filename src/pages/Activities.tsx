import { useState, useEffect } from "react";
import { PageTransition } from "../components/Transitions";
import ActivityCard from "../components/ActivityCard";

// Sample activity data - export is added
export const activitiesData = [
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
    date: "2023-10-24",
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
    title: "महिला दिनाच्या निमित्ताने लगोरी फाउंडेशनचे संवाद आणि कौतुक सोहळा",
    date: "2024-03-08",
    description: "८ मार्च महिला दिनाचे औचित्य साधून लगोरी फाउंडेशनच्या अध्यक्ष शुभांगी साखरे यांनी अरुण नरके फाउंडेशनच्या स्पर्धा परीक्षा मार्गदर्शकांसोबत संवाद साधला. या संवादात महिलांच्या सक्षमीकरणाबद्दल महत्त्वपूर्ण माहिती दिली गेली. तसेच, वन खात्यात पोस्ट निघालेल्या मुलीचा कौतुक सोहळा साजरा करण्यात आला. यावेळी महिलांच्या विविध कार्यक्षेत्रातील यशस्वी कामगिरीला मान्यता देण्यात आली, आणि महिला सशक्तीकरणाची महत्त्वाची चर्चा केली गेली.",
    image: "https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/431616825_7149635485106308_3298242842659419721_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=UlosTIeHaq8Q7kNvgGRsThC&_nc_oc=AdkydLa-7V4iAmk9JfS928zvDB71KxCoN6dbD8315Fix7i2qVMciisi2xN8J0pCM79n6dSfvGJhc-HBkJNElfM7z&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=vWrsOvrMrK-71yGPO6iQmA&oh=00_AYFkedcT1RMJdhVfk7at-uXwdbVXeonzKniT9vTQcpi-LQ&oe=67EE3422",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02fzjMYskjmjxpaeHZtBeppVJq5BHYHpR8seCW79usSFqsMuiAH91HEHUijfWCA5g4l"
  },
  {
    id: 9,
    title: "शिवजयंतीनिमित्त लगोरी फाउंडेशन कडून छत्रपती शिवाजी महाराज चौकात लेझीम रॅली व प्रात्यक्षिक",
    date: "2024-02-19",
    description: "लगोरी फाउंडेशन अंतर्गत काल छत्रपती शिवाजी महाराज चौक येथे लेझीम रॅली आयोजित करण्यात आली. छत्रपती शिवाजी महाराजांच्या पाळणा म्हणून लेझीम आणि लाठी काठीचा प्रात्यक्षिक सादर करण्यात आला. काही समर्पित महिलांच्या सहभागासह, शिवजयंती उत्सव अत्यंत उत्साहात आणि गौरवपूर्ण वातावरणात साजरा करण्यात आला.",
    image: "https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/429534360_7076217185781472_8609629475981785910_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jMze0SVH6u4Q7kNvgGhQ3fC&_nc_oc=AdkUQHe8aglBr8wn-OTBJBnt5LviY1c9VTGvYyuEXZIo4ihcA4wVmn-EiT-9SgtLOr78-c_g1yAjy8HzD07hQNpD&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=6_fq9AD1gNSk58reYM6_mw&oh=00_AYE0EHMOPIg2SWxvmNocLH5XYi_gQ36-EGdErOwuOxLyWQ&oe=67EE43CA",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid01MJYuJqMWKv1Dxa5fA8qnR69XHbsVewy61YGSamf51Zegm5qmFLaQ4syxycDCcz5l"
  },
  {
    id: 10,
    title: "लगोरी फाउंडेशनचा नॉनव्हेज स्टार्टर रेसिपी वर्कशॉप महिलांसाठी कौशल्य विकासाची नवी दिशा",
    date: "2023-03-08",
    description: "लगोरी फाउंडेशनच्या वतीने नॉनव्हेज स्टार्टर रेसिपी वर्कशॉप आयोजित करण्यात आला. संस्थापक अध्यक्षा शुभांगी साखरे यांच्या संकल्पनेतून धनश्री राजगिरे यांनी घरच्या घरी हायजेनिक आणि सोप्या पद्धतीने नॉनव्हेज पदार्थ तयार करण्याचे प्रशिक्षण दिले. महिलांचा सर्वांगीण विकास साधण्यासाठी, लगोरी फाउंडेशन अत्यंत कमी खर्चात हे वर्कशॉप उपलब्ध करत आहे.",
    image: "https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/329505917_768362881373011_9041832521734888537_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=z0a1sFPsU-UQ7kNvgECsyir&_nc_oc=AdlyzHEH1FyHkrnvlySE5F6TnodmoCjLqJipAmSJEJuMQZVRoqOVL5TqtwaHlqiuV9xg3yxMIo28TrLgsixC9J5T&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=ZSo4nXTbUvjuKXig7eEZQw&oh=00_AYGsyS4owWSKK_pySGq--Pzoikj5oio0HkiasGysOX1gVQ&oe=67EE479E",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid04aP1eUhHoZDnDyDrFkQX7M9iWUX4dNVVWM5oob1vTDE2z6761p6GTxodt1NfTcJQl"
  },
  {
    id: 11,
    title: "लगोरी फाउंडेशनचा संक्रांती हळदी कुंकू सोहळा उत्साहात साजरा",
    date: "2024-02-24",
    description: "लगोरी फाउंडेशन कोल्हापूरने संक्रांती हळदी कुंकू सोहळ्याचे आयोजन शुक्रवारी शिवाजी मंदिरात संस्थापक अध्यक्षा शुभांगी साखरे यांच्या संकल्पनेतून मोठ्या उत्साहात केला. मान्यवर म्हणून सौ. स्निग्धा चेतन नरके, रंजना पाटील, सविता रायकर, मंगल खुडे आणि कृष्णा चांडक उपस्थित होते. ",
    image: "https://scontent.fblr20-2.fna.fbcdn.net/v/t39.30808-6/425956725_7007765269293331_8329047326371269117_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=B_0E1ZUz75oQ7kNvgEIy3OZ&_nc_oc=AdmGlPWUsAJPugTcHvyg1Ws0mw2GQ-QYwoCdTyizbXg-FlTYklpiHW-LBsjr-1R8pvhEeiW-1qU_yO4O4eJ7VwU8&_nc_zt=23&_nc_ht=scontent.fblr20-2.fna&_nc_gid=6FBXNcqoZ6Q451-PBOkekA&oh=00_AYEmBitIN1mnJT5JbBc56xzx-2LrtEbTMnVq6uHziYM1AA&oe=67EE4407",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02o6ZYfuDkp7ntFaVNojk1ptR78S1Rfnxo5VeqBx45XQRgGvAiGQpbj8YLthyZqhTZl"
  },
  {
    id: 12,
    title: "राजमाता जिजाऊ जयंती निमित्त लगोरी फाउंडेशनने सुरुवात केली महिलांसाठी मोफत स्वरक्षण प्रशिक्षण",
    date: "2022-01-12",
    description: "स्वराज्य जननी राजमाता जिजाऊ जयंती दिनानिमित्त लगोरी फाउंडेशन, संस्कार शिदोरी मंच आणि शांतिदूत मर्दानी आखाड्याने संयुक्तपणे मोफत लाठीकाठी प्रशिक्षण, फोटो पूजन, शास्त्र पूजन आणि मर्दानी खेळाचे प्रात्यक्षिक आयोजित केले. हा कार्यक्रम संस्थापक शुभांगी साखरे, स्मिता खामकर, सूरज केसरकर सर, आणि अन्य कार्यकर्त्यांच्या संकल्पनेतून साजरा करण्यात आला.",
    image: "https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/480047991_9061820723887765_306280664490861300_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=93FmAc52FDEQ7kNvgFL18tw&_nc_oc=Adlaqrlae3rtp7jlYINAPoEdFAX6A8lWYP4-tZSQvsDn8R7e9ANiP0Af7XMaJC30biwprX8jLVmeLukGkiecAcT9&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=etel33PI7BGK1sdkcNv4Tg&oh=00_AYHuAsx_pfpuq4u3xR_WRdaiFEuWF-wA-XnDmr0A-TJOpg&oe=67EE2124",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02AxVWW6bLcgPdKTr8kQGtVuB6hW4EDyNMv4bo7TTZCiXryhnhZ5DugVn39bkmrJXgl"
  },
  {
    id: 13,
    title: "जिजाऊ जयंती निमित्त लगोरी फाउंडेशनचे राजमाता जिजामाता यांच्या पुतळ्याचे पूजन",
    date: "2024-01-12",
    description: "जिजाऊ जयंतीच्या औचित्याने, लगोरी फाउंडेशन कोल्हापूर यांच्या वतीने राजमाता जिजामाता यांच्या पुतळ्याचे पूजन करण्यात आले आणि आई साहेबांना अभिवादन केले. यावेळी संस्थापक अध्यक्षा शुभांगी साखरे, पल्लवी घाटगे, उमा बन्ने, ज्योती वेदांते, आरती कनेरे, दीपाली पोळ आणि अन्विका देसाई उपस्थित होत्या.",
    image: "https://scontent.fblr20-3.fna.fbcdn.net/v/t39.30808-6/418792965_6921759134560612_5428506900787918522_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gRYDcwIt6BEQ7kNvgHGyhyL&_nc_oc=AdlgkZ6eZJo9jyycou7RhddzmWrDkLCiwSeIDfuhHeQwhjuWtRg-okV3qbUL72SN9pb92IJuDeeeQHBv2Wphigcu&_nc_zt=23&_nc_ht=scontent.fblr20-3.fna&_nc_gid=RYH3odD45j6lXL7nRx-S1Q&oh=00_AYENxnAgG3UQtaEJgIo7GAyBplICtJNI0QYC59UPDT1nLg&oe=67EE36BA",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid031WUW7tS6dBSTCtcWvd3UTrETZYTCEwtxNpaBmCrTmU4hrpTiiaCyHoKPfhjT1yVml"
  },
  {
    id: 14,
    title: "रुग्ण हक्क संरक्षण कायद्याच्या मागणीसाठी घंटानाद आंदोलन",
    date: "2019-11-21",
    description: "डिपॉजिटची रक्कम भरू न शकल्याने गरीब व असाहाय्य रुग्णांना वेळेत उपचार मिळत नसतील आणि प्राण गमवावे लागत असतील, तर त्याला जबाबदार कोण? अशा परिस्थितीत संबंधित हॉस्पिटल व डॉक्टरांवर गुन्हा दाखल होऊन शिक्षा झालीच पाहिजे. या मागणीसाठी आणि 'रुग्ण हक्क संरक्षण कायदा' लागू करण्यासाठी, २१ नोव्हेंबर २०१९ रोजी महाराष्ट्रभर घंटानाद आंदोलन करण्यात आले.",
    image: "https://scontent.fblr1-10.fna.fbcdn.net/v/t1.6435-9/76935907_2499547250115178_9176738192487874560_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8OPM_4YKx40Q7kNvgEqASkc&_nc_oc=Adk-Xvq0dXAiTeJzKcRWh4-ZM-PKfUy1i_IojykudJDuqY4FE2fAapTyuHq_xrEEu9no310Cvj0zZDyVjltNpn74&_nc_zt=23&_nc_ht=scontent.fblr1-10.fna&_nc_gid=llPML4xe9C777CCPTKlr-g&oh=00_AYHZBEZvmbEW8IVrtc_gAeWSYQ5WezKYjvoTQJLacDSbhw&oe=68107139",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0xA5jdbYXQ48UKFM78iHbjXPey6BAwve1sFpq5ZWJWBr9Kby4x2uDyPxD8CxJf7Tsl"
  },
  {
    id: 15,
    title: "डॉक्टर दिनानिमित्त रुग्ण हक्क परिषदेतर्फे मान्यवरांचा सन्मान",
    date: "2020-07-01",
    description: "डॉक्टर दिनाचे औचित्य साधून रुग्ण हक्क परिषदेतर्फे कोल्हापूर जिल्ह्यातील मान्यवर डॉक्टरांचा सन्मान करण्यात आला. यामध्ये डॉ. यू. जी. कुंभार (अतिरिक्त जिल्हा आरोग्य अधिकारी), डॉ. योगेश साळे (जिल्हा आरोग्य अधिकारी), डॉ. मन्सूरअली (ब्रेन स्पेशालिस्ट, ऍस्टर आधार), डॉ. अल्पना चौगुले आणि अथायू हॉस्पिटल टीम यांचा समावेश होता.",
    image: "https://scontent.fblr1-9.fna.fbcdn.net/v/t1.6435-9/106363163_2991622027574362_6687757100321545420_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DrfQIBucmVIQ7kNvgGBEbuI&_nc_oc=AdloxF0YPppHvFxYyy2BVRUUNuvdZwIBT3mRJH9XYwKSs43AKKLKTlq-wlkI150EqQjWWY-VLjnlGFlbUcmZ1pxn&_nc_zt=23&_nc_ht=scontent.fblr1-9.fna&_nc_gid=0FrNkhH5aF0ZyNzBQfaWVw&oh=00_AYHv2Hq_hvpifPCa-2ppT0Vmo_4t5MffQt3fDnxAZ5Iq5A&oe=681062BC",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0u9M39Ky81NoTQ9PGLD238icSBJXV5NVyfQDPgH5VwTSC3v3pNbWntNzHbSdYe54jl"
  },
  {
    id: 16,
    title: "लगोरी बहुउद्देशीय संस्थेचा प्रथम वर्धापनदिन साजरा",
    date: "2020-09-05",
    description: "लगोरी बहुउद्देशीय संस्थेला आज एक वर्ष पूर्ण झाले. या काळात वृक्षारोपण, अनाथाश्रम भेट, संक्रांतीचा हळदीकुंकू, कॅन्सर निर्मूलनावर डॉक्टर रेश्मा पवार यांचे व्याख्यान, सौंदर्यविषयक मार्गदर्शन, अंधशाळा भेट यासारखे विविध उपक्रम राबवले. वर्धापन दिनानिमित्त पारंपरिक कार्यक्रमांना फाटा देत संस्थेच्या वतीने पंचगंगा स्मशानभूमीत शेणी दान उपक्रम राबवला.",
    image: "https://scontent.fblr1-10.fna.fbcdn.net/v/t1.6435-9/118825235_3179398495463380_6348992114939650221_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0QGV6K9VdvoQ7kNvgH1oTy5&_nc_oc=AdkLV2uutVt2M2vrT6QvgFAocHRZLbwPAvupblBFgZ0vac5kxHY9CTXCXqzBm9VYsfKJA4KwqMjpvxxJFAgtMEMm&_nc_zt=23&_nc_ht=scontent.fblr1-10.fna&_nc_gid=Gu1ohI126e8Y2JqvOTWFwQ&oh=00_AYGYRqkdJbPlVVI59R_nJVWQaeymTRF3tIcYIDFK9VFIBw&oe=68105953",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid029RGWBkcZyfQXf1jk9cuzTxzMg5iGmwnnnYBKhTXyHHrnQE5wBx39M6aNB2iSen1Sl"
  },
  {
    id: 17,
    title: "लगोरी फाउंडेशन – महिलांसाठी हक्काचे व्यासपीठ",
    date: "2020-09-20",
    description: "जय महाराष्ट्र चॅनेलच्या टीमचे मनःपूर्वक आभार! त्यांच्या सहकार्यामुळे आमच्या संस्थेतील होतकरू महिलांना नवी प्रेरणा आणि ऊर्जा मिळाली. आमच्या सखींच्या कार्याची दखल घेतल्याबद्दल ज्ञानेश्वर साळोखे आणि त्यांच्या टीमचे पुन्हा एकदा मनःपूर्वक धन्यवाद!",
    image: "https://scontent.fblr1-10.fna.fbcdn.net/v/t1.6435-9/124398070_3376444585758769_4655173973128738808_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ep1_opax-nMQ7kNvgGJ17yW&_nc_oc=Adkt2xAMODn6DN-GL7k7yI45MhHoDooUjh7_x9fnlY9ENUlcO0snt6S3wTVUdKyZ579y_UAGxcZPUev_vf04zdFA&_nc_zt=23&_nc_ht=scontent.fblr1-10.fna&_nc_gid=O8Ui05MUo_y9tK_GzrR9RA&oh=00_AYGWw--04lzPW6n3OQhIbJxvKxWG5jdMwxdQjciHGpPEKg&oe=681088FB",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0Adi68TgGNRk1E6R52XKv96ABwMMCPxG37D9YYeYrwgnZArXwUiTV4pGTKW233xZil"
  },
  {
    id: 18,
    title: "लगोरी फाउंडेशनतर्फे मान्यवरांना भेट व शुभेच्छा",
    date: "2020-12-20",
    description: "लगोरी फाउंडेशनच्या संचालक मंडळाने माजी आयुक्त मा. मल्लिनाथ कलशेट्टी, कोल्हापूर जिल्हाधिकारी मा. दौलत देसाई, कोल्हापूरच्या महापौर मा. निलोफर आझरेकर यांची सदिच्छा भेट घेतली. तसेच, कोल्हापूर काँग्रेसचे सचिनभाई चव्हाण यांना वाढदिवसानिमित्त शुभेच्छा दिल्या.",
    image: "https://scontent.fblr1-5.fna.fbcdn.net/v/t1.6435-9/131980864_3483666491703244_8622410326788341378_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=b-UCdBj8WzAQ7kNvgF5_3XU&_nc_oc=AdlpmOhTKklDhoWAtulnkz6fVPpNcbSidwb0wsjtxDxNQ21zaQRJ98LUFgqTZDiQoemugLd4m491RP_i3bF1Wegt&_nc_zt=23&_nc_ht=scontent.fblr1-5.fna&_nc_gid=BlLBUom7gnGUdjq2Q0PlkA&oh=00_AYG4OF8KiZlH2gt-1hpbPm0MWIABmS9gtuSz4BGyq4EKrA&oe=68108E56",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid08zb39AwfbYBFU2mDFyyoqNaLJz5HG8NHmDpe2R58nxFk1M6hgzZ49qhWYkKrsrxCl"
  },
  {
    id: 19,
    title: "लगोरी फाउंडेशनच्या सखींनी दिला मदतीचा हात",
    date: "2022-12-22",
    description: "लगोरी फाउंडेशनच्या सखी महिलांनी एकत्र येत गरजूंसाठी मदतीचा हात पुढे केला. समाजातील महिलांना स्वावलंबी बनवण्यासाठी आणि त्यांना आधार देण्यासाठी संस्थेच्या सदस्यांनी विविध उपक्रम राबवले. आर्थिक मदत, रोजगार संधी, तसेच व्यवसाय उभारण्यासाठी मार्गदर्शन देण्याचे कार्य सखींनी उत्स्फूर्तपणे केले. संस्थेच्या अध्यक्षा शुभांगी साखरे यांच्या संकल्पनेतून सुरू झालेल्या या उपक्रमांतर्गत अनेक महिलांना आधार मिळाला. भविष्यातही महिलांच्या सशक्तीकरणासाठी लगोरी फाउंडेशन सतत कार्यरत राहणार आहे.",
    image: "https://scontent.fblr1-4.fna.fbcdn.net/v/t1.6435-9/132564006_3487942421275651_1307399249280735403_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=F87hO2l1SjMQ7kNvgFb6uW1&_nc_oc=Adl0yEdE-tOqUFLj10ARDTb-nYtKqkKMdDPptaksFM763QGopVXr7vD3ecaXIoJiWJHVmt_OxGr-J645HL7tXWU0&_nc_zt=23&_nc_ht=scontent.fblr1-4.fna&_nc_gid=dGvC06Ia-I9j5sc4O5d3hw&oh=00_AYFXejv7KopUtB4wwNdswJgKyHc9jPW8Gjoa_ZiObGw4Iw&oe=6810918C",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0eaw7JJMhrY1ipbbvmi5p6VvokDLfsD59ZKLag39VgsfiCvQXCpUS2aLbbxujupPil"
  },
  {
    id: 20,
    title: "लगोरी फाउंडेशनच्या वतीने महिलांसाठी केक प्रशिक्षण कार्यशाळा",
    date: "2020-12-23",
    description: "लगोरी फाउंडेशन आणि Bright Gems Pre-Primary School यांच्या संयुक्त विद्यमाने महिलांसाठी केक बनवण्याचे प्रशिक्षण आयोजित करण्यात आले. या उपक्रमाचा उद्देश महिलांना घरबसल्या उद्योजकतेची संधी उपलब्ध करून देणे हा होता. संस्थेच्या अध्यक्षा शुभांगी साखरे यांच्या संकल्पनेतून हा उपक्रम राबवण्यात आला.",
    image: "https://scontent.fblr1-10.fna.fbcdn.net/v/t1.6435-9/133114803_3498481250221768_714845307978589974_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=c27CFhlb5XgQ7kNvgEl8d9C&_nc_oc=AdlbdzxoGoo5sbi0wrVtCywCz0XV5amWlNixioznjQEXGgwmRGH0Jh5XgT1YyRsBYOWbglxrAGvnqWD7M1FZHRjT&_nc_zt=23&_nc_ht=scontent.fblr1-10.fna&_nc_gid=gygiC0tivVd902ZwzQBaWg&oh=00_AYGIvhEnNBTYRwztYpII5g7eqcqQkHnsMEFwD2R7xW9dDA&oe=68108713",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02SeeeENCBVBW6fBsnd4bnJBqG2e8g9pH1giNyaguh2hWz9K1FjcASWKry4XQdunZfl"
  },
  {
    id: 21,
    title: "पाचगांव शांती नगर अंगणवाडीमध्ये राष्ट्रीय बालिका सप्ताह उत्सव",
    date: "2021-01-26",
    description: "पाचगांव शांती नगर अंगणवाडीमध्ये २१ ते २६ जानेवारी दरम्यान राष्ट्रीय बालिका सप्ताह साजरा करण्यात आला. यावेळी आदर्श काम करणाऱ्या महिलांचा सत्कार करण्यात आला. या कार्यक्रमात वंदना साळोखे, राधिका खडके, शुभांगी साखरे, माधुरी कान्हटकर, दीपाली पाटिल आणि अंगणवाडी सेविका, मदतनीस, आशा सेविका उपस्थित होत्या.",
    image: "https://scontent.fblr1-4.fna.fbcdn.net/v/t1.6435-9/142417367_3574980372571855_3493593839593177978_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1oyyEBb84akQ7kNvgEKKe7E&_nc_oc=Adlp53TNJeXW_SxNkVHLfa4KSsC5UQbGT4VVG1xtPw063qUt43EmC5gKnnnDmn-BkxvxQcIGQkqU_V9qaasoiKv4&_nc_zt=23&_nc_ht=scontent.fblr1-4.fna&_nc_gid=bedEyTi71uldcEL3KFKIxw&oh=00_AYFG1RqPnLAp3fc__xleB8LsYXThQQippTHnj9tIMO3osg&oe=68109211",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0265xyBo6NvVqfer8tsV9ruXbLsFNWnHFLh1vGPDc33n7bdgQiZBqhDrwdidVq9Re6l"
  },
  {
    id: 22,
    title: "स्वच्छंदी मंचचे उद्घाटन आणि हळदीकुंकू सोहळा",
    date: "2021-01-27",
    description: "'स्वच्छंदी मंच' शिवाजी पेठ येथे हळदी कुंकू कार्यक्रमाचे आयोजन करण्यात आले होते. या कार्यक्रमात मकर संक्रांतीच्या विशेष प्रसंगी हलव्याचे आयोजन, दागिने आणि काळी साडी वेशभूषा स्पर्धा, संगीत खुर्ची स्पर्धा आणि खाद्य पदार्थांचे स्टॉल्स ठेवण्यात आले होते.",
    image: "https://scontent.fblr1-4.fna.fbcdn.net/v/t1.6435-9/143252690_3576763032393589_7599976273908872649_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tnnm_V6Q2OoQ7kNvgEJPugn&_nc_oc=Adni1xyBBxHypTZPhPw_fubNnNSgkizkWovXPC-gSkWokYQooJ6Fe5xyqvm308B5S1VlwpWGNpn3Z6X08AEFKg8Q&_nc_zt=23&_nc_ht=scontent.fblr1-4.fna&_nc_gid=WZhPIfNfcukx7ALX-yuNrQ&oh=00_AYHAmMN4NXTinY3L1nD9KvkpkivDZu4xF-EXFHRkljuT1Q&oe=68106BA0",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02WG1H4t29ArBx1PPJPj3gfWjrMEPXSUwYpNg7P74CKRzmSBxFXs3qJ1LLAukgxMdal"
  },
  {
    id: 23,
    title: "महिला सबलीकरणासाठी संगणक प्रशिक्षण आणि परीक्षा नोंदणी पूर्ण",
    date: "2021-03-16",
    description: "लगोरी फाउंडेशन आणि डिजिटल इंडिया यांच्या संयुक्त विद्यमाने संगणक प्रशिक्षण व परीक्षा नोंदणी प्रक्रिया यशस्वीरीत्या पूर्ण झाली. या वेळी डिजिटल इंडिया चे कृष्णा शिंदे व सहकारी, लगोरी फाउंडेशन च्या संस्थापक अध्यक्षा शुभांगी साखरे, तसेच शिवानी यादव, वैशाली गिड्डे, सविता सोलापुरे, प्रेरणा पाटील, कल्याणी मेढे पवार, निकिता कापसे व सभासद मोठ्या संख्येने उपस्थित होते.",
    image: "https://scontent.fblr1-7.fna.fbcdn.net/v/t1.6435-9/161109182_3705634552839769_1781863428175063858_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8s_USzjHWtoQ7kNvgGY9ji_&_nc_oc=AdlE4QWTQX9lpCIuQLxko7UsuSmDv5DB_Zq33_rEaV9tsQwHIyhFULc-ynGhlwUhmQY7H0e_wJy7FpB_0fwaAsoX&_nc_zt=23&_nc_ht=scontent.fblr1-7.fna&_nc_gid=0-8ZlsQXu1btyOmuwumrIw&oh=00_AYEWwg39c15nnFy94EYGrxfnvyt2732nTLnig77D45P0Xg&oe=68107F39",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02iguDXTPMVzRUfeEcpyqaPJ2HCKGH7MzncJsCPkdu64rHovRdxr4WerP4vCGoZZn5l"
  },
  {
    id: 24,
    title: "महिलांसाठी गृहउद्योग संकल्पना – होम क्लिनिंग प्रॉडक्ट एजन्सी उद्घाटन",
    date: "2021-03-18",
    description: "लगोरी फाउंडेशन आणि ऐश्वर्या एजन्सी यांच्या संयुक्त विद्यमाने कोल्हापूर शहरातील महिलांसाठी गृहउद्योग संकल्पनेवर आधारित होम क्लिनिंग प्रॉडक्ट एजन्सीचे उद्घाटन गुरुवार, दि. १८ मार्च रोजी संपन्न झाले.",
    image: "https://scontent.fblr1-7.fna.fbcdn.net/v/t1.6435-9/162033347_3711976578872233_2620142774100150239_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2JiJcPpYB3wQ7kNvgGTKoWv&_nc_oc=Adkcec1gYw7YqjibrxC7egFTB8tQynlOkBB_wts-fO9n8yFc3lQyoz5rR9wh7Q8pUu2_GDnnqPRjcS2YGZLEmELL&_nc_zt=23&_nc_ht=scontent.fblr1-7.fna&_nc_gid=_nG6D8Nd_fOIR5nq0-oERg&oh=00_AYHShqh-7aO9T0ZTcaC-5k_co_kAEb7kD7Dx1cE3C9yzLw&oe=68107E82",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0DKDzgJ4SCt8MNT2y7ooJB8rswxZYCfJ9U7b22wa2wnHPivybzS9qhH6t9RKRvxnel"
  },
  {
    id: 25,
    title: "अनाथ धनश्रीच्या विवाहासाठी सामाजिक मदत",
    date: "2021-04-01",
    description: "मराठा समाजातील अनाथ धनश्रीचे संगोपन तीन महिन्यांपासून करण्यात आले होते. तिचा विवाह दि. १ एप्रिल २०२१ रोजी गगनबावडा तालुक्यातील हरपवडे येथे संपन्न झाला.",
    image: "https://scontent.fblr1-5.fna.fbcdn.net/v/t1.6435-9/167024177_3752089864860904_8367371234448950830_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DHuXxxaVnJAQ7kNvgHjP41L&_nc_oc=AdnRaQELLiKGujYquQD4nnYobTGcihqHYrVL2kdw2Y7nS5o9skEfB9XsdrSdcv85dgVeHrqXgEubp2GpIHN5ouKD&_nc_zt=23&_nc_ht=scontent.fblr1-5.fna&_nc_gid=ax64_T7NXcQnR5P2s4vcSg&oh=00_AYE5pGNW1EQfhIgF62Jp9Vsc4LVnGw69edkR6czF1Ta7kw&oe=6810AC10",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0tyBxYUn5ftEEQvwSHW3QTQdqjoGvvf2KqeCvtpogGX3owpKtainD3MKXBB7HNThRl"
  },
  {
    id: 26,
    title: "लगोरी फाउंडेशन आयोजित रंगपंचमी २०२१ – फुल ऑन धमाल!",
    date: "2021-04-03",
    description: "लगोरी फाउंडेशनतर्फे रंगपंचमी २०२१ चा रंगतदार उत्सव मोठ्या उत्साहात साजरा करण्यात आला. रंगांची उधळण, जल्लोष आणि धमाल-मस्तीने भरलेल्या या सोहळ्यात महिलांनी आनंद घेतला. स्नेह, उत्सव आणि एकतेचा संदेश देत, लगोरी फाउंडेशन नेहमीच महिलांसाठी हक्काचे व्यासपीठ निर्माण करत राहील! ",
    image: "https://scontent.fblr1-7.fna.fbcdn.net/v/t1.6435-9/168070243_3758718664198024_3609894449794008209_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=EL-1wkJMScQQ7kNvgHzhkRp&_nc_oc=AdlkmGPqeTvCxWqhCjKsvC9yHGIXtoVNkcrUHXWy00N8-C4vpuP427UyPTzhavkOp1XQRn4L0UCajQoYR3xKJ2SL&_nc_zt=23&_nc_ht=scontent.fblr1-7.fna&_nc_gid=Kw5XqH2oKCWxSV_VXHy5rA&oh=00_AYFoR3BORwvli6kZjEmQyxAwjRkP0nUccqzUu8U-N9ssMg&oe=681095E8",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0vUtJwDq79f741dfc2GUverBE6wZZViLkjpwiP963mKHDD939fpPJ6L6GCb8pfqLEl"
  },
  {
    id: 27,
    title: "सरकारी योजना आपल्या दारी शिबिराचे आयोजन",
    date: "2021-04-05",
    description: "आंबेडकर नगर (प्रभाग क्र. ३), कसबा बावडा येथे आज सरकारी योजना आपल्या दारी या शिबिराचे आयोजन करण्यात आले. या शिबिराला सौ. सविता रायकर, सौ. सुरेखा कांबळे, सौ. शुभांगी साखरे, दीपाली भोगले, आनंदा भोगले, रोहन भोगले तसेच प्रभाग क्र. ३ मधील नागरिकांनी उत्साहाने सहभाग घेतला.",
    image: "https://scontent.fblr1-10.fna.fbcdn.net/v/t1.6435-9/169364424_278498040441646_4934751939866354541_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=hqe1GghkAVkQ7kNvgEvfzH2&_nc_oc=Adl-JTQvzbsNo15-xrsijtaBBafmthVVsJRpZPEkDAATJAy9MguyHkH2ZbaRZXnklQgPKHjomOxDYgg266qEELW6&_nc_zt=23&_nc_ht=scontent.fblr1-10.fna&_nc_gid=laLrLNAH4X98gRCn-_Fyxw&oh=00_AYEZlx_7rDHkJDXRTVEs_0IIaKQIVUC6nEO2ZFZJRWk5yw&oe=68109351",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0cG4PY1G3KN9xJKcM41guCh434vKe1pHYg7vMcBcrMsAYs6UjP6BiDVbWDMpgZ61el"
  },
  {
    id: 28,
    title: "लगोरी फाउंडेशनतर्फे कासार व्यवसायिक महिलांना मदतीचा हात",
    date: "2021-06-18",
    description: "कोल्हापूर शहर आणि उपनगरातील कासार (बांगड्या) व्यवसाय करणाऱ्या महिलांना कोरोना पार्श्वभूमीवर लगोरी फाउंडेशन च्या वतीने जीवनावश्यक वस्तूंचे वाटप करण्यात आले. मंगळवार पेठेतील महिलांना प्रायव्हेट हायस्कूल प्रांगणात किट देण्यात आले, तर उपनगरातील महिलांना घरोघरी जाऊन मदत पोहोचवली.",
    image: "https://scontent.fblr1-5.fna.fbcdn.net/v/t1.6435-9/202770657_3977041179032437_7059008121497801581_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=NxHzMi35f9EQ7kNvgEn73Q5&_nc_oc=AdkszLwuCe5m6RcxwJ2veRD7mPwE6UbWkSOrXs9_yb8wbAjxlOazS8-YOYMutIrA-heN-EmKswcYJjGyaYBfpeHW&_nc_zt=23&_nc_ht=scontent.fblr1-5.fna&_nc_gid=pDBP9nT8w5-vDuNMk-1R7w&oh=00_AYEkmBXkGIWvwYGDpK3ZYOOjei3nHphKM5R-7OdOcqGQYw&oe=68109667",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0Mw5ZmuUuMSsZYboqrxxyxJ5hGYeUxfNv2phrpstaPVoYpcmdCFtupPzTWNzRVanKl"
  },
  {
    id: 29,
    title: "लगोरी फाउंडेशनतर्फे पारंपरिक महा हादगा सोहळा उत्साहात संपन्न",
    date: "2021-10-01",
    description: "लोप पावत चाललेल्या महा हादगा या पारंपरिक सोहळ्याची आठवण महिलांना आणि तरुणींना करून देण्यासाठी लगोरी फाउंडेशनतर्फे शुक्रवार, १ ऑक्टोबर रोजी सूर्यकांत मंगल कार्यालय येथे हा सोहळा मोठ्या उत्साहात पार पडला. संस्थापक अध्यक्षा शुभांगी साखरे यांच्या अध्यक्षतेखाली संचालक सविता सोलापूरे, शिवानी यादव, रंजना पोवार, प्रेरणा पाटील, ऐश्वर्या झाजगे, वैशाली गिड्डे यांच्या संकल्पनेतून कार्यक्रम उत्कृष्टरीत्या पार पडला.",
    image: "https://scontent.fblr1-4.fna.fbcdn.net/v/t39.30808-6/475652621_8975172815885890_2926085026469876876_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=r_JaIg8phhEQ7kNvgH7RoB8&_nc_oc=AdnO7-R-8sF6TINfW2iOylEQ_xvqdFWcl4HTVu74M17AdhhbZ_Kiq9jo4asw9Xct1HfNrONTP9C9bdTdrKw_gBxy&_nc_zt=23&_nc_ht=scontent.fblr1-4.fna&_nc_gid=LMEFvvXwGElM9stu2WJTzg&oh=00_AYHirD8ztGn76efqFnJcsOXkpq_MSPwjKj-Rb-uYgecvmg&oe=67EF1608",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02QuCAArQTC6g7KkEPZZhv6cKzVyMbw7cykzVYtzqtfrXZSoPccBe28FGyHej2U2Z7l"
  },
  {
    id: 30,
    title: "कुंकूमार्चन सोहळा आयोजित - शारदीय नवरात्रे निमित्त",
    date: "2021-10-12",
    description: "लगोरी फाउंडेशन ने शारदीय नवरात्रेच्या पावन पर्वावर कुंकूमार्चन सोहळा आयोजित केला, जो विठ्ठल रुक्मिणी मंदिर, मिरजकर तिकटी येथे मेघा ताई भांबोरिकर यांच्या शुभ हस्ते संपन्न झाला. या कार्यक्रमाचे आयोजन लगोरी फाउंडेशन च्या संस्थापक अध्यक्षा शुभांगी साखरे यांच्या अध्यक्षतेखाली सविता सोलापुरे, शिवानी यादव, प्रेरणा पाटील, अलका सागर, वैशाली गिड्डे यांच्या सहकार्याने करण्यात आले.",
    image: "https://scontent.fblr1-6.fna.fbcdn.net/v/t39.30808-6/475979558_8976783495724822_3277297493998109442_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KUsL4gyP4kkQ7kNvgElIvGH&_nc_oc=AdlBwP3OG87sE0jBWe02vgJR_r3y1JEIR-QeleoYb-QSGkv1du7Ucerg9unRc658DlrumMrGuiiaGZTLnRLY8mgH&_nc_zt=23&_nc_ht=scontent.fblr1-6.fna&_nc_gid=slFrAsdGtFAwFgW-Y-XY4w&oh=00_AYHEcICnKAWuLItKSeeIDc5oCZN5JCvKKAsmG5KFjv2QLg&oe=67EEFE9E",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0KmbZVoekpTaiMjnNnrmqNyNDB68LhXyGEpNfM6s6h2JVrykw5svTZH4HXRtKRK3zl"
  },
  {
    id: 31,
    title: "महा गोधडी अंबाबाई च्या चरणी - उपक्रमामध्ये श्रमदान",
    date: "2021-10-16",
    description: "संस्कार शिदोरी मंच द्वारा आयोजित महा गोधडी अंबाबाई च्या चरणी या उपक्रमामध्ये लगोरी फाउंडेशन च्या सभासदांकडून श्रमदान करण्यात आले. या उपक्रमाचे आयोजन स्मिता खामकर आणि अंजली दळवी यांच्या संयुक्त नियोजनाने संस्कार शिदोरीच्या कार्यालयात घटस्थापनेपासून सुरू करण्यात आले होते. या उपक्रमात लगोरी फाउंडेशन च्या संस्थापक अध्यक्षा शुभांगी साखरे, सविता सोलापुरे, वैशाली गिड्डे, प्रेरणा पाटील, सीमा रेवणकर, स्मिता ओतारी, मंगल काळे, अश्विनी कांबळे, राजमती चौगुले, दिपाली मोरे, नेहा मोरे यांच्यासह इतर सदस्य उपस्थित होते.",
    image: "https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-6/476031361_8979689825434189_8865321925608829481_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=98s0AsiuR2IQ7kNvgEW4U3C&_nc_oc=AdmHIcPfCHWU5CD2zwIom_puZy5Zt28kdu3CPYh5uTd5kwkhmcfoC80UHx0Nc2u982x8OAyMoeBDfYTg1Hty4VPK&_nc_zt=23&_nc_ht=scontent.fblr1-7.fna&_nc_gid=hknF9zK9Hn96HAkyS1vd3A&oh=00_AYHF-aZAzTjMt_7pBjUswCxO0T-nf--l04FR3WAJ-pQVRg&oe=67EEF127",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid023kewKvciWhFs4rPfMfcJ1xQM3qC8oaSRBqQq7dhKzVNWr1E2fPQspuJ8XwX58Dqyl"
  },
  {
    id: 32,
    title: "एक पणती अंधारासाठी - दिवाळी मदत उपक्रम",
    date: "2021-11-02",
    description: "लगोरी फाउंडेशन ने दिवाळी च्या शुभ मुहूर्तावर धनत्रयोदशी च्या औचित्याने एक पणती अंधारासाठी हा उपक्रम राबवला. या उपक्रमाद्वारे, महामारीच्या काळात दिवाळी सारखा मोठा सण साजरा करणं अनेक गोरगरीबांसाठी अवघड आहे. त्यांना लगोरी फाउंडेशन ने मदतीचा हात देऊन, त्यांच्या जीवनात एक छोटी पणती उजळवण्याचा आणि चेहऱ्यावर हसू आणण्याचा प्रयत्न केला. उपक्रमात गोरगरीबांना साडी, ब्लँकेट, मिठाई बॉक्स, मास्क, तेल, साबण, उटणे, फटाके, फराळ साहित्य यांसारख्या वस्तू देण्यात आल्या.",
    image: "https://scontent.fblr1-6.fna.fbcdn.net/v/t39.30808-6/475985107_8988329977903507_6801989778158652961_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=K1P3PSlBwooQ7kNvgHmWtzq&_nc_oc=AdlEEHCvvE98EWKDRq7HjoGWb42lzyL8OM83DanM5Rqsi6aM78zAKpdHmAcwsc9zBlbrEOxat5q0csQGsLbafgbD&_nc_zt=23&_nc_ht=scontent.fblr1-6.fna&_nc_gid=cdnz69Z_G9nbjVXw--nOIw&oh=00_AYFK4VZrk4lIrE7399el335ygrG-z-erjIhs8P54GIouyA&oe=67EF0FD5",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid026WeX8qJYaJA4Fjpdzs3neRaDV3C9NKb4Yv6pdc2xdM7CDqiF9vxa8pwtcBGmUdW1l"
  },
  {
    id: 33,
    title: "Foundation Inauguration",
    date: "2019-06-01",
    description: "The official launch of Lagori Foundation with a mission to empower women.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 34,
    title: "Foundation Inauguration",
    date: "2019-06-01",
    description: "The official launch of Lagori Foundation with a mission to empower women.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 35,
    title: "Foundation Inauguration",
    date: "2019-06-01",
    description: "The official launch of Lagori Foundation with a mission to empower women.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 36,
    title: "Foundation Inauguration",
    date: "2019-06-01",
    description: "The official launch of Lagori Foundation with a mission to empower women.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 37,
    title: "Foundation Inauguration",
    date: "2019-06-01",
    description: "The official launch of Lagori Foundation with a mission to empower women.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 38,
    title: "Foundation Inauguration",
    date: "2019-06-01",
    description: "The official launch of Lagori Foundation with a mission to empower women.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 39,
    title: "Foundation Inauguration",
    date: "2019-06-01",
    description: "The official launch of Lagori Foundation with a mission to empower women.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  {
    id: 40,
    title: "Foundation Inauguration",
    date: "2019-06-01",
    description: "The official launch of Lagori Foundation with a mission to empower women.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dCLTMVivsvBWQ8AkT1Kz41jgfrwA6DH3RQLQnmiZG5196SetSbgGu3mBGARKjwxSl"
  },
  
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
