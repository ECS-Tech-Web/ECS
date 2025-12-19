import React from "react";
import Card from "../cards/Card";
import "./members.css";
import cardsData from "./membersData";

export default function Members() {
  const cardsPerRow = 3;

  // Split members into rows of 3
  const rows = [];
  for (let i = 0; i < cardsData.length; i += cardsPerRow) {
    rows.push(cardsData.slice(i, i + cardsPerRow));
  }

  return (
    <div className="main mx-auto w-full max-w-7xl">
      <div className="members p-5 text-center">
        {/* Title */}
        <div className="membersTitle flex justify-center items-center pt-10">
          <img
            src="https://i.postimg.cc/nzSYcp3Z/members.png"
            alt="Members"
            className="max-w-full h-auto"
          />
        </div>

        {/* Members Cards */}
        <div className="space-y-12 mt-10">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="row flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-x-[18vw] p-4"
            >
              {row.map((card, cardIndex) => (
                <Card
                  key={cardIndex}
                  title={card.title}
                  description={card.description}
                  imageUrl={card.imageUrl}
                  instagram={card.instagram}
                  facebook={card.facebook}
                  linkedin={card.linkedin}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
