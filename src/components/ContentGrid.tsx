'use client'
import type { OstDocument } from 'outstatic'
import Link from 'next/link'
import Image from 'next/image'
import React from "react";
import Slider from "react-slick";

type Item = {
    tags?: { value: string; label: string }[]
    youtubeUrl?: string
} & OstDocument

type Props = {
    collection: 'posts' | 'projects' | 'video' | 'di-hoc' | 'di-lam' | 'di-du-lich' | 'phong-cach-song'| 'phong-cach-song-video' |  'di-hoc-video' | 'di-lam-video' | 'di-du-lich-video'
        title?: string
    subtitle?: string
    items: Item[]
    priority?: boolean
}

const ContentGrid = ({
                         title,
                         subtitle = 'More',
                         items,
                         collection,
                         priority = false
                     }: Props) => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <section id={collection}>
            <h2 className="mb-8 text-2xl md:text-6xl font-bold tracking-tighter leading-tight">
                {title}
            </h2>
            <h3 className="mb-8 text-2xl md:text-6xl font-bold tracking-tighter leading-tight">
                {subtitle}
            </h3>
            <div className="mb-8 w-full">
                <Slider {...settings}>
                    {items.map((item, id) => (
                        <Link key={item.slug}
                              href={item.youtubeUrl ?? `/${collection}/${item.slug}`} className="mr-12" target="_blank">
                            <div
                                className="cursor-pointer shadow-[2px_2px_10px_0px_#0000001A] project-card md:w-full scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu transition duration-100 motion-reduce:hover:scale-100 hover:shadow-xs  rounded-md">
                                <div className="sm:mx-0">
                                    <Image
                                        src={item.coverImage ?? ''}
                                        alt={`Cover Image for ${item.title}`}
                                        className="object-cover object-center w-full h-auto aspect-[3/2] rounded-t-md"
                                        width={0}
                                        height={0}
                                        sizes="(min-width: 768px) 347px, 192px"
                                        priority={priority && id <= 2}
                                    />
                                </div>
                                <div className="p-4">
                                    {Array.isArray(item?.tags)
                                        ? item.tags.map(({label}) => (
                                            <span
                                                key={label}
                                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                            >
                          {label}
                        </span>
                                        ))
                                        : null}
                                    <h3 className="text-xl mb-2 leading-snug font-bold hover:underline">
                                        {item.title}
                                    </h3>
                                    <div className="text-md mb-4 text-slate-700"></div>
                                    <p className="text-lg leading-relaxed mb-4 card-description">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default ContentGrid
