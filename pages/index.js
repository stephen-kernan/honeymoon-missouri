import Head from "next/head";
import { MobileBio } from "../components/Bio/MobileBio";
import { DesktopBio } from "../components/Bio/DesktopBio";
import { PhotoGrid } from "../components/PhotoGrid/PhotoGrid";
import { TrailerSection } from "../components/TrailerSection/TrailerSection";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import { useWindowSize } from "../helpers/useWindowSize";
import { useCredits } from "../helpers/useCredits";

export const Home = () => {
  const size = useWindowSize();
  const [width] = useState(size.width);
  const { roles } = useCredits();

  return (
    <div className={styles.container}>
      <Head>
        <title>Honeymoon Missouri Short Film</title>
        <meta
          name="description"
          content="Honeymoon Missouri, a short film written and directed by Joe Eckstein, follows a traveler whose night at a remote hotel veers into the uncanny when she's given a suite reserved by another customer. Taking inspiration from the Coen Brothers (Fargo), Cormac McCarthy (No Country for Old Men) and David Lynch (Twin Peaks), the film explores the themes of love, life, death and darkness."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="honeymoon missouri, short films, film festival 2022, independent films, joe eckstein, cassie ferrick, george hovis, psychological thriller"
        />
        <meta
          property="og:title"
          content="Honeymoon Missouri - Directed by Joe Eckstein"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.honeymoonmissourifilm.com"
        />
        <meta property="og:image" content="/Screengrab_5.png" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/heart-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>

      <div className={styles.main}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Honeymoon Missouri</h1>
        </div>
      </div>
      <div className={`${styles.pane} ${styles.nonBio}`}>
        <div className={styles.logLineContainer}>
          <div className={styles.paneTextContainer} id={styles.logLine}>
            <p>
              A traveler's night at a remote hotel veers into the uncanny when
              she's given a suite reserved by another customer.
            </p>
          </div>
          <div className={styles.poster} id={styles.poster}></div>
          <div className={`${styles.nonBio}`} id={styles.directorStatement}>
            <div className={styles.paneTextContainer}>
              <h2 className={styles.nonBioTitle}>Director's Statement</h2>
              <p>
                "All good hotels lead people to do things they wouldn't normally
                do at home." Andre Balazs, Owner of the Chateau Marmont
                <br />
                <br />
                For a millennium, the space for the hotel room existed
                undefined. Mankind captured it, gave shape to it and passed
                through and sometimes when passing through they found themselves
                brushing against the secret truths of humanity. Honeymoon
                Missouri explores the themes of love, life, death and darkness,
                taking inspiration from the Coen Brothers (Fargo), Cormac
                McCarthy (No Country for Old Men) and David Lynch (Twin Peaks).
                Deceptive characters are forced to make morally ambiguous
                decisions and no other genre supports these Hitchcockian
                scenarios better than a thriller.
                <br />
                <br />
                Having grown up in Missouri, I'm drawn towards sinister stories
                that unfold in remote parts of the country, where the lack of
                civilization for dozens of miles invigorates the stakes. The
                conflict explored in this film reflects the intergenerational
                relationships of today in a confined environment. Honeymoon
                Missouri captures the indescribable sensation of loneliness and
                liberation that a night at a remote hotel will imbue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <TrailerSection variant="tan" />
      {width < 426 || !width ? <DesktopBio /> : <MobileBio />}
      <PhotoGrid
        title="Stills"
        variant="dark"
        useRawImage
        photos={[
          {
            url: "/Screengrab_1.png",
            alt: "Archie smokes a cigarette outside the motel",
          },
          {
            url: "/Screengrab_2.png",
            alt: "Steve and Debbie Smile towards Archie",
          },
          {
            url: "/Screengrab_3.png",
            alt: "The motel manager smiles towards Archie",
          },
          {
            url: "/Screengrab_4.png",
            alt: "Archie is startled by someone at the door",
          },
          { url: "/Screengrab_5.png", alt: "Archie gets out of her car" },
        ]}
      />
      <PhotoGrid
        title="Behind the Scenes"
        variant="tan"
        photos={[
          { url: "/bts1.jpg", alt: "Joe and Cassie sitting together" },
          {
            url: "/bts2.jpg",
            alt: "Brandan and Joe set up a shot next to Shawn McAninch",
          },
          { url: "/bts3.jpg", alt: "Joe, Cassie, and Brandan set up a scene" },
          {
            url: "/bts4.jpg",
            alt: "The cast and crew of Honeymoon Missouri sit outside talking",
          },
          {
            url: "/bts5.jpg",
            alt: "The cast and crew of Honeymoon Missouri sit down for a table read",
          },
          {
            url: "/bts6.jpg",
            alt: "Joe and Cassie give direction to George Hovis for a scene",
          },
          { url: "/bts7.jpg", alt: "Joe puts a microphone on George Hovis" },
          {
            url: "/bts8.jpg",
            alt: "Joe readsw the script while sitting on a bed of rose petals",
          },
          {
            url: "/bts9.jpg",
            alt: "Brandan films a scene that includes Archie filming Steve and Lorraine dancing",
          },
          {
            url: "/bts10.jpg",
            alt: "Joe looks at the towards the camera while standing next to Brandan",
          },
          {
            url: "/bts11.jpg",
            alt: "Joe looks over the script with Cassie, George Hovis, and Coleen Tutton ",
          },
          {
            url: "/bts12.jpg",
            alt: "The crew films Cassie smoking a cigarette outside the motel",
          },
        ]}
      />
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2 className={styles.specialThanksText}>Credits</h2>
          <div className={styles.credits}>
            {roles.map((role) => (
              <p>
                {role.name} – <i>{role.role}</i>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.footerContent}>
          <h2 className={styles.specialThanksText}>Special Thanks:</h2>
          <p className={styles.specialThanksText}>
            Matthew Schacht | Liam Flaherty | Glennon M. Eckstein | Dagmawi
            Abebe | Charlie Martin | Daisy De Wolf | Caitlin Shaffrey | Alex
            LaMar | Sam Hayes | Joseph Salvatore DiBartolo | Len & Pat Eckstein
            | Hugo Hector | Lily Harty | The Haskells | Eleonor Hayden | Matt
            Bozdech | Mary Johnston | Martin Lindeman | The Jovaags | Mark Perry
            | Unbridled Media | Joe Curl | Mom & Dad
            <br />
            <br />
            Filmed entirely on location at Lake Village Hotel and Campground in
            Paris, MO.
            <br />
            <br />
            In Association with PEACE FRAME PRODUCTIONS
          </p>
        </div>
        <div className={styles.footerLogo}>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/MissouriMovie/"
          >
            <img
              src="/facebooklogo.png"
              alt="Like Honeymoon Missouri on Facebook"
            />
          </a>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/honeymoonmissourifilm/?hl=en"
          >
            <img
              src="/instalogo.png"
              alt="Follow Honeymoon Missouri on Instagram"
            />
          </a>
        </div>
        <div className={styles.footerLogo}>
          <a href="https://www.imdb.com/title/tt15090714/">
            Visit Honeymoon Missouri on IMDB
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
