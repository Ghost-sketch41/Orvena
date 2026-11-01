"use client";

import Link from "next/link";
import Image from "next/image";

import blog1 from "@/public/blog-1.jpg";
import blog2 from "@/public/blog-2.jpg";
import blog3 from "@/public/blog-3.jpg";
import blog4 from "@/public/blog-4.jpg";
import blog5 from "@/public/blog-5.jpg";
import blog6 from "@/public/blog-6.jpg";
import { useParams } from "next/navigation";

const BlogsData = [
    {
        id: 1,
        img: blog1,
        date: "05/26",
        title: "Yoga at home. Feel the transformation in only several weeks",
        desc: "Rapidiously predominate cross-media infrastructures via extensible ideas. Synergistically impact reliable solutions via user-centric processes. Quickly parallel task equity invested infomediaries whereas accurate opportunities. Intrinsicly coordinate accurate supply chains via low-risk high-yield architectures. Appropriately morph high-payoff ideas rather than 2.0 human capital.",
        desc1: "Holisticly empower technically sound data and technically sound communities. Quickly plagiarize backward-compatible models rather than.",
        desc2: "Monotonectally reinvent 24/365 growth strategies through market positioning innovation. Objectively scale user friendly “outside the box” thinking after B2C leadership. Interactively reinvent cross-unit interfaces vis-a-vis next-generation experiences. Continually communicate professional architectures through revolutionary infomediaries. Assertively simplify one-to-one architectures whereas fully tested benefits.",
        desc3: "Proactively create covalent imperatives through parallel e-business. Efficiently parallel task enabled services without frictionless."
    },
    {
        id: 2,
        img: blog2,
        date: "08/26",
        title: "Sports equipments to make your workout more fun",
        desc: "Appropriately monetize premier partnerships vis-a-vis intermandated interfaces. Objectively generate empowered applications for enterprise technologies. Collaboratively aggregate client-based alignments whereas optimal core competencies. Monotonectally build process-centric methods of empowerment whereas holistic markets. Phosfluorescently streamline turnkey metrics and plug-and-play e-business.",
        desc1: "Intrinsicly pontificate cross functional value for sticky intellectual capital. Assertively fabricate integrated scenarios with emerging e-tailers. Holisticly develop.",
        desc2: "Assertively fabricate quality web-readiness after cross-platform collaboration and idea-sharing. Rapidiously orchestrate transparent meta-services through prospective resources. Enthusiastically pontificate maintainable best practices via mission-critical meta-services. Continually architect adaptive portals without cross-unit alignments. Completely engage high standards in processes rather than sticky e-services.",
        desc3: "Compellingly monetize process-centric information before client-based outsourcing. Conveniently benchmark."
    },
    {
        id: 3,
        img: blog3,
        date: "09/26",
        title: "Several prescription for a healthier meal – keto food",
        desc: "Credibly predominate extensible vortals before resource sucking platforms. Uniquely embrace competitive imperatives with B2C innovation. Collaboratively pontificate reliable vortals without strategic infrastructures. Objectively architect holistic methodologies with timely potentialities. Rapidiously envisioneer web-enabled collaboration and idea-sharing via proactive human capital.",
        desc1: "Efficiently seize exceptional e-markets for transparent imperatives. Continually parallel task clicks-and-mortar portals with cross-media meta-services. Intrinsicly unleash.",
        desc2: "Appropriately engage focused services through backward-compatible content. Competently engage e-business communities vis-a-vis go forward best practices. Dramatically grow optimal outsourcing for end-to-end manufactured products. Completely incubate resource sucking customer service with vertical communities. Uniquely deploy synergistic meta-services before maintainable solutions.",
        desc3: "Uniquely aggregate stand-alone technologies through economically sound models."
    },
    {
        id: 4,
        img: blog4,
        date: "11/26",
        title: "Parisian Brand Gentle Reminder Launches Ready-To-Wear",
        desc: "Assertively whiteboard error-free growth strategies and intuitive leadership. Dynamically pursue interdependent supply chains after quality applications. Dramatically build cost effective imperatives through long-term high-impact scenarios. Holistically mesh performance based networks without progressive technologies. Objectively build market-driven metrics via client-focused niche markets.",
        desc1: "Globally develop quality methods of empowerment after empowered testing procedures. Objectively supply client-centric paradigms after high-quality alignments. Globally implement B2C users whereas accurate outsourcing. Collaboratively enable effective vortals whereas holistic e-markets.",
        desc2: "Holistically administrate proactive communities with principle-centered best practices. Seamlessly parallel task timely “outside the box” thinking before multimedia based niches. Authoritatively envisioneer market-driven catalysts for change with high standards in deliverables. Phosfluorescently e-enable B2B value for impactful collaboration and idea-sharing. Compellingly pursue seamless experiences before adaptive users.",
        desc3: "Enthusiastically generate flexible data without accurate benefits. Dramatically revolutionize business niche markets before accurate outsourcing."
    },
    {
        id: 5,
        img: blog5,
        date: "02/26",
        title: "Ace & Tate Unveil SS23′ Campaign ‘Word Up’ with James Messiah",
        desc: "Assertively whiteboard error-free growth strategies and intuitive leadership. Dynamically pursue interdependent supply chains after quality applications. Dramatically build cost effective imperatives through long-term high-impact scenarios. Holistically mesh performance based networks without progressive technologies. Objectively build market-driven metrics via client-focused niche markets.",
        desc1: "Globally develop quality methods of empowerment after empowered testing procedures. Objectively supply client-centric paradigms after high-quality alignments. Globally implement B2C users whereas accurate outsourcing. Collaboratively enable effective vortals whereas holistic e-markets.",
        desc2: "Holistically administrate proactive communities with principle-centered best practices. Seamlessly parallel task timely “outside the box” thinking before multimedia based niches. Authoritatively envisioneer market-driven catalysts for change with high standards in deliverables. Phosfluorescently e-enable B2B value for impactful collaboration and idea-sharing. Compellingly pursue seamless experiences before adaptive users.",
        desc3: "Enthusiastically generate flexible data without accurate benefits. Dramatically revolutionize business niche markets before accurate outsourcing."
    },
    {
        id: 6,
        img: blog6,
        date: "04/26",
        title: "Les Benjamins & PUMA Link Up for Carpet Influenced SS23 Drop",
        desc: "Assertively whiteboard error-free growth strategies and intuitive leadership. Dynamically pursue interdependent supply chains after quality applications. Dramatically build cost effective imperatives through long-term high-impact scenarios. Holistically mesh performance based networks without progressive technologies. Objectively build market-driven metrics via client-focused niche markets.",
        desc1: "Globally develop quality methods of empowerment after empowered testing procedures. Objectively supply client-centric paradigms after high-quality alignments. Globally implement B2C users whereas accurate outsourcing. Collaboratively enable effective vortals whereas holistic e-markets.",
        desc2: "Holistically administrate proactive communities with principle-centered best practices. Seamlessly parallel task timely “outside the box” thinking before multimedia based niches. Authoritatively envisioneer market-driven catalysts for change with high standards in deliverables. Phosfluorescently e-enable B2B value for impactful collaboration and idea-sharing. Compellingly pursue seamless experiences before adaptive users.",
        desc3: "Enthusiastically generate flexible data without accurate benefits. Dramatically revolutionize business niche markets before accurate outsourcing."
    },
];
export default function BlogsDetails() {
    const { id } = useParams();

    const blog = BlogsData.find((item) => item.id.toString() === id);

    if(!blog) {
        return (
            <div className="text-center py-20 Exo text-3xl text-black">Blog Not Found</div>
        )
    }

  return (
    <>
        <div className="Page-section relative">
            <div className="px-[5%] lg:px-[10%] py-40 pb-10">
                <h2 className="text-5xl md:text-7xl lg:text-9xl text-gray-300 font-bold Exo uppercase">Blog Detals</h2>
            </div>
            <div className="absolute top-1/2 right-0 translate-y-4/2 md:translate-y-1/2 w-[60%] md:w-[40%] bg-gray-100 h-10"></div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 md:-translate-y-1/2 w-[40%] md:w-[5%] lg:w-[8%] bg-gray-100 h-10"></div>
        </div>

        <div className="px-[5%] lg:px-[10%] py-10 lg:py-20">
            <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-1/2">
                    <div className="py-4">
                        <h4 className="Exo font-semibold text-gray-800 mb-5">{blog.date}</h4>
                        <h2 className="Exo text-3xl lg:text-4xl mb-5 font-semibold text-gray-800 hover:text-black">{blog.title}</h2>
                    </div>

                    <div className="overflow-hidden mb-5 rounded-2xl group cursor-pointer">
                        <Image
                            src={blog.img}
                            alt={blog.title}
                            width={800}
                            height={800}
                            className="w-full h-full group-hover:scale-105 transition-all duration-300"
                        />
                    </div>

                    <div className="space-y-5 pb-5 border-b border-gray-200">
                        <p className="Exo text-md tracking-wide text-gray-500">{blog.desc}</p>
                        <p className="Exo text-md tracking-wide text-gray-500">{blog.desc1}</p>
                        <p className="Exo text-md tracking-wide text-gray-500">{blog.desc2}</p>
                        <p className="Exo text-md tracking-wide text-gray-500">{blog.desc3}</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="space-y-5 lg:py-8 lg:sticky lg:top-24 shadow-lg p-5 rounded-2xl">
                        <textarea rows={6} placeholder="Add your comment..." className="Exo w-full border border-gray-300 outline-none rounded-md px-3 py-3 hover:border-black transition-all duration-300 cursor-pointer"></textarea>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            <input type="text" placeholder="Name *" className="Exo w-full border border-gray-300 outline-none rounded-md px-3 py-3 hover:border-black transition-all duration-300 cursor-pointer" />
                             <input type="email" placeholder="Email *" className="Exo w-full border border-gray-300 outline-none rounded-md px-3 py-3 hover:border-black transition-all duration-300 cursor-pointer" />
                        </div>
                        <input type="text" placeholder="Website *" className="Exo w-full border border-gray-300 outline-none rounded-md px-3 py-3 hover:border-black transition-all duration-300 cursor-pointer" />

                        <div className="flex gap-2">
                            <input type="checkbox" />
                            <label className="Exo text-gray-500">Save my name, email, and website in this browser for the next time I comment.
                                Post Comment
                            </label>
                        </div>
                        <button className="bg-black text-white px-3 py-2 my-3 rounded-md cursor-pointer">
                            <span>Post Comment</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
