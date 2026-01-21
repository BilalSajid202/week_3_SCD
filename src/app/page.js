import React from "react";
import Image from "next/image";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

function Page() {
  return (
    <div className="min-h-screen bg-[#050b27] text-white">
      {/* Top bar */}
      <header className="flex items-center justify-between px-8 py-6 text-sm tracking-[0.25em] uppercase">
        <span className="font-semibold text-slate-100">Next JS</span>
        <button className="rounded-full bg-sky-400 px-6 py-2 text-xs font-semibold text-[#050b27]">
          Cv
        </button>
      </header>

      <main className="flex flex-col items-center px-6 pb-16 text-center">
        <div className="mt-6">
          <h1 className="text-4xl font-bold text-slate-100 sm:text-5xl">John Wick</h1>
          <p className="mt-2 text-lg font-semibold text-slate-200">Actor and Artist</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
            John Wick is a 2014 American neo-noir action thriller film directed by Chad Stahelski (in his directorial
            debut) from a screenplay by Derek Kolstad.
          </p>
        </div>

        <div className="mt-5 flex items-center gap-5">
          {[{ name: "Facebook", icon: FaFacebookF }, { name: "YouTube", icon: FaYoutube }, { name: "LinkedIn", icon: FaLinkedinIn }].map(
            ({ name, icon: Icon }) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 text-xs font-semibold text-slate-100 shadow-sm transition hover:border-white hover:bg-white/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            )
          )}
        </div>

        <div className="mt-8 inline-flex h-36 w-36 items-center justify-center rounded-full border-4 border-white/80 bg-white/10">
          <Image
            src="/download.jpg"
            alt=""
            width={144}
            height={144}
            priority
            className="h-32 w-32 rounded-full object-cover"
          />
        </div>
      </main>

      {/* Services */}
      <section className=" bg-[#050b27] px-6 py-12 sm:px-12">
        <div className="mx-auto max-w-6xl">
          <div>
            <h2 className="text-xl font-bold text-slate-100">Services I Offer</h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300">
              Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his
              life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and
              his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the
              remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) - John's
              former colleague - puts a huge bounty on John's head.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "*",
                title: "Dummy Text",
                body:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem nesciunt impedit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.",
                footer: "Dummy text",
              },
              {
                icon: "+",
                title: "Dummy Text",
                body:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem nesciunt impedit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.",
                footer: "Dummy text",
              },
              {
                icon: "#",
                title: "Dummy Text",
                body:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti suscipit iure corporis temporibus ipsa exercitationem nesciunt impedit modi, est quae harum eaque cumque provident sit maiores enim corrupti aspernatur dolores.",
                footer: "Dummy text",
              },
            ].map(({ icon, title, body, footer }) => (
              <div
                key={title + icon}
                className="flex h-full flex-col gap-4 rounded-2xl bg-[#f3f4f6] px-6 py-6 text-center text-[#0f172a] shadow-lg"
              >
                <div className="text-4xl" aria-hidden>
                  {icon}
                </div>
                <h3 className="text-base font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-700">{body}</p>
                <div className="pt-2 text-sm font-semibold text-slate-800">{footer}</div>
              </div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/image.png"
                alt="John Wick scene"
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/image.png"
                alt="John Wick action scene"
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
           <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/image.png"
                alt="John Wick scene"
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/image.png"
                alt="John Wick action scene"
                width={500}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;