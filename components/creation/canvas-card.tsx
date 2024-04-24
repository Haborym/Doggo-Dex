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
        let canvas: any;
        let output: any;
        let scale = 0.5;

        let imgBg: any;
        let imgDog: any;
        let font: any;

        let once = true;

        p5.setup = () => {
          output = p5.createGraphics(630 / 2, 880 / 2);
          canvas = p5.createCanvas(630 / 2, 880 / 2);
          // font = p5.loadFont(inter.className);
          imgBg = p5.loadImage("./images/Frame3.png");
          if (imageSrc) {
            imgDog = p5.loadImage(imageSrc);
          }
        };

        p5.draw = () => {
          p5.background(250);

          output.clear();
          output.push();
          output.scale(scale);

          if (imageSrc) {
            imgDog.resize(300 / 0.5, 0);
            output.image(imgDog, 630 / 2 - imgDog.width / 2, 48);
          }
          output.image(imgBg, 0, 0);
          // p5.textFont(font);
          output.textFont("Mirza Regular");
          output.textSize(25);
          output.text(dogName, 30, 42);
          output.textSize(23);
          output.text(age, 589, 42);
          output.textSize(25);
          output.text(race, 30, 472);

          if (exportCard && once) {
            exportCardasPNG();
            // p5.saveCanvas(dogName.split(" ").join("-"), "jpg");
          }

          output.pop();

          p5.image(output, 0, 0);
        };

        function exportCardasPNG() {
          once = false;
          scale = 2;
          output = p5.createGraphics(630 * scale, 880 * scale);
          p5.draw();
          p5.save(output, dogName.split(" ").join("-"), "jpg");

          scale = 0.5;
          output = p5.createGraphics(630 / 2, 880 / 2);
          p5.draw();
        }
      }}
    />
  );
};
