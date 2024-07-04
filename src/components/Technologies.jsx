import html from "../assets/technologies/html.png";
import c from "../assets/technologies/c.png";
import cpp from "../assets/technologies/c++.png";
import canva from "../assets/technologies/canva.png";
import css from "../assets/technologies/css.png";
import express from "../assets/technologies/expressjs.png";
import figma from "../assets/technologies/figma.png";
import firebase from "../assets/technologies/firebase.png";
import git from "../assets/technologies/git.png";
import github from "../assets/technologies/github.png";
import javascript from "../assets/technologies/javascript.png";
import mongodb from "../assets/technologies/mongdb.png";
import react from "../assets/technologies/react.png";
import tailwind from "../assets/technologies/tailwind.png";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text  tracking-tight text-transparent">
        Technologies
      </h2>
      <div className="flex flex-wrap max-w-2xl mx-auto justify-center items-center gap-4">
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={html} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={css} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={react} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={tailwind} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={javascript} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={express} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={firebase} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={git} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={mongodb} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={github} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={figma} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={canva} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={c} alt="" width={70} />
        </div>
        <div className="rounded-2xl border-4 h-[110px] flex items-center border-neutral-800 p-4 ">
          <img src={cpp} alt="" width={70} />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
