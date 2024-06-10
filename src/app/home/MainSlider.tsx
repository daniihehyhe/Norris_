"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainSlider.css";
import ContactModal from "../../components/ContactModal";

interface SlickArrowProps {
    currentSlide: number;
    slideCount: number;
}

export const SlickArrowLeft: React.FC<
    SlickArrowProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0}
        type="button">
        <IoIosArrowBack />
    </button>
);

export const SlickArrowRight: React.FC<
    SlickArrowProps & React.HTMLAttributes<HTMLButtonElement>
> = ({ currentSlide, slideCount, ...props }) => (
    <button
        {...props}
        className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1}
        type="button">
        <IoIosArrowForward />
    </button>
);

const MainSlider: React.FC = () => {
    const t = useTranslations();
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const slides = [
        {
            img: t("slides_slide1_img"),
            title: t("slides_slide1_title"),
            description: t("slides_slide1_description"),
        },
        {
            img: t("slides_slide2_img"),
            title: t("slides_slide2_title"),
            description: t("slides_slide2_description"),
        },
        {
            img: t("slides_slide3_img"),
            title: t("slides_slide3_title"),
            description: t("slides_slide3_description"),
        },
        {
            img: t("slides_slide4_img"),
            title: t("slides_slide4_title"),
            description: t("slides_slide4_description"),
        },
        {
            img: t("slides_slide5_img"),
            title: t("slides_slide5_title"),
            description: t("slides_slide5_description"),
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        cssEase: "linear",
        nextArrow: <SlickArrowRight currentSlide={0} slideCount={0} />,
        prevArrow: <SlickArrowLeft currentSlide={0} slideCount={0} />,
        customPaging: (i: number) => (
            <div className="custom-dot">
                <span className="dot"></span>
            </div>
        ),
        appendDots: (dots: React.ReactNode) => (
            <div>
                <ul className="custom-dots"> {dots} </ul>
            </div>
        ),
    };

    return (
        <div className="relative">
            <Slider {...settings} className="rounded-xl">
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full h-screen">
                        <Image
                            src={slide.img}
                            alt={slide.title}
                            layout="fill"
                            objectFit="cover"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4">
                            <h2 className="text-5xl w-5/6 font-bold mb-10">
                                {slide.title}
                            </h2>
                            <p className="text-lg w-3/6 items-center mb-4">
                                {slide.description}
                            </p>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                                {t("learnMoreButton")}
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="absolute bottom-8 left-10">
                <button
                    className="px-20 py-8 bg-blue-500 text-3xl text-white rounded hover:bg-blue-700"
                    onClick={handleOpenModal}>
                    {t("contactButton")}
                </button>
                <ContactModal
                    showModal={showModal}
                    handleClose={handleCloseModal}
                />
            </div>
        </div>
    );
};

export default MainSlider;
