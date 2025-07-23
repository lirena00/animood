import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Wrapper from "@/components/wrapper";
import Head from "next/head";
import Link from "next/link";
import moods from "@/utils/mood";

export default function MoodIndex() {
  const router = useRouter();
  const [mood, setMood] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (mood) {
      router.push(`/mood/${encodeURIComponent(mood)}`);
    }
  };

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  return (
    <>
      <Head>
        <title>Animood - Mood-Based Anime Recommendations</title>
        <meta
          name="description"
          content="Discover anime based on your current mood. Choose from a variety of emotions and feelings to get personalized anime recommendations powered by AI."
        />
        <meta
          name="keywords"
          content="mood anime, anime recommendations, emotional anime, mood-based suggestions, AI anime recommendations, anime by feeling"
        />
        <meta name="author" content="Animood" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#23A9D5" />

        <link rel="canonical" href="https://animood.lirena.in/mood" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Animood - Mood-Based Anime Recommendations"
        />
        <meta
          property="og:description"
          content="Discover anime based on your current mood. Choose from a variety of emotions and feelings to get personalized anime recommendations powered by AI."
        />
        <meta property="og:url" content="https://animood.lirena.in/mood" />
        <meta
          property="og:image"
          content="https://animood.lirena.in/animood.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Animood" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Animood - Mood-Based Anime Recommendations"
        />
        <meta
          name="twitter:description"
          content="Discover anime based on your current mood. Choose from a variety of emotions and feelings to get personalized anime recommendations powered by AI."
        />
        <meta
          name="twitter:image"
          content="https://animood.lirena.in/animood.jpg"
        />

        {/* Additional meta tags */}
        <meta name="application-name" content="Animood" />
      </Head>

      <Wrapper>
        <main className="bg-primary flex min-h-screen flex-col items-center z-10 space-y-4 p-4">
          <div className="flex flex-col w-full items-center justify-between text-sm space-y-4">
            <span className="text-5xl animood pb-6 pt-2">Animood</span>

            <div className="font-bold text-3xl lg:text-5xl w-full mx-auto justify-center flex">
              <mark className="inline-block px-2 pb-[14px] text-white bg-action leading-[0.125em]">
                I want to Feel Like
              </mark>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex items-center justify-center relative w-[95%] lg:w-[50%]"
            >
              <input
                type="text"
                name="mood"
                placeholder="Enter your mood"
                value={mood}
                className="w-full px-4 py-2.5 outline-none text-gray-400 rounded-l-lg"
                onChange={handleMoodChange}
              />
              <button type="submit">
                <div className="w-10 h-10 outline-none bg-action rounded-r-lg text-white grid place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 256 256"
                  >
                    <g fill="currentColor">
                      <path
                        d="M192 112a80 80 0 1 1-80-80a80 80 0 0 1 80 80"
                        opacity=".2"
                      ></path>
                      <path d="m229.66 218.34l-50.06-50.06a88.21 88.21 0 1 0-11.32 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"></path>
                    </g>
                  </svg>
                </div>
              </button>
            </form>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="w-full max-w-4xl"
            >
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                Or choose from popular moods:
              </h2>

              <div className="py-2 my-4 gap-2 flex-col flex">
                {Array(Math.ceil(moods.length / 11))
                  .fill()
                  .map((_, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="flex gap-2 w-full overflow-auto no-scrollbar justify-center flex-wrap"
                    >
                      {moods
                        .slice(sectionIndex * 11, sectionIndex * 11 + 11)
                        .map((mood, moodIndex) => (
                          <Link
                            key={moodIndex}
                            className="flex-shrink-0"
                            href={`/mood/${encodeURIComponent(
                              mood.replace(/[^\w\s]/gi, "").trim()
                            )}`}
                          >
                            <div className="text-gray-500 text-sm rounded-full py-2 px-4 bg-white hover:scale-105 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
                              {mood}
                            </div>
                          </Link>
                        ))}
                    </div>
                  ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-secondary/20 border border-white/[0.2] to-secondary rounded-xl py-8 px-6 w-full max-w-4xl space-y-4"
            >
              <h3 className="text-xl font-bold text-white text-center">
                How it works
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <div className="text-action text-2xl">🎭</div>
                  <h4 className="text-white font-semibold">
                    Express Your Mood
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Type how you&apos;re feeling or select from our mood
                    collection
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-action text-2xl">🤖</div>
                  <h4 className="text-white font-semibold">AI Analysis</h4>
                  <p className="text-gray-300 text-sm">
                    Our AI analyzes your mood and matches it with anime genres
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="text-action text-2xl">📺</div>
                  <h4 className="text-white font-semibold">
                    Get Recommendations
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Discover anime perfectly suited to your current emotional
                    state
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </Wrapper>
    </>
  );
}
