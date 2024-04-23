"use client";

import { CardTemplate } from "@/components/creation/card-template";
import { CardForm } from "@/components/creation/card-form";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [race, setRace] = useState("");
  const [age, setAge] = useState("");
  const [imageSrc, setImageSrc] = useState();

  const [exportCard, setExportCard] = useState(false);

  return (
    <div className="grid grid-cols-1 space-y-5 md:grid-cols-2 md:space-y-0">
      <CardForm
        name={name}
        setName={setName}
        race={race}
        setRace={setRace}
        age={age}
        setAge={setAge}
        imageSrc={imageSrc}
        setImageSrc={setImageSrc}
        setExportCard={setExportCard}
      />
      <CardTemplate
        dogName={name}
        race={race}
        age={age}
        imageSrc={imageSrc}
        exportCard={exportCard}
      />
    </div>
  );
}
