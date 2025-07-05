import React from "react";
import { clientReviews } from "../constants";

const Clients = () => {
  return (
    <section className="c-space my-20">
      <h3 className="head-text">Hear from My Clients</h3>

      {/* cards main container */}
      <div className="client-container">
        {/* client review container */}
        {clientReviews.map(({ id, name, position, review, img }) => (
          <div key={id} className="client-review">
            <div>
              <p className="text-white font-light pb-5">{review}</p>
              {/* client content container */}
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt={name}
                    className="w-12 h-12 rounded-full"
                  />
                  {/* client - name,position */}
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-600">{name}</p>
                    <p className="text-white-500 md:text-base textsm font-;ight">
                      {position}
                    </p>
                  </div>
                </div>
                {/* rating stars */}
                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
