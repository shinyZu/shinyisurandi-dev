import React, { useState } from "react";
import { clientReviews } from "../constants";

const Endorsements = () => {
  const [selectedReview, setSelectedReview] = useState(null);

  const openModal = (review) => {
    setSelectedReview(review);
  };

  const closeModal = () => {
    setSelectedReview(null);
  };

  return (
    <section className="c-space my-20">
      <h3 className="head-text">Endorsements</h3>

      {/* Cards Main Container */}
      <div className="client-container">
        {clientReviews.map(({ id, name, position, review, img }) => (
          <div key={id} className="client-review">
            <div>
              {/* Truncated review */}
              <p className="text-white font-light pb-2 line-clamp-3 text-justify whitespace-pre-line space-y-2">
                {review}
              </p>

              {/* Read more link */}
              {/* {review.length > 200 && (
                <button
                  onClick={() => openModal({ review, name })}
                  className="text-gray-400 text-sm underline mb-4"
                >
                  Read more
                </button>
              )} */}

              {review.split("\n").length >= 2 && (
                <button
                  onClick={() => openModal({ name, review, position, img})}
                  className="text-gray-400 underline text-sm mt-2"
                >
                  Read more
                </button>
              )}

              {/* Client content container */}
              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={img}
                    alt={name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-600">{name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">
                      {position}
                    </p>
                  </div>
                </div>
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

      {/* Modal */}
      {selectedReview && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-black-300 p-6 rounded-lg w-full max-w-3xl max-h-[80vh] overflow-y-auto relative space-y-3 border-2 border-white-700">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-white-800 text-lg"
            >
              ✖
            </button>
            {/* <h4 className="font-bold text-lg mb-1 text-white-800">
              {selectedReview.name}
            </h4>
            <h3 className="font-medium text-lg mb-3 text-white-600">
              {selectedReview.position}
            </h3> */}

            <div className="flex gap-3">
              <img src={selectedReview.img} alt={selectedReview.name} className="w-12 h-12 rounded-full" />
              <div className="flex flex-col">
                <p className="font-semibold text-white-600">{selectedReview.name}</p>
                <p className="text-white-500 md:text-base text-sm font-light">
                  {selectedReview.position}
                </p>
              </div>
            </div>
            <p className="text-white-600 font-normal text-justify space-y-4 whitespace-pre-line">
              {selectedReview.review}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Endorsements;
