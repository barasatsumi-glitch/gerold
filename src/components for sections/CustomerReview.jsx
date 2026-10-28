import React from "react";
import { IoIosStar } from "react-icons/io";
import reviewerPhoto from "../assets/1.jpg.png";

const CustomerReview = ({
  name = "Tim Bailey",
  position = "SEO Specialist, Theme Junction",
  rating = 4,
  quote = "Taylor is a professional Designer really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional. Helps business providing value to my business, professional Designer he really helps my business",
  photo = reviewerPhoto,
  className = "",
}) => (
  <article className={`customer-review ${className}`}>
    <div className="customer-review__header">
      <div className="customer-review__person">
        <img src={photo} alt={`${name} portrait`} />
        <div className="customer-review__identity">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
      <div className="customer-review__stars" role="img" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, index) => (
          <IoIosStar key={index} className={index < rating ? "is-filled" : ""} aria-hidden="true" />
        ))}
      </div>
    </div>
    <p className="customer-review__quote">“{quote}”</p>
  </article>
);

export default CustomerReview;
