import React from "react";
import { useRef, useEffect } from "react";

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      author: "Nikhil Pandey",
      text: "This is a great school to give your kids a great start , best teachers and best and balblabla and this is just an expamle f dfjlksd fjlsakd fjalkds fjlasjflksdjflksdjflka fjlsdka fjlkas dfjlkasd fjlkds fjlaks fjlds fj",
    },
    {
      id: 2,
      author: "Surender Kumar Sharma",
      text: "This is a great school to give your kids a great start , best teachers and best and balblabla and this is just an expamle f dfjlksd fjlsakd fjalkds fjlasjflksdjflksdjflka fjlsdka fjlkas dfjlkasd fjlkds fjlaks fjlds fj This is a great school to give your kids a great start , best teachers and best and balblabla and this is just an expamle f dfjlksd fjlsakd fjalkds fjlasjflksdjflksdjflka fjlsdka fjlkas dfjlkasd fjlkds fjlaks fjlds fjThis is a great school to give your kids a great start , best teachers and best and balblabla and this is just an expamle f dfjlksd fjlsakd fjalkds fjlasjflksdjflksdjflka fjlsdka fjlkas dfjlkasd fjlkds fjlaks fjlds fj",
    },
    {
      id: 3,
      author: "Sunil Kumar",
      text: "This is a great school to give your kids a great start , best teachers and best and balblabla and this is just an expamle f dfjlksd fjlsakd fjalkds fjlasjflksdjflksdjflka fjlsdka fjlkas dfjlkasd fjlkds fjlaks fjlds fj",
    },
    {
      id: 4,
      author: "Sandeep Sharma",
      text: "This is a great school to give your kids a great start , best teachers and best and balblabla and this is just an expamle f dfjlksd fjlsakd fjalkds fjlasjflksdjflksdjflka fjlsdka fjlkas dfjlkasd fjlkds fjlaks fjlds fj",
    },
  ];

  function useHorizontalScroll() {
    const elRef = useRef();
    useEffect(() => {
      const el = elRef.current;
      if (el) {
        const onWheel = e => {
          if (e.deltaY === 0) return;
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY,
            behavior: "smooth"
          });
        };
        el.addEventListener("wheel", onWheel);
        return () => el.removeEventListener("wheel", onWheel);
      }
    }, []);
    return elRef;
  }

  const scrollRef = useHorizontalScroll();

  return (
    <div>
      Testimonials
      <div id="container" className="testimonial-container no-scrollbar" ref={scrollRef}>
        {reviews.map((review) => (
          <div className="testimonial">
            <p>{review.text}</p>
            <p style={{color:"black" , fontSize:"16px" , fontWeight:"600" , letterSpacing:"0.5px"}}>{review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
