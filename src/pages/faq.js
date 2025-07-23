import Wrapper from "@/components/wrapper";
import Head from "next/head";

function FAQ() {
  return (
    <>
      <Head>
        <title>Animood - Frequently Asked Questions (FAQ)</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Animood's AI-powered anime recommendation system, mood-based suggestions, and how to get personalized anime recommendations."
        />
        <meta
          name="keywords"
          content="animood faq, anime recommendations help, frequently asked questions, animood support, how to use animood"
        />
        <meta name="author" content="Animood" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#23A9D5" />

        <link rel="canonical" href="https://animood.lirena.in/faq" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Animood - Frequently Asked Questions (FAQ)"
        />
        <meta
          property="og:description"
          content="Find answers to frequently asked questions about Animood's AI-powered anime recommendation system and how to get personalized anime suggestions."
        />
        <meta property="og:url" content="https://animood.lirena.in/faq" />
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
          content="Animood - Frequently Asked Questions (FAQ)"
        />
        <meta
          name="twitter:description"
          content="Find answers to frequently asked questions about Animood's AI-powered anime recommendation system and how to get personalized anime suggestions."
        />
        <meta
          name="twitter:image"
          content="https://animood.lirena.in/animood.jpg"
        />

        {/* Additional meta tags */}
        <meta name="application-name" content="Animood" />
      </Head>
      <Wrapper>
        <main
          className={` flex min-h-screen flex-col  z-10 justify-between p-4 `}
        >
          <div className="flex gap-2  w-full items-center justify-center  text-white text-center  space-y-4 text-lg">
            <span className="text-action text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 17q.425 0 .713-.288T13 16v-4q0-.425-.288-.712T12 11t-.712.288T11 12v4q0 .425.288.713T12 17m0-8q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9m0 13q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
                ></path>
              </svg>
            </span>
            <span>
              Welp FAQ stands for Frequently Asked Questions. So lmao there are
              no questions that are asked to me right now so there is that.
            </span>
          </div>
        </main>
      </Wrapper>
    </>
  );
}

export default FAQ;
