// src/Components/AllTVSingle.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Nav, Form } from "react-bootstrap";
import { StarFill, PlayCircle, Heart, Share } from "react-bootstrap-icons";
import UniversalSearchHeader from "./UniversalSearchHeader";

// ✅ TV SHOWS DATABASE (your URLs untouched)
const TV_DB = {
  "bigboss": {
    title: "Bigg Boss",
    rating: 7.2,
    reviews: "240K Reviews",
    director: "Various Directors",
    cast: ["Salman Khan", "Nagarjuna", "Kamal Haasan"],
    genres: ["Reality", "Drama"],
    releaseDate: "3 Nov, 2006",
    runtime: "40 min per episode",
    overview:
      "Bigg Boss is one of India’s most popular and controversial reality television shows, where a group of contestants, known as housemates, live together in a specially constructed house under constant surveillance. Isolated from the outside world, they must complete tasks, form alliances, and face eliminations each week based on public voting. With drama, emotions, strategy, and unpredictable twists, Bigg Boss offers a raw look into human behavior and relationships. Hosted by superstars like Salman Khan, Nagarjuna, and Kamal Haasan across regional versions, the show has become a cultural phenomenon that keeps audiences hooked season after season.",
    poster: process.env.PUBLIC_URL + "/images/posters/bigboss.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/Bigboss.png",
    trailerUrl: "https://www.youtube.com/embed/f8Bys4qf-so?si=wBaRV8jHgiUqSGDK",
  },
  "koffee-with-karan": {
    title: "Koffee With Karan",
    rating: 7.9,
    reviews: "450K Reviews",
    director: "Karan Johar",
    cast: ["Karan Johar", "Bollywood Celebrities"],
    genres: ["Talk Show", "Celebrity"],
    releaseDate: "19 Nov, 2004",
    runtime: "50 min per episode",
    overview:
      "Koffee With Karan is India’s most glamorous celebrity talk show, hosted by the charismatic filmmaker Karan Johar. Known for its candid conversations, playful games, and spicy revelations, the show brings together Bollywood’s biggest stars as they spill secrets, share behind-the-scenes stories, and reveal personal moments like never before. From laughter to controversies, Koffee With Karan redefines celebrity interviews with wit, charm, and unfiltered honesty — serving up a perfect blend of gossip, glamour, and good vibes with every cup.",
    poster: process.env.PUBLIC_URL + "/images/koffe.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/koffe.png",
    trailerUrl: "https://www.youtube.com/embed/3ahpI_AHtT8?si=RAfLh83P-LQEgELN",
  },
  "dance-plus": {
    title: "Dance Plus",
    rating: 8.0,
    reviews: "310K Reviews",
    director: "Remo D'Souza",
    cast: ["Remo D'Souza", "Raghav Juyal"],
    genres: ["Reality", "Dance"],
    releaseDate: "26 Jul, 2015",
    runtime: "60 min per episode",
    overview:
      "Dance Plus is one of India’s most loved dance reality shows, celebrating extraordinary talent and creativity from across the nation. Mentored by Remo D’Souza and featuring captains like Punit Pathak, Shakti Mohan, and Dharmesh, the show gives aspiring dancers a national stage to showcase their passion and innovation. From jaw-dropping choreography to emotional storytelling through movement, Dance Plus is a spectacular fusion of art, energy, and inspiration — proving that dance is more than performance, it’s pure emotion in motion.",
    poster: process.env.PUBLIC_URL + "/images/dancepluse.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/dancepluse.png",
    trailerUrl: "https://www.youtube.com/embed/DbeZWsij6bc?si=j2tv48a2jDWvr8Jc",
  },
  "super-singer": {
    title: "Super Singer",
    rating: 8.3,
    reviews: "370K Reviews",
    director: "Vijay TV Team",
    cast: ["Anirudh Ravichander", "Benny Dayal", "Chinmayi Sripada"],
    genres: ["Reality", "Music"],
    releaseDate: "28 Apr, 2006",
    runtime: "60 min per episode",
    overview:
      "Super Singer is a prestigious musical reality show that gives aspiring singers a grand platform to showcase their vocal talent and achieve their dreams. With contestants from across India competing in front of celebrated judges and live audiences, the show blends music, emotion, and competition in perfect harmony. Featuring legendary mentors and powerful performances, Super Singer has launched many successful playback singers and remains a symbol of passion, perseverance, and the unifying power of music.",
    poster: process.env.PUBLIC_URL + "/images/supersinger.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/supersinger.png",
    trailerUrl:
      "https://www.youtube.com/embed/fdwrYmtwXMM?si=9ZkR4MX6CQya4OPD",
  },
  sherlock: {
    title: "Sherlock",
    rating: 9.1,
    reviews: "2.3M Reviews",
    director: "Paul McGuigan, Nick Hurran",
    cast: ["Benedict Cumberbatch", "Martin Freeman"],
    genres: ["Crime", "Mystery", "Drama"],
    releaseDate: "25 Jul, 2010",
    runtime: "90 min per episode",
    overview:
      "Sherlock is a modern reimagining of Sir Arthur Conan Doyle’s classic detective tales, set in 21st-century London. The series follows the brilliant but eccentric consulting detective Sherlock Holmes and his loyal friend Dr. John Watson as they unravel complex crimes with razor-sharp intelligence and stunning deduction. Starring Benedict Cumberbatch and Martin Freeman, Sherlock is a masterclass in storytelling, suspense, and character — blending mystery, wit, and psychological depth into one of the most acclaimed detective dramas of all time.",
    poster: process.env.PUBLIC_URL + "/images/sherlock.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/sherlockbg.png",
    trailerUrl: "https://www.youtube.com/embed/-bBHT158E0s?si=S9c4ibWhXX63bRLs",
  },
  dee: {
    title: "Dhee",
    rating: 8.2,
    reviews: "310K Reviews",
    director: "ETV Team",
    cast: ["Pradeep Machiraju", "Sekhar Master", "Priyamani"],
    genres: ["Reality", "Dance"],
    releaseDate: "6 Apr, 2009",
    runtime: "60 min per episode",
    overview:
      "Dhee is one of South India’s most celebrated dance reality shows, renowned for its high-energy performances, creative choreography, and grand stage presence. Hosted by the charismatic Pradeep Machiraju and judged by icons like Sekhar Master and Priyamani, the show brings together some of the best dancers in the country to compete in electrifying duels. With breathtaking themes, emotional storytelling, and unmatched entertainment, Dhee has become a household name — setting new standards for dance shows on Indian television",
    poster: process.env.PUBLIC_URL + "/images/dee.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/dheebg.png",
    trailerUrl: "https://www.youtube.com/embed/EFO6LTQMZaI?si=3mwCQ2giV6d78MlF",
  },
  "breaking-bad": {
    title: "Breaking Bad",
    rating: 9.5,
    reviews: "3.2M Reviews",
    director: "Vince Gilligan",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
    genres: ["Crime", "Drama", "Thriller"],
    releaseDate: "20 Jan, 2008",
    runtime: "47 min per episode",
    overview:
      "Breaking Bad is a groundbreaking American crime drama that follows the transformation of Walter White, a mild-mannered high school chemistry teacher turned ruthless methamphetamine producer. After being diagnosed with cancer, Walter partners with his former student Jesse Pinkman to secure his family’s future, but their descent into the criminal underworld spirals into chaos, greed, and moral collapse. Created by Vince Gilligan and acclaimed for its writing, performances, and cinematography, Breaking Bad is a masterful exploration of ambition, consequence, and the dark side of human nature — often hailed as one of the greatest TV series ever made.",
    poster: process.env.PUBLIC_URL + "/images/breakingbad.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/bb.png",
    trailerUrl: "https://www.youtube.com/embed/HhesaQXLuRY?si=WRnlr1XxNY9uF9n3",
  },
  moneyhiest: {
    title: "Money Heist",
    rating: 8.4,
    reviews: "2.4M Reviews",
    director: "Álex Pina",
    cast: ["Úrsula Corberó", "Álvaro Morte", "Pedro Alonso"],
    genres: ["Action", "Crime", "Thriller"],
    releaseDate: "2 May, 2017",
    runtime: "50 min per episode",
    overview:
      "Money Heist (La Casa de Papel) is a gripping Spanish crime thriller that follows “The Professor,” a criminal mastermind who plans the greatest heist in history — printing billions of euros inside the Royal Mint of Spain. With a team of eight skilled but volatile robbers, each named after a city, the story unfolds through high-stakes tension, emotional backstories, and shocking twists. As hostages, police, and robbers clash in a battle of intellect and loyalty, Money Heist becomes a thrilling exploration of love, resistance, and rebellion — making it one of the most iconic global series of all time.",
    poster: process.env.PUBLIC_URL + "/images/moneyhiest.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/moneyhiest.png",
    trailerUrl: "https://www.youtube.com/embed/_InqQJRqGW4?si=vh76xHKWP9Iiw-c2",
  },
  familyman: {
    title: "The Family Man",
    rating: 8.7,
    reviews: "1.1M Reviews",
    director: "Raj & DK",
    cast: ["Manoj Bajpayee", "Samantha Ruth Prabhu", "Priyamani"],
    genres: ["Action", "Drama", "Thriller"],
    releaseDate: "20 Sep, 2019",
    runtime: "50 min per episode",
    overview:
      "A The Family Man is a gripping action-drama series that follows Srikant Tiwari, a seemingly ordinary middle-class man who secretly works as an intelligence officer for T.A.S.C., a covert branch of the National Investigation Agency. Balancing national security threats and his chaotic family life, Srikant faces terrorists by day and domestic drama by night. Starring Manoj Bajpayee, Samantha Ruth Prabhu, and Priyamani, The Family Man masterfully blends suspense, humor, and emotion — portraying the struggles of a man torn between duty and domesticity in a world of lies and danger.",
    poster: process.env.PUBLIC_URL + "/images/familyman.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/familyman.png",
    trailerUrl: "https://www.youtube.com/embed/gUoMPGEArsc?si=P483iaG_2DiYBF_9",
  },
  "demon-slayer": {
    title: "Demon Slayer: Kimetsu no Yaiba",
    rating: null,
    reviews: null,
    director: "Haruo Sotozaki",
    cast: ["Natsuki Hanae", "Akari Kito", "Hiro Shimono"],
    genres: ["Action", "Fantasy", "Adventure"],
    releaseDate: "Apr 6, 2019",
    runtime: "≈ 24 min per episode",
    overview:
      "Demon Slayer: Kimetsu no Yaiba is a visually stunning anime that follows Tanjiro Kamado, a kind-hearted boy whose life changes forever after demons slaughter his family, leaving his sister Nezuko cursed as one herself. Determined to avenge his family and restore Nezuko’s humanity, Tanjiro joins the Demon Slayer Corps and embarks on a perilous journey filled with deadly battles, breathtaking swordsmanship, and unbreakable bonds. Directed by Haruo Sotozaki and adapted from Koyoharu Gotouge’s manga, Demon Slayer is a masterpiece of animation, emotion, and courage — celebrating the resilience of the human spirit in the face of darkness.",
    poster: process.env.PUBLIC_URL + "/images/demonslayer.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/demonslayer.png",
    trailerUrl: "https://www.youtube.com/embed/gUoMPGEArsc",
  },
  starwars: {
    title: "Star Wars",
    rating: null,
    reviews: null,
    director: "George Lucas",
    cast: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
    genres: ["Sci-Fi", "Adventure", "Fantasy"],
    releaseDate: "May 25, 1977",
    runtime: "varies by film",
    overview:
      "Star Wars is a legendary space opera that transports audiences to a galaxy far, far away, where the eternal battle between the light and dark sides of the Force shapes the destiny of civilizations. Created by George Lucas, the saga follows heroes like Luke Skywalker, Princess Leia, and Han Solo as they rise against the tyrannical Galactic Empire, led by the dark lord Darth Vader. Blending adventure, mythology, and groundbreaking visual effects, Star Wars redefined cinematic storytelling and became a global cultural phenomenon — inspiring generations with its themes of hope, destiny, and the power of belief.",
    poster: process.env.PUBLIC_URL + "/images/posters/starwars.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/starwars-bg.png",
    trailerUrl: "https://www.youtube.com/embed/vZ734NWnAHA",
  },
  harikatha: {
    title: "Hari Katha",
    rating: 8.0,
    reviews: "120K Reviews",
    director: "Hari Teja",
    cast: ["Hari Teja", "Telugu Artists"],
    genres: ["Drama", "Comedy", "Talk Show"],
    releaseDate: "10 Jun, 2023",
    runtime: "45 min per episode",
    overview:
      "Hari Katha is a delightful Telugu talk show that blends humor, storytelling, and heartfelt conversations with a unique cultural touch. Hosted by the talented Hari Teja, the show features candid interactions with popular Telugu celebrities, offering audiences laughter, nostalgia, and inspiring life lessons. Through engaging anecdotes and witty exchanges, Hari Katha celebrates art, emotions, and everyday experiences — creating a refreshing blend of entertainment and authenticity that connects deeply with viewers.",
    poster: process.env.PUBLIC_URL + "/images/harikatha.png",
    bgImage: process.env.PUBLIC_URL + "/images/background/harikatha.png",
    trailerUrl: "https://www.youtube.com/embed/p2Xr3T3iL7c?si=OsBtdkLrgc9ImQOr",
  },
};

// ✅ MAIN COMPONENT
const AllTVSingle = () => {
  const { slug } = useParams();
  const normalizedSlug = slug?.toLowerCase()?.trim();
  const show = TV_DB[normalizedSlug];

  const [activeTab, setActiveTab] = useState("overview");
  const [showTrailer, setShowTrailer] = useState(false);
  const [reviews, setReviews] = useState([
    { name: "Teja Kumar", rating: 5, comment: "Absolutely entertaining!" },
    { name: "Priya Sharma", rating: 4, comment: "Fun to watch on weekends." },
    { name: "Rahul Verma", rating: 5, comment: "My favorite show!" },
  ]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });

  // ✅ If invalid show
  if (!show) {
    return (
      <Container className="text-center text-light mt-5">
        <h2>Show Not Found 😢</h2>
        <p>Slug: {slug}</p>
        <p>Available: {Object.keys(TV_DB).join(", ")}</p>
      </Container>
    );
  }

  // ✅ Share handler
  const handleShare = async () => {
    const shareData = {
      title: show.title,
      text: `Check out ${show.title}!`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert("🔗 Link copied to clipboard!");
      }
    } catch (err) {
      console.warn("Share failed", err);
    }
  };

  // ✅ Add Review
  const handleAddReview = () => {
    if (!newReview.name.trim() || !newReview.comment.trim()) {
      alert("Please fill all fields!");
      return;
    }
    setReviews([...reviews, newReview]);
    setNewReview({ name: "", rating: 5, comment: "" });
    setShowReviewForm(false);
  };

  return (
    <>
      <UniversalSearchHeader title={show.title} bgImage={show.bgImage} />

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url(${show.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Container className="pt-4 pb-5">
          <Row className="g-5">
            {/* Left: Poster */}
            <Col md={4} className="text-center">
              <img
                src={show.poster}
                alt={show.title}
                className="img-fluid rounded shadow-lg"
                style={{
                  border: "3px solid #ffcc00",
                  borderRadius: 12,
                  width: "80%",
                  maxWidth: "500px",
                }}
              />

              <div className="mt-4 d-flex flex-column align-items-center gap-3">
                <Button
                  variant="info"
                  className="fw-semibold text-dark px-4 py-2 rounded-pill d-flex align-items-center gap-2"
                  onClick={() => setShowTrailer((prev) => !prev)}
                >
                  <PlayCircle size={18} />
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

            {/* Right: Info */}
            <Col md={8}>
              <h1 className="fw-bold mb-3">{show.title}</h1>

              <div className="d-flex align-items-center gap-3 mb-4">
                <Button
                  variant="outline-info"
                  className="fw-semibold px-3 py-2 d-flex align-items-center gap-2"
                >
                  <Heart size={18} /> ADD TO FAVORITE
                </Button>
                <Button
                  variant="outline-info"
                  className="fw-semibold px-3 py-2 d-flex align-items-center gap-2"
                  onClick={handleShare}
                >
                  <Share size={18} /> SHARE
                </Button>
              </div>

              {/* Rating */}
              <div
                className="d-flex align-items-center mb-4 border border-secondary rounded p-2"
                style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
              >
                <StarFill color="gold" size={22} className="me-2" />
                <div>
                  <h5 className="mb-0 fw-bold text-light">
                    {show.rating || "N/A"}/10
                  </h5>
                  <small className="text-info">
                    {show.reviews || "No Reviews"}
                  </small>
                </div>
              </div>

              {/* Tabs */}
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

              {/* OVERVIEW TAB */}
              {activeTab === "overview" && (
                <Row>
                  <Col md={7}>
                    <p>{show.overview}</p>
                    <h5 className="text-warning fw-bold mt-4 mb-3">
                      WATCH TRAILER
                    </h5>
                    {showTrailer ? (
                      <div
                        className="ratio ratio-16x9 shadow-lg rounded"
                        style={{ border: "2px solid #0dcaf0" }}
                      >
                        <iframe
                          src={show.trailerUrl}
                          title={`${show.title} Trailer`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <p className="text-muted fst-italic">
                        Click <strong>WATCH TRAILER</strong> to play the video 🎬
                      </p>
                    )}
                  </Col>
                  <Col md={5}>
                    <p><strong>Director:</strong> {show.director}</p>
                    <p><strong>Stars:</strong> {show.cast.join(", ")}</p>
                    <p><strong>Genres:</strong> {show.genres.join(", ")}</p>
                    <p><strong>Release Date:</strong> {show.releaseDate}</p>
                    <p><strong>Runtime:</strong> {show.runtime}</p>
                  </Col>
                </Row>
              )}

              {/* CAST TAB */}
              {activeTab === "cast" && (
                <div>
                  <h4 className="text-warning fw-bold mb-3">🎭 Cast & Crew</h4>
                  <p><strong>Director:</strong> {show.director}</p>
                  <p><strong>Main Cast:</strong> {show.cast.join(", ")}</p>
                  <h5 className="text-info mt-4 mb-2">🎬 Technical Team</h5>
                  <ul className="list-unstyled text-light">
                    <li>• Creative Producer: Ravi Kumar</li>
                    <li>• Cinematographer: K. K. Senthil</li>
                    <li>• Editor: Anthony Gonsalves</li>
                    <li>• Production House: Endemol Shine / Vijay TV</li>
                  </ul>
                </div>
              )}

              {/* REVIEWS TAB */}
              {activeTab === "reviews" && (
                <div>
                  <h4 className="text-warning fw-bold mb-3">⭐ Audience Reviews</h4>
                  {reviews.map((r, i) => (
                    <div key={i} className="mb-3 border-bottom pb-2">
                      <strong>{r.name}</strong>{" "}
                      <span className="text-muted">– {r.rating} stars</span>
                      <p className="text-light mb-1">{r.comment}</p>
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
                        <Form.Label className="text-light">Rating (1–5)</Form.Label>
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
                        <Form.Label className="text-light">Your Review</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          value={newReview.comment}
                          onChange={(e) =>
                            setNewReview({ ...newReview, comment: e.target.value })
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

export default AllTVSingle;
