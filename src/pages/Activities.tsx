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
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/472425465_8841973732539133_7434182902718126087_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PB95hY24TRcQ7kNvwE45sPi&_nc_oc=Adm37_vfcBuCXO6sZp9CMThBibO7O4PbXKQxv3DsncmliYSRwORlUHAfYEr7DMD32BKPnozpK6cwkrHbVDOqoxej&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=-OrevOou7S-6lVk4HoSu8w&oh=00_AfEOj67xfFbAcZ6fTQU33HuBncj1rN3U_PJBP7pfqJ0YoA&oe=67F9DCEC",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid03qTgCq5rxGRq4L2XHRa49kR2mvUWFfwmtsGapVzpzYH5NJqAsHb1sF5J3AULTJY7l"
  },
  {
    id: 2,
    title: "संक्रांतीचा हळदी-कुंकू सोहळा – स्त्री शक्तीचा उत्सव",
    date: "2025-01-24",
    description: "लगोरी फाउंडेशनच्या वतीने यंदाही मकर संक्रांतीचा हळदी-कुंकू सोहळा मोठ्या उत्साहात आणि पारंपरिक पद्धतीने साजरा करण्यात आला. या कार्यक्रमात महिलांनी संक्रांतीचे विशेष औक्षण, सुवासिनी पूजन आणि तिळगूळ वाटप करून एकमेकींना तिळगूळ घ्या, गोड गोड बोला असा स्नेहाचा संदेश दिला.",
    image: "https://scontent.fblr24-3.fna.fbcdn.net/v/t39.30808-6/474938186_8936530623083443_1136913187730060467_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=XalXAHLmNCMQ7kNvwHs5dcC&_nc_oc=AdlnPC8DwdSdWQhktFdZE2z1CAAHVjIAqBtaslZY5ioD8Afa-HnTgNv34EtRaeVy8UUTKcvVmPVDWpsCgAA6tntp&_nc_zt=23&_nc_ht=scontent.fblr24-3.fna&_nc_gid=1QBNiZ9LZFa-v7W8iX9kKw&oh=00_AfEVOKM7rzIh9RPMKwOzUHvTvDyNxmr9WKb3cNfI6bTADQ&oe=67F9F2A0",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0s9USZ4Z9AhB6MwAEKvsvXpGpp47X2YJXShJmhftKoLRA2e9tzhjTq4pTarqaSikcl"
  },
  {
    id: 3,
    title: "शारदीय नवरात्र उत्सवानिमित्त महारॅली चे आयोजन. लगोरी फाउंडेशन चा सहभाग",
    date: "2023-10-24",
    description: "शारदीय नवरात्र उत्सवानिमित्त महारॅलीचे आयोजन करण्यात आले, ज्यामध्ये लगोरी फाउंडेशनने उत्स्फूर्त सहभाग घेतला. या महारॅलीच्या माध्यमातून महिलांच्या सशक्तीकरणाचा संदेश देण्यात आला आणि समाजात एकात्मतेची भावना वृद्धिंगत करण्याचा प्रयत्न करण्यात आला.",
    image: "https://scontent.fblr24-3.fna.fbcdn.net/v/t39.30808-6/462883143_8352776588125519_4756712244573059595_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZmGFI-usj9kQ7kNvwHt1VFb&_nc_oc=Admfl4I4Hoq3H2gMJEjAUCodhrbEpilqzmfnjujDssOjSZ-OQzfg0sC-O_OmZrRTU3KkyealCuHzpms3ZHnqnB2p&_nc_zt=23&_nc_ht=scontent.fblr24-3.fna&_nc_gid=tzZTs3iy6IL3dJcHCiMndg&oh=00_AfHYv2M82uIHcYxPBrg0jvNPiYApSUv9KlTAivIplhOuqA&oe=67F9CF3C",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid029c5ZeahA3iWcpzVkCsjkriaFoN299vUUnKKtepE8xCYkFsLjizi9ydvcZjkDLTy8l"
  },
  {
    id: 4,
    title: "कोल्हापुरातील महिलांचा एल्गार!",
    date: "2024-08-24",
    description: "कोल्हापुरातील स्त्री शक्ती एल्गार करत एकत्र येऊन स्त्री शक्तीला न्याय मागण्यासाठी, होणाऱ्या अन्यायासाठी संरक्षण मागण्यासाठी स्त्री शक्तीचा कायदा कडक करून स्त्रियांना न्याय मिळावा ज्या नराधमांनी वाईट कृत्य केलं त्यांना फाशीची शिक्षा व्हावी. किंवा त्यांना महिलांच्या हाती सोपवा व महिला त्याचा निर्णय घेतील या आशयाचं निवेदन कलेक्टर ऑफिस समोर घोषणाबाजी करून कलेक्टर साहेबांकडे देण्यात आलं यावेळी कोल्हापुरातील महिलांसाठी कार्यरत असणाऱ्या लगोरी फाउंडेशनच्या शुभांगी साखरे यांच्या सोबत अनेक महिला भगिनी उपस्थित होत्या.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/457045255_7986698728066642_395586655646034403_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ziw6M5pNSlYQ7kNvwG5L4AL&_nc_oc=Adm-A-N67CZ6rbDgdR9ZSlY8KoLBoVIQK-mzUf8SL6yFzQ6oPs5qal2eMSkUKdan_aTdTIlkYc20GG_jKoRS-M0f&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=Q77KgPE-dxDqWks0Op-aRA&oh=00_AfHKceCyp8v30Fy50b0QLTstVlm5pFOvdZS-NbVuf9P75A&oe=67F9CA13",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0357HU3PVBfcwC18xQJiE9mAW92dPCJpuUg2hUsRh9pDNjKzk54iX2BQjkrHG9aaqPl"
  },
  {
    id: 5,
    title: "लगोरी फाउंडेशन आयोजित श्रावण कुंकूमार्चन सोहळा",
    date: "2024-08-20",
    description: "संस्थापक अध्यक्ष शुभांगी साखरे यांच्या संकल्पनेतून मिरजकर तिकटी विठ्ठल मंदिर येथे अतिशय भक्ती पूर्ण वातावरणात संपन्न झाला. सौ मेघाताई भांबोरीकर यांनी श्री सूक्त पठण केले तर महिलांनी अतिशय सुंदर भजने म्हटली. कार्यक्रम अतिशय उत्स्फूर्त आणि चांगल्या रीतीने पार पाडण्यासाठी सुप्रिया कोरडे धनश्री जाधव गुंजन जाधव विराज कापसे यांचे सहकार्य लाभले.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/455859994_7940823609320821_5589129017939324552_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yHc6SvsF9XUQ7kNvwFRdDxW&_nc_oc=AdkXn47ZjTlqQ91F3mpBiI6WO8dwoOaOwOT5N7d8vSUlT3GIDaxPn7LMH44PVGAfNq4ss54TeUOL93NcNRZHygqm&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=ooAEI6MMIwx-JzTLY9tBoQ&oh=00_AfEBYzBMNWMpw10B2_f7yK-98oAYmK1bWcxrItqkHtylhA&oe=67F9D4DD",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02nEDVCUHeqSssLFCGdFBYUcGA9ix62Co9Z17V8em56oicpYJNVPbFBLQzQjqhPMAZl"
  },
  {
    id: 6,
    title: "लगोरी फाउंडेशनकडून पंचगंगा स्मशानभूमीत ५००० शेणी दान उपक्रम!",
    date: "2024-05-16",
    description: "लगोरी फाउंडेशनच्या संस्थापक अध्यक्ष शुभांगी साखरे यांच्या संकल्पनेतून आज १६ मे २०२४ रोजी पंचगंगा स्मशानभूमीत ५००० शेणी दान उपक्रम राबविण्यात आला. या उपक्रमामुळे समाजात एकता आणि मदतीचा हात देण्याचे एक महत्त्वाचे कार्य घडले आहे. लगोरी फाउंडेशनच्या अंतर्गत अशा प्रकारचे अनेक उपक्रम वेळोवेळी राबवले जातात.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/441881171_7436085976461256_4758713055987682142_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ynxqpWi3iHcQ7kNvwEqn1e8&_nc_oc=Admnjlgc-EOk0H7MDjn9yQ88RF9lRzYkJU3v3DKXnyZGouHgX6ALpXXT7BVbY33T-Sjeo5UTROdri3U7P1YjiKDj&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=qNtaRM4GVUNXcBT4mm9CmA&oh=00_AfFkcdsCp4l5yVah1Tya0deIcD-482DC8kUw_FvcmC1xNw&oe=67F9E8C1",
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
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/431616825_7149635485106308_3298242842659419721_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7S9DG25QDgwQ7kNvwE0zn9w&_nc_oc=Adl8vIJKQW8CswRgkUXg5osfFxkvhpj9AgVqBriulQ9bTe3YRiv33GCAca1heByBYijUya7xq0E05Kzrkobhnuaa&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=WMS9cla644WSgAWSNmBwTg&oh=00_AfFiY3R4CIfqgPmHp1fBSSkaeCxB7qjCsfX5o96uy0xdyg&oe=67F9D962",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02fzjMYskjmjxpaeHZtBeppVJq5BHYHpR8seCW79usSFqsMuiAH91HEHUijfWCA5g4l"
  },
  {
    id: 9,
    title: "शिवजयंतीनिमित्त लगोरी फाउंडेशन कडून छत्रपती शिवाजी महाराज चौकात लेझीम रॅली व प्रात्यक्षिक",
    date: "2024-02-19",
    description: "लगोरी फाउंडेशन अंतर्गत काल छत्रपती शिवाजी महाराज चौक येथे लेझीम रॅली आयोजित करण्यात आली. छत्रपती शिवाजी महाराजांच्या पाळणा म्हणून लेझीम आणि लाठी काठीचा प्रात्यक्षिक सादर करण्यात आला. काही समर्पित महिलांच्या सहभागासह, शिवजयंती उत्सव अत्यंत उत्साहात आणि गौरवपूर्ण वातावरणात साजरा करण्यात आला.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/472425465_8841973732539133_7434182902718126087_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=PB95hY24TRcQ7kNvwE45sPi&_nc_oc=Adm37_vfcBuCXO6sZp9CMThBibO7O4PbXKQxv3DsncmliYSRwORlUHAfYEr7DMD32BKPnozpK6cwkrHbVDOqoxej&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=jRItGFv61ltTmZK_1wWKFA&oh=00_AfHVDzcE2E92XqMA8dj0gzBoS7UPgQPw7tFvVC2y1QJ1ag&oe=67F9DCEC",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid01MJYuJqMWKv1Dxa5fA8qnR69XHbsVewy61YGSamf51Zegm5qmFLaQ4syxycDCcz5l"
  },
  {
    id: 10,
    title: "लगोरी फाउंडेशनचा नॉनव्हेज स्टार्टर रेसिपी वर्कशॉप महिलांसाठी कौशल्य विकासाची नवी दिशा",
    date: "2023-03-08",
    description: "लगोरी फाउंडेशनच्या वतीने नॉनव्हेज स्टार्टर रेसिपी वर्कशॉप आयोजित करण्यात आला. संस्थापक अध्यक्षा शुभांगी साखरे यांच्या संकल्पनेतून धनश्री राजगिरे यांनी घरच्या घरी हायजेनिक आणि सोप्या पद्धतीने नॉनव्हेज पदार्थ तयार करण्याचे प्रशिक्षण दिले. महिलांचा सर्वांगीण विकास साधण्यासाठी, लगोरी फाउंडेशन अत्यंत कमी खर्चात हे वर्कशॉप उपलब्ध करत आहे.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/487513003_9352306924839142_7741579159428939415_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=adoPke8DRFMQ7kNvwGAEgHE&_nc_oc=AdluLzwHpCZ8_w5WXkWOc5WqLfVtuNn2iGZEcI5u_pEmHH2EKYYWqG8ZkCacT8OZFCATHuXfLDNb3c9hHJG0kAIp&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=YW5SNWZW-DjfUWppbwrA9Q&oh=00_AfEhA59uiFFgvl1TLQqt_48eOr7mH6p6dPU0fp0npenNDg&oe=67F9F676",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid04aP1eUhHoZDnDyDrFkQX7M9iWUX4dNVVWM5oob1vTDE2z6761p6GTxodt1NfTcJQl"
  },
  {
    id: 11,
    title: "लगोरी फाउंडेशनचा संक्रांती हळदी कुंकू सोहळा उत्साहात साजरा",
    date: "2024-02-24",
    description: "लगोरी फाउंडेशन कोल्हापूरने संक्रांती हळदी कुंकू सोहळ्याचे आयोजन शुक्रवारी शिवाजी मंदिरात संस्थापक अध्यक्षा शुभांगी साखरे यांच्या संकल्पनेतून मोठ्या उत्साहात केला. मान्यवर म्हणून सौ. स्निग्धा चेतन नरके, रंजना पाटील, सविता रायकर, मंगल खुडे आणि कृष्णा चांडक उपस्थित होते. ",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/425956725_7007765269293331_8329047326371269117_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BBxAnaqKRYMQ7kNvwGA6q1i&_nc_oc=AdmURwux4vyaD4a2Ak1-pN9HNbK95pcS4L7hPXGCCCq3JCqw_pNW-1PrisdzjcZsl5GemlnTvWKQA59o_Hkzf-JP&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=chh3QomVCRy0v2EHzYFb7A&oh=00_AfEiTPRuU1TLK77HosX8m7ZejuOwWGQRx2s13wMvozoWxA&oe=67F9E947",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02o6ZYfuDkp7ntFaVNojk1ptR78S1Rfnxo5VeqBx45XQRgGvAiGQpbj8YLthyZqhTZl"
  },
  {
    id: 12,
    title: "राजमाता जिजाऊ जयंती निमित्त लगोरी फाउंडेशनने सुरुवात केली महिलांसाठी मोफत स्वरक्षण प्रशिक्षण",
    date: "2022-01-12",
    description: "स्वराज्य जननी राजमाता जिजाऊ जयंती दिनानिमित्त लगोरी फाउंडेशन, संस्कार शिदोरी मंच आणि शांतिदूत मर्दानी आखाड्याने संयुक्तपणे मोफत लाठीकाठी प्रशिक्षण, फोटो पूजन, शास्त्र पूजन आणि मर्दानी खेळाचे प्रात्यक्षिक आयोजित केले. हा कार्यक्रम संस्थापक शुभांगी साखरे, स्मिता खामकर, सूरज केसरकर सर, आणि अन्य कार्यकर्त्यांच्या संकल्पनेतून साजरा करण्यात आला.",
    image: "https://scontent.fblr24-3.fna.fbcdn.net/v/t39.30808-6/480047991_9061820723887765_306280664490861300_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Bu3K0Egcs_QQ7kNvwGkLhmb&_nc_oc=AdnIyOJw-qSdHUELsCKmtt4A9K-B6KMMph-rJNoaW7pJioyA651i5WSkPIx0XEktQtXaIoWzDj8tG0ETrgkPRibE&_nc_zt=23&_nc_ht=scontent.fblr24-3.fna&_nc_gid=ah2gWD9KEgXz5KO9SNUsAA&oh=00_AfGoQMaXl4G80ng9kXbFFsTxwAHThEtRqii2WOowkmZFjw&oe=67F9FEA4",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02AxVWW6bLcgPdKTr8kQGtVuB6hW4EDyNMv4bo7TTZCiXryhnhZ5DugVn39bkmrJXgl"
  },
  {
    id: 13,
    title: "जिजाऊ जयंती निमित्त लगोरी फाउंडेशनचे राजमाता जिजामाता यांच्या पुतळ्याचे पूजन",
    date: "2024-01-12",
    description: "जिजाऊ जयंतीच्या औचित्याने, लगोरी फाउंडेशन कोल्हापूर यांच्या वतीने राजमाता जिजामाता यांच्या पुतळ्याचे पूजन करण्यात आले आणि आई साहेबांना अभिवादन केले. यावेळी संस्थापक अध्यक्षा शुभांगी साखरे, पल्लवी घाटगे, उमा बन्ने, ज्योती वेदांते, आरती कनेरे, दीपाली पोळ आणि अन्विका देसाई उपस्थित होत्या.",
    image: "https://scontent.fblr24-3.fna.fbcdn.net/v/t39.30808-6/418731236_6921757617894097_4896679337675774805_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zjY2jb12KEQQ7kNvwHFlhSe&_nc_oc=AdncfHxQcHrSuDBoSwIJeu0HEG3axX8jrGpokM88TFI3mObyGMZFyGF_BVOwveaMnRJdN-nkDU99D3gqVM9HvZ07&_nc_zt=23&_nc_ht=scontent.fblr24-3.fna&_nc_gid=DJOasxFpPQh41nxD27ZCVg&oh=00_AfHDa1thDnQwBOMG_uA5I0ujXwI41lKpFCj2_a3BLF0Q6Q&oe=67F9F882",
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
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t1.6435-9/132564006_3487942421275651_1307399249280735403_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LhIvwD9XzQ8Q7kNvwGvyJo4&_nc_oc=Adn5MRfrvRWdmU4fLDePviyHApqdRpHoLTToUK0CvB5cixOfMbSUC1z2Dc-EBzn8aFCDRFbWXdUlsqo5NEdLv92M&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=pDmO8FEpsNatXzyP5YoZbQ&oh=00_AfEBv4gWv0MamQD-6VYi5WC0RowPJ4VecLeSXWn8xJbaiA&oe=681B8E0C",
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
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/475652621_8975172815885890_2926085026469876876_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=0iupFiRBHf8Q7kNvwFALIW_&_nc_oc=AdlPgoyem6gV0tgBvw6uuQvNEJFgRC5GHDvJRGebB1niSQxbsfpwfiWNRD3rskkL1V1uDwx0BRbItTsuZ_P-Pgdj&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=89ULxwS4ZYMExMYuJZw9Zw&oh=00_AfF8gD5ju5iQIcYzxen2IkLOyQbz6hURfJoZ1q463ZuhTA&oe=67F9DA48",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02QuCAArQTC6g7KkEPZZhv6cKzVyMbw7cykzVYtzqtfrXZSoPccBe28FGyHej2U2Z7l"
  },
  {
    id: 30,
    title: "कुंकूमार्चन सोहळा आयोजित - शारदीय नवरात्रे निमित्त",
    date: "2021-10-12",
    description: "लगोरी फाउंडेशन ने शारदीय नवरात्रेच्या पावन पर्वावर कुंकूमार्चन सोहळा आयोजित केला, जो विठ्ठल रुक्मिणी मंदिर, मिरजकर तिकटी येथे मेघा ताई भांबोरिकर यांच्या शुभ हस्ते संपन्न झाला. या कार्यक्रमाचे आयोजन लगोरी फाउंडेशन च्या संस्थापक अध्यक्षा शुभांगी साखरे यांच्या अध्यक्षतेखाली सविता सोलापुरे, शिवानी यादव, प्रेरणा पाटील, अलका सागर, वैशाली गिड्डे यांच्या सहकार्याने करण्यात आले.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/475756193_8976783205724851_7954561858167063041_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xebcDojsYIkQ7kNvwGPl25-&_nc_oc=AdmIUmzSeI9DrP1e82tG3ES8KDQ2f7-5zDIY5BLlcGjUFt1DNRiapyEJb5uItPBH2O1UAmZ3Nio4EZZksMF3_IqK&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=d2UV2Mmqs9bknZaKWaYOEA&oh=00_AfEHLWI9Dh-tBi8WiVGBOmcJ9lue1DAlom0a__CL1qZ11Q&oe=67F9E532",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0KmbZVoekpTaiMjnNnrmqNyNDB68LhXyGEpNfM6s6h2JVrykw5svTZH4HXRtKRK3zl"
  },
  {
    id: 31,
    title: "महा गोधडी अंबाबाई च्या चरणी - उपक्रमामध्ये श्रमदान",
    date: "2021-10-16",
    description: "संस्कार शिदोरी मंच द्वारा आयोजित महा गोधडी अंबाबाई च्या चरणी या उपक्रमामध्ये लगोरी फाउंडेशन च्या सभासदांकडून श्रमदान करण्यात आले. या उपक्रमाचे आयोजन स्मिता खामकर आणि अंजली दळवी यांच्या संयुक्त नियोजनाने संस्कार शिदोरीच्या कार्यालयात घटस्थापनेपासून सुरू करण्यात आले होते. या उपक्रमात लगोरी फाउंडेशन च्या संस्थापक अध्यक्षा शुभांगी साखरे, सविता सोलापुरे, वैशाली गिड्डे, प्रेरणा पाटील, सीमा रेवणकर, स्मिता ओतारी, मंगल काळे, अश्विनी कांबळे, राजमती चौगुले, दिपाली मोरे, नेहा मोरे यांच्यासह इतर सदस्य उपस्थित होते.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/476031361_8979689825434189_8865321925608829481_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OQsmX2ciAn8Q7kNvwFO4uKy&_nc_oc=AdmxRJ-vwg0v8NvG4GdTLnliLb6cTmFNczWe5dVuDrmRIVJvfECnV8zgDkoEbuvBHZ0T1QLswYYwX6CtwcxrjEW-&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=CatloGX2c-F-FSf1TE-Gfg&oh=00_AfFOAt13QWqkkw544NDLXjaxlqnofKf-igzDne8aLbBAHw&oe=67F9EDA7",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid023kewKvciWhFs4rPfMfcJ1xQM3qC8oaSRBqQq7dhKzVNWr1E2fPQspuJ8XwX58Dqyl"
  },
  {
    id: 32,
    title: "एक पणती अंधारासाठी - दिवाळी मदत उपक्रम",
    date: "2021-11-02",
    description: "लगोरी फाउंडेशन ने दिवाळी च्या शुभ मुहूर्तावर धनत्रयोदशी च्या औचित्याने एक पणती अंधारासाठी हा उपक्रम राबवला. या उपक्रमाद्वारे, महामारीच्या काळात दिवाळी सारखा मोठा सण साजरा करणं अनेक गोरगरीबांसाठी अवघड आहे. त्यांना लगोरी फाउंडेशन ने मदतीचा हात देऊन, त्यांच्या जीवनात एक छोटी पणती उजळवण्याचा आणि चेहऱ्यावर हसू आणण्याचा प्रयत्न केला. उपक्रमात गोरगरीबांना साडी, ब्लँकेट, मिठाई बॉक्स, मास्क, तेल, साबण, उटणे, फटाके, फराळ साहित्य यांसारख्या वस्तू देण्यात आल्या.",
    image: "https://scontent.fblr24-3.fna.fbcdn.net/v/t39.30808-6/475985107_8988329977903507_6801989778158652961_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=li4u4f8JydUQ7kNvwFHVwh1&_nc_oc=AdlUI8_CmSgoQ0h86HLjZJPcDibVyCo8pNKvJKwn_YpfQLdW0ZUTeZJx-jY-wX0MzvIeT1Zae5PQZ1YMEtRAemlP&_nc_zt=23&_nc_ht=scontent.fblr24-3.fna&_nc_gid=tnVxuNOHGdmuqImC6n2o1w&oh=00_AfF9TESlkO_XwEf5vXnnH3xb3M_jO-wW-wT-ZS7NQ_nTwg&oe=67F9D415",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid026WeX8qJYaJA4Fjpdzs3neRaDV3C9NKb4Yv6pdc2xdM7CDqiF9vxa8pwtcBGmUdW1l"
  },
  {
    id: 33,
    title: "लगोरी फाउंडेशन आयोजित वार्षिक स्नेहस्मेलन: महिलांच्या सुप्त गुणांचा उदय",
    date: "2023-10-11",
    description: "लगोरी फाउंडेशन च्या वतीने आयोजित वार्षिक स्नेहस्मेलन शनिवारी, ९ ऑक्टोबर रोजी शिवाजी मंदिरात मोठ्या उत्साहात आणि प्रचंड गर्दीमध्ये पार पडले. संस्थापक अध्यक्ष शुभांगी साखरे यांच्या संकल्पनेतून महिलांमधील सुप्त गुणांना वाव देण्यासाठी हा छोटा प्रयत्न करण्यात आला. कार्यक्रमाला प्रमुख पाहुण्यांच्या रूपात मा. निलोफर आझरेकर (महापौर को.म. ना. पा.), मा. मनीषा जाधव (इनरव्हील क्लब ऑफ सनराईझच्या अध्यक्ष), मा. प्राची फडणीस (कथक्क विशारद), मा. ज्योती पडवळ, मा. सविता रायकर, मा. अपर्णा गांधी, मा. स्मिता खामकर, श्री. कृष्णा शेट्टी (उदयोगपती, कोल्हापूर) यांची उपस्थिती होती.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/409209787_6806316102771583_971416728811811129_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XpEsvjZYJc4Q7kNvwFemv7Q&_nc_oc=AdnZcModwbaq1wOy02-D6CuB_YBubC1QVpBhtNnI-Ks07vauJIffEfzaHZgTAGvcyFsCJRllC6fG9qasEYiqMb_d&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=gJZLEKFIVsWdj1QdzWI6lw&oh=00_AfEMv0livGuViIh9hjsiLtPrMWej3wd4mRLZUg7Zm1NzEA&oe=67F9EE93",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02dXZEhBJCgK41GzixXnL1h4NKiy2DrhmNMRXkRYnkdTrfGZHBeVQ9DDGvY4FXuMuJl"
  },
  {
    id: 34,
    title: "लगोरी फाउंडेशन कोल्हापूर आयोजित स्पोर्ट्स डे",
    date: "2023-10-23",
    description: "संस्थापक अध्यक्ष सौ शुभांगी साखरे यांच्या संकल्पनेतून टिकी टाका टर्फ येथे संपन्न झाला, कोच उमेश चौगुले सर यांनी सर्व खेळ हे अतिशय नियोजनबद्ध पार पाडले यावेळी महिलांन करिता कबड्डी, क्रिकेट,रनींग, लींबू चमचा, लांब उडी,पोत्यात पाय,(सॅक रेस )दोर उडी अशा अनेक विविध स्पर्धा घेण्यात आल्या महिलांनी अतिउत्साह त्याला प्रतिसाद दिला. ",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/403891239_6737710016298859_3561803063248275175_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LI_OphkI-qYQ7kNvwHuwYTw&_nc_oc=Adn-87T_WOyQ-IsRsrdoVNmb2Dy2y8lqYWsuMpcUQexl8rbk_Ngnj7Y5D_pnbonrMu4iooWP8XZZplge-aGGRmWV&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=VugifKqZhX13Li1YAeeDKQ&oh=00_AfG-dy6AsGxqiULihiBQmdUlyahLqbhbdAPCcq2OuFjN2Q&oe=67F9EE84",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0gwzWieYrxe4uXKGbT1m9seaAvArCk21hfCivEGwiWyuiz7FxTygLZCJVoRThiso8l"
  },
  {
    id: 35,
    title: "रणरागिनी पुरस्काराने सन्मानित",
    date: "2023-10-24",
    description: "दसऱ्याच्या सणानिमित्त, हील रायडर्स अडवेंचर फाउंडेशनने लगोरी फाउंडेशनला रणरागिनी पुरस्काराने सन्मानित केले. यासोबतच, भवानी मंडप येथील ऐतिहासिक कमानीला तोरण बांधण्याच्या सोहळ्यात आम्ही सहभागी होण्याचा संयोग मिळाला. आपल्या कार्याची पोचपावती मिळाल्यावर दिलेल्या सन्मानामुळे खूप प्रेरणा मिळाली आणि नवी ऊर्जा मिळाली. हा ऐतिहासिक क्षण आदरणीय संस्थापक अध्यक्ष शुभांगी साखरे आणि अन्य सभासदांसोबत साजरा केला.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/395769712_6631413270261868_4936593018838895211_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=xQ_I9f1PMFsQ7kNvwG61Jzj&_nc_oc=AdnIg3yB15d14FFpp8l2N2qvnANAVzPxxU9tu62T4ecC-mIeK8fgYhIefzYjFAEH91ua1SEbeSME_Riqwd7k3sQd&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=bbOT-AytS4BXezxudyHJWA&oh=00_AfH3mszV_WT-_RxkHEuLlK3szjbJP6mYJKX_IhgNhggL4w&oe=67F9D5EF",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0gkxm4BKdCEXfTmkhXfLZcbPtTYC5zgpGZVg3YWfi8Hiwmdazi36me2D57zdYUb1ol"
  },
  {
    id: 36,
    title: "जय जिजाऊ महिला मंडळाचे नव दुर्गा देवी पूजा आयोजन",
    date: "2023-10-22",
    description: "जय जिजाऊ महिला मंडळाने उत्तरेश्वर पेठेतील महिलांच्या पुढाकाराने नव दुर्गा देवीची पूजा याचना आणि विविध स्पर्धांचे सुंदर नियोजन केले. मंडळाच्या अध्यक्षे सुनीता ताईंनी आम्हाला आरतीसाठी आमंत्रित करून मान दिला. मंडळाच्या भावी वाटचालीस मनःपूर्वक शुभेच्छा!",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/394318301_6625139920889203_4500783522225245452_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=WWF9pzJ9YaYQ7kNvwHPgNyl&_nc_oc=AdkELrQ1PXtrU8c3Cjh1LtmkpZ6W_UEh3RW2bK8eQkCchtQld75CvRLNUmHmyX7u-I4USXqrQ3NP5cUGbkRptJLg&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=1NWujhxBP3zCXiIlBVI7JA&oh=00_AfHtI-BCmnBOu_SvAxUYLofoAr5SYKE36TG0D0bMPutFoQ&oe=67F9FD3C",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0GqSvXHQzFubWEboRbcamHuPfgBFEjyew672Yodfrv1erDjzGC733zZpBQf631RuGl"
  },
  {
    id: 37,
    title: "शाही दसरा कोल्हापूर: नवदुर्गा बाईक रॅलीत लगोरी फाउंडेशनचा छान परफॉर्मन्स",
    date: "2023-10-20",
    description: "शाही दसरा कोल्हापूरच्या नवदुर्गा बाईक रॅलीचे आयोजन जिल्हा माहिती कार्यालयाने केले. यामध्ये लगोरी फाउंडेशन कोल्हापूरचा समावेश होता, ज्यांनी खूप छान परफॉर्मन्स सादर केला.",
    image: "https://scontent.fblr24-3.fna.fbcdn.net/v/t39.30808-6/394278542_6616285938441268_1583555996537731033_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aQ8LDiMuY8UQ7kNvwG_iUS5&_nc_oc=AdlYO-1hKp_5AeZUHHmZ_ZpH8-uVuVFxs49kLcsJqzWVss_fSHdyEQYO_8JivDLurVoxFnwPH8GJUxCo3ZrwEiDX&_nc_zt=23&_nc_ht=scontent.fblr24-3.fna&_nc_gid=lrAJJ9HN_M85yIm5Pnk-MA&oh=00_AfEH5oxzQ5iIcWoszgicTvT_x1a-49JdnWHxLnksbcGvSA&oe=67F9E8C1",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02TFGaacSjnFYMeXMCaxjuij9Fd9CERgrtmZGJmPgbizYGY48aWmH6Dibfax7yE8ZPl"
  },
  {
    id: 38,
    title: "लगोरी फाउंडेशन आयोजित भव्य झिम्मा फुगडी २०२३",
    date: "2023-10-03",
    description: "लगोरी फाउंडेशनने शिवाजी मंदिर येथे आयोजित केलेल्या भव्य झिम्मा फुगडी 2023 कार्यक्रमात महिलांनी प्रचंड उत्साहाने भाग घेतला. कार्यक्रमाचे परीक्षण सौ. पूनम देसाई यांनी केले. विजेते ग्रुप: तृतीय क्रमांक – साज ग्रुप, द्वितीय क्रमांक – राधेय ग्रुप, आणि प्रथम क्रमांक – फुलबाग ग्रुप. वैयक्तिक स्पर्धेत स्नेहल जाधव, विद्या पाटील यांना बक्षीस मिळाले.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/385258492_6550068458396350_8558179299001259732_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=ENuGL68zjn4Q7kNvwEUhBx1&_nc_oc=Adng8OwSVap_9YHxBKv8QmFDCcjwrsbwbEA-zujgvIjxn8QrNDX4eWENVdg_Dgz83Z7t1Pfbu56ionl_hZdNlIUw&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=lKqBBNhcKJoV0Ke8mrnAZA&oh=00_AfFgmJpOsb-MHCbs6JK7oJX_Ne8Hnvl0NGeYNZJqD9aL3w&oe=67F9E626",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid037XNeEuWJSAekgJVWS8sRWr4hNc56WHaiRwvKDz4scsSVgXPGcAzGSbGCerDFF9ml"
  },
  {
    id: 39,
    title: "एकात्मिक बाल विकास योजना कार्यक्रम",
    date: "2023-09-13",
    description: "शिवाजी मंदिर, शिवाजी पेठ येथे एकात्मिक बाल विकास योजना अंतर्गत लहान मुलं, त्यांचे पालक आणि गरोदर मातांसाठी एक अतिशय सुंदर कार्यक्रम आयोजित करण्यात आला. यावेळी सुदृढ बालक, पोषक आहार, टाकाऊ पासून टिकाऊ, रान भाजी प्रकार अशा विविध स्पर्धांचे आयोजन करण्यात आले.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/378346711_6476492209087309_3138838786652454748_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_AkkRS4aKgUQ7kNvwGSF3Wp&_nc_oc=AdkqGL2jUFZbrrL1hR9EpPqpHRdMs6tguR50bl7RoX-Mu5_cumRe0DUDSY57JfZkJh3kg9g-SVFzLkjuXfW0MqFJ&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=niLBXQxAUniVLs5mRbM8RA&oh=00_AfEgGH-r74UQAUrOyJRFiZklLoBaFMhqeUM2xWDQZqawyg&oe=67F9C949",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0u6wiA71BRRxXe7d8vEbWvTX6a9eDZR8KLpw55TZbcHMGk9U4CQn31XcXJGg3RDWHl"
  },
  {
    id: 40,
    title: "श्रावणमास निमित्त कुंकूमार्चन २०२३",
    date: "2023-09-09",
    description: "लगोरी फाउंडेशन आयोजित संस्थापक अध्यक्ष सौ. शुभांगी साखरे यांच्या संकल्पनेतून श्रावणमासाच्या निमित्ताने कुंकूमार्चन 2023 चे आयोजन विठ्ठल मंदिर, मिरजकर तिकटी येथे करण्यात आले. अतिशय जोरदार पावसातही महिलांनी उत्स्फूर्तपणे सहभाग घेतला. मेघा ताई भाबुरेकर यांनी महालक्ष्मी सहस्त्रनाम पठण केले. कार्यक्रमासाठी डॉ. स्मिता गिरी आणि नीलिशा सामंत यांची मदत अनमोल होती. ",
    image: "https://scontent.fblr24-3.fna.fbcdn.net/v/t39.30808-6/375854445_6460347484035115_8827123364971872070_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tct6AdDUiBsQ7kNvwGiOrLj&_nc_oc=AdlWoydY00fw3Hi2eVJ2tgw6Qhpe4SY2Ig9dDBnBZjKWxiVDmyTsQ6C8l4-IA3_8lqhbwQ3sK8a1O1DuAugqOM65&_nc_zt=23&_nc_ht=scontent.fblr24-3.fna&_nc_gid=mR4IldUqGmNq1YCxlx2CDA&oh=00_AfFE_e8N-xTvmhdd12n8eoa1LJCWEvEr1El4jZD10hv6ow&oe=67F9EFB8",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0MnLravk2vRqyhFsZpLduLFTWTMGiingW7iTRjdT8ppFWsauTMb1AAHHemKfNrgPQl"
  },
  {
    id: 41,
    title: "श्रावण सोमवार ट्रेकिंग - सातेरी शिव शम्भो दर्शन",
    date: "2023-08-23",
    description: "लगोरी फाउंडेशन कोल्हापूर आयोजित ट्रेकिंग कार्यक्रम श्रावण सोमवार निमित्त सातेरी येथे शिव शम्भो दर्शनासाठी पार पडला. हलक्या पावसाच्या सरींमध्ये निसर्गाचा आनंद घेत देवदर्शन झाले. उपवास असतानाही नविताचा वाढदिवस, निकिता चे भेटी, सविता आणि इतरांच्या सुंदर रिल्स, गप्पा, गाणी आणि प्राजक्ताच्या विनोदी किस्स्यांनी वातावरण रंगले.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/370597510_6422329291170268_6873708678397838314_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8prMBL9g2KoQ7kNvwFuN3s6&_nc_oc=AdmAVYWx_Wh0PRzKa1GboZC0XgPUlQSUKVNUpUwAwUFNEI5BcRpOlklFV610xoiL3c3wnH5lQzWvGIUgTbWR0opj&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=b7uJgGZEptZIy-MswHWTeQ&oh=00_AfHQZcm77-ii4bq6lBzH4J0UrddchvcYFfG4d1S9273z4g&oe=67F9D625",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02aZmZYP6iMXrzGAPtCG66zaJqqxcLN3ukokHdQYPL775Uq78zGjMCeZrWAAX99xaHl"
  },
  {
    id: 42,
    title: "स्वातंत्र्य दिनाचे औचित्य - समर्थ श्रावणी केअर सेंटरला भेट",
    date: "2023-08-15",
    description: "15 ऑगस्ट, स्वातंत्र्य दिनाच्या औचित्याने लगोरी फाउंडेशनने समर्थ श्रावणी केअर सेंटरला भेट दिली. संस्थापक अध्यक्ष शुभांगी साखरे, प्रेरणा पाटील, सीमा रेवणकर, नेहा कुडाळकर, आर्या पाटील, निकिता कापसे यांच्या सोबत केअर सेंटरला भेट देऊन, रुग्णांशी गप्पा मारल्या. रवी दादांसोबत गाणी गायली आणि उपस्थित आजोबा-आजींच्या चेहऱ्यावर आनंद पाहून मन भरून आलं. गायक दादांच्या गाण्याने वातावरण रंगवले.",
    image: "https://scontent.fblr24-3.fna.fbcdn.net/v/t39.30808-6/366940884_6377032205699977_8461896298195864637_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=QO8Z26RnOHwQ7kNvwHKROtu&_nc_oc=AdkKoVKJ0nWKyZj3i8z5sCS-B_TpKD_ZkpjpuFYER-ugJBars1uBEW3WH0N_zRXE-oRPI94YCrrCmR3l5ZCYUNrF&_nc_zt=23&_nc_ht=scontent.fblr24-3.fna&_nc_gid=BIjtdKtO6fvhQ2fdm10TEA&oh=00_AfFNbwd7YV2X3x_7snyR-9KnlDhgEEp-E3xsyeaWpsBQ7A&oe=67F9D96E",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0jsAAgadm17LW4vGEs4RbEYrowWw8v41eogu9bfXQnr857KMibsho4tumLNKf411Ul"
  },
  {
    id: 43,
    title: "महाविष्णुसहस्त्रनाम सोहळा",
    date: "2023-08-03",
    description: "लगोरी फाउंडेशन आयोजित महाविष्णुसहस्त्रनाम सोहळा आज, ३ ऑगस्ट रोजी सनगर तालीम हॉल येथे अत्यंत भक्तिभावाने पार पडला. संस्थापक अध्यक्ष शुभांगी साखरे यांच्या संकल्पनेतून आयोजित या कार्यक्रमात माननीय सौ मेघा भाबोरीकर मॅम यांनी विष्णुसहस्त्रनाम जप आणि महिलांना अधिक मासाचे महत्त्व सांगितले. २५१ महिलांनी या सोहळ्याचा लाभ घेतला.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/362288374_6338570242879507_1815175455256543551_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SBrbA53mGJsQ7kNvwGy9Nda&_nc_oc=AdnT03V-C0lcKRIDFhYh4LEDn761Mptaj1Y8JLNu8jpbR4aScDuIKHrIyRq4lqn-uvTXSz3TBZJv5mBKqT2hvW45&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=EQxX6I-4DVASrDUswiiKSw&oh=00_AfHwlha0FDNOk8Sr4QMEcEkdIsMK5iQdpiF8H4XJVMdoIQ&oe=67F9D370",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0wYNUtZPKfS65YVMujL2MdHiMKECsNXuePk4qQdpQsUFdWAXR45k3v55jMiDDCjU1l"
  },
  {
    id: 44,
    title: "लगोरी फाउंडेशन मान्सून फन टाइम धमाका २०२३",
    date: "2023-07-04",
    description: "लगोरी फाउंडेशनचा मान्सून फन टाइम धमाका आज सागर तालीम येथे उत्साहाने पार पडला. संस्थापक अध्यक्ष शुभांगी साखरे यांच्या संकल्पनेतून कार्यक्रम अतिशय आनंदात आणि उत्साहात पार पडला. वटसावित्री मी निसर्गाची स्पर्धेचे बक्षीस वितरण सविता साळोखे यांच्या उपस्थितीत करण्यात आले. स्पर्धेचे विजेते म्हणून प्राजक्ता पाटील, नविता नाईक, कविता पाटील, सुप्रिया कोरडे आणि आशा खराडे निवडक ठरल्या.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/358047860_6237006559702543_1012551336501810839_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gJ02JQVqXNEQ7kNvwEhXSL6&_nc_oc=AdmQvmLDPIleXVWgqttG9vN_1IEwNeLB7gx4BR5vgTHgqdXuHXdbGoaiRdyMorbr0l_McE-ErAgAzPogWoJFSNGb&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=OhNOfcjonmDiCbpuK5Kp-Q&oh=00_AfH4FdhxkwgH2pC4wMqTc_drKj4yF0EcrAGE8qsEf3hjtg&oe=67F9F519",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid024ee1YPsSR8haBQo22uKB3fCmXYU5EBBMc2LNKFCLFjnFutkTgeSHpA2zJDGmCK4kl"
  },
  {
    id: 45,
    title: "सखी मेळावा २०२३ – लगोरी फाउंडेशन कोल्हापूर",
    date: "2022-03-28",
    description: "लगोरी फाउंडेशन कोल्हापूर आयोजित सखी मेळावा आज भेडवडे गावात उत्साहात पार पडला. संस्थापक अध्यक्ष शुभांगी साखरे, शिवानी यादव, प्रेरणा पाटील, अलका सणगर, ऐश्वर्या झाजगे, तृप्ती हत्तीकोटे, निकिता कापसे यांच्यासह विविध महिलांनी सहभाग घेतला. कार्यक्रमाचे उत्कृष्ट आयोजन वैशाली चव्हाण, रुपाली महाडिक, तृप्ती माने, आणि सुनीता एडके यांनी केले.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/481272625_9162368983832938_6910403805781266849_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TeNiEosPncMQ7kNvwG_PRqf&_nc_oc=AdlMo-aVDD4n70UUdOOSoLkVsnzpFlG4K1FwsXu-VCyykZAawOgsee5KJnkN4np5ImubckQMo0xaDekCcqynHvUb&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=OPv_8dWxNwtfCm_gW3kCHA&oh=00_AfFhxAdTSxg2Wntnzdwx62kktcsJGxSbnz6kV-HD-nE-2A&oe=67F9DBFD",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid09jBPsSvsW2oLv3bVi2pYhuuVujmaJdurdZ7siFtQVrCr2o2xRVBuTpky67MvuUTBl"
  },
  {
    id: 46,
    title: "'एक धागा प्रेमाचा' – रक्षाबंधन विशेष कार्यक्रम",
    date: "2022-08-22",
    description: "लगोरी फाउंडेशन, समर्थ श्रावणी सेवाभावी संस्था, आणि SDR फाउंडेशन कोल्हापूर यांच्या संयुक्त विद्यमाने रक्षाबंधनाच्या दिवशी एक खास कार्यक्रम आयोजित करण्यात आला. या कार्यक्रमात कोल्हापूरमधील पूर परिस्थितीत आपत्कालीन व्यवस्थेमध्ये काम करणाऱ्या कोल्हापूर जिल्हा आपत्कालीन व्यवस्थापन रेस्क्यू फॉर्सच्या मुला-मुलींना राखी बांधण्यात आली.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/485373608_9264330393636796_123331890271464502_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=INSnM39VzJwQ7kNvwH9fp6W&_nc_oc=AdlU0eJDGuLYRioiek15ev3RhKf8PL3lj1DiqbRcGYYsqdZY09IIMgt3v7myTIRXowht_kOd_BVdA8_XpmUscKJ_&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=kcA1dPd7MVEnrPbzbtXY3Q&oh=00_AfF8bEFWAHHMVZ3G3oUMH0M1uak6kAo53G56BsnGlMptbA&oe=67FA0028",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid07JjdapLhcu9KXmqcD4LufbMA6zLWhX2e9yLnHb1pqv4pPnuXnVe6L7xyc12Na1Axl"
  },
  {
    id: 47,
    title: "वाढदिवस आणि श्रावण सोमवार: एक अनोखा अनुभव",
    date: "2022-08-01",
    description: "लगोरी फाउंडेशनच्या संस्थापक अध्यक्ष शुभांगी साखरे यांच्या वाढदिवसाच्या आणि श्रावण सोमवाराच्या विशेष प्रसंगी, आज 'एकटी' संस्थेच्या अनाथ व एकट्या महिलांसोबत कोल्हापूरमध्ये एक खास कार्यक्रम आयोजित करण्यात आला. या अनोख्या प्रसंगात केक कापून, गाणी गाऊन, फळ आणि राजगिऱ्याचे लाडू वाटून महिलांना आनंद दिला. या कार्यक्रमाच्या साक्षीदार म्हणून 'एकटी' संस्थेच्या महिलांनी आणि कुलकर्णी आजी, रवी दादा, रमेश भाऊजी यांच्या गाण्यांनी सजीव मैफल निर्माण केली.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/485391122_9262250980511404_7269828970303709253_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MrtRlpqplWIQ7kNvwFt0xw0&_nc_oc=Adl5eLcSxXnNV9h8CqtuT9lflZO6Fl4Nx6VFrgmkiH9KEv6DZ38GOKvjjl-vxW93Sro2Rb5JYzpBIha-q2a7WHi9&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=bP-um2VvO_fv10nCBn1ltA&oh=00_AfGeybrXwif2mVXlxKMeqmUPyo-iYlxIBv6dzkMU_Yv5LA&oe=67F9E11C",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0ntmYEUFMpUPN3YTi9RsPZeZYo77tGWKFsPornoHMXZb5bEKoC2SHcbmSiV19FieWl"
  },
  {
    id: 48,
    title: "जागतिक महिला दिन २०२३: एक अविस्मरणीय सण",
    date: "2023-03-08",
    description: "आज 8 मार्च, जागतिक महिला दिनाचे औचित्य साधून लगोरी फाउंडेशन कोल्हापूर आणि रिलायन्स मॉल लिमिटेड यांनी एक शानदार वुमन्स डे पार्टी आयोजित केली. या कार्यक्रमाला 158 महिलांनी उत्स्फूर्तपणे सहभाग घेतला, आणि सर्वांनी मिळून मजा केली. महिलांनी छान सेल्फी पॉईंटवर सेल्फी काढल्या, गेम्स खेळल्या, व्हिडिओ बनवले, आणि एकमेकांसोबत मस्त आनंद लुटला.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/489012922_9361093723960462_8972493256765636198_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GF7lpm-Ym1kQ7kNvwEek5eE&_nc_oc=AdkJRaZEsLpBpB7hwjCpy0a3P0LJmo7Q7NoqHP-8YJ-GNhIy6jzX3eJuqRpR27S4fD6o4qTw387Be0QfuPcpBM0D&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=cQK7J37ZYCv7HXGz8db2Eg&oh=00_AfH43mNZcMp9hwGyA45hjz5jf96wjvr8nMAPA-TmYwTYpA&oe=67F9F777",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02Ac53MS6arKkWcENDgFhr7yPZhMBkDiqS6vkxTASTHkhz9x95yPK3vHZR8PGU793pl"
  },
  {
    id: 49,
    title: "शिवजयंती २०२३ लेझीम रॅली - एक अभूतपूर्व उत्सव",
    date: "2023-02-23",
    description: "लगोरी फाउंडेशनने शिवजयंतीच्या औचित्याने मिरजकर तिकटी येथून लेझीम रॅलीचे आयोजन केले, ज्यात सर्व महिलांनी उत्साहाने भाग घेतला. संस्थापक अध्यक्ष शुभांगी साखरे यांच्या नेतृत्वाखाली, स्मिता खामकर (अध्यक्ष, संस्कार शिदोरी मंच), वैशालीताई महाडिक (अध्यक्ष, आनंदीबाई महिला बहुद्देशीय संस्था), उज्वला पटेल (मिसेस इंडिया फेम), कशिश वाधवा (हाय-फाय लेडीज कलेक्शन), आणि चारूलता चव्हाण यांच्या उपस्थितीत रॅलीची सुरुवात झाली.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/488793716_9355477117855456_8646866595426938240_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ob_aOL0ipuAQ7kNvwGCcOce&_nc_oc=AdmF9g40G0pp-qdinjSMedke3V6qYDqhg1SCWp6YXsog1D3ird2GtIQweu6WHeWpY8O0Nfg0EqRSk6FTZhK_oepb&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=1ogqzeor17l9XVajmXZb7A&oh=00_AfGxdY_r8VB-UmvMM2fNz4RAcL-jQfptZ425kzZjLW5msw&oe=67FA0056",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0KPs5ki6huvRQjiko8iywMpJkS4npcBZTG6EMJK5pQwKhLhkrag8ZBkqkowGmKfbKl"
  },
  {
    id: 50,
    title: "संक्रांत हळदी कुंकू २०२३: एक अविस्मरणीय उत्सव",
    date: "2023-01-23",
    description: "लगोरी फाउंडेशनने 29 जानेवारी रोजी संक्रांत हळदी कुंकू महोत्सव मोठ्या उत्साहात सागर तालीम येथे आयोजित केला. संस्थापक अध्यक्षा शुभांगी साखरे यांच्या संकल्पनेतून कार्यक्रम पार पडला. यावेळी स्वाती शहा, सुमन (माई) वाडेकर, वैशाली महाडिक, सविता रायकर, तेजस्विनी पार्टे, स्मिता खामकर, सीमा रेवनकर यांच्या प्रमुख उपस्थितीने कार्यक्रमाला चार चांद लागले.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/487858596_9347632161973285_5177901328634969973_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=P5BrdSCsoTYQ7kNvwFFrArX&_nc_oc=Adk0B1lQxb3ysxe3KTFK73yK1SennwyW5R3ZukfyT7QH-rrfkpOJ3wCAew6CI9rThmjyBABKIb5AcedIQghoslQR&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=jbwvrU7twHHmSuhYk2tTMQ&oh=00_AfFwp5Aax3UkZvFUKRFJSWiZRrhaOBJqppKfAeWuaaT2HQ&oe=67F9EB26",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0TdYp9BJvbpVZE1GhMsVFts7i3YYUUPEx4Z7WqSP9aKWy6unkEA32TXBLrfHwkjGXl"
  },
  {
    id: 51,
    title: "लगोरी फाउंडेशन आयोजित स्नेहसंमेलन २०२३ चे काही सुंदर क्षण",
    date: "2023-01-23",
    description: "लगोरी फाउंडेशनने 2023 मध्ये आयोजित केलेल्या स्नेहसंमेलनाने संपूर्ण समुदायाला एकत्र आणले आणि विविध कार्यक्रमांसह एक अनोखी आठवण जपली. यामध्ये सहभागी झालेल्या सर्व महिलांनी आनंदाने भरलेल्या क्षणांचा अनुभव घेतला.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/488245661_9339374806132354_3796939467903982003_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HAGJ-wbWP0EQ7kNvwH5l4ng&_nc_oc=AdnLjMEsyduwAy8GyirRDLP-Qa7juOZCvK1Q8mNKsqM3Cg6I03cXa_BTi43ux_efGLO0ZQMVE5eSoXeDopj40yD4&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=xeOciUNPrPwb78LhQm1hPA&oh=00_AfESp1QgDj2JcPcdhOWmI7MO-1UXNftUbdEVRjEPym2AKQ&oe=67F9F820",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02Qu4Er9LwpRfNg7bZSqwFDvF4Ds1CjmXKFT1vh9Rgp2zFfDVKpxReQUXdWS2KX72l"
  },
  {
    id: 52,
    title: "कोल्हापूर येथील एकटी संस्थेला लगोरी फाउंडेशनची भेट",
    date: "2022-12-24",
    description: "कोल्हापूर येथील एकटी संस्थेला लगोरी फाउंडेशनच्या सदस्यांनी एक छोट्या पण प्रेमळ भेटीचे आयोजन केले, ज्यामुळे संस्थेतील महिलांच्या चेहऱ्यावर एक विलक्षण आनंद दिसून आला. या भेटीच्या माध्यमातून त्यांच्या जीवनात थोडासा सुखद परिवर्तन आणण्याचा प्रयत्न करण्यात आला.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/486869725_9327388740664294_3865822767632438449_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KPa5-0d1vcYQ7kNvwEJvGWe&_nc_oc=AdlaME3YPPDP0oxNVv5tk7prB-Yb7N528x7RpzjJbOmCtOBGKslc7RV5AVGi8ZR5aObl68aRsPVCbxK0noHxq3mn&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=5arGkGBqDXlFHcP7SWTueQ&oh=00_AfHo6sqaez_6YML5CxmZOFNJ0MI_hztj9tT1y-WsYYDLsA&oe=67F9FA0C",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0TMH26yrWGjaNwxFhobE2MHiRtdEEoBW5hXXT7MrV9WfYsS5c6P5zd2V1qMBCZxEJl"
  },
  {
    id: 53,
    title: "लगोरी फाउंडेशन आयोजित स्पोर्ट्स डे २०२२",
    date: "2022-12-11",
    description: "आज लगोरी फाउंडेशन द्वारा आयोजित स्पोर्ट्स डे उत्साहात पार पडला. हा कार्यक्रम संस्थापक अध्यक्ष शुभांगी साखरे यांच्या संकल्पनेतून आयोजित करण्यात आला. स्पर्धेच्या परीक्षक म्हणून सोनाली लगारे मॅडम आणि पारले मॅडम यांनी योगदान दिले. यावेळी प्रेरणा पाटील, आकाश साखरे, आणि ऐश्वर्या झांजगे यांचे बहुमूल्य सहकार्य लाभले.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/487082851_9320113224725179_3446162049732265329_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=E3mp4aZu-HUQ7kNvwEsFxWg&_nc_oc=Adk_v0RwqPmzZtZyiBoBBMtdCsopZ06tY-lb_jcd7uL7-9RE2nirZca9PmYyROxOaQ--03tIExaLAWvNPHxVmFte&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=ZkhbWn7tabmyQTVY4v3K0g&oh=00_AfEPluxIUzJkKnbI_aLaHG_14TOASSNGY1r3HWba8-HSZw&oe=67F9FF5C",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02HT3or8ZMUVti3gDyxSgdbBhnPJAtAKkWNnA2BF1UMHo7mpdkutX5MJhG9cPxL4tkl"
  },
  {
    id: 54,
    title: "शिवाजी पार्क येथील आग पीडितांना मदत",
    date: "2022-12-01",
    description: "शिवाजी पार्क येथे झालेल्या भीषण आगीत जळून खाक झालेल्या झोपड पट्टी धारकांना मदतीचा हात देण्यासाठी लगोरी फाउंडेशन आणि इतर सहकारी संस्था पुढे आले. आज शुभांगी साखरे (लगोरी फाउंडेशन), स्वाती शहा (कोल्हापूर महानगरपालिका संघटिका), वैशाली महाडिक (आनंदीबाई महिला बहुउद्देशीय संस्था), सविता रायकर (शिवकृपा फाउंडेशन) यांच्या सहकार्याने त्यांना अन्न साहित्य, कपडे, भांडी आणि जीवनावश्यक वस्तू दिल्या.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/487823180_9315086001894568_1375449031463771149_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=BST4riWza9EQ7kNvwGvbogx&_nc_oc=AdmCVvWi6wWHjiJwuQ3VY0-SHADJeEoVgpwLhj7-KcCGqzPtNzC-aPINlOcoPreAzfVlk2EcOcaUjiAwotHSY86V&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=GiD8zYwI0sJZFPTe0LAxDA&oh=00_AfGi-T3oWvm--ZKR14S3crr84JIUapyEKkwUdY_CPtFIag&oe=67F9E2DF",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02GJRxLWAqAoPtLnUz2mPRKpmW83enddNComqdtP3D48m6W4aUr2uiSK572DDKmvhrl"
  },
  {
    id: 55,
    title: "पावनखिंड ट्रिपचा अविस्मरणीय अनुभव",
    date: "2022-11-07",
    description: "लगोरी फाउंडेशन द्वारा आयोजित वार्षिक एक दिवसीय ट्रिप पावनखिंड येथे घेतला होता. या अनुभवाने एक वेगळीच स्मरणशक्ती दिली. ऐतिहासिक स्थळ पाहून खूप छान वाटले, खास करून छत्रपती शिवाजी महाराज आणि त्यांच्या मावळ्यांची, विशेषतः सरसेनापती बाजीप्रभू देशपांडे यांची कामगिरी पाहून एक वेगळीच प्रेरणा मिळाली.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/486837329_9307193152683853_6849826666359111933_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bhuXc_06jpsQ7kNvwGYEZay&_nc_oc=Adn2wcSYTC3QorHIqcrwNAkWxllva8RLgyMBYt6quPyQM7N3gVQXanrGGDLIVJeiCTouvcDTllLGjL0iB0MnU3B1&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=RCDwzAMO9K8VZQ8OOuVefQ&oh=00_AfHsVfOqTDxNiB-WVd0jk5hwyvJtteMpjMAVw2eL0w6Yxg&oe=67F9E44E",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02pgJHfNqYUus7SgBHCv2VgwSBCf7U5V8dhYYWk7Be5JrspTEEd1N9FZajvia7S4yvl"
  },
  {
    id: 56,
    title: "लगोरी फाउंडेशन कोल्हापूर आयोजित महा हदगा कार्यक्रमाचा आनंददायक अनुभव",
    date: "2022-10-11",
    description: "आज लगोरी फाउंडेशन कोल्हापूरने महा हदगा मोठ्या उत्साहात पार केला. संस्थापक अध्यक्ष शुभांगी साखरे, प्रेरणा पाटील, पुनम हवलदार, ऐश्वर्या झांजगे, आणि आकाश साखरे यांच्या संकल्पनेतून हा कार्यक्रम साजरा झाला. या वेळी वर्षा जोशी यांनी मैत्रिणींना खिरापत वाटप केली, आणि एंजल ब्युटी पार्लरच्या सीमा रेवणकर यांच्या कडून 3 बेस्ट खिरापत न बक्षीस देण्यात आले.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/486532516_9295012747235227_3260663024760827901_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=l2rPWqdJ_fYQ7kNvwECQrWG&_nc_oc=AdnX11MMt7d53b4Q3luYg68fmt17Rg1E0ZgkBJoPXRnzzwJmZsB6lUkmeP3at65HbS82JG0TrWBB2BmP_Tl9iauH&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=L3jIoCi84zJxOfawzW-lLA&oh=00_AfGj0gbBXw7NJxcFmw0AItNM8OsScjMV2HHZM63E2dtqKw&oe=67F9E642",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0m9rkXCsc1PoKibL5MQAg4oWaUF26oJTpZx23XgmT6af7Y7aHJ7ZVmi6WSbgcr2L9l"
  },
  {
    id: 57,
    title: "लगोरी फाउंडेशन आयोजित रास दांडिया – उत्साह आणि नावीन्याने भरलेला कार्यक्रम",
    date: "2022-10-02",
    description: "लगोरी फाउंडेशनने आज मोचा मॅडनेस कॅफेमध्ये रास दांडिया उत्साहात आणि नावीन्यपूर्ण वातावरणात आयोजित केला. संस्थापक अध्यक्षा शुभांगी साखरे, प्रेरणा पाटील, ऐश्वर्या झांजगे यांच्या संकल्पनेतून आणि तेजल वाकरेकर यांच्या सहकार्यातून हा कार्यक्रम यशस्वीपणे पार पडला.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/486683032_9288714957865006_5528353743583783641_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4_R0sSC6dM8Q7kNvwHnWgCP&_nc_oc=AdnZjwuk2WAo09IND8mum-l9reOWpSQFwrDt4kJcrghUDekrkLu0jdpalz_nAPjZTW98yBNDly6mztBcEfu7JxhA&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=qgIni9ZPLPwepDMS_-S9IQ&oh=00_AfGI4HPOPnvXXugmxTAe8FBRE3R_uINSVwKJqKZ69HQeZA&oe=67F9F9E3",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0kEnLUi58pW86WgVP6eSHfbj6ZXybvodUW6eVauwm2dQw9zmPh4Yp4AXvJK8mALBUl"
  },
  {
    id: 58,
    title: "लगोरी फाउंडेशन कोल्हापूर आयोजित कुंकुमार्चन सोहळा",
    date: "2022-09-27",
    description: "लगोरी फाउंडेशनच्या वतीने कोल्हापूर येथील विठ्ठल मंदिरात कुंकुमार्चन सोहळा अतिशय उत्साहात आणि आनंदात पार पडला. संस्थेच्या संस्थापक अध्यक्षा शुभांगी साखरे, ऐश्वर्या साखरे, आकाश साखरे, निकिता कापसे, प्रेरणा पाटील, आणि अलका सनगर यांच्या संकल्पनेतून हा कार्यक्रम उत्कृष्ट नियोजनासह पार पडला.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/486147372_9284153421654493_3601228355789722041_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=juBzXKNg3OMQ7kNvwE7cHt0&_nc_oc=Adkd-3TvR3jj_Z5bqcXlVQAUsH6ux0LYbnxI2p87MksGsPyXFOMCSBWQfYbJ3OMPWgqPXGNy3JX5qW9mmqvKL8Gk&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=wQC8MjOolY6YmSMuToGPeQ&oh=00_AfFvytcFOYiM5tLKhWELTlkemIJWP6l2jOGdisa8Rd8axw&oe=67F9D97B",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02S5ZPExWUC4W1wPbqBXP2Z5mejKYztjK8dUFLwrbdXU3seR3wKSxzM3rKcrpBzoaVl"
  },
  {
    id: 59,
    title: "लगोरी फाउंडेशन कोल्हापूर आयोजित सखी मेळावा",
    date: "2022-09-22",
    description: "लगोरी फाउंडेशनने कोल्हापूर येथील सनगर तालीम हॉलमध्ये आयोजित सखी मेळावा मोठ्या उत्साहात पार पडला. संस्थेच्या संस्थापक अध्यक्षा शुभांगी साखरे, ऐश्वर्या झांजगे, प्रेरणा पाटील, अलका सनगर, आणि आकाश साखरे यांच्या संयोजनाने महिलांसाठी विविध स्पर्धांचा आयोजन करण्यात आला.",
    image: "https://scontent.fblr24-3.fna.fbcdn.net/v/t39.30808-6/486319455_9278489542220881_4041047582491720216_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AXxFd99y18sQ7kNvwEI0d7F&_nc_oc=AdnWs1L_lRU8oO4HGZr3Qvw3WMEsn6A6Z_UJ0LnJk1pnK_mW97W4T-SgT9tGzlYFXXzW9wTDAdqSzcw8v6R0JT-6&_nc_zt=23&_nc_ht=scontent.fblr24-3.fna&_nc_gid=1mp8aHNqpoYDnsnJzcYUVA&oh=00_AfG1zeQILyT1QLI8Yy6ycVBsMoxzT9Nacn70uM6QEij4lQ&oe=67F9E65C",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02CTyDZfmv5Z26xqiWchHugekqkc5LWS7Rog9yq1uXffxK28ZpxTkUafnCk3w8ZyvDl"
  },
  {
    id: 60,
    title: "लिटिल वंडर स्कूल आणि सजीवनी इंग्लिश मीडियम स्कूलमध्ये शाहीर पिराजीराव सरनाईक स्मृतिप्रीत्यर्थ टॅलेंट हंट स्पर्धेचे आयोजन",
    date: "2022-07-29",
    description: "लिटिल वंडर स्कूल आणि संजीवनी इंग्लिश मीडियम स्कूलमध्ये शाहीर पिराजीराव सरनाईक यांच्या स्मृतिप्रीत्यर्थ टॅलेंट हंट स्पर्धेचे भव्य आयोजन करण्यात आले. या स्पर्धेत विद्यार्थ्यांनी विविध कला सादर करत आपले कौशल्य दाखवले.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/485800667_9258011334268702_1919986113698914608_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=5N_p5hSOe-8Q7kNvwGWRPS6&_nc_oc=AdmIf-VjUZFBTr-NaqBXV89PTP7HE2jtXoKYc2ldHIqgsc1j22dlbLw6V7NLu_0peLC0P4Ju1sDG2tMgy7u0sop-&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=hgY4kmdyuTmKj6iLndl0JQ&oh=00_AfFuGJIGnOfTb7Azp01bIEplF5Fc96yQwiltHq63QBGmDQ&oe=67F9E2D0",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid02PH47dPTpmyRRyTt1DQ5brm5trV58fokAXjGYoeTkXTMZnnryssmooYN23bZzGUQql"
  },
  {
    id: 61,
    title: "अंधशाळेतील चिमुकल्यांसोबत खास वाढदिवसाचा आनंदोत्सव",
    date: "2022-07-02",
    description: "लगोरी फाउंडेशनच्या सदस्य डॉ. सायली बोरसे यांच्या वाढदिवसाचे औचित्य साधून कोल्हापूर येथील अंधशाळेतील विद्यार्थ्यांसोबत आनंद साजरा करण्यात आला. यावेळी मुलांसोबत केक कापण्यात आला, फळे आणि खाऊ वाटप करण्यात आले तसेच त्यांच्यासोबत आनंदी गप्पा रंगल्या.",
    image: "https://scontent.fblr24-1.fna.fbcdn.net/v/t39.30808-6/484803483_9245543898848779_463007033299295848_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HydGLWacq7AQ7kNvwECVOPK&_nc_oc=Adla5SWUS0ANrjK2Iy0jR0cu7n_C0BhfSREZRa05Txx_Cxq2qPl44rW32khMdlmnraHrFBHdnb0jHY41pD_XHN6O&_nc_zt=23&_nc_ht=scontent.fblr24-1.fna&_nc_gid=RgIbuBXEZJeMedIwXItWbA&oh=00_AfEeCkyqnt_RLdmaJuvnDJJAosMVsZXG0i9QlV6zCq6MFg&oe=67F9D450",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0AmFCQv2v71uRazPxeffAwaUjqSuHmhr2qLyik17MLuSXtHDg8AqtxsVqicMMnTDBl"
  },
  {
    id: 62,
    title: "महिला दिन उत्साहात साजरा – लगोरी फाउंडेशनतर्फे विविध स्पर्धा आणि सत्कार सोहळा",
    date: "2025-03-08",
    description: "महिला दिनाच्या औचित्याने लगोरी फाउंडेशन तर्फे रिलायन्स मॉल, कोल्हापूर येथे विविध स्पर्धांचे आयोजन करण्यात आले. संस्थापक अध्यक्षा शुभांगी साखरे यांच्या संकल्पनेतून हा कार्यक्रम अतिशय उत्साहात पार पडला. या कार्यक्रमात समाजातील कर्तृत्ववान महिलांचा गौरव करण्यात आला. सौ. चारुलता चव्हाण (ऍडव्होकेट), सौ. रितू गरग (उद्योजिका), सौ. पायल लाहोटी (डॉक्टर), सौ. शीतल माळी (शासकीय अधिकारी) यांचा विशेष सत्कार करण्यात आला.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/483980803_9202276509842185_6360813973971276609_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GVzobEnWGGoQ7kNvwFV1M2V&_nc_oc=Adn_z-PLWivtAd2ueqYncEtRVCMPUUqT10UEFPOu_RpwJfI8wkk56VJMXUUvg6_NK9aEfxyajCZyKNwuvF4axDE-&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=wv2-PxNgZs_QJxKaKrZVLw&oh=00_AfEZdP9OfEx6awG1Ndlq8o0TN8BeAcrBc2vAXrq39ywUcw&oe=67F9D300",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dW8yd12PsyeYRYjTsGPdoyLq2pYo74dNxLTx3A9iGuhWgqA9xtVGor28J9ugw9q1l"
  },
  {
    id: 63,
    title: "गुढी पाडव्याच्या पार्श्वभूमीवर लगोरी फाउंडेशन आणि रिलायन्स मॉलतर्फे स्पर्धा व सांस्कृतिक कार्यक्रमांचे आयोजन",
    date: "2025-03-30",
    description: "गुढी पाडव्याच्या शुभमुहूर्तावर लगोरी फाउंडेशन व रिलायन्स मॉल यांच्या संयुक्त विद्यमाने महिलांसाठी रांगोळी स्पर्धा, गुढी सजावट स्पर्धा आणि मराठी वेशभूषा स्पर्धा आयोजित करण्यात आल्या. संस्थापक अध्यक्ष शुभांगी साखरे यांच्या संकल्पनेतून हा कार्यक्रम पार पडला. कार्यक्रमाच्या यशस्वी आयोजनासाठी रिलायन्स मॉलचे दीपक लगारे आणि नरेंद्रकुमार वाडेकर यांचे मोलाचे सहकार्य लाभले.",
    image: "https://scontent.fblr24-2.fna.fbcdn.net/v/t39.30808-6/487010721_9326101387459696_7882641636510953086_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dHhx8-gJN1AQ7kNvwFpEe35&_nc_oc=Adlyn9VZ76CyLr_0Hx-opQYAcHBuJHIhipjS0dFMrg_O2nHNzyIplwQemMxPZiJNH5dNFOqh1siQew6X1LWkMvR8&_nc_zt=23&_nc_ht=scontent.fblr24-2.fna&_nc_gid=gQwrS5w99Z9WM7AU4sAjAQ&oh=00_AfFejXeryBKyia69xXoe64KZKH4ExOfbnKezj2iBt-gM-g&oe=67F9C069",
    link: "https://www.facebook.com/shubhangi.sakhare/posts/pfbid0dDKY72SCke8P9J1zMgiZjqmo2Umrc5hZYsnZQB7guhWReCiDF7nn35m41m9XyQzCl"
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
