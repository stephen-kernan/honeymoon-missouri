import { HorizontalBio } from "./HorizontalBio";
import home from "../../styles/Home.module.scss";

export const DesktopBio = () => {
  return (
    <div className={`${home.pane} ${home.desktopBio}`}>
      <HorizontalBio
        variant={null}
        name="Joe Eckstein"
        role="Director"
        paragraphCount={2}
        imgPath="/joe-profile.jpeg"
        content={[
          " Joe Eckstein was born in St. Louis, Missouri in 1995. Joe’s childhood consisted of fishing, friends, hunting, being outdoors and all the pleasantries that come with living in the midwest, but he was morbidly fascinated with the dark undertones of society that contradicted his world.",
          "As a film-obsessed freshman at the University of Missouri, Joe honed his storytelling abilities through journalism and film-intensive courseloads. Upon graduation, he worked as an editor/project coordinator on a Star Trek docu-series before giving Missouri a valedictory wave and moving to Los Angeles. While living in South Central with fifteen other people, Joe committed two years learning the technical craft of special effects for the house that handled Apocalypse Now, The Godfather, Forrest Gump, and Pirates of the Caribbean.",
          "When the pandemic hit, Joe refused to sit still, spending his freetime producing a crowdfunded short project titled Honeymoon Missouri and writing a feature epic that placed in the second round of the Austin Film Festival's 2021 Screenplay Competition, besting over 15,000 other submissions. He also proceeded to work in the special effects departments for Searchlight's Quasi, Paramount's The Offer, Hulu's How I Met Your Father, and HBO's Euphoria. He can tell you right here right now that Lexi's play was not something that could have been accomplished by high schoolers.",
          'Joe is inspired by danger, the great outdoors, and Kendrick Lamar. He wants to tell stories that validate the presence of bravery in humankind and may someday be in the "forbidden" section of dystopian libraries. Stories that humanity may be more comfortable keeping in the dark, yet stories that are undeniably real.',
          "He intends to have more fun than should be legal in the process.",
        ]}
      />
      <HorizontalBio
        variant={null}
        name="Cassie Ferrick"
        role="Archie"
        imgPath="/cass.jpg"
        content={[
          " Cassie is an LA based actor. She grew up in Kansas City, Missouri and began acting in high school, graduating from The University of Missouri with a B.A. in Theatre Performance. Cassie loves bikerides, hiking, music, coffee, and cats. Which are in her words 'the things people say to make themselves seem cool but relatable'.",
        ]}
      />

      <HorizontalBio
        variant={null}
        name="Brandan Haskell"
        role="Cinematographer"
        imgPath="/brandan-haskell.jpg"
        content={[
          "Brandan Haskell is a filmmaker who made the great escape from the midwest to the west coast. Since moving to Los Angeles, he has helped several projects come to life through the sensor and celluloid.",
          "He is a cinematographer who has most notably completed his first feature film Rebel//Rebel (2021). Before then, he has done music videos, commercials, and worked as a second unit DP on a widely released feature film, Rollers (2020). Solely focused on the story, Brandan’s work offers a wide range of techniques, lenses, and exposures. His work can be noticed by the attention to the frame.",
        ]}
      />
      <HorizontalBio
        variant={null}
        name="Willis McCord"
        role="Producer"
        imgPath="/willis.jpg"
        content={[
          ' Willis is a Virginia raised, Los Angeles based Producer. He produced the festival nominated horror short film, “Psychosis,” which is distributed by DUST, and "Meow, Meredith." He currently works for Universal Pictures in Physical Production as a Staff Coordinator.',
          " He previously assisted the Below The Line department of ICM Partners and supported the Executive Producer of Marvel's Film, “Shang-Chi and the Legend of the 10 Rings.” He began his career as a 2nd AD on Eric Hurt’s feature “The Machinery of Dreams” before moving out to California. He graduated from the University of Virginia with a degree in Media Studies.",
        ]}
      />
    </div>
  );
};
