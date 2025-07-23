import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import moods from "@/utils/mood";
import ChangeLog from "@/components/changelog";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          Animood - AI-Powered Anime Recommendations Based on Your Mood
        </title>
        <meta
          name="title"
          content="Animood - AI-Powered Anime Recommendations Based on Your Mood"
        />
        <meta
          name="description"
          content="Discover perfect anime recommendations with Animood's AI technology. Get personalized anime suggestions based on your mood, watch history, and AniList data. Find your next favorite anime now!"
        />
        <meta
          name="keywords"
          content="anime recommendations, AI anime, mood-based anime, anime suggestion, anilist recommendations, anime discovery, personalized anime"
        />
        <meta name="author" content="Animood" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#23A9D5" />
        <link rel="canonical" href="https://animood.lirena.in/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://animood.lirena.in/" />
        <meta
          property="og:title"
          content="Animood - AI-Powered Anime Recommendations Based on Your Mood"
        />
        <meta
          property="og:description"
          content="Discover perfect anime recommendations with Animood's AI technology. Get personalized anime suggestions based on your mood, watch history, and AniList data."
        />
        <meta
          property="og:image"
          content="https://animood.lirena.in/animood.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Animood" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://animood.lirena.in/" />
        <meta
          property="twitter:title"
          content="Animood - AI-Powered Anime Recommendations Based on Your Mood"
        />
        <meta
          property="twitter:description"
          content="Discover perfect anime recommendations with Animood's AI technology. Get personalized anime suggestions based on your mood, watch history, and AniList data."
        />
        <meta
          property="twitter:image"
          content="https://animood.lirena.in/animood.jpg"
        />
      </Head>
      <main
        className={`bg-primary flex min-h-screen flex-col items-center z-10 justify-between p-4 `}
      >
        <ChangeLog />
        <div className="flex flex-col w-full space-y-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-secondary/20 border border-white/[0.2] to-secondary rounded-xl py-10 px-4 z-10 space-y-2 relative overflow-hidden"
          >
            <div className="relative z-20">
              <span className="  text-5xl animood pb-6 pt-2 ">Animood</span>
              <form
                className="w-full flex"
                onSubmit={(e) => {
                  e.preventDefault(); // Prevent the default form submission behavior
                  const keyword = e.target.search.value;
                  router.push(`/mood/${encodeURIComponent(keyword)}`);
                }}
              >
                <input
                  type="text"
                  name="search"
                  placeholder="Enter your mood"
                  className="w-[90%] lg:w-[30%] p-2 rounded-l-md bg-white text-gray-500 outline-none"
                />
                <button
                  type="submit"
                  className="p-2 bg-action rounded-r-md text-white grid place-items-center"
                >
                  <div className="w-7 h-7 outline-none bg-action  text-white ">
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

              <div className="py-2  my-4 gap-1 flex-col flex">
                {Array(4)
                  .fill()
                  .map((_, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="flex gap-1 w-full overflow-auto no-scrollbar"
                    >
                      {moods
                        .slice(sectionIndex * 11, sectionIndex * 11 + 11)
                        .map((mood, moodIndex) => (
                          <Link
                            key={moodIndex}
                            className="flex-shrink-0"
                            href={`/mood/${mood}`}
                          >
                            <div className="text-gray-500 text-sm rounded-full py-1.5 px-4 bg-white hover:scale-105 transition-all duration-300">
                              {mood}
                            </div>
                          </Link>
                        ))}
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-bold text-5xl w-full  text-center text-white mx-auto justify-center flex"
          >
            Discover Your Perfect Anime Picks With...
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            class="grid grid-cols-1  md:grid-cols-3 p-4 text-white gap-4 justify-between"
          >
            <Link href="/mood">
              <div class="relative p-4 text-center xl:h-52 py-10 text-xl hover:scale-105 transition-all duration-300  flex flex-col items-center w-full border border-white/[0.2] rounded-md">
                <div className="p-2 rounded-full bg-secondary w-fit ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.75em"
                    height="1.75em"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="currentColor"
                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75a.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25a.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8"
                    ></path>
                  </svg>
                </div>
                <span class="z-20 relative text-white">
                  Mood based recommendation
                </span>
                <div className="text-base text-center  text-gray-400">
                  Provide you recommendation based on your mood. We got you
                  covered for every mood you want to experience.
                </div>
              </div>
            </Link>

            <Link href="/history">
              <div class="relative p-4 py-10 xl:h-52 text-xl text-center flex flex-col hover:scale-105 transition-all duration-300 items-center w-full border border-white/[0.2] rounded-md">
                <div className="p-2 rounded-full bg-secondary w-fit ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.75em"
                    height="1.75em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="1.5"
                    >
                      <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"></path>
                      <path stroke-linejoin="round" d="M12 9v4h4"></path>
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke-dasharray=".5 3.5"
                      ></circle>
                    </g>
                  </svg>
                </div>
                <span class="z-20 relative text-white">
                  History based recommendation
                </span>
                <div className="text-base text-center  text-gray-400">
                  Oh I recently watched this movie and I was so happy. I want to
                  watch somehting similar to this... sure we can do that for
                  you.
                </div>
              </div>
            </Link>

            <Link href="/anilist">
              <div class="relative p-4 py-10 xl:h-52 text-xl text-center flex flex-col hover:scale-105 transition-all duration-300 items-center w-full border border-white/[0.2] rounded-md">
                <div className="p-2 rounded-full bg-secondary w-fit ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.75em"
                    height="1.75em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M24 17.53v2.421c0 .71-.391 1.101-1.1 1.101h-5l-.057-.165L11.84 3.736c.106-.502.46-.788 1.053-.788h2.422c.71 0 1.1.391 1.1 1.1v12.38H22.9c.71 0 1.1.392 1.1 1.101zM11.034 2.947l6.337 18.104h-4.918l-1.052-3.131H6.019l-1.077 3.131H0L6.361 2.948h4.673zm-.66 10.96l-1.69-5.014l-1.541 5.015h3.23z"
                    ></path>
                  </svg>
                </div>
                <span class="z-20 relative text-white">
                  Anime list based recommendation
                </span>
                <div className="text-base text-center  text-gray-400">
                  But you want anime recommendation based on your overall anime
                  list? It is fine we have that too.
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
