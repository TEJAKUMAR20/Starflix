import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Nav, Form } from "react-bootstrap";
import { StarFill, PlayCircle, Heart, Share } from "react-bootstrap-icons";
import UniversalSearchHeader from "./UniversalSearchHeader";

const MOVIES_DB = {
  //  ENGLISH MOVIES
  english: {
    hobbit: {
      title: "The Hobbit",
      rating: 8.3,
      reviews: "120K Reviews",
      director: "Peter Jackson",
      cast: ["Martin Freeman", "Ian McKellen"],
      genres: ["Adventure", "Fantasy"],
      releaseDate: "13 Dec, 2012",
      runtime: "2h 49m",
      overview:
        "The Hobbit: An Unexpected Journey follows Bilbo Baggins, a quiet and content hobbit from the Shire, whose life takes a dramatic turn when the wizard Gandalf and a group of thirteen dwarves enlist him on a daring adventure. Their goal is to reclaim the lost Dwarf Kingdom of Erebor from the fearsome dragon Smaug. Along the way, Bilbo encounters trolls, goblins, elves, and the mysterious creature Gollum — where he comes into possession of a powerful ring that will shape the destiny of Middle-earth. It’s a story of courage, friendship, and the unexpected heroism found in the most unlikely of characters.",
      poster: process.env.PUBLIC_URL + "/images/posters/hobbit.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/hobbitbg.png",
      trailerUrl: "https://www.youtube.com/embed/SDnYMbYB-nU",
    },
    "back-to-the-future": {
      title: "Back To The Future",
      rating: 8.5,
      reviews: "190K Reviews",
      director: "Robert Zemeckis",
      cast: ["Michael J. Fox", "Christopher Lloyd"],
      genres: ["Adventure", "Sci-Fi"],
      releaseDate: "3 Jul, 1985",
      runtime: "1h 56m",
      overview:
        "Back to the Future is a thrilling sci-fi adventure about teenager Marty McFly, who accidentally travels back in time from 1985 to 1955 in a time machine built by his eccentric friend, Dr. Emmett “Doc” Brown. Stranded in the past, Marty encounters his young parents and must ensure they fall in love—or risk erasing his own existence. With time running out, he races to repair the timeline and return to the future, leading to a mix of humor, heart, and high-voltage action that made the film a timeless classic.",
      poster: process.env.PUBLIC_URL + "/images/posters/backtothefuture.png",
      bgImage:
        process.env.PUBLIC_URL + "/images/background/backtothefuture.png",
      trailerUrl: "https://www.youtube.com/embed/qvsgGtivCgs",
    },
    "jurassic-park": {
      title: "Jurassic Park",
      rating: 8.2,
      reviews: "245K Reviews",
      director: "Steven Spielberg",
      cast: ["Sam Neill", "Laura Dern"],
      genres: ["Sci-Fi", "Adventure"],
      releaseDate: "11 Jun, 1993",
      runtime: "2h 7m",
      overview:
        "Jurassic Park is a groundbreaking science-fiction adventure that follows a group of scientists and visitors invited to a remote island theme park where cloned dinosaurs have been brought back to life. When the park’s security systems fail, the prehistoric creatures escape, turning the once awe-inspiring attraction into a terrifying fight for survival. Directed by Steven Spielberg, the film masterfully blends wonder, suspense, and cutting-edge visual effects, redefining modern cinema and sparking a global fascination with dinosaurs.",
      poster: process.env.PUBLIC_URL + "/images/posters/jurassicpark.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/park.png",
      trailerUrl: "https://www.youtube.com/embed/lc0UehYemQA",
    },
      "12thfail": {
      title: "12th Fail",
      rating: 8.9,
      reviews: "310K Reviews",
      director: "Vidhu Vinod Chopra",
      cast: ["Vikrant Massey", "Medha Shankar"],
      genres: ["Biography", "Drama"],
      releaseDate: "27 Oct, 2023",
      runtime: "2h 26m",
      overview: "12th Fail is an inspiring biographical drama based on the real-life journey of IPS officer Manoj Kumar Sharma. The film follows a young man from a small village who, after failing his 12th-grade exams, refuses to give up on his dreams. Through perseverance, honesty, and sheer hard work, he overcomes poverty, self-doubt, and repeated failures to achieve one of India’s most prestigious goals — becoming an IPS officer. Directed by Vidhu Vinod Chopra and starring Vikrant Massey, 12th Fail is a powerful story of resilience, integrity, and the triumph of the human spirit.A real-life story of an IPS officer who overcame struggles to succeed.",
      poster: process.env.PUBLIC_URL + "/images/posters/12thfail.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/12thfail.png",
      trailerUrl: "https://www.youtube.com/embed/KjbtuqENvVE",
    },
    sicario: {
      title: "Sicario",
      rating: 7.6,
      reviews: "220K Reviews",
      director: "Denis Villeneuve",
      cast: ["Emily Blunt", "Benicio del Toro"],
      genres: ["Action", "Crime"],
      releaseDate: "2 Oct, 2015",
      runtime: "2h 1m",
      overview: "Sicario is an intense crime thriller that delves into the dark and chaotic world of the U.S.–Mexico border drug wars. The story follows FBI agent Kate Macer, who joins a secret government task force led by a mysterious operative, Alejandro Gillick, to take down a powerful Mexican drug cartel. As the mission unfolds, Kate is drawn into a world of moral ambiguity, violence, and deception where the line between justice and vengeance blurs. Directed by Denis Villeneuve and featuring gripping performances by Emily Blunt, Benicio del Toro, and Josh Brolin, Sicario is a haunting exploration of corruption, survival, and the cost of fighting evil with evil.An FBI agent joins a secret mission to fight drug cartels.",
      poster: process.env.PUBLIC_URL + "/images/posters/sicaro.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/sicario.png",
      trailerUrl: "https://www.youtube.com/embed/G8tlEcnrGnU",
    },
    "star-wars": {
      title: "Star Wars: A New Hope",
      rating: 8.6,
      reviews: "350K Reviews",
      director: "George Lucas",
      cast: ["Mark Hamill", "Harrison Ford"],
      genres: ["Sci-Fi", "Adventure"],
      releaseDate: "25 May, 1977",
      runtime: "2h 1m",
      overview: "Luke Skywalker joins rStar Wars: Episode IV – A New Hope is a legendary space opera that follows young Luke Skywalker, a farm boy who becomes the galaxy’s unlikely hero. When he discovers a hidden message from Princess Leia, Luke teams up with the wise Jedi Master Obi-Wan Kenobi, the charming smuggler Han Solo, and his loyal droids R2-D2 and C-3PO to rescue her from the evil Darth Vader and the tyrannical Galactic Empire. Together, they embark on an epic adventure to destroy the Empire’s deadly weapon, the Death Star, and restore freedom to the galaxy. Directed by George Lucas, Star Wars revolutionized filmmaking with its groundbreaking special effects, timeless story of hope, and unforgettable characters.ebels to fight the evil Empire.",
      poster: process.env.PUBLIC_URL + "/images/posters/starwars.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/starwars.png",
      trailerUrl: "https://www.youtube.com/embed/vZ734NWnAHA",
    },
  },

  //  HINDI MOVIES
  hindi: {
    chhichhore: {
      title: "Chhichhore",
      rating: 8.4,
      reviews: "410K Reviews",
      director: "Nitesh Tiwari",
      cast: ["Sushant Singh Rajput", "Shraddha Kapoor"],
      genres: ["Comedy", "Drama"],
      releaseDate: "6 Sep, 2019",
      runtime: "2h 23m",
      overview: "Chhichhore is an emotional and nostalgic dramedy that celebrates friendship, failure, and the true meaning of success. The film follows Aniruddh, a middle-aged father who reflects on his college days after his son attempts suicide due to academic pressure. Through flashbacks, he reunites with his old friends — a quirky, unforgettable gang of hostel mates — and recalls their hilarious and inspiring journey from being called “losers” to learning that failure is not the end of life. Directed by Nitesh Tiwari and starring Sushant Singh Rajput, Shraddha Kapoor, and Varun Sharma, Chhichhore beautifully blends humor, emotion, and life lessons that resonate deeply with audiences of all ages..",
      poster: process.env.PUBLIC_URL + "/images/posters/chhichhore.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/chhichhore.png",
      trailerUrl: "https://www.youtube.com/embed/tsxemFX0a7k",
    },
   "ms-dhoni-the-untold-story": {
  title: "M.S. Dhoni: The Untold Story",
  rating: 8.0,
  reviews: "980K Reviews",
  director: "Neeraj Pandey",
  cast: ["Sushant Singh Rajput", "Kiara Advani", "Disha Patani", "Anupam Kher"],
  genres: ["Biography", "Drama", "Sports"],
  releaseDate: "30 Sep, 2016",
  runtime: "3h 10m",
  overview:
    "M.S. Dhoni: The Untold Story is an inspiring biographical drama that chronicles the incredible life journey of Indian cricket legend Mahendra Singh Dhoni. From his humble beginnings as a small-town boy and ticket collector at the Indian Railways to becoming one of the most successful captains in world cricket, Dhoni’s story is one of relentless determination, self-belief, and passion. The film beautifully captures his struggles, sacrifices, and the defining moments that shaped his career — including India’s historic 2011 World Cup victory. Directed by Neeraj Pandey and starring the late Sushant Singh Rajput in a powerful and heartfelt performance, M.S. Dhoni: The Untold Story is a moving tribute to the man behind the legend and a reminder that dreams, when pursued with faith, can change destinies.",
  poster: process.env.PUBLIC_URL + "/images/posters/msdhoni.png",
  bgImage: process.env.PUBLIC_URL + "/images/background/dhonibg.png",
  trailerUrl: "https://www.youtube.com/embed/6L6XqWoS8tw",
    },
    brahmastra: {
      title: "Brahmastra",
      rating: 6.7,
      reviews: "290K Reviews",
      director: "Ayan Mukerji",
      cast: ["Ranbir Kapoor", "Alia Bhatt"],
      genres: ["Fantasy", "Action"],
      releaseDate: "9 Sep, 2022",
      runtime: "2h 47m",
      overview: "Brahmāstra: Part One – Shiva is a mythological fantasy adventure that blends ancient Indian mythology with modern-day storytelling. The film follows Shiva, a young DJ with mysterious fire-based powers, who discovers that he is connected to a divine weapon known as the Brahmāstra, capable of destroying the universe. As he embarks on a journey of love, destiny, and self-discovery with Isha, he learns of the hidden world of the Astraverse — where guardians protect celestial weapons born from the energies of gods. Directed by Ayan Mukerji and starring Ranbir Kapoor, Alia Bhatt, Amitabh Bachchan, and Mouni Roy, Brahmāstra dazzles with its breathtaking visuals, grand scale, and a story that marks the beginning of India’s first cinematic universe rooted in mythology..",
      poster: process.env.PUBLIC_URL + "/images/posters/brahmastra.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/brahmastra.png",
      trailerUrl: "https://www.youtube.com/embed/BUjXzrgntcY",
    },
    pathaan: {
      title: "Pathaan",
      rating: 6.5,
      reviews: "200K Reviews",
      director: "Siddharth Anand",
      cast: ["Shah Rukh Khan", "Deepika Padukone"],
      genres: ["Action", "Thriller"],
      releaseDate: "25 Jan, 2023",
      runtime: "2h 26m",
      overview: "Pathaan is a high-octane action thriller that marks the explosive return of Shah Rukh Khan to the big screen. The story follows Pathaan, an ex-RAW agent who comes out of exile to take on Jim, a former spy turned rogue terrorist, who threatens India with a devastating biological weapon. Alongside the fearless ISI agent Rubina, Pathaan races across continents to stop a deadly mission while uncovering shocking betrayals and hidden loyalties. Directed by Siddharth Anand and featuring Deepika Padukone and John Abraham, Pathaan delivers breathtaking stunts, grand-scale action, and pulsating music — redefining Bollywood’s spy universe with unmatched style, emotion, and adrenaline.",
      poster: process.env.PUBLIC_URL + "/images/posters/pathaan.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/pathaan.png",
      trailerUrl: "https://www.youtube.com/embed/vqu4z34wENw",
    },
    "kalki-2898-ad": {
      title: "Kalki 2898 AD",
      rating: 8.2,
      reviews: "950K Reviews",
      director: "Nag Ashwin",
      cast: ["Prabhas", "Deepika Padukone"],
      genres: ["Action", "Sci-Fi"],
      releaseDate: "27 Jun, 2024",
      runtime: "3h 1m",
      overview: "Kalki 2898 AD is an epic sci-fi mythological drama set in a dystopian future where humanity struggles for survival under the rule of darkness. Drawing inspiration from Hindu mythology, the film envisions a post-apocalyptic world where the final avatar of Lord Vishnu, Kalki, is destined to rise and restore balance. The story follows Bhairava, a fearless mercenary in a decaying world, who crosses paths with the mysterious SUM-80 and a rebel group fighting against a tyrannical empire. Directed by Nag Ashwin and starring Prabhas, Deepika Padukone, Amitabh Bachchan, Kamal Haasan, and Disha Patani, Kalki 2898 AD is a breathtaking blend of mythology, science fiction, and futuristic technology — a visual spectacle redefining Indian cinema’s global vision..",
      poster: process.env.PUBLIC_URL + "/images/posters/kalki.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/kalki.png",
      trailerUrl: "https://www.youtube.com/embed/kQDd1AhGIHk",
    },
    dangal: {
      title: "Dangal",
      rating: 8.4,
      reviews: "450K Reviews",
      director: "Nitesh Tiwari",
      cast: ["Aamir Khan", "Fatima Sana Shaikh"],
      genres: ["Biography", "Drama"],
      releaseDate: "23 Dec, 2016",
      runtime: "2h 41m",
      overview: "Dangal is an inspiring biographical sports drama based on the real-life story of Mahavir Singh Phogat, a former wrestler who defies societal norms to train his daughters, Geeta and Babita, to become world-class champions. Battling gender stereotypes, financial struggles, and emotional conflicts, Mahavir’s relentless determination transforms his daughters into India’s pride on the international wrestling stage. Directed by Nitesh Tiwari and starring Aamir Khan, Fatima Sana Shaikh, and Sanya Malhotra, Dangal beautifully portrays the power of discipline, family, and perseverance — celebrating the spirit of women’s empowerment and the triumph of hard work over all odds..",
      poster: process.env.PUBLIC_URL + "/images/posters/dangal.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/dangal.png",
      trailerUrl: "https://www.youtube.com/embed/x_7YlGv9u1g",
    },
  },

  //  TELUGU MOVIES
  telugu: {
    pushpa: {
      title: "Pushpa: The Rise",
      rating: 8.0,
      reviews: "500K Reviews",
      director: "Sukumar",
      cast: ["Allu Arjun", "Rashmika Mandanna"],
      genres: ["Action", "Drama"],
      releaseDate: "17 Dec, 2021",
      runtime: "2h 59m",
      overview: "Pushpa: The Rise follows the gritty journey of Pushpa Raj, a fearless laborer in the red sandalwood smuggling syndicate of the Seshachalam forests. Rising from poverty to power, Pushpa challenges corruption, betrayal, and class hierarchy with his raw ambition and swagger. Directed by Sukumar and starring Allu Arjun, Rashmika Mandanna, and Fahadh Faasil, this high-voltage action drama captures the transformation of an underdog into a legend — fueled by attitude, rebellion, and unforgettable one-liners.",
      poster: process.env.PUBLIC_URL + "/images/posters/pushpa2.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/pushpa.png",
      trailerUrl: "https://www.youtube.com/embed/Q1NKMPhP8PY",
    },
     og: {
      title: "OG",
      rating: 8.9,
      reviews: "210K Reviews",
      director: "Sujeeth",
      cast: ["Pawan Kalyan", "Priyanka Mohan", "Arjun Das"],
      genres: ["Action", "Drama"],
      releaseDate: "27 Sep, 2024",
      runtime: "2h 10m",
      overview: "OG is a gritty gangster saga set in the dark underworld, where power, loyalty, and vengeance collide. Starring Pawan Kalyan in an intense role, the film follows the rise of a feared don whose mysterious past returns to haunt him. With Sujeeth’s sharp direction and S. Thaman’s electrifying score, OG promises high-octane action, raw emotion, and a story drenched in blood, betrayal, and brotherhood.",
      poster: process.env.PUBLIC_URL + "/images/posters/og.png",
      bgImage: process.env.PUBLIC_URL + "/images/ogbg.png",
      trailerUrl: " https://www.youtube.com/embed/WepSY1rgoys?si=ON57BPV3IhilhYkP",
    },
     "venom-the-last-dance": {
      title: "Venom: The Last Dance",
      rating: 8.1,
      reviews: "150K Reviews",
      director: "Kelly Marcel",
      cast: ["Tom Hardy", "Juno Temple", "Chiwetel Ejiofor"],
      genres: ["Action", "Sci-Fi"],
      releaseDate: "25 Oct, 2024",
      runtime: "1h 58m",
      overview: "Venom: The Last Dance takes Eddie Brock and his alien symbiote partner Venom on their most dangerous adventure yet. Facing powerful enemies and impossible odds, the duo must make the ultimate sacrifice to protect their world. Packed with humor, chaos, and monstrous action, this thrilling finale to the Venom saga delivers heart-pounding spectacle and an emotional goodbye to Marvel’s most unpredictable anti-hero.",
      poster: process.env.PUBLIC_URL + "/images/posters/venom.png",
      bgImage: process.env.PUBLIC_URL + "/images/venombg.png",
      trailerUrl: "https://www.youtube.com/embed/HyIyd9joTTc?si=9V22mEvZk9JFzoIB",
    },
    "mad-square": {
      title: "Mad Square",
      rating: 8.4,
      reviews: "102K Reviews",
      director: "Kalyan Shankar",
      cast: ["Narne Nithin", "Sangeeth Shobhan", "Ram Nithin", "Priyanka Jawalkar"],
      genres: ["Drama", "Comedy"],
      releaseDate: "10 Jan, 2025",
      runtime: "2h 7m",
      overview: "Mad Square is a light-hearted college comedy-drama that explores friendship, love, and ambition in the most chaotic ways possible. Set in an engineering campus, the story follows a group of mischievous students navigating love triangles, dreams, and growing pains. Directed by Kalyan Shankar and starring Sangeeth Shobhan, Narne Nithin, and Priyanka Jawalkar, the film blends youthful humor with a heartwarming message about chasing dreams and embracing imperfection.",
      poster: process.env.PUBLIC_URL + "/images/posters/mad2.png",
      bgImage: process.env.PUBLIC_URL + "/images/mad2bg.png",
      trailerUrl: "https://www.youtube.com/embed/1Sw7modBwsM?si=kUC_g-qyBiLUUcww",
    },
    rrr: {
      title: "RRR",
      rating: 8.6,
      reviews: "1M Reviews",
      director: "S. S. Rajamouli",
      cast: ["Ram Charan", "Jr NTR"],
      genres: ["Action", "Drama"],
      releaseDate: "24 Mar, 2022",
      runtime: "3h 7m",
      overview: "RRR is an epic action drama that reimagines the friendship of two revolutionaries, Alluri Sitarama Raju and Komaram Bheem, who fight against British colonial oppression in pre-independent India. Directed by S.S. Rajamouli and starring Ram Charan and Jr NTR, the film is a cinematic powerhouse of breathtaking visuals, emotions, and patriotism — celebrating freedom, brotherhood, and fire versus water in the grandest way possible.",
      poster: process.env.PUBLIC_URL + "/images/posters/rrr.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/rrr.png",
      trailerUrl: "https://www.youtube.com/embed/GY4BgdUSpbE",
    },
    salaar: {
      title: "Salaar",
      rating: 7.1,
      reviews: "210K Reviews",
      director: "Prashanth Neel",
      cast: ["Prabhas", "Prithviraj Sukumaran"],
      genres: ["Action", "Thriller"],
      releaseDate: "22 Dec, 2023",
      runtime: "2h 55m",
      overview: "Salaar unfolds in the dark, dystopian world of Khansaar — a land ruled by violence and power. Prabhas stars as Deva, a man with a mysterious past who rises to protect his people from tyranny and betrayal. Directed by Prashanth Neel, this brutal action saga showcases unwavering loyalty, massive world-building, and explosive battles — blending intensity and emotion in trademark Neel style.",
      poster: process.env.PUBLIC_URL + "/images/posters/salaar.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/salaar.png",
      trailerUrl: "https://www.youtube.com/embed/bUR_FKt7Iso",
    },
    baahubali: {
      title: "Baahubali: The Beginning",
      rating: 8.1,
      reviews: "800K Reviews",
      director: "S. S. Rajamouli",
      cast: ["Prabhas", "Rana Daggubati"],
      genres: ["Action", "Drama"],
      releaseDate: "10 Jul, 2015",
      runtime: "2h 38m",
      overview: "Baahubali: The Beginning narrates the awe-inspiring tale of a young man, Shivudu, who discovers his royal lineage and sets out to reclaim the ancient kingdom of Mahishmati from a cruel ruler. Directed by S.S. Rajamouli, this magnum opus blends grandeur, myth, and emotion — becoming a landmark in Indian cinema for its visual mastery, storytelling, and the timeless question: Why did Kattappa kill Baahubali",
      poster: process.env.PUBLIC_URL + "/images/posters/bahubali.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/bahubali.png",
      trailerUrl: "https://www.youtube.com/embed/VdafjyFK3ko",
    },
    devara: {
      title: "Devara",
      rating: 8.5,
      reviews: "390K Reviews",
      director: "Koratala Siva",
      cast: ["Jr NTR", "Janhvi Kapoor"],
      genres: ["Action", "Drama"],
      releaseDate: "10 Oct, 2025",
      runtime: "2h 30m",
      overview: "Devara: Part 1 is a gritty oceanic revenge saga set along India’s coastal underworld. Jr NTR stars as Devara, a fierce protector who rises from the depths of the sea to unleash justice against betrayal and corruption. With Koratala Siva’s direction and Anirudh’s thunderous score, the film promises larger-than-life action, emotional depth, and a dark, immersive world of power and redemption.",
      poster: process.env.PUBLIC_URL + "/images/posters/devara.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/devara.png",
      trailerUrl: "https://www.youtube.com/embed/yepABPvTo7U",
    },
    "sita-ramam": {
      title: "Sita Ramam",
      rating: 8.2,
      reviews: "400K Reviews",
      director: "Hanu Raghavapudi",
      cast: ["Dulquer Salmaan", "Mrunal Thakur"],
      genres: ["Drama", "Romance"],
      releaseDate: "5 Aug, 2022",
      runtime: "2h 41m",
      overview: "Sita Ramam is a timeless romantic drama that tells the heart-wrenching love story between Lieutenant Ram, an Indian army officer, and Sita Mahalakshmi, set against the backdrop of war and destiny. When a letter goes undelivered, decades of longing, sacrifice, and love unfold. Directed by Hanu Raghavapudi and starring Dulquer Salmaan and Mrunal Thakur, the film is a poetic ode to faith, love, and letters that never fade.",
      poster: process.env.PUBLIC_URL + "/images/posters/sitaramam.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/sitaramam.png",
      trailerUrl: "ttps://www.youtube.com/embed/Ljk6tGZ1l3A",
    },
  },

  //  TAMIL MOVIES
  tamil: {
    leo: {
      title: "Leo",
      rating: 7.9,
      reviews: "620K Reviews",
      director: "Lokesh Kanagaraj",
      cast: ["Vijay", "Trisha"],
      genres: ["Action", "Thriller"],
      releaseDate: "19 Oct, 2023",
      runtime: "2h 44m",
      overview: "Leo is a psychological action thriller that dives into the dual life of Parthiban, a seemingly ordinary café owner with a dark past. When violence from his former world returns to haunt him, his hidden identity as Leo Das emerges with ruthless intensity. Directed by Lokesh Kanaraj and starring Vijay and Trisha, Leo delivers a gripping mix of family emotion, blood-soaked action, and the mysterious world of the LCU universe.",
      poster: process.env.PUBLIC_URL + "/images/posters/leo.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/leo.png",
      trailerUrl: "https://www.youtube.com/embed/Po3jStA673E",
    },
    jailer: {
      title: "Jailer",
      rating: 7.2,
      reviews: "300K Reviews",
      director: "Nelson",
      cast: ["Rajinikanth", "Vasanth Ravi"],
      genres: ["Action", "Comedy"],
      releaseDate: "10 Aug, 2023",
      runtime: "2h 45m",
      overview: "Jailer is a darkly humorous action entertainer that follows Muthuvel Pandian, a retired jailer who lives a quiet life until a dangerous criminal syndicate threatens his family. Forced out of retirement, he unleashes his brutal past to restore justice. Directed by Nelson Dilipkumar and starring Superstar Rajinikanth, Mohanlal, and Jackie Shroff, Jailer blends mass action, wit, and emotional depth — a thrilling reminder that a father’s rage can outmatch any gangster’s gun.",
      poster: process.env.PUBLIC_URL + "/images/posters/jailer.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/jailer.png",
      trailerUrl: "https://www.youtube.com/embed/a2C8Zkz4l10",
    },
    vikram: {
      title: "Vikram",
      rating: 8.4,
      reviews: "710K Reviews",
      director: "Lokesh Kanagaraj",
      cast: ["Kamal Haasan", "Fahadh Faasil"],
      genres: ["Action", "Thriller"],
      releaseDate: "3 Jun, 2022",
      runtime: "2h 55m",
      overview: "Vikram is a pulse-pounding action thriller that expands Lokesh Kanagaraj’s cinematic universe, following a retired agent, Vikram, who returns to hunt a deadly drug cartel. Kamal Haasan delivers a powerhouse performance alongside Vijay Sethupathi and Fahadh Faasil in a film that weaves espionage, emotion, and explosive action with precision. Vikram is more than just a mission — it’s a storm of vengeance, intelligence, and high-octane style.",
      poster: process.env.PUBLIC_URL + "/images/posters/vikram.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/vikram.png",
      trailerUrl: "https://www.youtube.com/embed/OKBMCL-frPU",
    },
    maaveeran: {
      title: "Maaveeran",
      rating: 7.3,
      reviews: "150K Reviews",
      director: "Madonne Ashwin",
      cast: ["Sivakarthikeyan", "Aditi Shankar"],
      genres: ["Action", "Fantasy"],
      releaseDate: "14 Jul, 2023",
      runtime: "2h 30m",
      overview: "Maaveeran tells the story of Sathya, a timid cartoonist who suddenly begins hearing a mysterious voice guiding him to stand up against corruption. What begins as confusion soon transforms him into a reluctant hero battling a powerful political system. Starring Sivakarthikeyan and directed by Madonne Ashwin, Maaveeran is an inspiring and witty mix of fantasy, humor, and courage that celebrates the everyday man’s fight for justice.",
      poster: process.env.PUBLIC_URL + "/images/posters/maaveeran.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/maaveeran.png",
      trailerUrl: "https://www.youtube.com/embed/EcNACt-LOi0",
    },
    robo: {
      title: "Robo",
      rating: 7.0,
      reviews: "100K Reviews",
      director: "Shankar",
      cast: ["Rajinikanth", "Aishwarya Rai"],
      genres: ["Sci-Fi", "Action"],
      releaseDate: "1 Jan, 2024",
      runtime: "2h 20m",
      overview: "Robo is a groundbreaking sci-fi spectacle that explores the fine line between human emotion and artificial intelligence. Dr. Vaseegaran, a scientist, creates Chitti, a humanoid robot capable of learning and feeling — but when emotions take over, chaos begins. Directed by Shankar and starring Rajinikanth and Aishwarya Rai Bachchan, Robo is a visual marvel that redefined Indian cinema with its pioneering VFX, massive scale, and timeless message about humanity in machines.",
      poster: process.env.PUBLIC_URL + "/images/posters/robo.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/robo.png",
      trailerUrl: "https://www.youtube.com/embed/1jgNECZtv5Q?si=QgtxjMS767SpfktU",
    },
    master: {
      title: "Master",
      rating: 7.5,
      reviews: "280K Reviews",
      director: "Lokesh Kanagaraj",
      cast: ["Vijay", "Vijay Sethupathi"],
      genres: ["Action", "Drama"],
      releaseDate: "13 Jan, 2021",
      runtime: "2h 45m",
      overview: "Master pits an alcoholic professor, JD, against a cold-blooded juvenile criminal mastermind, Bhavani, in a gripping battle of ideology and redemption. When JD is sent to reform a correctional facility, he discovers a world of manipulation and violence that tests his conscience. Directed by Lokesh Kanagaraj and starring Vijay and Vijay Sethupathi, Master is an electrifying clash of intellect, morality, and raw energy.",
      poster: process.env.PUBLIC_URL + "/images/posters/master.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/master.png",
      trailerUrl: "https://www.youtube.com/embed/1_iUFT3nWHk",
    },
  },

  //  MALAYALAM MOVIES
  malayalam: {
    aavesham: {
      title: "Aavesham",
      rating: 8.6,
      reviews: "500K Reviews",
      director: "Jithu Madhavan",
      cast: ["Fahadh Faasil"],
      genres: ["Comedy", "Action"],
      releaseDate: "11 Apr, 2024",
      runtime: "2h 35m",
      overview: "Aavesham is a chaotic, action-packed campus entertainer centered around a trio of students who get entangled with Ranga, a quirky yet fearsome gangster. What follows is a roller-coaster of violence, laughter, and unexpected friendship. Fahadh Faasil’s eccentric performance, coupled with Jithu Madhavan’s dynamic direction, makes Aavesham a cult hit that blends absurd humor, emotion, and stylized action with irresistible flair.",
      poster: process.env.PUBLIC_URL + "/images/posters/avaesh.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/aaveesh.png",
      trailerUrl: "https://www.youtube.com/embed/L0yEMl8PXnw",
    },
    premalu: {
      title: "Premalu",
      rating: 7.8,
      reviews: "120K Reviews",
      director: "Girideva Raj",
      cast: ["Naslen", "Mamitha Baiju"],
      genres: ["Romance", "Comedy"],
      releaseDate: "5 Feb, 2024",
      runtime: "2h 30m",
      overview: "Premalu is a refreshing romantic comedy that captures the emotional chaos of young love in the modern world. Following Sachin and Reenu, two contrasting personalities navigating career, crushes, and commitment in Hyderabad, the film celebrates the sweetness of connection and the awkwardness of affection. Directed by Girish A.D. and starring Naslen and Mamitha Baiju, Premalu is lighthearted, hilarious, and irresistibly heartwarming.",
      poster: process.env.PUBLIC_URL + "/images/posters/premalu.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/premalu.png",
      trailerUrl: "https://www.youtube.com/embed/Eo7YGPIuhiI",
    },
    "2018": {
      title: "2018",
      rating: 8.8,
      reviews: "650K Reviews",
      director: "Jude Anthany Joseph",
      cast: ["Tovino Thomas", "Kunchacko Boban"],
      genres: ["Drama", "Thriller"],
      releaseDate: "5 May, 2023",
      runtime: "2h 59m",
      overview: "2018 is a gripping survival drama based on the true events of the Kerala floods. The film showcases how ordinary citizens became real-life heroes during one of India’s worst natural disasters. Directed by Jude Anthany Joseph and starring Tovino Thomas, Kunchacko Boban, and Asif Ali, 2018 delivers a powerful, emotional portrayal of unity, courage, and humanity — reminding us that hope floats even in the darkest storms.",
      poster: process.env.PUBLIC_URL + "/images/posters/2018.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/2018.png",
      trailerUrl: "https://www.youtube.com/embed/jaxF7Y41A1o",
    },
    "manjummel-boys": {
      title: "Manjummel Boys",
      rating: 8.3,
      reviews: "220K Reviews",
      director: "Chidambaram",
      cast: ["Soubin Shahir", "Sreenath Bhasi"],
      genres: ["Thriller", "Adventure"],
      releaseDate: "22 Feb, 2024",
      runtime: "2h 1m",
      overview: "Manjummel Boys is a survival thriller inspired by a real incident in Kodaikanal’s Guna Caves, where a group of friends from Kochi faces a life-or-death situation after one of them falls into a deadly pit. Directed by Chidambaram, the film is an emotional tribute to friendship, bravery, and selflessness — blending breathtaking realism with heartfelt storytelling that leaves audiences moved and inspired.",
      poster: process.env.PUBLIC_URL + "/images/posters/mun.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/munjummelboys.png",
      trailerUrl: "https://www.youtube.com/embed/id848Ww1YLo",
    },
    romancham: {
      title: "Romancham",
      rating: 7.7,
      reviews: "150K Reviews",
      director: "Jithu Madhavan",
      cast: ["Soubin Shahir", "Arjun Ashokan"],
      genres: ["Horror", "Comedy"],
      releaseDate: "28 Apr, 2023",
      runtime: "2h 5m",
      overview: "Romancham is a hilarious horror-comedy that follows a group of bachelors in Bengaluru who accidentally summon a spirit while playing a Ouija board. As fear and madness take over their house, chaos unfolds in the most unexpected ways. Directed by Jithu Madhavan and starring Soubin Shahir and Arjun Ashokan, Romancham masterfully mixes scares and laughter — proving that sometimes, the funniest things happen in the darkest nights.",
      poster: process.env.PUBLIC_URL + "/images/posters/ro.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/romancham.png",
      trailerUrl: "https://www.youtube.com/embed/iB2Ol_hI-04",
    },
    "drishyam-2": {
      title: "Drishyam 2",
      rating: 8.1,
      reviews: "210K Reviews",
      director: "Jeethu Joseph",
      cast: ["Mohanlal", "Meena"],
      genres: ["Thriller", "Drama"],
      releaseDate: "18 Feb, 2021",
      runtime: "2h 30m",
      overview: "Drishyam 2 continues the thrilling saga of Georgekutty, a clever man who once outsmarted the police to protect his family. Years later, as new evidence resurfaces, the tension reignites, forcing him into a deeper game of deception. Directed by Jeethu Joseph and starring Mohanlal, Drishyam 2 is a masterclass in suspense and storytelling — a sequel that deepens the emotional and moral complexities of its iconic predecessor.",
      poster: process.env.PUBLIC_URL + "/images/posters/dri.png",
      bgImage: process.env.PUBLIC_URL + "/images/background/d2.png",
      trailerUrl: "https://www.youtube.com/embed/tOdJlNKquls",
    },
  },
  // ... (your other movie categories: hindi, telugu, tamil, malayalam)
};

const AllMovieSingle = () => {
  const { lang, slug } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [showTrailer, setShowTrailer] = useState(false);

  // ✅ Reviews state
  const [reviews, setReviews] = useState([
    {
      name: "Teja Kumar",
      rating: 5,
      comment:
        "Outstanding movie! The visuals and storyline kept me hooked till the end.",
    },
    {
      name: "Priya Sharma",
      rating: 4,
      comment: "Great acting and direction. Could’ve been slightly shorter.",
    },
    {
      name: "Rahul Verma",
      rating: 5,
      comment: "A masterpiece! Must watch in theatres.",
    },
  ]);

  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  // ✅ FIX: Normalize slug and support both nested & flat DB structures
  const normalizedSlug = slug?.toLowerCase()?.trim();
  const movie =
    MOVIES_DB[lang]?.[normalizedSlug] || MOVIES_DB[normalizedSlug];

  if (!movie) {
    console.log("🔍 Lang:", lang);
    console.log("🔍 Slug:", slug);
    console.log("🎬 Movie keys:", Object.keys(MOVIES_DB));
    return (
      <Container className="text-center text-light mt-5">
        <h2>Movie Not Found 😢</h2>
        <p>
          Lang: {lang}, Slug: {slug}
        </p>
      </Container>
    );
  }

  // ✅ Handle new review submission
  const handleAddReview = () => {
    if (newReview.name.trim() && newReview.comment.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", rating: 5, comment: "" });
      setShowReviewForm(false);
    } else {
      alert("Please enter your name and comment before submitting!");
    }
  };

  return (
    <>
      <UniversalSearchHeader title={movie.title} bgImage={movie.bgImage} />

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${movie.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Container className="pt-4 pb-5">
          <Row className="g-5">
            {/* 🎥 Poster Section */}
            <Col md={4} className="text-center">
              <img
                src={movie.poster}
                alt={movie.title}
                className="img-fluid rounded shadow-lg"
                style={{
                  border: "3px solid #ffcc00",
                  borderRadius: 12,
                  width: "80%",
                  height: "450px",
                  objectFit: "cover",
                  margin: "0 auto",
                  display: "block",
                }}
              />

              <div className="mt-4 d-flex flex-column align-items-center gap-3">
                <Button
                  variant="info"
                  className="fw-semibold text-dark px-4 py-2 rounded-pill d-flex align-items-center gap-2"
                  onClick={() => setShowTrailer((prev) => !prev)}
                >
                  <PlayCircle size={18} />{" "}
                  {showTrailer ? "HIDE TRAILER" : "WATCH TRAILER"}
                </Button>

                <Button
                  variant="warning"
                  className="fw-bold text-dark px-4 py-2 rounded-pill d-flex align-items-center gap-2"
                >
                  <Heart size={18} /> ADD TO FAVORITE
                </Button>
              </div>
            </Col>

            {/* 🎬 Movie Info */}
            <Col md={8}>
              <h1 className="fw-bold mb-3">{movie.title}</h1>

              {/* ❤️ & Share Buttons */}
              <div className="d-flex align-items-center gap-3 mb-3">
                <Button variant="outline-info" className="d-flex gap-2">
                  <Heart /> ADD TO FAVORITE
                </Button>
                <Button variant="outline-info" className="d-flex gap-2">
                  <Share /> SHARE
                </Button>
              </div>

              {/* ⭐ Rating Section */}
              <div
                className="d-flex align-items-center mb-4 border border-secondary rounded p-2"
                style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              >
                <div className="d-flex align-items-center me-4 border-end pe-4">
                  <StarFill color="gold" size={22} className="me-2" />
                  <div>
                    <h5 className="mb-0 fw-bold text-light">
                      {movie.rating}/10
                    </h5>
                    <small className="text-info">{movie.reviews}</small>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2 ms-3">
                  <span className="fw-semibold text-light me-2">Rating:</span>
                  {[...Array(5)].map((_, i) => (
                    <StarFill
                      key={i}
                      color={i < Math.round(movie.rating / 2) ? "gold" : "#444"}
                      size={20}
                    />
                  ))}
                </div>
              </div>

              {/* 🔽 Tabs */}
              <Nav
                variant="tabs"
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="mb-4"
              >
                <Nav.Item>
                  <Nav.Link eventKey="overview" className="fw-bold text-warning">
                    OVERVIEW
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="cast" className="fw-bold text-warning">
                    CAST & CREW
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="reviews" className="fw-bold text-warning">
                    REVIEWS
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              {/* 📖 Overview */}
              {activeTab === "overview" && (
                <Row>
                  <Col md={7}>
                    <p>{movie.overview}</p>

                    <h5 className="text-warning fw-bold mt-4 mb-3">
                      WATCH TRAILER
                    </h5>

                    {showTrailer ? (
                      <div
                        className="ratio ratio-16x9 shadow-lg rounded"
                        style={{ border: "2px solid #0dcaf0" }}
                      >
                        <iframe
                          src={movie.trailerUrl}
                          title={`${movie.title} Trailer`}
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <p className="text-muted fst-italic">
                        Click <strong>WATCH TRAILER</strong> to play the video 🎬
                      </p>
                    )}
                  </Col>

                  <Col md={5}>
                    <p>
                      <strong>Director:</strong> {movie.director}
                    </p>
                    <p>
                      <strong>Stars:</strong> {movie.cast.join(", ")}
                    </p>
                    <p>
                      <strong>Genres:</strong> {movie.genres.join(", ")}
                    </p>
                    <p>
                      <strong>Release Date:</strong> {movie.releaseDate}
                    </p>
                    <p>
                      <strong>Runtime:</strong> {movie.runtime}
                    </p>
                  </Col>
                </Row>
              )}

              {/* 🎭 Cast */}
              {activeTab === "cast" && (
                <div>
                  <h4 className="text-warning fw-bold mb-3">🎭 Cast & Crew</h4>
                  <p>
                    <strong>Director:</strong> {movie.director}
                  </p>
                  <p>
                    <strong>Main Cast:</strong> {movie.cast.join(", ")}
                  </p>
                  <p>
                    <strong>Genres:</strong> {movie.genres.join(", ")}
                  </p>
                  <h5 className="text-info mt-4 mb-2">🎬 Technical Crew</h5>
                  <ul className="list-unstyled text-light">
                    <li>• Music Director: A. R. Rahman</li>
                    <li>• Cinematographer: Ravi Varman</li>
                    <li>• Editor: Anthony</li>
                    <li>• Producer: Dharma Productions</li>
                  </ul>
                </div>
              )}

              {/* ⭐ Reviews */}
              {activeTab === "reviews" && (
                <div>
                  <h4 className="text-warning fw-bold mb-3">
                    ⭐ Audience Reviews
                  </h4>

                  {reviews.map((r, i) => (
                    <div key={i} className="mb-3 border-bottom pb-2">
                      <strong>{r.name}</strong>{" "}
                      <span className="text-muted">– {r.rating} stars</span>
                      <p className="text-light">{r.comment}</p>
                    </div>
                  ))}

                  {!showReviewForm && (
                    <Button
                      variant="info"
                      className="mt-3 fw-semibold"
                      onClick={() => setShowReviewForm(true)}
                    >
                      ✍️ Write Your Review
                    </Button>
                  )}

                  {showReviewForm && (
                    <Form className="mt-4 border rounded p-3 bg-dark">
                      <Form.Group className="mb-3">
                        <Form.Label className="text-light">Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={newReview.name}
                          onChange={(e) =>
                            setNewReview({ ...newReview, name: e.target.value })
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label className="text-light">
                          Rating (1–5)
                        </Form.Label>
                        <Form.Control
                          type="number"
                          min="1"
                          max="5"
                          value={newReview.rating}
                          onChange={(e) =>
                            setNewReview({
                              ...newReview,
                              rating: parseInt(e.target.value),
                            })
                          }
                        />
                      </Form.Group>

                      <Form.Group className="mb-3">
                        <Form.Label className="text-light">
                          Your Review
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={newReview.comment}
                          onChange={(e) =>
                            setNewReview({
                              ...newReview,
                              comment: e.target.value,
                            })
                          }
                        />
                      </Form.Group>

                      <div className="d-flex gap-3">
                        <Button variant="success" onClick={handleAddReview}>
                          ✅ Submit
                        </Button>
                        <Button
                          variant="secondary"
                          onClick={() => setShowReviewForm(false)}
                        >
                          ❌ Cancel
                        </Button>
                      </div>
                    </Form>
                  )}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AllMovieSingle;