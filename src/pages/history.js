import Wrapper from "@/components/wrapper";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "@/components/card";
import Head from "next/head";

function History() {
  const { data: session } = useSession();
  const [animeRecommendations, setAnimeRecommendations] = useState(null);

  useEffect(() => {
    const fetchAnimeRecommendations = async () => {
      try {
        if (!session) return;

        const query = `
          query GetAnimeRecommendations {
            Page(perPage: 10) {
              activities(userId: ${session?.user.id}, sort: ID_DESC) {
                ... on ListActivity {
                  type
                  status
                  media {
                    id
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://graphql.anilist.co", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();

        console.log(data.data.Page.activities);

        const activity = data?.data?.Page?.activities.find(
          (activity) =>
            activity.type === "ANIME_LIST" &&
            activity.status !== "plans to watch" &&
            activity.status !== "dropped"
        );

        if (activity) {
          const recommendationQuery = `
            query GetAnimeRecommendation($mediaId: Int!) {
              Media(id: $mediaId) {
                recommendations {
                  edges {
                    node {
                      mediaRecommendation {
                        id
                        genres
                        format
                        duration
                        description
                        externalLinks {
                          type
                          icon
                          id 
                          url 
                          color
                        }
                        bannerImage
                        coverImage {
                          large
                          extraLarge
                          medium
                        }
                        meanScore
                        episodes
                        title {
                          romaji
                          english
                          native
                          userPreferred
                        }
                      }                      
                    }
                  }
                }
              }
            }
          `;

          const recommendationResponse = await fetch(
            "https://graphql.anilist.co",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                query: recommendationQuery,
                variables: { mediaId: activity.media.id },
              }),
            }
          );

          const recommendationData = await recommendationResponse.json();
          setAnimeRecommendations(
            recommendationData?.data?.Media?.recommendations
          );
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchAnimeRecommendations();
  }, [session]);

  return (
    <>
      <Head>
        <title>Animood - History-Based Anime Recommendations</title>
        <meta
          name="description"
          content="Get personalized anime recommendations based on your watch history and recent AniList activity. Discover anime similar to what you've recently watched and enjoyed."
        />
        <meta
          name="keywords"
          content="anime history recommendations, anilist history, watch history anime, personalized anime suggestions, anime based on history"
        />
        <meta name="author" content="Animood" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#23A9D5" />

        <link rel="canonical" href="https://animood.lirena.in/history" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Animood - History-Based Anime Recommendations"
        />
        <meta
          property="og:description"
          content="Get personalized anime recommendations based on your watch history and recent AniList activity. Discover anime similar to what you've recently watched."
        />
        <meta property="og:url" content="https://animood.lirena.in/history" />
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
          content="Animood - History-Based Anime Recommendations"
        />
        <meta
          name="twitter:description"
          content="Get personalized anime recommendations based on your watch history and recent AniList activity. Discover anime similar to what you've recently watched."
        />
        <meta
          name="twitter:image"
          content="https://animood.lirena.in/animood.jpg"
        />

        {/* Additional meta tags */}
        <meta name="application-name" content="Animood" />
      </Head>

      <Wrapper>
        <main className="flex min-h-screen flex-col z-10 space-y-4 p-4">
          {!session && (
            <div className="h-full w-full justify-center items-center text-white text-xl">
              Sign In To Use This Feature
            </div>
          )}
          {animeRecommendations && (
            <>
              <p className="font-semibold text-gray-300 mb-2 relative pl-1 mt-4 text-xl md:text-xl lg:text-2xl">
                <span className="bg-action h-full absolute left-0 top-0 bottom-0 w-1"></span>
                <span className="ml-3 font-semibold">
                  Because on your recent activity
                </span>
              </p>
              <div className="flex flex-col w-full overflow-hidden">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 w-full snap-x overflow-x-hidden py-4 px-3 gap-2 justify-center font-sans transition-all duration-300"
                >
                  {animeRecommendations.edges.map(({ node }) => (
                    <Card anime={node.mediaRecommendation} key={node.id} />
                  ))}
                </motion.div>
              </div>
            </>
          )}
        </main>
      </Wrapper>
    </>
  );
}

export default History;
