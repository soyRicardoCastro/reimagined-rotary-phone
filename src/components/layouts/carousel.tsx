"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"

export interface CarouselProps {
  width?: number
  height?: number
  items: React.ReactNode[]
}

export default function Carousel({ items }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  function handleNextItemBtn() {
    setActiveIndex((prev) => {
      return prev + 1 < items.length ? prev + 1 : prev
    })
  }

  function handlePrevItemBtn() {
    setActiveIndex((prev) => {
      return prev - 1 >= 0 ? prev - 1 : prev
    })
  }

  return (
    <div className="carousel-container">
      {/* {activeIndex > 0 && ( */}
      <button
        className="carousel-btn-switch-card-left carousel-btn-switch-card"
        onClick={handlePrevItemBtn}
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      {/* )} */}
      <div className="flex items-center justify-center border border-blue-500 bg-red-500">
        {items?.map((item, index) => (
          <CarouselItem key={index} index={index} activeIndex={activeIndex}>
            {item}
          </CarouselItem>
        ))}
      </div>
      {/* {activeIndex < items.length - 1 && ( */}
      <button
        className="carousel-btn-switch-card-right carousel-btn-switch-card"
        onClick={handleNextItemBtn}
      >
        <ArrowLeft
          className="h-4 w-4"
          style={{
            transform: "rotate(180deg)",
          }}
        />
      </button>
      {/* )} */}

      <CarouselIndicator
        activeIndex={activeIndex}
        length={items.length}
        onSetActiveIndex={(activeIndex) => {
          setActiveIndex(activeIndex)
        }}
      />
    </div>
  )
}

export interface CardProps {
  index: number
  activeIndex: number
  children?: React.ReactNode
}

export function CarouselItem({ index, activeIndex, children }: CardProps) {
  const [scaled, setScaled] = useState(false)

  const offset = (index - activeIndex) / 4
  const direction = Math.sign(index - activeIndex)
  const absOffset = Math.abs(offset)

  const cssTransformProperties = `
    rotateY(calc(${offset} * 55deg))
    scaleY(calc(1 +  ${absOffset}  * -0.5))
    translateX(calc( ${direction} * -3.5rem))
    translateZ(calc( ${absOffset} * -35rem))
    scale(${scaled && index === activeIndex ? 6.5 : 1})
  `

  const cssOpacity = `${Math.abs(index - activeIndex) >= 3 ? "0" : "1"}`

  const cssDisplay = `${Math.abs(index - activeIndex) >= 3 ? "none" : "block"},`

  return (
    <div
      className="carousel-item"
      style={{
        transform: cssTransformProperties,
        opacity: cssOpacity,
        display: cssDisplay,
        zIndex: `${scaled ? 100 : 1}`,
      }}
    >
      {children}
    </div>
  )
}

export interface CarouselIndicatorProps {
  activeIndex: number
  length: number
  maxIndicatorVisible?: number
  onSetActiveIndex: (index: number) => void
}

export function CarouselIndicator({
  activeIndex,
  length,
  maxIndicatorVisible = 5,
  onSetActiveIndex,
}: CarouselIndicatorProps) {
  const maxIndicator =
    length > maxIndicatorVisible ? maxIndicatorVisible : length

  return (
    <div className="carousel-indicator">
      {Array.from(Array(maxIndicator), (_, index) => {
        return (
          <div
            key={index}
            className={cn(
              "carousel-indicator-dots",
              activeIndex === index ? "w-4 opacity-100" : "w-2 bg-gray-400"
            )}
            onClick={() => {
              onSetActiveIndex(index)
            }}
          ></div>
        )
      })}
    </div>
  )
}
