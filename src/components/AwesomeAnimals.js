import React from "react";
const animals = [
  "Chicken",
  "Sloth",
  "Porcupine",
  "Killer whale",
  "Velociraptor",
];

export default function AwesomeAnimals() {
  let i = 1;

  return animals.map((animal) => {
    return (
      <p>
        <u>
          <li>
            Awesomeness level {i++}: {animal}
          </li>
        </u>
      </p>
    );
  });
}
