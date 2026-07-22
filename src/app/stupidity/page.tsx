"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import {
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Zap,
  Scale,
  Gauge,
  CarFront,
  Baby,
  Megaphone,
  Users,
  ShieldOff,
  HeartCrack,
  Wrench,
  Landmark,
  Brain,
  Eye,
  Flag,
  Cctv,
  Send,
  CheckCircle2,
  FileText,
  AlertTriangle,
  ExternalLink,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CornerDownLeft,
  MessageSquareQuote,
  ShoppingCart,
  Waves,
  Siren,
  Video,
  TrendingUp,
  HelpCircle,
  Bot,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

function SignCta({
  label = "This Is Stupid. I'm Signing.",
  small = false,
}: {
  label?: string;
  small?: boolean;
}) {
  return (
    <a
      href="#sign"
      className={`inline-flex items-center gap-2 bg-danger-600 hover:bg-danger-500 text-white font-black uppercase tracking-wide rounded-xl transition-all shadow-lg shadow-danger-900/60 ${
        small
          ? "px-5 py-3 text-sm md:text-base"
          : "px-9 py-5 text-lg md:text-xl"
      }`}
    >
      {label}
      <ArrowRight className={small ? "w-4 h-4" : "w-6 h-6"} />
    </a>
  );
}

function BackToSign({
  label = "Back to the Petition — Sign",
}: {
  label?: string;
}) {
  return (
    <a
      href="#sign"
      className="inline-flex items-center gap-2 px-7 py-4 bg-danger-600 hover:bg-danger-500 text-white font-black uppercase tracking-wide text-base md:text-lg rounded-xl transition-all shadow-lg shadow-danger-900/60"
    >
      <ArrowUp className="w-5 h-5" />
      {label}
    </a>
  );
}

/* Tiny nav rail dropped after every big section — nobody gets lost. */
function MiniNav() {
  return (
    <div className="flex items-center justify-center gap-6 mt-6 text-xs md:text-sm font-black uppercase tracking-widest">
      <a
        href="#jump"
        className="text-[#8a867c] hover:text-[#f7f5ef] transition-colors"
      >
        ↑ Jump Menu
      </a>
      <a
        href="#sign"
        className="text-danger-500 hover:text-danger-400 transition-colors"
      >
        ✍️ Sign Now
      </a>
    </div>
  );
}

function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full rounded-xl border border-[#2c2c2c] mb-6"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).style.display = "none";
      }}
    />
  );
}

function B({ children }: { children: React.ReactNode }) {
  return <strong className="text-[#f7f5ef]">{children}</strong>;
}

function Src({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-danger-500 hover:text-danger-400 text-xs font-bold uppercase tracking-wider transition-colors"
    >
      {children}
      <ExternalLink className="w-3 h-3" />
    </a>
  );
}

/* Grouped to match the page top-to-bottom; the SIGN banner sits in its true
   position (after the ground rules, before the aftermath). */
const JUMP_GROUPS: {
  title: string;
  links: { href: string; label: string; video?: boolean }[];
}[] = [
  {
    title: "The Evidence",
    links: [
      { href: "#witness", label: "🚨 Read This First" },
      { href: "#tally", label: "🤡 The Stupidity Tally" },
      { href: "#the-case", label: "💀 The Manslaughter Case", video: true },
      { href: "#the-law", label: "⚖️ The Law Nobody Enforces" },
      { href: "#the-numbers", label: "📊 The ER Numbers" },
      { href: "#the-science", label: "🧠 The Teen-Brain Science" },
    ],
  },
  {
    title: "The Excuses, Destroyed",
    links: [
      { href: "#both-illegal", label: "⚡ Both Are Illegal" },
      { href: "#not-the-same", label: "🚲 Not the Same as a Bicycle" },
      {
        href: "#entitlement",
        label: "🛒 They Rode Through a Walmart",
        video: true,
      },
      { href: "#the-tide", label: "🌊 America Is Fed Up", video: true },
      { href: "#flock", label: "📵 Not a Case for Cameras" },
      { href: "#constitution", label: "🏛️ Yes, Stops Are Legal" },
      { href: "#the-line", label: "🚧 The Karen Line" },
    ],
  },
  {
    title: "The Ground Rules",
    links: [
      { href: "#manifesto", label: "📜 No-Confrontation Promise" },
      { href: "#fafo", label: "💥 FAFO" },
      { href: "#the-warning", label: "📹 The Warning to Parents" },
    ],
  },
];

const JUMP_AFTERMATH: { href: string; label: string }[] = [
  { href: "#npc", label: "🤖 The NPC Wall of Fame" },
  { href: "#faq", label: "❓ Every Excuse, Answered" },
];

/* The jump-anywhere widget — dropped at every major decision point. */
function JumpMenu({ id }: { id?: string }) {
  const chip =
    "inline-flex items-center px-4 py-2.5 bg-white/5 border border-[#2c2c2c] text-[#c7c3b8] hover:text-[#f7f5ef] hover:border-danger-700 font-bold text-sm md:text-base rounded-full transition-all";
  const videoBadge = (
    <span className="ml-1.5 inline-flex items-center px-1.5 py-0.5 rounded bg-danger-600/20 border border-danger-600/50 text-danger-400 text-[9px] font-black uppercase tracking-wider leading-none">
      ▶ video
    </span>
  );
  return (
    <section id={id} className="pb-10 px-4 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-5 md:p-7">
          <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-5 text-center">
            Jump anywhere. Sign from everywhere.
          </p>
          {JUMP_GROUPS.map((g) => (
            <div key={g.title} className="mb-5">
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-[#6b675e] mb-2.5 text-center">
                — {g.title} —
              </p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {g.links.map((l) => (
                  <a key={l.href} href={l.href} className={chip}>
                    {l.label}
                    {l.video && videoBadge}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* The ask — full-width, pulsing, in its true page position */}
          <a
            href="#sign"
            className="sign-sizzle relative overflow-hidden flex items-center justify-center gap-2 w-full px-4 py-3.5 mb-5 bg-danger-600 hover:bg-danger-500 text-white font-black text-base md:text-lg uppercase tracking-wider rounded-full transition-colors"
          >
            <span
              aria-hidden="true"
              className="sign-shine absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none"
            />
            ✍️ Sign the Petition — 30 Seconds
          </a>

          <div>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-[#6b675e] mb-2.5 text-center">
              — After You Sign —
            </p>
            <div className="flex flex-wrap justify-center gap-2.5">
              {JUMP_AFTERMATH.map((l) => (
                <a key={l.href} href={l.href} className={chip}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Section divider — thin rule with a red diamond, protest-poster style. */
function Divider() {
  return (
    <div
      aria-hidden="true"
      className="max-w-3xl mx-auto px-4 pb-10 flex items-center gap-4"
    >
      <div className="h-px flex-1 bg-[#2c2c2c]" />
      <div className="w-2 h-2 rotate-45 bg-danger-600" />
      <div className="h-px flex-1 bg-[#2c2c2c]" />
    </div>
  );
}

type Stupidity = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: React.ReactNode;
  cta: string;
  img?: string;
  imgAlt?: string;
  after?: React.ReactNode;
};

const stupidities: Stupidity[] = [
  {
    icon: Zap,
    title:
      "That “bike” is an unregistered motorcycle, and every foot it travels on our roads is illegal.",
    body: (
      <>
        <p>
          Electric dirt bikes ship with no VIN plate, no DOT lighting, no
          registration path, and no insurance.
        </p>
        <p>
          The DMV won&apos;t register one for street use no matter what anyone
          says at the counter.
        </p>
        <p>
          On any public road, sidewalk, or park path in New York, the machine is{" "}
          <B>illegal the second it leaves the driveway</B>.
        </p>
        <p>Ours leave the driveway every day.</p>
      </>
    ),
    cta: "Illegal machines, daily. Sign.",
    img: "/stupidity/stupidity-fake-bike.png",
    imgAlt:
      "Cartoon of an electric motorcycle dressed up as a bicycle with a bell, basket, and training wheels",
  },
  {
    icon: Scale,
    title:
      "New York law already says 16+ to ride ANY e-bike. These riders aren't 16.",
    body: (
      <>
        <p>
          Under the state&apos;s Vehicle and Traffic Law you have to be{" "}
          <B>16 to operate an e-bike of any class</B> on a public road.
        </p>
        <p>
          E-motorcycles demand more: a license, registration, and insurance no
          child can hold.
        </p>
        <p>
          The rules went on the books in 2020. Around here,{" "}
          <B>nobody has ever been made to follow them</B>.
        </p>
      </>
    ),
    cta: "The law already exists. Sign.",
    img: "/stupidity/stupidity-sixteen.png",
    imgAlt:
      "Cartoon of a tiny kid dwarfed by a huge electric dirt bike with a big red X overhead",
  },
  {
    icon: Gauge,
    title: "25 to 40 mph, wrong side of the road, front wheel in the air.",
    body: (
      <>
        <p>
          A kid mid-wheelie can&apos;t see what&apos;s coming, can&apos;t brake,
          and can&apos;t steer.
        </p>
        <p>
          At 40 mph he&apos;s covering <B>close to 60 feet every second</B>{" "}
          on a machine he&apos;s owned for a month, with zero training.
        </p>
        <p>
          And the full-face helmet with the dark visor? That&apos;s not safety
          gear. That&apos;s a mask, worn to hide who he is. <B>Wonder why.</B>
        </p>
        <p>There&apos;s no version of that where he stops in time.</p>
      </>
    ),
    cta: "He can't stop in time. Sign.",
    img: "/stupidity/stupidity-wheelie.png",
    imgAlt:
      "Cartoon of a kid doing a wheelie on an e-bike, blind to the crossing ahead of him",
  },
  {
    icon: CornerDownLeft,
    title:
      "Two to a bike, no helmets, too hot to make the right — so they swing wide into the oncoming lane.",
    body: (
      <>
        <p>
          The kids come into the corner carrying way too much speed to make the
          right. So physics makes the decision for them: they swing wide,{" "}
          <B>across the centerline</B>, into the oncoming lane. Doubled up on
          one machine. No helmets. Every single time.
        </p>
        <p>
          And everyone who lives here knows what comes the other way: people cut
          that left sharp, like crazy, all day long.
        </p>
        <p>
          A wide-swinging bike and a sharp-cutting car aimed at the exact same
          patch of road. That is <B>literally death waiting to happen</B>.
        </p>
        <p>
          Two heads, zero helmets, one corner. Do the math once and you
          won&apos;t un-see it.
        </p>
      </>
    ),
    cta: "One corner. Sign.",
    img: "/stupidity/stupidity-corner.png",
    imgAlt:
      "Cartoon of two very young kids doubled on one dirt bike — one hidden in an oversized helmet — swinging wide across the centerline while a car cutting a sharp left converges on the same spot",
  },
  {
    icon: CarFront,
    title:
      "Every driver in this neighborhood is compensating for kids who don't know the rules exist.",
    body: (
      <>
        <p>
          Ask anyone who drives here. You&apos;re braking for riders you never
          saw coming, creeping through intersections that used to be routine,
          checking the mirror twice before every turn.
        </p>
        <p>
          You slow down to make a left into <B>your own driveway</B> and a kid
          shoots past you on the left at full throttle, because signaling,
          passing rules, and right-of-way mean nothing to him.
        </p>
        <p>
          Add dusk, dark clothes, and no lights, and an ordinary drive home
          turns into a <B>defensive-driving final exam</B>.
        </p>
        <p>Ridiculous things like that, every single day.</p>
      </>
    ),
    cta: "Driving home shouldn't be this hard. Sign.",
    img: "/stupidity/stupidity-driveway.png",
    imgAlt:
      "Cartoon of a car turning left into a driveway while a rider blasts up its left side",
  },
  {
    icon: Baby,
    title:
      "Toddlers, strollers, dog walkers, kids on pedal bikes. All sharing space with motorcycles.",
    body: (
      <>
        <p>
          The people getting buzzed at speed are the ones with zero protection:
          little kids walking with their parents, seniors on an evening loop,
          neighbors out with the dog.
        </p>
        <p>
          <B>Nobody agreed to share a sidewalk</B> or a park path with an
          unlicensed motorcycle.
        </p>
      </>
    ),
    cta: "Our kids walk here. Sign.",
    img: "/stupidity/stupidity-sidewalk.png",
    imgAlt:
      "Cartoon of a dog walker and a parent with a stroller scattering as an e-bike rips down the sidewalk",
  },
  {
    icon: Megaphone,
    title:
      "Object, and a 14-year-old screams profanities at you on your own street.",
    body: (
      <>
        <p>
          The riding is half of it. The other half is the swarming, the cursing
          at neighbors and dog walkers, the threats aimed at anyone who speaks
          up.
        </p>
        <p>
          Pack behavior at 30 mph with <B>zero fear of consequences</B>, because
          so far there haven&apos;t been any.
        </p>
        <p>
          And the pack part is documented science. The receipts are in the facts
          section below.
        </p>
      </>
    ),
    cta: "Zero consequences so far. Sign.",
    img: "/stupidity/stupidity-scream.png",
    imgAlt:
      "Cartoon of a rider screaming profanity as he blasts past a homeowner watering his garden, who deadpans back: slow down",
    after: (
      <div className="bg-danger-950/30 border-l-4 border-danger-600 rounded-xl p-5 md:p-6 mb-6">
        <p className="text-xs md:text-sm font-black text-danger-400 uppercase tracking-widest mb-3">
          It&apos;s not just the riding. It&apos;s the attitude.
        </p>
        <div className="space-y-2 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
          <p>
            Parents, hear this next part as a warning, because <B>we tried</B>.
          </p>
          <p>
            Your kid is screaming &ldquo;fuck you&rdquo; at strangers from a
            moving motorcycle. Every stranger is a coin flip.
          </p>
          <p>
            Most of us are the deadpan guy with the hose. One day it&apos;s not
            the deadpan guy. It&apos;s somebody unstable, having the worst day
            of their life, and <B>there&apos;s no telling how that ends</B>.
          </p>
          <p className="text-[#f7f5ef] font-bold">
            We tried to warn you. Consider this one free, too.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title:
      "The parents bought the machines. The parents hear the throttle. The parents shrug.",
    body: (
      <>
        <p>&ldquo;Boys will be boys&rdquo; is not a traffic-safety plan.</p>
        <p>
          A 40-mph machine plus no license, no training, and no rules is a bet,
          and <B>the stake is your kid&apos;s life</B>.
        </p>
        <p>
          The rest of the street got dealt into that bet without being asked.
        </p>
      </>
    ),
    cta: "The adults failed first. Sign.",
    img: "/stupidity/stupidity-shrug.png",
    imgAlt:
      "Cartoon of parents shrugging on their porch while their kid wheelies past on an e-bike",
  },
  {
    icon: ShieldOff,
    title:
      "And the police? They refuse to enforce it. “There's nothin' we can do about it,” they say. Bullshit.",
    body: (
      <>
        <p>
          Fine, don&apos;t chase. Nobody wants a 40-mph pursuit of a
          middle-schooler.
        </p>
        <p>
          But &ldquo;no pursuit&rdquo; and &ldquo;no enforcement&rdquo; are two
          different things, and pretending they&apos;re the same is the lie this
          whole problem hides behind.
        </p>
        <p>
          These are neighborhood kids on $5,000 machines that sleep in the same
          driveways every night. <B>You know who they are.</B>
        </p>
        <p>
          Knock on the door. Cite the parents. Impound the machine the next time
          it touches a public street.
        </p>
        <p>
          Meanwhile the taxpayer with a headlight out gets lit up in seconds.
          Enforcement isn&apos;t impossible, <B>it&apos;s declined</B>.
        </p>
        <p>
          This petition takes the excuse away: a written protocol, impound
          authority, parental fines.
        </p>
      </>
    ),
    cta: "“Nothin' we can do” isn't an answer. Sign.",
    img: "/stupidity/stupidity-headlight.png",
    imgAlt:
      "Cartoon of a cop ticketing a car with a dead headlight while kids wheelie past behind him",
  },
  {
    icon: HeartCrack,
    title:
      "This ends one of three ways: action, a roadside memorial, or an innocent driver taking the fall.",
    body: (
      <>
        <p>
          Nobody wants the vigil, the ghost bike, the &ldquo;he was such a good
          kid.&rdquo;
        </p>
        <p>
          And nobody wants the third version either: a neighbor who had the
          right of way dragged through investigations, lawsuits, and{" "}
          <B>a lifetime of guilt</B> over a crash an illegal machine caused.
        </p>
        <p>While the system shields the rider who caused it.</p>
        <p>
          We&apos;re acting now, while this is still a close call and not a
          court date.
        </p>
      </>
    ),
    cta: "Choose the first ending. Sign.",
    img: "/stupidity/stupidity-endings.png",
    imgAlt:
      "Three-panel cartoon: an innocent driver crushed by the courts, a crocodile-tears memorial, and neighbors protesting together under a green check",
  },
  {
    icon: Wrench,
    title:
      "Plenty of kids have more conscience than the adults in this story. They're the ones paying for it.",
    body: (
      <>
        <p>
          Everyone says it&apos;s the parents, it&apos;s the parents. Yeah.{" "}
          <B>It is the fucking parents.</B> But give kids more credit than that.
        </p>
        <p>
          We&apos;ve met kids with more of a conscience than plenty of adults:
          conscientious, emotionally mature kids who understand that disturbing
          the peace isn&apos;t cool.
        </p>
        <p>They never needed their deadbeat parents to teach them that.</p>
        <p>
          And those are exactly the kids getting punished. They walk, they
          pedal, they follow the rules, and they get buzzed at 30 mph by the
          fuckfaces with no morality riding around on <B>a free pass</B>.
        </p>
        <p>
          The tools to fix it already exist: age laws, registration laws,
          impound authority, and New York&apos;s child-endangerment statute,
          Penal Law § 260.10.
        </p>
        <p>
          What&apos;s missing is the will. That&apos;s what this petition
          supplies.
        </p>
      </>
    ),
    cta: "The good kids deserve better. Sign.",
    img: "/stupidity/stupidity-good-kids.png",
    imgAlt:
      "Cartoon of a helmeted kid walking his pedal bike off the road while riders blast past",
  },
];

const LAW_FACTS: {
  title: string;
  body: React.ReactNode;
  srcName: string;
  srcUrl: string;
}[] = [
  {
    title: "Under 16 = illegal. Any e-bike. Period.",
    body: (
      <>
        <p>
          New York prohibits anyone under 16 from operating an e-bike of ANY
          class on public roads. Statewide, no exceptions.
        </p>
        <p>
          Every underage rider you see is <B>breaking state law</B> the moment
          the wheels touch the street.
        </p>
      </>
    ),
    srcName: "NY DMV",
    srcUrl:
      "https://dmv.ny.gov/registration/electric-scooters-and-bicycles-and-other-unregistered-vehicles",
  },
  {
    title: "20 mph is the legal ceiling here. Not 25. Not 40.",
    body: (
      <>
        <p>
          Outside NYC, only Class 1 and Class 2 e-bikes (max 20 mph assisted)
          are lawful. Class 3 exists only in cities of a million-plus people.
        </p>
        <p>
          A machine assisting past 20 mph in Liverpool{" "}
          <B>isn&apos;t a legal e-bike class at all</B>.
        </p>
      </>
    ),
    srcName: "NY DMV / VTL §102-c",
    srcUrl:
      "https://dmv.ny.gov/registration/electric-scooters-and-bicycles-and-other-unregistered-vehicles",
  },
  {
    title: "Sur-Rons and Talarias can't be made street-legal at the counter.",
    body: (
      <>
        <p>
          No DOT equipment means the NY DMV won&apos;t register them for road
          use. Off-road and private property only.
        </p>
        <p>
          On a public street it&apos;s an unregistered, uninsured motor vehicle
          with an unlicensed driver: <B>the exact trifecta</B> any adult would
          be ticketed and towed for.
        </p>
      </>
    ),
    srcName: "NY DMV",
    srcUrl:
      "https://dmv.ny.gov/registration/electric-scooters-and-bicycles-and-other-unregistered-vehicles",
  },
  {
    title: "Sidewalks are off-limits, full stop.",
    body: (
      <>
        <p>
          E-bikes may not be ridden on sidewalks in New York unless a local law
          specifically allows it.
        </p>
        <p>
          Buzzing a stroller on the sidewalk <B>stacks one more violation</B> on
          the pile.
        </p>
      </>
    ),
    srcName: "NY DMV",
    srcUrl:
      "https://dmv.ny.gov/registration/electric-scooters-and-bicycles-and-other-unregistered-vehicles",
  },
];

const STATS = [
  {
    stat: "360,800+",
    label: "ER visits from micromobility devices, 2017–2022",
    srcName: "CPSC",
    srcUrl:
      "https://www.cpsc.gov/s3fs-public/Micromobility-Products-Related-Deaths-Injuries-and-Hazard-Patterns-2017-2022.pdf",
  },
  {
    stat: "+21%",
    label: "jump in e-bike & e-scooter injuries in 2022 alone",
    srcName: "CPSC",
    srcUrl:
      "https://www.cpsc.gov/Newsroom/News-Releases/2024/E-Scooter-and-E-Bike-Injuries-Soar-2022-Injuries-Increased-Nearly-21",
  },
  {
    stat: "233",
    label:
      "deaths tied to micromobility devices, 2017–2022, and CPSC calls its own reporting incomplete",
    srcName: "CPSC",
    srcUrl:
      "https://www.cpsc.gov/s3fs-public/Micromobility-Products-Related-Deaths-Injuries-and-Hazard-Patterns-2017-2022.pdf",
  },
  {
    stat: "36%",
    label:
      "of those injuries are kids 14 and under: DOUBLE their share of the population",
    srcName: "CPSC",
    srcUrl:
      "https://www.cpsc.gov/s3fs-public/Micromobility-Products-Related-Deaths-Injuries-and-Hazard-Patterns-2017-2022.pdf",
  },
];

const STUDIES: { cite: string; finding: React.ReactNode; srcUrl: string }[] = [
  {
    cite: "Gardner & Steinberg (2005), Developmental Psychology",
    finding: (
      <>
        Teenagers took significantly more driving risks{" "}
        <B>the moment peers were watching</B>. Adults didn&apos;t budge. The
        audience changes the decision.
      </>
    ),
    srcUrl: "https://pubmed.ncbi.nlm.nih.gov/16060809/",
  },
  {
    cite: "Chein, Albert, O'Brien, Uckert & Steinberg (2011), Developmental Science",
    finding: (
      <>
        Brain scans show why. The mere presence of peers{" "}
        <B>lights up the adolescent reward circuitry</B>, and that activation
        predicts the risky choice.
      </>
    ),
    srcUrl: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3075496/",
  },
  {
    cite: "Albert, Chein & Steinberg (2013), Current Directions in Psychological Science",
    finding: (
      <>
        Adolescent risk-taking is disproportionately <B>a group phenomenon</B>.
        Teens in packs do what no teen would do alone.
      </>
    ),
    srcUrl: "https://journals.sagepub.com/doi/10.1177/0963721412471347",
  },
  {
    cite: "Anderson & Galinsky (2006), European Journal of Social Psychology",
    finding: (
      <>
        People made to feel powerful <B>judged risks as smaller</B> and took
        more of them. Now hand a 14-year-old a machine that outruns traffic and
        ask how powerful he feels.
      </>
    ),
    srcUrl: "https://onlinelibrary.wiley.com/doi/abs/10.1002/ejsp.324",
  },
  {
    cite: "Benjamin, Kepes & Bushman (2018), Personality and Social Psychology Review",
    finding: (
      <>
        Across 78 studies, <B>the mere presence of a weapon</B> increased
        aggressive thoughts, hostile appraisals, and aggressive behavior. The
        psychology tracks with any power object, and a 72-volt e-moto under a
        child is exactly that.
      </>
    ),
    srcUrl: "https://journals.sagepub.com/doi/abs/10.1177/1088868317725419",
  },
];

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  zip_code: string;
  street_address: string;
  phone: string;
  comment: string;
};

type PublicComment = {
  name: string;
  comment: string;
  zip: string | null;
  date: string;
};

/* The golf-cart double-standard slider. Renders only once BOTH images
   exist in public/stupidity/ — drop them in and it appears. */
const SLIDER_A = "/stupidity/stupidity-slider-golfcart.png";
const SLIDER_B = "/stupidity/stupidity-slider-emoto.png";

function GolfCartSlider() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const probe = (src: string) =>
      new Promise<boolean>((resolve) => {
        const im = new window.Image();
        im.onload = () => resolve(true);
        im.onerror = () => resolve(false);
        im.src = src;
      });
    Promise.all([probe(SLIDER_A), probe(SLIDER_B)]).then(([a, b]) => {
      if (!cancelled && a && b) setReady(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!ready) return null;

  return (
    <div className="mb-6">
      <p className="text-xs md:text-sm font-black text-danger-400 uppercase tracking-widest mb-3 text-center">
        Same kid. Same street. Drag the slider. Watch the zombie apocalypse
        unfold.
      </p>
      <div className="rounded-xl overflow-hidden border border-[#2c2c2c]">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={SLIDER_A}
              alt="A small kid driving a golf cart down the street while neighbors panic and call the police"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={SLIDER_B}
              alt="The same kid on an electric dirt bike on the same street while the same neighbors don't even look up"
            />
          }
        />
      </div>
      <div className="flex justify-between text-[11px] md:text-xs font-black uppercase tracking-widest text-[#8a867c] mt-2 px-1">
        <span>Golf cart: 911 gets dialed</span>
        <span>E-moto: nobody blinks</span>
      </div>
    </div>
  );
}

/* NPC exhibit gallery — self-populating. Drop screenshots into
   public/stupidity/ named npc-comment-1.png, npc-comment-2.png, ...
   (sequential, PNG). The gallery probes upward and stops after two
   consecutive missing numbers, so new exhibits appear on the next
   page load with zero code changes. */
function NpcGallery() {
  const [shots, setShots] = useState<{ src: string; scorched: boolean }[]>([]);

  useEffect(() => {
    let cancelled = false;
    const probe = (src: string) =>
      new Promise<boolean>((resolve) => {
        const im = new window.Image();
        im.onload = () => resolve(true);
        im.onerror = () => resolve(false);
        im.src = src;
      });
    (async () => {
      const found: { src: string; scorched: boolean }[] = [];
      let misses = 0;
      // Two filename tiers per slot: npc-comment-N.png (plain exhibit) or
      // npc-comment-N-scorched.png (the NPC got the retort included).
      for (let i = 1; i <= 60 && misses < 2; i++) {
        const plain = `/stupidity/npc-comment-${i}.png`;
        const scorched = `/stupidity/npc-comment-${i}-scorched.png`;
        if (await probe(plain)) {
          if (cancelled) return;
          found.push({ src: plain, scorched: false });
          misses = 0;
        } else if (await probe(scorched)) {
          if (cancelled) return;
          found.push({ src: scorched, scorched: true });
          misses = 0;
        } else {
          if (cancelled) return;
          misses++;
        }
      }
      if (!cancelled) setShots(found);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (shots.length === 0) {
    return (
      <p className="text-sm text-[#6b675e] italic mb-2">
        Exhibits drop here as they&apos;re harvested. The neighborhood never
        disappoints for long.
      </p>
    );
  }

  return (
    <>
      {/* Restaurant celebrity-wall header */}
      <div className="flex items-center gap-3 mb-2">
        <span className="h-px flex-1 bg-[#2c2c2c]" />
        <p className="text-sm md:text-base font-black uppercase tracking-[0.25em] text-amber-400/90 text-center">
          ★ The NPC Wall of Fame ★
        </p>
        <span className="h-px flex-1 bg-[#2c2c2c]" />
      </div>
      <p className="text-center text-xs md:text-sm text-[#8a867c] italic mb-5">
        Like the celebrity wall at a pizzeria, except everyone here earned it.
      </p>
      <div className="columns-1 sm:columns-2 gap-4 mb-2 [&>*]:break-inside-avoid">
        {shots.map((s, i) => (
          <motion.figure
            key={s.src}
            style={{ rotate: i % 2 === 0 ? -0.8 : 0.8 }}
            whileHover={{ rotate: 0 }}
            className={`mb-4 rounded-xl border overflow-hidden bg-[#0d0d0d] ${
              s.scorched ? "border-amber-600/70" : "border-[#2c2c2c]"
            }`}
          >
            <figcaption className="flex items-center justify-between gap-3 border-b border-[#2c2c2c] px-3.5 py-2">
              <span className="flex items-center gap-2 text-[10px] md:text-xs font-black uppercase tracking-widest text-danger-500">
                Exhibit {i + 1}
                {s.scorched && (
                  <span className="px-1.5 py-0.5 rounded bg-amber-500/15 border border-amber-500/60 text-amber-400">
                    🔥 Scorched
                  </span>
                )}
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#8a867c]">
                Unedited screenshot
              </span>
            </figcaption>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={`NPC exhibit ${i + 1}: a real comment defending the illegal riding, reproduced unedited${s.scorched ? ", retort included" : ""}`}
              loading="lazy"
              className="w-full"
            />
          </motion.figure>
        ))}
      </div>
    </>
  );
}

function timeAgo(dateStr: string) {
  const seconds = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

export default function StupidityPage() {
  const [form, setForm] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    zip_code: "",
    street_address: "",
    phone: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [signatureCount, setSignatureCount] = useState<number | null>(null);
  const [optInContact, setOptInContact] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [consentError, setConsentError] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [commentPublic, setCommentPublic] = useState(false);
  const [commentAnonymous, setCommentAnonymous] = useState(false);
  const [comments, setComments] = useState<PublicComment[]>([]);
  const [commentTotal, setCommentTotal] = useState(0);
  const [expandedComment, setExpandedComment] = useState<PublicComment | null>(
    null,
  );
  const voicesRef = useRef<HTMLDivElement>(null);

  const fetchCount = useCallback(async () => {
    try {
      const res = await fetch("/api/stupidity/count");
      const data = await res.json();
      if (data.count !== undefined) {
        setSignatureCount(data.count);
      }
    } catch {
      // silently fail
    }
  }, []);

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch("/api/stupidity/comments?page=1&limit=20");
      const data = await res.json();
      if (data.comments) {
        setComments(data.comments);
        setCommentTotal(data.total);
      }
    } catch {
      // silently fail
    }
  }, []);

  useEffect(() => {
    fetchCount();
    fetchComments();
  }, [fetchCount, fetchComments]);

  // Anchor jumps land short on long hops: lazy images between the viewport
  // and the target finish loading AFTER the browser has scrolled, growing the
  // content above the target and leaving the viewport high. Re-align a couple
  // of beats after the jump — unless the reader has started scrolling.
  useEffect(() => {
    let timers: ReturnType<typeof setTimeout>[] = [];
    let onImgLoad: ((ev: Event) => void) | null = null;
    const cancel = () => {
      timers.forEach(clearTimeout);
      timers = [];
      if (onImgLoad) {
        document.removeEventListener("load", onImgLoad, true);
        onImgLoad = null;
      }
    };
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest?.('a[href^="#"]');
      const href = a?.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      history.pushState(null, "", href);
      cancel();
      const align = () => el.scrollIntoView({ behavior: "instant" });
      align();
      // Fixed timers alone miss slow images: chase the target on every
      // image load for a few seconds after the jump.
      onImgLoad = (ev: Event) => {
        if (ev.target instanceof HTMLImageElement) align();
      };
      document.addEventListener("load", onImgLoad, true);
      timers = [
        setTimeout(align, 400),
        setTimeout(align, 1000),
        setTimeout(cancel, 4000),
      ];
    };
    document.addEventListener("click", onClick);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    return () => {
      cancel();
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
    };
  }, []);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.first_name.trim()) e.first_name = "First name is required";
    if (!form.last_name.trim()) e.last_name = "Last name is required";
    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email";
    }
    if (!form.zip_code.trim()) {
      e.zip_code = "Zip code is required";
    } else if (!/^\d{5}(-\d{4})?$/.test(form.zip_code)) {
      e.zip_code = "Please enter a valid zip code";
    }
    if (!consentChecked) {
      setConsentError(
        "You must agree to the Privacy Notice and the no-confrontation promise to sign",
      );
    } else {
      setConsentError("");
    }
    setErrors(e);
    return Object.keys(e).length === 0 && consentChecked;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/stupidity/sign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: form.first_name.trim(),
          last_name: form.last_name.trim(),
          email: form.email.trim().toLowerCase(),
          zip_code: form.zip_code.trim(),
          street_address: form.street_address.trim() || null,
          phone: form.phone.trim() || null,
          comment: form.comment.trim() || null,
          comment_public: commentPublic,
          comment_anonymous: commentAnonymous,
          opt_in_contact: optInContact,
          website: honeypot, // honeypot field — bots fill this, humans don't
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit");

      // Confirmation email (non-blocking — the signature is already saved)
      try {
        await fetch("/api/stupidity/send-receipt", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: form.first_name.trim(),
            lastName: form.last_name.trim(),
            email: form.email.trim().toLowerCase(),
            zipCode: form.zip_code.trim(),
            comment: form.comment.trim() || null,
            optInContact,
          }),
        });
      } catch {
        // email failed silently — signature is saved
      }

      setSubmitted(true);
      document
        .getElementById("sign")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
      fetchCount();
      fetchComments();
    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (hasError?: string) =>
    `w-full px-4 py-3 bg-[#1c1c1c] border rounded-xl text-[#f2f0ea] placeholder-[#6b675e] focus:outline-none focus:ring-2 focus:ring-danger-500/50 focus:border-danger-500 transition-all ${
      hasError ? "border-danger-500" : "border-[#3a3a3a]"
    }`;

  const faqs: { q: string; a: React.ReactNode }[] = [
    {
      q: "We pay the taxes here. Why do WE get pulled over for a rolling stop or a dead headlight while unregistered motorcycles do wheelies past the patrol car?",
      a: (
        <>
          <p>
            Because ticketing you is easy, and dealing with this is work. You
            stop, you sign, you pay, thirty seconds of revenue.
          </p>
          <p>
            A pack of kids on illegal machines requires policy, coordination,
            and political will, so the system shrugs and calls it impossible.
          </p>
          <p>
            That&apos;s not a reason, it&apos;s an excuse, and it&apos;s exactly
            the excuse this petition was built to kill:{" "}
            <B>
              a written enforcement protocol, impound authority, and parental
              fines
            </B>
            .
          </p>
          <p>Same street, same law, for everyone.</p>
        </>
      ),
    },
    {
      q: "“But it's just an e-bike, not an e-motorcycle.”",
      a: (
        <>
          <p>
            Doesn&apos;t matter. The way they&apos;re ridden here,{" "}
            <B>both are illegal</B>.
          </p>
          <p>
            The e-motorcycles can&apos;t be registered for road use at all. The
            &ldquo;just e-bikes&rdquo; are ridden by kids under 16 (illegal),
            past the 20 mph ceiling (illegal), and on sidewalks (illegal).
          </p>
          <p>
            Scroll up and read the law section again: there&apos;s no legal
            version of what&apos;s happening on our streets.
          </p>
        </>
      ),
    },
    {
      q: "“It's just kids having fun.”",
      a: (
        <>
          <p>
            Our bar for &ldquo;kids being kids&rdquo; is higher than you think.
            Read the manifesto above: we don&apos;t care if a kid sneaks a
            cigarette in the woods or cracks a beer in a basement.
          </p>
          <p>
            The line is <B>disturbing the peace</B>. There are legal machines,
            legal ages, and legal places, and none of them are a public street
            at 40 mph next to a stroller.
          </p>
          <p>
            The science above says the pack won&apos;t self-regulate, so the
            adults have to.
          </p>
        </>
      ),
    },
    {
      q: "“Don't you have something better to do with your life? lol”",
      a: (
        <>
          <p>
            A concerned citizen running a formal, legal, documented political
            campaign through exactly the channels democracy provides, while
            everyone else complains in the group chat?
          </p>
          <p>
            That&apos;s{" "}
            <B>the textbook definition of doing something with your life</B>.
          </p>
          <p>
            Filming yourself doing wheelies at pedestrians is not. Glad you
            asked.
          </p>
        </>
      ),
    },
    {
      q: "I don't want kids arrested or hurt.",
      a: (
        <>
          <p>Neither do we. That&apos;s the whole point.</p>
          <p>
            Read the demands: every single one targets{" "}
            <B>machines and adults</B>. Impound the illegal vehicle. Fine the
            enabling parent. Enforce the age law.
          </p>
          <p>
            The goal is that no kid ever ends up in a courtroom, a trauma ward,
            or a casket, and no parent ends up where the Orange County mother is
            right now.
          </p>
          <p>
            Same goes for the grown-ups: we don&apos;t condone confronting kids,
            following them home, or any citizen-vigilante nonsense.{" "}
            <B>The petition is the outlet.</B>
          </p>
        </>
      ),
    },
    {
      q: "Will a petition actually change anything?",
      a: (
        <>
          <p>
            A numbered petition delivered to named officials creates a public
            record that they knew. &ldquo;There&apos;s nothin&apos; we can do
            about it&rdquo; stops being deniable and starts being{" "}
            <B>a documented choice</B>.
          </p>
          <p>
            Boards pass ordinances when ignoring a problem costs more than
            fixing it, and signatures are what raise the price.
          </p>
          <p>Yours takes 30 seconds.</p>
        </>
      ),
    },
    {
      q: "Who's paying for all of this? What's the angle?",
      a: (
        <>
          <p>
            Me. The domain, the hosting, the email receipts, the hours.{" "}
            <B>All of it, out of one wallet: mine.</B>
          </p>
          <p>
            No ads. No tracking. No data selling. Nothing for sale.
            That&apos;s deliberate, and it stays that way.
          </p>
          <p>
            If the site&apos;s worth something to you, you can{" "}
            <a
              href="https://buymeacoffee.com/protectliverpoolny"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 font-bold transition-colors"
            >
              buy me a coffee ☕
            </a>
            . If not, signing is free and matters more.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-[#e8e5de]">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-danger-950/40 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-danger-600/10 rounded-full blur-[110px]" />

        <div className="relative max-w-4xl mx-auto px-4 pt-16 pb-10 md:pt-24 md:pb-14 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center mb-7"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-danger-950/60 border border-danger-700/50 rounded-full text-danger-400 text-xs md:text-sm font-black uppercase tracking-widest">
              <Brain className="w-4 h-4" />A Neighborhood Reality Check
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-8 text-[#f7f5ef]"
          >
            We&apos;re not against e-bikes.{" "}
            <span className="block">
              We&apos;re against{" "}
              <span className="text-danger-500">STUPIDITY</span>.
            </span>
          </motion.h1>

          {/* The hero image — the attention grab, straight after the title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/stupidity/stupidity-hero.png"
              alt="Cartoon of the pack taking over a suburban street: cyclists forced onto the grass, a jogger leaping clear, an old man and his chihuahua in a near miss, and two officers shrugging beside their cruiser"
              loading="eager"
              className="w-full rounded-2xl border-2 border-danger-800/60 mb-8 shadow-2xl shadow-danger-950/50"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-[#d6d2c8] max-w-3xl mx-auto leading-relaxed mb-5 font-medium"
          >
            Unlicensed kids. Illegal machines.{" "}
            <B>40 mph past your children, your dog, your grandmother.</B>{" "}
            Wheelies down the middle of the road. Races through the parks,
            down the sidewalks. And when you object, the attitude says{" "}
            <B>you&apos;re the problem</B>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#b3afa4] max-w-3xl mx-auto leading-relaxed mb-7"
          >
            The parents allow it. The police recite{" "}
            <B>&ldquo;there&apos;s nothin&apos; we can do about it.&rdquo;</B>{" "}
            Your dead headlight? Pulled over in a minute.{" "}
            <span className="text-[#f7f5ef] font-bold">
              That&apos;s the stupid part.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-10 text-[#f7f5ef]"
          >
            ENOUGH IS <span className="text-danger-500">ENOUGH.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <SignCta label="Sign Against the Stupidity" />
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ JUMP MENU ═══════════════════ */}
      <JumpMenu id="jump" />

      <Divider />

      {/* ═══════════════════ SEEN WITH OUR OWN EYES ═══════════════════ */}
      <section id="witness" className="pb-4 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border-l-4 border-danger-600 rounded-2xl p-7 md:p-10"
          >
            <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Siren className="w-4 h-4" />
              Read this first
            </p>
            <p className="text-2xl md:text-3xl text-[#f7f5ef] font-black leading-snug mb-3">
              This spring, a 14-year-old popping wheelies on an e-motorcycle{" "}
              <span className="text-danger-500">killed</span> an 81-year-old
              combat veteran.
            </p>
            <p className="text-xl md:text-2xl text-[#f7f5ef] font-bold leading-snug mb-5">
              His mother is facing prison for letting him ride it.
            </p>
            <p className="text-base md:text-lg text-[#c7c3b8] leading-relaxed mb-3">
              That was California.{" "}
              <B>This is Buckley Road:</B> a child, full throttle,
              in the traffic lane. No plate. No helmet. No fear of anyone.
              Electronics Parkway, same show.
            </p>
            <p className="text-base md:text-lg text-[#c7c3b8] leading-relaxed mb-5">
              Same machines. Same parents. Same{" "}
              <B>&ldquo;there&apos;s nothin&apos; we can do about
              it.&rdquo;</B>
            </p>
            <p className="text-2xl md:text-3xl font-black text-[#f7f5ef] leading-snug mb-2">
              Liverpool is the{" "}
              <span className="text-danger-500">prequel</span>. Everyone
              already knows how it ends.
            </p>
            <p className="text-xl md:text-2xl font-black text-danger-500 mb-7">
              We refuse to wait for it.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <SignCta small label="I've Seen Enough — Sign" />
              <a
                href="#the-case"
                className="text-xs md:text-sm font-black uppercase tracking-widest text-[#8a867c] hover:text-[#f7f5ef] transition-colors"
              >
                Full story + video ↓
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ THE TALLY ═══════════════════ */}
      <section id="tally" className="py-12 md:py-16 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto space-y-7">
          {stupidities.map((s, i) => (
            <motion.div
              key={s.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              custom={0}
              className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-7 md:p-10"
            >
              {/* Icon stacks ABOVE on mobile so text gets the full card width */}
              <div className="md:flex md:items-start md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-danger-950/70 border border-danger-800/50 flex items-center justify-center flex-shrink-0 mb-4 md:mb-0">
                  <s.icon className="w-6 h-6 md:w-7 md:h-7 text-danger-500" />
                </div>
                <div className="min-w-0 md:flex-1">
                  <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-2">
                    Stupidity #{i + 1}
                  </p>
                  <h2 className="text-xl md:text-2xl font-black text-[#f7f5ef] leading-snug mb-4">
                    {s.title}
                  </h2>
                  <div className="text-base md:text-lg text-[#c7c3b8] leading-relaxed mb-6 space-y-3">
                    {s.body}
                  </div>
                  {s.img && <CardImage src={s.img} alt={s.imgAlt!} />}
                  {s.after}
                  <div className="flex flex-wrap items-center gap-4">
                    <SignCta small label={s.cta} />
                    <a
                      href="#jump"
                      className="text-xs md:text-sm font-black uppercase tracking-widest text-[#8a867c] hover:text-[#f7f5ef] transition-colors"
                    >
                      ↑ Menu
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ JUST THE FACTS ═══════════════════ */}
      <section id="the-facts" className="pt-12 md:pt-16 pb-8 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-danger-950/60 border border-danger-700/50 rounded-full text-danger-400 text-xs md:text-sm font-black uppercase tracking-widest mb-6">
              <Scale className="w-4 h-4" />
              No Opinions Below This Line
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#f7f5ef] mb-4">
              Just the <span className="text-danger-500">Facts</span>.
            </h2>
            <p className="text-lg md:text-xl text-[#b3afa4] max-w-2xl mx-auto leading-relaxed">
              Laws, numbers, charges, case files. Every claim sourced.
            </p>
            <p className="text-base md:text-lg text-[#8a867c] max-w-2xl mx-auto leading-relaxed mt-2">
              Forward this to the neighbor who thinks we&apos;re overreacting.
            </p>
          </motion.div>

          {/* ── THE CASE ── */}
          <motion.div
            id="the-case"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border-2 border-danger-800/60 rounded-2xl p-7 md:p-10 mb-8 scroll-mt-24"
          >
            <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-3">
              It already happened, and a mother is facing prison
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-[#f7f5ef] leading-snug mb-5">
              A 14-year-old doing wheelies on an e-motorcycle killed an
              81-year-old Vietnam combat veteran. Prosecutors charged his
              mother.
            </h3>

            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#2c2c2c] mb-6 bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/B-YJ9gSbJkY"
                title="CBS LA: Orange County mom faces judge over charges connected to deadly e-bike crash involving son"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="space-y-4 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
              <p>April 16, 2026. Lake Forest, California (Orange County).</p>
              <p>
                A 14-year-old on a Sur-Ron Ultra Bee e-motorcycle,{" "}
                <B>popping wheelies</B>, struck 81-year-old <B>Ed Ashman</B>, a
                Marine Corps veteran who flew combat missions in Vietnam, as he
                walked home near El Toro High School.
              </p>
              <p>
                He died of his injuries.{" "}
                <Src href="https://abc7.com/post/aliso-viejo-mother-charged-teen-son-crashes-81-year-old-man-riding-motorcycle-leaving-critically-injured/18942740/">
                  ABC7
                </Src>{" "}
                <Src href="https://www.nbclosangeles.com/news/local/vietnam-veteran-mother-charged-e-motorcycle-crash-orange-county/3884457/">
                  NBC LA
                </Src>
              </p>
              <p>
                The rider&apos;s mother, <B>Tommi Jo Mejer of Aliso Viejo</B>,
                is charged with{" "}
                <strong className="text-danger-400">
                  felony involuntary manslaughter, felony child endangerment,
                  and accessory after the fact
                </strong>
                .{" "}
                <Src href="https://orangecountyda.org/press/charges-upgraded-to-involuntary-manslaughter-against-aliso-viejo-mother-whose-14-year-old-son-killed-vietnam-veteran-while-child-was-illegally-riding-an-e-motorcycle-16-times-more-powerful-than-an-e/">
                  OC District Attorney
                </Src>{" "}
                <Src href="https://ktla.com/news/orange-county/o-c-moms-charges-upgraded-to-manslaughter-after-e-motorcycle-crash-death/">
                  KTLA
                </Src>
              </p>
              <p>
                Here&apos;s the part every parent in Liverpool should read
                twice.
              </p>
              <p>
                Deputies had <B>warned her ten months before the crash</B> that
                she could face criminal charges if she kept letting her son
                ride. She admitted she bought him the machine and knew he rode
                recklessly.
              </p>
              <p>
                She let him keep riding.{" "}
                <Src href="https://orangecountyda.org/press/charges-upgraded-to-involuntary-manslaughter-against-aliso-viejo-mother-whose-14-year-old-son-killed-vietnam-veteran-while-child-was-illegally-riding-an-e-motorcycle-16-times-more-powerful-than-an-e/">
                  OC District Attorney
                </Src>
              </p>
              <p>
                The DA calls the machine{" "}
                <B>&ldquo;16 times more powerful than an e-bike&rdquo;</B> and
                warned parents he will prosecute them{" "}
                <em>to the fullest extent of the law</em>.
              </p>
              <p className="text-[#f7f5ef] font-bold">
                Every element of that story already exists on our streets. The
                only element Liverpool hasn&apos;t supplied yet is the body.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <BackToSign label="That's enough for me — Sign" />
              <a
                href="#jump"
                className="text-xs md:text-sm font-black uppercase tracking-widest text-[#8a867c] hover:text-[#f7f5ef] transition-colors"
              >
                ↑ Menu
              </a>
            </div>
          </motion.div>

          {/* ── THE LAW ── */}
          <motion.div
            id="the-law"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="mb-8 scroll-mt-24"
          >
            <h3 className="text-2xl md:text-3xl font-black text-[#f7f5ef] mb-6 text-center">
              The law is not ambiguous.{" "}
              <span className="text-danger-500">It's just unenforced.</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              {LAW_FACTS.map((f) => (
                <div
                  key={f.title}
                  className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-6"
                >
                  <h4 className="text-lg md:text-xl font-black text-[#f7f5ef] leading-snug mb-3">
                    {f.title}
                  </h4>
                  <div className="text-sm md:text-base text-[#c7c3b8] leading-relaxed mb-4 space-y-2">
                    {f.body}
                  </div>
                  <Src href={f.srcUrl}>Source: {f.srcName}</Src>
                </div>
              ))}
            </div>

            {/* The parent statute — full-width standout */}
            <div className="bg-danger-950/30 border-2 border-danger-700/60 rounded-2xl p-6 md:p-8 mt-5">
              <p className="text-xs md:text-sm font-black text-danger-400 uppercase tracking-widest mb-2">
                The one the parents should read twice
              </p>
              <h4 className="text-xl md:text-2xl font-black text-[#f7f5ef] leading-snug mb-3">
                New York already has a child-endangerment law with your name on
                it: Penal Law § 260.10.
              </h4>
              <div className="text-sm md:text-base text-[#c7c3b8] leading-relaxed space-y-2">
                <p>
                  Subsection (1) covers anyone who{" "}
                  <B>
                    &ldquo;knowingly acts in a manner likely to be injurious to
                    the physical, mental or moral welfare of a child&rdquo;
                  </B>{" "}
                  under 17.
                </p>
                <p>
                  Handing your kid a 40-mph illegal machine fits that sentence
                  like a glove.
                </p>
                <p>
                  Subsection (2) goes further. It targets the parent who{" "}
                  <B>
                    &ldquo;fails or refuses to exercise reasonable diligence in
                    the control of such child&rdquo;
                  </B>{" "}
                  to keep them from becoming a juvenile delinquent.
                </p>
                <p>
                  A class A misdemeanor. On the books right now. Waiting to be
                  used.
                </p>
              </div>
              <div className="mt-3">
                <Src href="https://www.nysenate.gov/legislation/laws/PEN/260.10">
                  Source: NY Penal Law § 260.10 (NY Senate)
                </Src>
              </div>
            </div>

            <p className="text-center text-sm md:text-base text-[#8a867c] mt-5 italic">
              It&apos;s the same law that tickets you for an unregistered car or
              that dead headlight. The difference? Yours gets enforced.
            </p>
            <MiniNav />
          </motion.div>

          {/* ── THE NUMBERS ── */}
          <motion.div
            id="the-numbers"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="mb-8 scroll-mt-24"
          >
            <h3 className="text-2xl md:text-3xl font-black text-[#f7f5ef] mb-6 text-center flex items-center justify-center gap-3">
              <TrendingUp className="w-7 h-7 text-danger-500" />
              The national numbers are screaming.
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-6 text-center"
                >
                  <p className="text-4xl md:text-5xl font-black text-danger-500 mb-2">
                    {s.stat}
                  </p>
                  <p className="text-sm md:text-base text-[#c7c3b8] leading-snug mb-3">
                    {s.label}
                  </p>
                  <Src href={s.srcUrl}>Source: {s.srcName}</Src>
                </div>
              ))}
            </div>
            <div className="text-center mt-7">
              <BackToSign label="The numbers are enough — Sign" />
              <MiniNav />
            </div>
          </motion.div>

          {/* ── THE SCIENCE ── */}
          <motion.div
            id="the-science"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-7 md:p-10 mb-8 scroll-mt-24"
          >
            <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-3">
              The bravado and the pack: both are documented
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-[#f7f5ef] leading-snug mb-5">
              Give a kid a power machine and an audience, and science says you
              get exactly this.
            </h3>
            <div className="space-y-5">
              {STUDIES.map((s) => (
                <div
                  key={s.cite}
                  className="border-l-2 border-danger-700/60 pl-5"
                >
                  <p className="text-base md:text-lg text-[#c7c3b8] leading-relaxed mb-2">
                    {s.finding}
                  </p>
                  <Src href={s.srcUrl}>{s.cite}</Src>
                </div>
              ))}
            </div>
            <div className="text-base md:text-lg text-[#c7c3b8] leading-relaxed mt-6 space-y-3">
              <p>
                So it&apos;s a double whammy. The machine pumps the bravado up,
                and the pack pays it out: throttle open, wheelies into traffic,
                mouths running.
              </p>
              <p>
                That&apos;s how you get a kid holding{" "}
                <B>full throttle WITH traffic on Buckley Road</B>, no plate, no
                helmet, while his friends film it.
              </p>
              <p className="text-[#f7f5ef] font-bold">
                The research says they won&apos;t self-regulate. The adults have
                to, and this petition is how.
              </p>
            </div>

            {/* The plain-English version */}
            <div className="bg-danger-950/30 border-l-4 border-danger-600 rounded-xl p-5 md:p-6 mt-6">
              <p className="text-xs md:text-sm font-black text-danger-400 uppercase tracking-widest mb-2">
                TL;DR
              </p>
              <p className="text-lg md:text-xl font-black text-[#f7f5ef] leading-snug">
                Their brains haven&apos;t finished building the brakes yet, so
                they ride like fucking idiots while feeling absolutely certain
                they look cool.{" "}
                <span className="text-danger-500">Clinically.</span>
              </p>
            </div>

            {/* The delusion gap, illustrated */}
            <div className="mt-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/stupidity/stupidity-delusion.png"
                alt="Cartoon of a pack of riders blasting down a suburban street thinking we're so fucking cool, while the neighbors watching think god that's so fucking lame — a braking car, a scared chihuahua, and a sheriff on his phone complete the scene"
                loading="lazy"
                className="w-full rounded-xl border border-[#2c2c2c]"
                onError={(e) => {
                  const wrap = (e.currentTarget as HTMLImageElement)
                    .parentElement;
                  if (wrap) wrap.style.display = "none";
                }}
              />
            </div>
            <MiniNav />
          </motion.div>

          {/* ── "JUST AN E-BIKE" ── */}
          <motion.div
            id="both-illegal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-danger-950/30 border-2 border-danger-700/60 rounded-2xl p-7 md:p-10 mb-8 scroll-mt-24"
          >
            <p className="text-xs md:text-sm font-black text-danger-400 uppercase tracking-widest mb-3">
              The favorite excuse
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-[#f7f5ef] leading-snug mb-2">
              &ldquo;But it&apos;s just an e-bike, not an e-motorcycle.&rdquo;
            </h3>
            <p className="text-3xl md:text-4xl font-black text-danger-500 mb-6">
              No. The way they&apos;re ridden here, BOTH are illegal.
            </p>
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div className="bg-[#131313]/80 border border-[#2c2c2c] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-5 h-5 text-danger-500" />
                  <h4 className="text-lg font-black text-[#f7f5ef]">
                    The e-motorcycle
                  </h4>
                </div>
                <ul className="space-y-2 text-sm md:text-base text-[#c7c3b8] leading-relaxed list-disc pl-5">
                  <li>
                    No DOT equipment, no VIN pathway, no registration. Off-road
                    only.
                  </li>
                  <li>
                    On a public road it&apos;s an unregistered, uninsured motor
                    vehicle. <B>Illegal every single time, ridden by anyone.</B>
                  </li>
                </ul>
              </div>
              <div className="bg-[#131313]/80 border border-[#2c2c2c] rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Scale className="w-5 h-5 text-danger-500" />
                  <h4 className="text-lg font-black text-[#f7f5ef]">
                    The &ldquo;just an e-bike&rdquo;
                  </h4>
                </div>
                <ul className="space-y-2 text-sm md:text-base text-[#c7c3b8] leading-relaxed list-disc pl-5">
                  <li>
                    Rider under 16? <B>Illegal.</B> Any class, statewide.
                  </li>
                  <li>
                    Assisting past 20 mph outside NYC? <B>Illegal.</B>
                  </li>
                  <li>
                    On the sidewalk? <B>Illegal</B>, unless a local law says
                    otherwise.
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-lg md:text-xl font-black text-[#f7f5ef] text-center">
              There is no legal version of what&apos;s happening on our streets.{" "}
              <span className="text-danger-500">None.</span>
            </p>
            <div className="text-center mt-6">
              <BackToSign label="No more excuses — Sign" />
              <MiniNav />
            </div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ NOT THE SAME ═══════════════════ */}
      <section id="not-the-same" className="pb-12 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-7 md:p-10"
          >
            <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Today&apos;s NPC take
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[#f7f5ef] leading-tight mb-2">
              &ldquo;Literally bikes go that fast, dumbass.&rdquo;
            </h2>
            <p className="text-3xl md:text-4xl font-black text-danger-500 mb-6">
              No the fuck they don&apos;t. Here&apos;s the math.
            </p>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/stupidity/stupidity-wojack-bikes.png"
              alt="Wojak meme insisting bikes literally go that fast"
              loading="lazy"
              className="w-full rounded-xl border border-[#2c2c2c] mb-6"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-[#1a1a1a] border border-[#2c2c2c] rounded-xl p-5">
                <p className="text-2xl mb-2">🚲</p>
                <h3 className="text-base md:text-lg font-black text-[#f7f5ef] mb-2">
                  A kid&apos;s pedal bike
                </h3>
                <p className="text-sm text-[#c7c3b8] leading-relaxed">
                  25 to 30 pounds. Powered by legs. A kid cruises 10 to 15 mph,
                  gets tired, coasts, stops.
                </p>
              </div>
              <div className="bg-danger-950/30 border border-danger-700/50 rounded-xl p-5">
                <p className="text-2xl mb-2">⚡</p>
                <h3 className="text-base md:text-lg font-black text-[#f7f5ef] mb-2">
                  The e-moto
                </h3>
                <p className="text-sm text-[#c7c3b8] leading-relaxed">
                  110 to 200 pounds of machine. Battery-powered. 45+ mph by the
                  spec sheet, no fitness required, no training included, never
                  gets tired.
                </p>
              </div>
              <div className="bg-[#1a1a1a] border border-[#2c2c2c] rounded-xl p-5">
                <p className="text-2xl mb-2">⛳</p>
                <h3 className="text-base md:text-lg font-black text-[#f7f5ef] mb-2">
                  A golf cart
                </h3>
                <p className="text-sm text-[#c7c3b8] leading-relaxed">
                  Around 900 pounds, factory-limited to roughly 15 mph. If a
                  ten-year-old drove one down your street, you&apos;d call 911.
                </p>
              </div>
            </div>

            <GolfCartSlider />

            <div className="space-y-3 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
              <p>
                Run the physics once. A kid plus an e-moto at 40 mph carries{" "}
                <B>about twenty times the crash energy</B> of the same kid on
                his pedal bike at 12 mph.
              </p>
              <p>
                Twenty times. That&apos;s the difference your
                &ldquo;literally&rdquo; is trying to paper over.
              </p>
              <p>
                So sure, it might as well be a golf cart. Except the golf cart
                is <B>slower</B>, and you would absolutely stop the ten-year-old
                driving the golf cart.
              </p>
              <p className="text-[#f7f5ef] font-bold">
                A bicycle is a toy a kid powers with his body. This is a motor
                vehicle a kid merely points. They are not the same thing, and
                everyone typing otherwise knows it.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <BackToSign label="Not the same thing — Sign" />
              <a
                href="#jump"
                className="text-xs md:text-sm font-black uppercase tracking-widest text-[#8a867c] hover:text-[#f7f5ef] transition-colors"
              >
                ↑ Menu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ THE ENTITLEMENT ═══════════════════ */}
      <section id="entitlement" className="pb-8 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-7 md:p-10"
          >
            <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              A Walmart, somewhere in America
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[#f7f5ef] leading-tight mb-5">
              It&apos;s less an e-bike problem. More an{" "}
              <span className="text-danger-500">entitlement problem</span>. And
              a consequences problem.
            </h2>
            <div className="space-y-3 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
              <p>
                Think this is a Liverpool quirk? Watch what a Los Angeles news
                station put on air.
              </p>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#2c2c2c] my-6 bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/ajoyAm_MxNE"
                title="KTLA 5: Teens on e-bikes terrorize Walmart customers"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="space-y-3 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
              <p>
                Teenagers rode their e-motos and e-bikes{" "}
                <B>through a Walmart</B>. Through the aisles. Past shoppers who
                had nowhere to go.
              </p>
              <p>And the consequences? You already know. None.</p>
              <p>
                So no, the machine was never the whole story. The machine is
                just the delivery vehicle.
              </p>
              <p>
                The cargo is the attitude:{" "}
                <B>rules are for other people, and nobody will do anything</B>.
              </p>
              <p>They&apos;re not wrong about the second part. Yet.</p>
              <p>
                Every time nothing happens, the lesson gets louder. A kid who
                learns at 14 that no rule can reach him doesn&apos;t unlearn
                it at 18 behind the wheel of a car.
              </p>
              <p>
                That&apos;s why this petition doesn&apos;t target hardware. It
                targets the <B>consequences vacuum</B>: enforcement, impound,
                parental accountability.
              </p>
              <p>
                Still think it&apos;s aisles and parking lots? Here&apos;s a
                pack of them on <B>Interstate 4 in Orlando</B>, cutting off
                cars at highway speed.
              </p>
              <p>
                A literal interstate. The place where a fender-bender is a
                funeral.
              </p>
            </div>

            <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-xl overflow-hidden border border-[#2c2c2c] my-6 bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/279myYnkmww"
                title="4LOW Photo: Bunch of kids on e-bikes riding on I-4 cutting off cars"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              <Src href="https://www.youtube.com/watch?v=ajoyAm_MxNE">
                Source: KTLA 5 (Los Angeles)
              </Src>
              <Src href="https://www.youtube.com/shorts/279myYnkmww">
                Source: 4LOW Photo (I-4, Orlando)
              </Src>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <BackToSign label="Enough entitlement — Sign" />
              <a
                href="#jump"
                className="text-xs md:text-sm font-black uppercase tracking-widest text-[#8a867c] hover:text-[#f7f5ef] transition-colors"
              >
                ↑ Menu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ THE TIDE ═══════════════════ */}
      <section id="the-tide" className="pb-8 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-7 md:p-10"
          >
            <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Waves className="w-4 h-4" />
              Milford, Massachusetts. And everywhere.
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[#f7f5ef] leading-tight mb-5">
              People are getting{" "}
              <span className="text-danger-500">fucking tired</span> of it. And
              the tide is turning.
            </h2>
            <div className="space-y-3 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
              <p>
                Here&apos;s a new one. A teen rider blew through a crosswalk
                signal on his e-bike and got hit by a car. On camera.
              </p>
              <p>
                Guess who got charged. <B>The rider.</B>{" "}And the police chief
                went on the record saying he&apos;s sick of it.
              </p>
            </div>

            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#2c2c2c] my-6 bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/bkuHFntessc"
                title="CBS Boston: Teen e-bike rider charged after being hit by car in Milford"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <p className="text-base md:text-lg text-[#c7c3b8] leading-relaxed mb-4">
              Now scroll the comment section under that report.{" "}
              <B>America&apos;s mood, with receipts:</B>
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                {
                  quote: "Dang that car really wanted to finish off that e bike.",
                  likes: "10K",
                },
                {
                  quote: "Good thing there was a camera",
                  likes: "8.7K",
                },
                {
                  quote:
                    "What!!? We're gonna hold people accountable for their actions? What insanity.",
                  likes: "6.9K",
                },
                {
                  quote:
                    "If you're going 40 Mph on an e-bike, then you're just driving a small motorcycle at that point.",
                  likes: "5.9K",
                },
                {
                  quote:
                    "The vehicle taking 5 business days to completely stop is the best part",
                  likes: "5K",
                },
                {
                  quote:
                    "I'm shocked! Someone's actually being held accountable for their actions! Well done",
                  likes: "3.4K",
                },
              ].map((c) => (
                <div
                  key={c.likes}
                  className="bg-[#0d0d0d] border border-[#2c2c2c] rounded-xl p-4 flex flex-col justify-between gap-3"
                >
                  <p className="text-sm md:text-base text-[#c7c3b8] leading-snug">
                    &ldquo;{c.quote}&rdquo;
                  </p>
                  <p className="text-xs font-black uppercase tracking-widest text-danger-500">
                    👍 {c.likes} likes
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
              <p>
                That&apos;s tens of thousands of likes for accountability. Not
                from cranky neighbors. <B>From everybody.</B>
              </p>
              <p>
                The riders and their parents think we&apos;re the villains
                here. The rest of the country is telling them otherwise.
              </p>
              <p>
                And understand what this site actually is. It&apos;s{" "}
                <B>local parenting, outsourced</B>. The parents wouldn&apos;t
                set a boundary, so the neighborhood is setting one for them.
              </p>
              <p>
                They hate us for it today. Fine. A boundary you hate is still
                a boundary. And it might be the only thing keeping their kid
                off a stretcher.
              </p>
            </div>
            <div className="mt-4">
              <Src href="https://www.youtube.com/watch?v=bkuHFntessc">
                Source: CBS Boston
              </Src>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <BackToSign label="The tide is turning — Sign" />
              <a
                href="#jump"
                className="text-xs md:text-sm font-black uppercase tracking-widest text-[#8a867c] hover:text-[#f7f5ef] transition-colors"
              >
                ↑ Menu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Midpoint jump menu — splits the long climb between hero and sign */}
      <JumpMenu />

      <Divider />

      {/* ═══════════════════ NOT A CASE FOR FLOCK ═══════════════════ */}
      <section id="flock" className="pb-8 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-7 md:p-10"
          >
            <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Cctv className="w-4 h-4" />
              And no, this is not a case for more cameras
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[#f7f5ef] leading-tight mb-5">
              Don&apos;t you dare hand this problem to Flock.
            </h2>
            <div className="space-y-3 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
              <p>
                Before any official gets ideas: none of this is an argument for
                Flock readers or one more surveillance layer.
              </p>
              <p>
                That&apos;s more societal fuckery, and it wouldn&apos;t even
                work.
              </p>
              <p>
                Flock cameras scan <B>license plates</B>. These machines
                don&apos;t have any.
              </p>
              <p>
                The flagship surveillance tool of American suburbia is blind to
                the one vehicle on our streets breaking the law daily.
              </p>
              <p>
                Sit with that irony. Your plate gets scanned and logged every
                drive to work. Your Fourth Amendment gets chipped away one
                camera pole at a time.
              </p>
              <p>
                And the kids with no plates, no registration, and no rules are{" "}
                <B>the only ones the system can&apos;t touch</B>.
              </p>
              <p>
                We&apos;re not asking for more cameras pointed at everyone.
                We&apos;re asking for existing laws enforced against the people
                breaking them.
              </p>
            </div>
            <CardImage
              src="/stupidity/stupidity-flock.png"
              alt="Cartoon of a license plate camera scanning a car while a plateless e-bike slips past unseen"
            />
            <p className="text-sm md:text-base text-[#8a867c]">
              The surveillance problem has its own page on this site.{" "}
              <a
                href="/the-facts/surveillance"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger-500 hover:text-danger-400 font-bold transition-colors"
              >
                Read The Real Question →
              </a>
            </p>
            <MiniNav />
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ THE CONSTITUTION ═══════════════════ */}
      <section id="constitution" className="pb-8 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-7 md:p-10"
          >
            <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Landmark className="w-4 h-4" />
              The comment section found a law degree
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[#f7f5ef] leading-tight mb-5">
              &ldquo;You can&apos;t just stop them! That&apos;s
              unconstitutional!&rdquo;{" "}
              <span className="text-danger-500">
                Read the case you&apos;re quoting.
              </span>
            </h2>
            <div className="space-y-3 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
              <p>
                Every thread gets one. A neighbor who half-remembers one
                Supreme Court case and declares the whole petition illegal.
              </p>
              <p>
                The case they&apos;re reaching for is{" "}
                <B>Delaware v. Prouse (1979)</B>. It says police can&apos;t
                pull people over at random to fish for a license.
              </p>
              <p>True. And nobody here is asking for that.</p>
              <p>
                Keep reading the same opinion. The Court calls{" "}
                <B>&ldquo;acting upon observed violations&rdquo;</B> the
                foremost method of enforcing traffic law, and it blesses
                exactly that.
              </p>
              <p>
                <B>Whren v. United States (1996)</B>{" "}finished the job: an
                officer who sees a violation can make the stop. New
                York&apos;s own top court said the same in People v. Robinson
                (2001).
              </p>
              <p>
                Now look at the machine. No pedals. No plate. No
                registration. 40 miles an hour.
              </p>
              <p>
                Under New York law that is not an e-bike. It&apos;s an{" "}
                <B>unregistered motor vehicle</B> that cannot legally touch a
                public road (VTL §§ 102-c, 401, 402). The missing helmet is
                its own violation (§ 381(6)).
              </p>
              <p>
                Nobody has to card anybody. <B>The machine itself is the
                violation</B>, in plain view, every single ride.
              </p>
              <p>
                And the age panic? <B>Kansas v. Glover (2020)</B> says a
                commonsense inference is all reasonable suspicion requires. A
                rider who looks twelve on a machine the law reserves for 16
                and up (§ 1242(2)) is the same call as a sixth grader behind
                the wheel of a Corolla.
              </p>
              <p>
                Checking ID during a lawful stop? Rodriguez v. United States
                (2015) calls that an <B>ordinary inquiry</B>. Routine.
                Constitutional. Boring.
              </p>
              <p>
                Want to know what actually is a live Fourth Amendment fight?
                Scroll up one section.
              </p>
              <p>
                Flock cameras log <B>billions of plate scans a month</B> with
                zero suspicion attached to any of them. Federal suits are
                running against Norfolk and San Jose right now, a Virginia
                judge threw out warrantless Flock evidence, and this June the
                Supreme Court tightened the screws on warrantless location
                dragnets in Chatrie v. United States.
              </p>
              <p>
                So if the plate readers never cost you a minute of sleep, but
                a cop stopping a kid he just watched break six laws turns you
                into a constitutional scholar,{" "}
                <B>it was never about the Constitution</B>.
              </p>
              <p>
                Stopping an observed violation is the most settled police
                action in American law. Fifty years of precedent. The
                petition asks for exactly that and nothing more.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6">
              <Src href="https://www.law.cornell.edu/supremecourt/text/440/648">
                Delaware v. Prouse
              </Src>
              <Src href="https://www.law.cornell.edu/supct/html/95-5841.ZO.html">
                Whren v. U.S.
              </Src>
              <Src href="https://www.law.cornell.edu/supremecourt/text/18-556">
                Kansas v. Glover
              </Src>
              <Src href="https://www.law.cornell.edu/supremecourt/text/13-9972">
                Rodriguez v. U.S.
              </Src>
              <Src href="https://www.nysenate.gov/legislation/laws/VAT/1242">
                NY VTL § 1242
              </Src>
              <Src href="https://troopers.ny.gov/news/new-york-state-police-issue-safety-reminder-electric-bikes-scooters-and-dirt-bike-use">
                NY State Police
              </Src>
              <Src href="https://ij.org/case/norfolk-virginia-camera-surveillance/">
                IJ v. Norfolk
              </Src>
            </div>
            <MiniNav />
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ THE KAREN LINE ═══════════════════ */}
      <section id="the-line" className="pb-8 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-6 md:p-8"
          >
            <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Scale className="w-4 h-4" />
              Know the difference
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-[#f7f5ef] leading-tight mb-2">
              The line between a Karen and a{" "}
              <span className="text-danger-500">Koncerned Citizen</span>.
            </h2>
            <p className="text-sm md:text-base text-[#8a867c] mb-6">
              The K is on purpose. So is everything else here.
            </p>

            <CardImage
              src="/stupidity/stupidity-karen-line.png"
              alt="Split cartoon: the same woman screaming over a fence at an empty street on one side, and calmly handing a thick petition to town officials at a podium on the other"
            />

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-danger-950/30 border border-danger-700/50 rounded-xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-danger-400 mb-3">
                  A Karen
                </p>
                <ul className="space-y-2 text-sm md:text-base text-[#c7c3b8] leading-relaxed list-disc list-outside pl-4 marker:text-danger-500">
                  <li>Screams at the kids in the street.</li>
                  <li>Wants to see the manager.</li>
                  <li>Just bad vibes. Cringe the whole block can feel.</li>
                  <li>Hopes the kids get what&apos;s coming.</li>
                  <li>Hates their life and takes it out on everyone else.</li>
                  <li>Deeply insecure.</li>
                </ul>
              </div>
              <div className="bg-emerald-950/30 border border-emerald-700/50 rounded-xl p-5">
                <p className="text-xs font-black uppercase tracking-widest text-emerald-400 mb-3">
                  A Koncerned Citizen
                </p>
                <ul className="space-y-2 text-sm md:text-base text-[#f7f5ef] leading-relaxed font-medium list-disc list-outside pl-4 marker:text-emerald-400">
                  <li>
                    A normal, adjusted human who cares about the welfare of
                    everyone on that street. Including the kids on the
                    machines.
                  </li>
                  <li>
                    Knows disturbing the peace is real harm with a real
                    statute behind it. Not a vibe.
                  </li>
                  <li>
                    Carries righteous anger and aims it at the government. On
                    paper. On the record.
                  </li>
                  <li>
                    Sees through the lies, the dumbing down, and the
                    sociopathy being sold as &ldquo;just fun.&rdquo;
                  </li>
                  <li>
                    Loves their life here. That&apos;s the whole reason
                    they&apos;re defending it.
                  </li>
                  <li>
                    Secure enough to sign their real name and take the hatred
                    for it.
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-base md:text-lg font-bold text-[#f7f5ef] mt-5">
              Every word on this page was built on the right side of that
              line.
            </p>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ THE MANIFESTO ═══════════════════ */}
      <section id="manifesto" className="pb-4 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-7 md:p-12"
          >
            <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Flag className="w-4 h-4" />
              The Manifesto
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#f7f5ef] leading-tight mb-6">
              Who are we? I&apos;ll tell you who the fuck we are.
            </h2>
            <div className="space-y-4 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
              <p>
                We&apos;re the people who don&apos;t care if kids act up a
                little.
              </p>
              <p>
                A kid sneaks a cigarette in the woods? Don&apos;t care. A couple
                of 15-year-olds crack a beer in the basement? None of our
                business.
              </p>
              <p>
                Getting away with a little something is half the point of being
                a kid, and every one of us did it.
              </p>
              <p>
                The line is old and it&apos;s simple:{" "}
                <B>disturbing the fucking peace.</B>
              </p>
              <p>
                Your fun is your business right up until it puts the rest of us
                in danger. A toddler on a sidewalk becomes a near-miss. A
                grandmother times her walk around street racing.
              </p>
              <p>That&apos;s when your fun became our business.</p>
            </div>

            {/* No-confrontation promise — its own headline so nobody misses it */}
            <div
              id="no-confrontation"
              className="border-l-4 border-danger-600 pl-5 mt-7 mb-7 scroll-mt-28"
            >
              <h3 className="text-xl md:text-2xl font-black text-[#f7f5ef] leading-snug mb-3">
                And read this part twice: this is NOT a call to confront the
                kids.
              </h3>
              <div className="space-y-3 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
                <p>
                  We live in a society that loves to flip the script and punish
                  the person who got fed up.
                </p>
                <p>
                  So let&apos;s be crystal clear:{" "}
                  <B>
                    do not chase them, follow them home, or go citizen
                    vigilante.
                  </B>
                </p>
                <p>
                  Rage-follow a kid to his front door and congratulations: you
                  just handed the lawbreakers a victim card and bought yourself
                  a whole new set of legal problems.
                </p>
                <p>
                  This is a call to confront the parents, the elected officials,
                  and the police who allow illegal acts to continue. On paper.
                  In board meetings. On the record.
                </p>
                <p>
                  <B>The petition is your outlet.</B>
                </p>
              </div>
            </div>

            <p className="text-[#f7f5ef] font-bold text-base md:text-lg leading-relaxed">
              That&apos;s the whole manifesto. It fits on an index card. Act up
              on your own dime, and nobody here blinks. Put us at risk, and we
              show up with signatures, statutes, and lawsuits.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <SignCta small label="That's my line too. Sign." />
              <a
                href="#jump"
                className="text-xs md:text-sm font-black uppercase tracking-widest text-[#8a867c] hover:text-[#f7f5ef] transition-colors"
              >
                ↑ Menu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ FAFO ═══════════════════ */}
      <section id="fafo" className="py-12 md:py-16 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="relative overflow-hidden bg-[#131313] border-2 border-danger-800/60 rounded-3xl p-8 md:p-14 text-center"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[220px] bg-danger-600/15 rounded-full blur-[90px]" />
            <div className="relative">
              <Landmark className="w-11 h-11 text-danger-500 mx-auto mb-6" />
              <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-4">
                FAFO: it&apos;s not a threat, it&apos;s physics, time, and
                probability
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-5 text-[#f7f5ef]">
                Fuck around. <span className="text-danger-500">Find out.</span>
              </h2>
              <p className="text-[#f7f5ef] font-black text-xl md:text-2xl mb-5">
                Welcome, parents. This is the reaction.
              </p>
              <div className="text-base md:text-lg text-[#c7c3b8] leading-relaxed max-w-xl mx-auto mb-9 space-y-3 text-left md:text-center">
                <p>For every action there is an equal and opposite reaction.</p>
                <p>
                  The action was handing kids illegal 40-mph machines, ignoring
                  the throttle, and shrugging at the near-misses.
                </p>
                <p>
                  The reaction is the eleven kinds of stupid above and one
                  signature below: enforce the laws, impound the machines,{" "}
                  <B>hold the parents accountable</B>.
                </p>
                <p>
                  Think the find-out is hypothetical? A California mother is
                  facing{" "}
                  <B>
                    felony involuntary manslaughter and felony child
                    endangerment
                  </B>{" "}
                  right now, because she kept letting her 14-year-old ride the
                  e-motorcycle he used to kill an 81-year-old veteran.
                </p>
                <p>
                  New York has the same lever, and it names you directly: Penal
                  Law § 260.10, endangering the welfare of a child.
                </p>
                <p>It takes 30 seconds.</p>
              </div>
              <SignCta label="This Is the Find-Out. Sign." />
              <MiniNav />
            </div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ THE WARNING ═══════════════════ */}
      <section className="pb-12 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          {/* ── THE WARNING ── */}

          <motion.div
            id="the-warning"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border-2 border-amber-700/60 rounded-2xl p-7 md:p-10 mb-8 scroll-mt-24"
          >
            <p className="text-xs md:text-sm font-black text-amber-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Video className="w-4 h-4" />
              An extreme warning, offered for free
            </p>
            <h3 className="text-2xl md:text-3xl font-black text-[#f7f5ef] leading-snug mb-5">
              Did you forget that everyone and their mother has cameras now?
            </h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/stupidity/stupidity-cameras.png"
              alt="Cartoon of a night street where every porch doorbell camera points its beam at a kid doing a wheelie"
              loading="lazy"
              className="w-full rounded-xl border border-[#2c2c2c] mb-6"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="space-y-4 text-base md:text-lg text-[#c7c3b8] leading-relaxed">
              <p>
                Ring. Nest. Blink. Doorbell cams, garage cams, dashcams, porch
                cams.
              </p>
              <p>
                Every house on every block records everything, 24/7, in HD, from
                multiple angles.
              </p>
              <p>
                Every wheelie past a stroller, every profanity screamed at a dog
                walker, every blown stop sign:{" "}
                <B>
                  it&apos;s already on somebody&apos;s cloud storage with a
                  timestamp.
                </B>
              </p>
              <p>
                So when your kid fucks up (and at 40 mph, fucking up has a body
                count) the evidence package will assemble itself before the
                ambulance leaves the block.
              </p>
              <p>
                The footage will be found. The dates will line up. The warnings
                you ignored will be in the record. <B>We guarantee it.</B>
              </p>
              <p>
                Ask the mother in Orange County. Deputies warned her, on the
                record, ten months before her son killed a man.{" "}
                <strong className="text-danger-400">
                  That record is now the case against her.
                </strong>
              </p>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <BackToSign label="Sign it before the sirens" />
              <a
                href="#jump"
                className="text-xs md:text-sm font-black uppercase tracking-widest text-[#8a867c] hover:text-[#f7f5ef] transition-colors"
              >
                ↑ Menu
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ SIGN THE PETITION ═══════════════════ */}
      <section id="sign" className="pb-8 md:pb-10 px-4 scroll-mt-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 pt-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#f7f5ef] mb-4">
              Sign Against the{" "}
              <span className="text-danger-500">Stupidity</span>.
            </h2>
            <p className="text-lg md:text-xl text-[#b3afa4] max-w-xl mx-auto leading-relaxed">
              Thirty seconds. Your name on the record says: our streets are not
              a racetrack, and &ldquo;there&apos;s nothin&apos; we can do about
              it&rdquo; is not an answer.
            </p>

            {/* Signature counter — auto-shows at 25+ signatures */}
            {signatureCount !== null && signatureCount >= 25 && (
              <div className="flex justify-center mt-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#131313] border border-[#2c2c2c] rounded-2xl">
                  <Users className="w-5 h-5 text-danger-500" />
                  <div>
                    <span className="text-2xl font-black text-[#f7f5ef]">
                      {signatureCount.toLocaleString()}
                    </span>
                    <span className="text-[#8a867c] text-sm ml-2">
                      signatures against the stupidity
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {submitted ? (
            /* ── Success State ── */
            <div className="bg-emerald-950/40 border border-emerald-700/40 rounded-2xl p-8 md:p-12 text-center">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-black text-[#f7f5ef] mb-3">
                Signed. Thank you, neighbor.
              </h3>
              <p className="text-emerald-200/80 text-lg mb-6">
                Thank you. Check your inbox for confirmation, then send{" "}
                <span className="font-bold text-[#f7f5ef]">
                  protectliverpoolny.org/stupidity
                </span>{" "}
                to one neighbor who hasn&apos;t seen it yet.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="#jump"
                  className="w-full sm:w-auto px-6 py-3 bg-danger-600 hover:bg-danger-500 text-white font-bold rounded-xl transition-all text-sm"
                >
                  ↑ Jump Menu
                </a>
                <a
                  href="#the-facts"
                  className="w-full sm:w-auto px-6 py-3 bg-white/5 border border-white/10 text-[#c7c3b8] hover:text-white hover:bg-white/10 font-bold rounded-xl transition-all text-sm"
                >
                  Read the Facts ↑
                </a>
              </div>

              {/* Coffee strip — personal support, shown only after signing */}
              <div className="mt-7 pt-5 border-t border-emerald-800/30">
                <p className="text-xs md:text-sm text-[#8a867c] mb-3">
                  This site has no ads, no tracking, and no organization
                  behind it. One resident&apos;s wallet covers all of it.
                </p>
                <a
                  href="https://buymeacoffee.com/protectliverpoolny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500/10 border border-amber-600/40 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 font-bold rounded-xl transition-all text-sm"
                >
                  ☕ Buy me a coffee
                </a>
              </div>
            </div>
          ) : (
            /* ── Form ── */
            <div className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-6 md:p-8">
              {/* Community Voices — horizontal scroller, same rig as the 5G side */}
              {comments.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <MessageSquareQuote className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                        {commentTotal} Real, Unedited{" "}
                        {commentTotal === 1 ? "Comment" : "Comments"}
                        {signatureCount
                          ? ` / ${signatureCount} Signatures`
                          : ""}
                      </span>
                      <span className="text-[10px] text-[#6b675e] font-medium">
                        — verified petition signers, not fluffed, not faked
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          const el = voicesRef.current;
                          if (el)
                            el.scrollTo({
                              left: Math.max(0, el.scrollLeft - 290),
                              behavior: "smooth",
                            });
                        }}
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 hover:bg-white/10 hover:text-emerald-300 transition-all"
                        aria-label="Scroll left"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const el = voicesRef.current;
                          if (el) {
                            const maxScroll = el.scrollWidth - el.clientWidth;
                            el.scrollTo({
                              left: Math.min(maxScroll, el.scrollLeft + 290),
                              behavior: "smooth",
                            });
                          }
                        }}
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 hover:bg-white/10 hover:text-emerald-300 transition-all"
                        aria-label="Scroll right"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <div
                    ref={voicesRef}
                    className="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1"
                    style={
                      {
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch",
                      } as React.CSSProperties
                    }
                  >
                    {comments.map((c, i) => (
                      <div
                        key={`${c.name}-${c.date}-${i}`}
                        onClick={() => setExpandedComment(c)}
                        className="snap-start flex-shrink-0 w-[280px] bg-white/5 border border-emerald-800/20 rounded-xl p-4 cursor-pointer hover:bg-white/10 hover:border-emerald-700/30 transition-all flex flex-col"
                      >
                        <p className="text-[#d6d2c8] text-sm leading-relaxed mb-1 line-clamp-3">
                          &ldquo;{c.comment}&rdquo;
                        </p>
                        {c.comment.length > 120 && (
                          <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">
                            Read More →
                          </span>
                        )}
                        <div className="flex items-center justify-between text-[10px] text-[#6b675e] mt-auto">
                          <div className="flex items-center gap-1.5">
                            <span className="w-5 h-5 rounded-full bg-emerald-900/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 font-bold text-[8px]">
                              {c.name.charAt(0)}
                            </span>
                            <span className="font-semibold text-[#8a867c]">
                              {c.name}
                            </span>
                            {c.zip && (
                              <span className="text-[#55524a]">• {c.zip}</span>
                            )}
                          </div>
                          <span>{timeAgo(c.date)}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Expanded Comment Modal */}
              <AnimatePresence>
                {expandedComment && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={() => setExpandedComment(null)}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ duration: 0.2 }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative w-full max-w-md max-h-[85vh] bg-[#131313]/95 backdrop-blur-xl border border-emerald-800/30 rounded-2xl shadow-2xl flex flex-col"
                    >
                      <div className="flex items-center justify-between p-4 pb-2 flex-shrink-0">
                        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                          Community Voice
                        </span>
                        <button
                          type="button"
                          onClick={() => setExpandedComment(null)}
                          className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center text-[#c7c3b8] hover:text-white hover:bg-white/20 transition-all"
                        >
                          ✕
                        </button>
                      </div>
                      <div
                        className="overflow-y-auto flex-1 px-6 pb-2 overscroll-contain"
                        style={
                          {
                            WebkitOverflowScrolling: "touch",
                          } as React.CSSProperties
                        }
                      >
                        <p className="text-[#f2f0ea] text-base leading-relaxed whitespace-pre-wrap">
                          &ldquo;{expandedComment.comment}&rdquo;
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#6b675e] p-4 pt-3 border-t border-[#2c2c2c] flex-shrink-0">
                        <span className="w-6 h-6 rounded-full bg-emerald-900/50 border border-emerald-800/30 flex items-center justify-center text-emerald-400 font-bold text-[9px]">
                          {expandedComment.name.charAt(0)}
                        </span>
                        <span className="font-semibold text-[#c7c3b8]">
                          {expandedComment.name}
                        </span>
                        {expandedComment.zip && (
                          <span className="text-[#55524a]">
                            • {expandedComment.zip}
                          </span>
                        )}
                        <span className="ml-auto">
                          {timeAgo(expandedComment.date)}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-danger-950/70 border border-danger-800/50 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-danger-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#f7f5ef]">
                    Add Your Name
                  </h3>
                  <p className="text-sm text-[#8a867c]">
                    The neighborhood record on illegal e-bike &amp; e-moto
                    riding
                  </p>
                </div>
              </div>

              {/* What you're signing */}
              <div className="bg-danger-950/40 border border-danger-800/50 rounded-xl p-4 mb-6">
                <p className="text-[11px] font-black text-danger-400 uppercase tracking-widest mb-2">
                  By signing below, you are endorsing this statement:
                </p>
                <p className="text-xs text-[#d6d2c8] leading-relaxed mb-3">
                  WE, THE UNDERSIGNED residents of Liverpool, the Town of
                  Salina, and surrounding Onondaga County communities, declare
                  that the illegal operation of e-bikes and electric motorcycles
                  by unlicensed minors on our streets, sidewalks, parks, and
                  trails, at speeds of 25 to 40+ mph, in live traffic, through
                  pedestrian spaces, with repeated near-misses and escalating
                  intimidation of residents, is an active public-safety
                  emergency. We demand:
                </p>
                <div className="space-y-1.5 mb-3">
                  <p className="text-xs text-[#d6d2c8] leading-relaxed">
                    <strong className="text-[#f7f5ef]">
                      1. Enforcement of existing law:
                    </strong>{" "}
                    New York&apos;s 16+ minimum age for operating any class of
                    e-bike, and the prohibition on unregistered, uninsured
                    electric motorcycles on public roads.
                  </p>
                  <p className="text-xs text-[#d6d2c8] leading-relaxed">
                    <strong className="text-[#f7f5ef]">
                      2. Impoundment authority:
                    </strong>{" "}
                    a local ordinance authorizing seizure of illegally operated
                    machines, with escalating penalties for repeat offenses.
                  </p>
                  <p className="text-xs text-[#d6d2c8] leading-relaxed">
                    <strong className="text-[#f7f5ef]">
                      3. Parental accountability:
                    </strong>{" "}
                    civil penalties for the adults who purchase these machines
                    for minors and enable their illegal operation, and, where
                    the facts warrant it, prosecution under New York Penal Law §
                    260.10 (endangering the welfare of a child).
                  </p>
                  <p className="text-xs text-[#d6d2c8] leading-relaxed">
                    <strong className="text-[#f7f5ef]">
                      4. A parent on the scene:
                    </strong>{" "}
                    immediate parent or guardian notification for ANY
                    enforcement stop involving a minor, with the parent required
                    to respond in person, and no impounded machine released to
                    anyone but a parent or guardian.
                  </p>
                  <p className="text-xs text-[#d6d2c8] leading-relaxed">
                    <strong className="text-[#f7f5ef]">
                      5. Targeted patrols, not dragnets:
                    </strong>{" "}
                    recurring, publicized enforcement details at the known
                    corridors and peak hours — Buckley Road, Electronics
                    Parkway, and our parks — aimed specifically at illegal
                    machines. No general checkpoints, no new surveillance of
                    everyone.
                  </p>
                  <p className="text-xs text-[#d6d2c8] leading-relaxed">
                    <strong className="text-[#f7f5ef]">
                      6. A written escalation ladder
                    </strong>{" "}
                    adopted between local law enforcement and our town, village,
                    and county governments: first stop, a logged warning and the
                    parents notified; second stop, a citation to the enabling
                    adult and impound eligibility; third stop, impoundment plus
                    referral under § 260.10 — so that &ldquo;there&apos;s
                    nothin&apos; we can do about it&rdquo; is never again the
                    final answer.
                  </p>
                </div>
                <p className="text-xs text-[#d6d2c8] leading-relaxed font-semibold">
                  Directed to the Village of Liverpool Mayor and Board of
                  Trustees; Town of Salina Supervisor Raul Huerta and the Town
                  Board; the Onondaga County Sheriff&apos;s Office; the Onondaga
                  County Legislature; State Senator Christopher Ryan; and
                  Assemblymember Pamela Hunter.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot — invisible to humans, bots auto-fill it */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    opacity: 0,
                    height: 0,
                    overflow: "hidden",
                  }}
                >
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-[#c7c3b8] mb-1.5"
                    >
                      Legal First Name *
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      value={form.first_name}
                      onChange={handleChange}
                      className={inputClass(errors.first_name)}
                      placeholder="John"
                      autoComplete="given-name"
                    />
                    {errors.first_name && (
                      <p className="text-xs text-danger-400 mt-1">
                        {errors.first_name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-[#c7c3b8] mb-1.5"
                    >
                      Legal Last Name *
                    </label>
                    <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      value={form.last_name}
                      onChange={handleChange}
                      className={inputClass(errors.last_name)}
                      placeholder="Doe"
                      autoComplete="family-name"
                    />
                    {errors.last_name && (
                      <p className="text-xs text-danger-400 mt-1">
                        {errors.last_name}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#c7c3b8] mb-1.5"
                  >
                    Email Address *{" "}
                    <span className="text-[#6b675e] font-normal">
                      (verification only — never shared)
                    </span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass(errors.email)}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-danger-400 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="zip_code"
                    className="block text-sm font-medium text-[#c7c3b8] mb-1.5"
                  >
                    Zip Code *
                  </label>
                  <input
                    type="text"
                    id="zip_code"
                    name="zip_code"
                    value={form.zip_code}
                    onChange={handleChange}
                    className={inputClass(errors.zip_code)}
                    placeholder="13088"
                  />
                  {errors.zip_code && (
                    <p className="text-xs text-danger-400 mt-1">
                      {errors.zip_code}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="street_address"
                    className="block text-sm font-medium text-[#c7c3b8] mb-1.5"
                  >
                    Street Address{" "}
                    <span className="text-[#6b675e]">
                      (optional — carries the most weight with officials)
                    </span>
                  </label>
                  <input
                    type="text"
                    id="street_address"
                    name="street_address"
                    value={form.street_address}
                    onChange={handleChange}
                    className={inputClass()}
                    placeholder="123 Main St, Liverpool, NY"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#c7c3b8] mb-1.5"
                  >
                    Phone Number{" "}
                    <span className="text-[#6b675e]">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass()}
                    placeholder="(315) 555-1234"
                  />
                </div>

                <div>
                  <label
                    htmlFor="comment"
                    className="block text-sm font-medium text-[#c7c3b8] mb-1.5"
                  >
                    Which stupidity got you / pisses you off?{" "}
                    <span className="text-[#6b675e]">(optional)</span>
                  </label>
                  <textarea
                    id="comment"
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    rows={3}
                    className={`${inputClass()} resize-none`}
                    placeholder="The wheelie into oncoming traffic did it for me..."
                  />
                </div>

                {/* Opt-in checkboxes */}
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={optInContact}
                      onChange={(e) => setOptInContact(e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-[#3a3a3a] bg-[#1c1c1c] text-danger-500 focus:ring-danger-500/50 flex-shrink-0"
                    />
                    <div>
                      <span className="text-sm text-[#c7c3b8] group-hover:text-[#e8e5de] transition-colors">
                        Yes, you may contact me with updates about this campaign
                        and ways to get involved.
                      </span>
                      <p className="text-xs text-[#6b675e] mt-0.5 italic">
                        If left unchecked, we will ONLY email you for critical
                        alerts: serious incidents, town or village board votes,
                        or material updates to our formal demands.
                      </p>
                    </div>
                  </label>
                  {form.comment.trim() && (
                    <>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={commentPublic}
                          onChange={(e) => setCommentPublic(e.target.checked)}
                          className="mt-1 w-4 h-4 rounded border-[#3a3a3a] bg-[#1c1c1c] text-danger-500 focus:ring-danger-500/50 flex-shrink-0"
                        />
                        <span className="text-sm text-[#c7c3b8] group-hover:text-[#e8e5de] transition-colors">
                          Publish my comment (may be displayed on this page)
                        </span>
                      </label>
                      {commentPublic && (
                        <div className="ml-7 flex items-center gap-4 flex-wrap">
                          <span className="text-xs font-black text-[#8a867c] uppercase tracking-wider">
                            Post as:
                          </span>
                          <label className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="radio"
                              name="attribution"
                              checked={!commentAnonymous}
                              onChange={() => setCommentAnonymous(false)}
                              className="w-3.5 h-3.5 border-[#3a3a3a] bg-[#1c1c1c] text-danger-500 focus:ring-danger-500/50"
                            />
                            <span className="text-xs text-[#c7c3b8] group-hover:text-[#e8e5de] transition-colors">
                              Use my name &amp; last initial
                            </span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer group">
                            <input
                              type="radio"
                              name="attribution"
                              checked={commentAnonymous}
                              onChange={() => setCommentAnonymous(true)}
                              className="w-3.5 h-3.5 border-[#3a3a3a] bg-[#1c1c1c] text-danger-500 focus:ring-danger-500/50"
                            />
                            <span className="text-xs text-[#c7c3b8] group-hover:text-[#e8e5de] transition-colors">
                              Anonymous
                            </span>
                          </label>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Privacy notice + combined required consent */}
                <div className="bg-[#161616] border border-[#2c2c2c] rounded-xl p-4">
                  <p className="text-[13px] text-[#a19d92] leading-relaxed">
                    <span className="font-bold text-[#c7c3b8] block mb-1.5 text-sm">
                      Privacy Notice — How Your Signature Will Be Used
                    </span>
                    Signatures may be formally presented to elected officials as
                    a numbered document. At a minimum, your{" "}
                    <strong className="text-[#f7f5ef]">full name</strong> and{" "}
                    <strong className="text-[#f7f5ef]">zip code</strong> will
                    become part of the public record. If provided, your street
                    address and comment may also be printed and shared with
                    officials to demonstrate direct community impact.
                  </p>
                  <p className="text-[13px] text-[#8a867c] leading-relaxed mt-2.5">
                    Your email address and phone number (if provided) are
                    collected strictly for signature verification and campaign
                    alerts (subject to your opt-in preferences). They will never
                    be printed, shared with officials, or made public. We will
                    never sell or trade your information. You may revoke your
                    consent at any time prior to formal submission by emailing{" "}
                    <a
                      href="mailto:takeaction@protectliverpoolny.org"
                      className="text-danger-500 hover:text-danger-400 transition-colors font-medium"
                    >
                      takeaction@protectliverpoolny.org
                    </a>
                    .
                  </p>
                  <label className="flex items-start gap-3 cursor-pointer group mt-3 pt-3 border-t border-[#2c2c2c]">
                    <input
                      type="checkbox"
                      checked={consentChecked}
                      onChange={(e) => {
                        setConsentChecked(e.target.checked);
                        if (e.target.checked) setConsentError("");
                      }}
                      className={`mt-0.5 w-4 h-4 rounded flex-shrink-0 focus:ring-danger-500/50 ${
                        consentError
                          ? "border-danger-500 bg-danger-950"
                          : "border-[#3a3a3a] bg-[#1c1c1c] text-danger-500"
                      }`}
                    />
                    <span
                      className={`text-sm leading-relaxed transition-colors ${
                        consentError
                          ? "text-danger-400"
                          : "text-[#c7c3b8] group-hover:text-[#e8e5de]"
                      }`}
                    >
                      I agree to the Privacy Notice and understand that my name
                      and zip code may appear on a formal document presented to
                      elected officials. I also agree this is NOT a call to
                      confront anyone: I will not confront, chase, follow, or
                      harass the riders or their families. The petition is the
                      outlet.*{" "}
                      <a
                        href="#no-confrontation"
                        className="text-danger-500 hover:text-danger-400 font-bold whitespace-nowrap transition-colors"
                      >
                        Read the promise ↑
                      </a>
                    </span>
                  </label>
                  {consentError && (
                    <p className="text-xs text-danger-400 mt-1 ml-7">
                      {consentError}
                    </p>
                  )}
                </div>

                {submitError && (
                  <div className="bg-danger-950/50 border border-danger-800/50 rounded-xl p-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-danger-400 flex-shrink-0" />
                    <p className="text-sm text-danger-300">{submitError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-4 bg-danger-600 hover:bg-danger-500 disabled:bg-danger-800 disabled:cursor-not-allowed text-white font-black uppercase tracking-wide text-lg rounded-xl transition-all duration-200 shadow-lg shadow-danger-900/60"
                >
                  {submitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Sign Against the Stupidity
                    </>
                  )}
                </button>

                <a
                  href="https://buymeacoffee.com/protectliverpoolny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-amber-500/10 border border-amber-600/40 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 font-bold rounded-xl transition-all text-sm"
                >
                  ☕ One-man show. Help keep it running.
                </a>

                <p className="text-center text-xs text-[#6b675e] pt-2">
                  New York State is screwing this neighborhood more ways than
                  one. The 184-foot tower they parked over our houses is{" "}
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-danger-500 hover:text-danger-400 font-semibold transition-colors"
                  >
                    the other fight →
                  </a>
                </p>
              </form>
            </div>
          )}

          {/* ── Jump to the facts ── */}
          <div className="text-center mt-8">
            <a
              href="#faq"
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/5 border-2 border-danger-700/60 text-[#f7f5ef] hover:bg-danger-950/40 hover:border-danger-500 font-black uppercase tracking-wide text-base md:text-lg rounded-xl transition-all"
            >
              Still on the fence? Asked &amp; Answered
              <ArrowDown className="w-5 h-5 text-danger-500" />
            </a>
          </div>
        </div>
      </section>

      {/* Second jump menu — post-ask navigation */}
      <JumpMenu />

      <Divider />

      {/* ═══════════════════ THE NPC CORNER ═══════════════════ */}
      <section id="npc" className="pb-12 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp}
            custom={0}
            className="bg-[#131313] border border-[#2c2c2c] rounded-2xl p-6 md:p-10"
          >
            <p className="text-xs md:text-sm font-black text-danger-500 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Bot className="w-4 h-4" />
              Live look at the comment section
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#f7f5ef] leading-tight mb-2">
              The <span className="text-danger-500">NPC Corner</span>.
            </h2>
            <p className="text-base md:text-lg text-[#8a867c] mb-6">
              Real takes from real keyboards around the neighborhood. Stupidity
              verbatim.
            </p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/stupidity/stupidity-wojack.png"
              alt="Brainlet wojak meme playing with toy blocks while posting excuses: get a life, bro it's not that deep, cry more, they're just having fun, they're not hurting anybody"
              loading="lazy"
              className="w-full rounded-xl border border-[#2c2c2c] mb-5"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="space-y-2 mb-7">
              <p className="text-xl md:text-2xl font-black text-[#f7f5ef] leading-snug">
                No, they are actually hurting people,{" "}
                <span className="text-danger-500">dumb fuck.</span> Daily.
              </p>
              <p className="text-xl md:text-2xl font-black text-[#f7f5ef] leading-snug">
                Your lies about them not being an issue put people in
                serious danger.
              </p>
              <p className="text-sm md:text-base text-[#8a867c] pt-1">
                Every one of these excuses gets answered in the FAQ below, with
                sources. Meanwhile, enjoy the exhibits.
              </p>
            </div>

            <NpcGallery />

            <MiniNav />
          </motion.div>
        </div>
      </section>

      <Divider />

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section id="faq" className="pb-12 px-4 scroll-mt-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
            className="text-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-danger-950/60 border border-danger-700/50 rounded-full text-danger-400 text-xs md:text-sm font-black uppercase tracking-widest mb-6">
              <HelpCircle className="w-4 h-4" />
              The Things People Actually Say
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-[#f7f5ef]">
              Asked &amp; <span className="text-danger-500">Answered</span>.
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="bg-[#131313] border border-[#2c2c2c] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <span className="text-base md:text-lg font-bold text-[#f7f5ef] leading-snug">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-danger-500 flex-shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
                    <div className="text-sm md:text-base text-[#c7c3b8] leading-relaxed space-y-2.5">
                      {f.a}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-xl md:text-2xl font-black text-[#f7f5ef] mb-5">
              Enough reading.{" "}
              <span className="text-danger-500">
                Thirty seconds. One signature.
              </span>
            </p>
            <BackToSign label="Back up to the Petition — Sign" />
            <MiniNav />
            <p className="text-sm text-[#8a867c] mt-8 max-w-lg mx-auto leading-relaxed">
              And by the way, New York State is fucking you over in more ways
              than one. The same state that shrugs at illegal motorcycles used a
              state-land loophole to plant a 184-foot tower over our houses
              without a single public hearing.{" "}
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-danger-500 hover:text-danger-400 font-bold transition-colors"
              >
                That fight lives here →
              </a>
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Third jump menu — page bottom, nobody scrolls back up to navigate */}
      <JumpMenu />
    </div>
  );
}
