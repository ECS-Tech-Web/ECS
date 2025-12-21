const teamMembers = [
  {
    title: "Chetan Singh Verma",
    description: "President",
    imageUrl: "https://i.postimg.cc/NfvXBf9m/Background-Eraser-20250903-024808933.png",
    instagram: "https://www.instagram.com/chetan.singhverma",
    facebook: "https://www.facebook.com/share/1K4fRqrdAH/",
    linkedin: "https://www.linkedin.com/in/chetan-singh-89883b212"
  },
  {
    title: "Jagatjyoti Deb",
    description: "Vice-President",
    imageUrl: "https://i.postimg.cc/90fdMDsp/jagat.png",
    instagram: "https://www.instagram.com/dhruv_deb",
    facebook: "https://www.facebook.com/share/1GbQLKW2e8/",
    linkedin: "https://www.linkedin.com/in/jagatjyotideb"
  },
  {
    title: "Koustubh Mishra",
    description: "General Secretary",
    imageUrl: "https://i.postimg.cc/3xKTTx4f/Background-Eraser-20250902-183116636.png",
    instagram: "https://www.instagram.com/mishra.koustubh",
    facebook: "https://www.facebook.com/share/17wjtsGHDq/",
    linkedin: "https://www.linkedin.com/in/koustubh-mishra-37147728a"
  },
  {
    title: "Kasish Sahu",
    description: "Senior Executive",
    imageUrl: "https://i.postimg.cc/pX69fGnR/kasish.png",
    instagram: "https://www.instagram.com/kasishsahu10",
    facebook: "https://www.facebook.com/share/1E8edzFpv5/",
    linkedin: "https://www.linkedin.com/in/kasish-sahu-94154028a"
  },
  {
    title: "Aditya Sharma",
    description: "Senior Executive",
    imageUrl: "https://i.postimg.cc/JhGCbxZV/aditya.png",
    instagram: "https://www.instagram.com/itsadi_2006",
    facebook: "https://www.facebook.com/share/17jcvpPyWz/",
    linkedin: "https://www.linkedin.com/in/aditya-sharma-1a96912a6"
  },
  {
    title: "Subrata Lodh",
    description: "Technical Head",
    imageUrl: "https://i.postimg.cc/bN3rz6R1/subrata.png",
    instagram: "https://www.instagram.com/itssubrataaa",
    facebook: "https://www.facebook.com/share/1KXAGNY8hz/",
    linkedin: "https://www.linkedin.com/in/subrata-lodh-45541328a"
  },
  {
    title: "Namrata Nayak",
    description: "Literary & PR Head",
    imageUrl: "https://i.postimg.cc/QVL2sZyj/namrata.png",
    instagram: "https://www.instagram.com/nayak__namrata",
    facebook: "https://www.facebook.com/share/1aHDpYbjbp/",
    linkedin: "https://www.linkedin.com/in/namrata-nayak-43b09b2ab"
  },
  {
    title: "Tejas Pandey",
    description: "Treasurer",
    imageUrl: "https://i.postimg.cc/26cpdszk/Background-Eraser-20250902-231256600.png",
    instagram: "https://www.instagram.com/tejesh_pvtt_",
    facebook: "https://www.facebook.com/share/1ENh5vKSFd/",
    linkedin: "https://www.linkedin.com/in/tejas-pandey-b45989181"
  },
  {
    title: "Manisha Saloi",
    description: "Media & Graphics Design Head",
    imageUrl: "https://i.postimg.cc/YCw2L5W3/manisha-1.png",
    instagram: "https://www.instagram.com/manisha_saloi",
    facebook: "https://www.facebook.com/profile.php?id=61550675969308",
    linkedin: "https://www.linkedin.com/in/manisha-saloi-aa564228a"
  },
  {
    title: "Krrish Khandelia",
    description: "Junior Executive",
    imageUrl: "https://i.postimg.cc/43qvgj0n/IMG-20250902-205737.png",
    instagram: "https://www.instagram.com/krrishhxd",
    facebook: "https://www.facebook.com/share/1D1LLk57pW/",
    linkedin: "https://www.linkedin.com/in/krrish-khandelia-095362187"
  },
  {
    title: "Arnav Kumar",
    description: "Junior Executive",
    imageUrl: "https://i.postimg.cc/3Jt711pp/1000077046-removebg-preview.png",
    instagram: "https://www.instagram.com/arnav_kr1",
    facebook: "https://www.facebook.com/share/1BfucaA6wc/",
    linkedin: "https://www.linkedin.com/in/arnav-kumar-a36b44267"
  },
  {
    title: "Yashank Jain",
    description: "Junior Executive",
    imageUrl: "https://i.postimg.cc/50JWN9jR/IMG-20250902-205625.png",
    instagram: "https://www.instagram.com/yashank0326",
    facebook: "https://www.facebook.com/share/1b2GyLMGKV/",
    linkedin: "https://www.linkedin.com/in/yashank-jain-9a2180313"
  },
  {
    title: "Nishita Sarma",
    description: "Literary & PR Member",
    imageUrl: "https://i.postimg.cc/6pFYh7h8/Background-Eraser-20250902-183637923.png",
    instagram: "https://www.instagram.com/_nishitasarma_",
    facebook: "https://www.facebook.com/profile.php?id=61564563847356",
    linkedin: "https://www.linkedin.com/in/nishita-sarma-529785323"
  },
  {
    title: "Sumit Singh",
    description: "Literary & PR Member",
    imageUrl: "https://i.postimg.cc/jjwNZZjT/IMG-20250902-205722.png"
  },
  {
    title: "Indrani Rabha",
    description: "Literary & PR Member",
    imageUrl: "https://i.postimg.cc/9X72CTDf/IMG-20250902-205520.png"
  },
  {
    title: "Dibakar Kundu",
    description: "Literary & PR Member",
    imageUrl: "https://i.postimg.cc/rFRdrgf2/IMG-20250902-223452.png"
  },
  {
    title: "Kartikey Agrawal",
    description: "Literary & PR Member",
    imageUrl: "https://i.postimg.cc/zvWdLKMw/IMG-20250902-205546.png"
  },
  {
    title: "Pratikhya Das",
    description: "Media & Graphics Design Member",
    imageUrl: "https://i.postimg.cc/y8qHrTsK/Background-Eraser-20250902-221510467.png"
  },
  {
    title: "Bitopan Baruah",
    description: "Media & Graphics Design Member",
    imageUrl: "https://i.postimg.cc/903bjzMD/Background-Eraser-20250902-183256087.png"
  },
  {
    title: "Shreya Das",
    description: "Media & Graphics Design Member",
    imageUrl: "https://i.postimg.cc/c4LgL0nC/IMG-20250902-220701.png",
    instagram: "https://www.instagram.com/shreya_.179",
    facebook: "https://www.facebook.com/share/17jKJcddHu/",
    linkedin: "https://www.linkedin.com/in/shreya-das-2b797a332"
  },
  {
    title: "Samujjal Das",
    description: "Media & Graphics Design Member",
    imageUrl: "https://i.postimg.cc/sXKjkGKc/IMG-20250902-221229.png"
  },
  {
    title: "Hirok Bordoloi",
    description: "Media & Graphics Design Member",
    imageUrl: "https://i.postimg.cc/X75MFyFz/Background-Eraser-20250902-221703685.png",
    instagram: "https://www.instagram.com/justhirok",
    facebook: "https://www.facebook.com/share/1AuE6oyFHv/",
    linkedin: "https://www.linkedin.com/in/hirok-bordoloi-522a68332"
  },
  {
    title: "Piyush Sharma",
    description: "Technical Member",
    imageUrl: "https://i.postimg.cc/JtVzq5tT/IMG-20250902-205644.png",
    instagram: "https://www.instagram.com/piyushharma146/",
    facebook: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/in/piyush-sharma-175042325/"
  },
  {
    title: "Tridip Kalita",
    description: "Technical Member",
    imageUrl: "https://i.postimg.cc/TPz2GcJT/IMG-20250902-205358.png"
  },
  {
    title: "Ahiron Sharma",
    description: "Technical Member",
    imageUrl: "https://i.postimg.cc/wTqmS6B0/Background-Eraser-20250902-183408326.png"
  },
  {
    title: "Medhansh Kashyap Borah",
    description: "Technical Member",
    imageUrl: "https://i.postimg.cc/DzZ5Fryp/IMG-20250902-205610.png"
  }
];

export default teamMembers;
