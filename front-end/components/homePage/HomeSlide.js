import useGetListSlides from "@/hooks/useGetListSlides";
import { useRef } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const HomeSlide = () => {
  const { data } = useGetListSlides();
  const bannerVideo = data?.metadata?.bannerVideo || "";
  const swiperRef = useRef(null);
  const videoRef = useRef(null);

  const handleVideoPlay = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleVideoEnded = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
      swiperRef.current.swiper.autoplay.start();
    }
  };

  const handleSlideChange = (swiper) => {
    if (swiper.activeIndex === 0 && bannerVideo && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={handleSlideChange}
      style={{
        zIndex: 0,
      }}
    >
      {bannerVideo && (
        <SwiperSlide
          style={{
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            onPlay={handleVideoPlay}
            onEnded={handleVideoEnded}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          >
            <source src={bannerVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
      )}
      {data?.data?.map((item, i) => (
        <SwiperSlide
          key={i}
          style={{
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <img
            src={item.hinhAnh}
            alt={""}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HomeSlide;
