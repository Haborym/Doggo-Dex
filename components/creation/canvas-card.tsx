"use client";

import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

// const sketch: Sketch = (p5) => {
//   let img: any;
//   p5.setup = () => {
//     p5.createCanvas(630, 880);
//     img = p5.loadImage("./images/empty-card.png");
//   };

//   p5.draw = () => {
//     p5.background(250);
//     p5.image(img, 0, 0);
//     p5.text(dogName, 50, 50);
//   };
// };

interface CanvasCardProp {
  dogName: string;
  race: string;
  age: string;
  imageSrc: any;
  exportCard: boolean;
}

import { Mirza } from "next/font/google";

const inter = Mirza({
  subsets: ["latin"],
  weight: "400",
});
export const CanvasCard = ({
  dogName,
  race,
  age,
  imageSrc,
  exportCard,
}: CanvasCardProp) => {
  return (
    <NextReactP5Wrapper
      sketch={(p5) => {
        let imgBg: any;
        let imgDog: any;
        let font: any;

        let once = true;

        p5.setup = () => {
          p5.createCanvas(630, 880);
          // font = p5.loadFont(inter.className);
          imgBg = p5.loadImage("./images/Frame3.png");
          if (imageSrc) {
            imgDog = p5.loadImage(imageSrc);
          }
        };

        p5.draw = () => {
          p5.background(250);
          if (imageSrc) {
            imgDog.resize(300, 0);
            p5.image(imgDog, 0, 0);
          }
          p5.image(imgBg, 0, 0);
          // p5.textFont(font);
          p5.textFont("Mirza Regular");
          p5.textSize(25);
          p5.text(dogName, 30, 42);
          p5.textSize(23);
          p5.text(age, 589, 42);
          p5.textSize(25);
          p5.text(race, 30, 472);

          if (exportCard && once) {
            once = false;
            p5.saveCanvas(dogName.split(" ").join("-"), "jpg");
          }
        };
      }}
    />
  );
};
