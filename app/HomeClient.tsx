"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";
import {
  Paintbrush,
  PaintRoller,
  Building2,
  Droplets,
  Home as HomeIcon,
  ChefHat,
  ArrowRight,
  Phone,
  Star,
  MapPin,
  Shield,
  Clock,
  DollarSign,
  Award,
  Heart,
  Users,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    Icon: Paintbrush,
    title: "Interior Painting",
    desc: "Whole-house repaints, single rooms, accent walls, trim. Clean lines, premium product, factory-smooth finish.",
    href: "/services/interior-painting",
    swatch: "#1A37A8",
  },
  {
    Icon: PaintRoller,
    title: "Exterior Painting",
    desc: "Siding, trim, fascia, shutters. Weather-grade products that survive Iowa winters. Pressure-wash, prep, and two full coats every time.",
    href: "/services/exterior-painting",
    swatch: "#E30613",
  },
  {
    Icon: Droplets,
    title: "Deck & Fence Staining",
    desc: "Wood stripped, sanded, and protected. Semi-transparent, solid, or clear sealer for the exposure your wood actually gets.",
    href: "/services/staining",
    swatch: "#8B3A16",
  },
  {
    Icon: Building2,
    title: "Commercial Painting",
    desc: "Retail, office, multi-tenant, industrial. Interior and exterior with after-hours scheduling so your business never loses a day.",
    href: "/services/commercial-painting",
    swatch: "#0A0F1E",
  },
  {
    Icon: HomeIcon,
    title: "Garage Floor Coatings",
    desc: "Epoxy and polyaspartic floor systems. Diamond-ground prep. Showroom finish, chemical-proof, Iowa-tough.",
    href: "/services/garage-floor",
    swatch: "#4A4E52",
  },
  {
    Icon: ChefHat,
    title: "Kitchen & Cabinet Refinishing",
    desc: "Fraction-of-a-remodel cost. Doors sprayed in a controlled booth for a factory-smooth finish. New kitchen, no gut job.",
    href: "/services/cabinet-refinishing",
    swatch: "#2449C7",
  },
];

const coreValues = [
  {
    Icon: Shield,
    title: "Radical Integrity",
    desc: "We operate with complete honesty, transparency, and accountability. If we say it, we mean it. If we quote it, we deliver it.",
  },
  {
    Icon: Heart,
    title: "People First",
    desc: "Our customers and team come first. Every call, every walk-through, every follow-up — handled like you're a neighbor, because in central Iowa you are.",
  },
  {
    Icon: Award,
    title: "Process Perfection",
    desc: "We follow proven systems and precise workmanship. Proper prep, two coats, premium product, punch-walk. Every job, no exceptions.",
  },
];

const beforeAfters = [
  {
    key: "ba3",
    label: "Commercial Rebrand · Altoona",
    before: "/photos/ba3-before.jpg",
    after: "/photos/ba3-after.jpg",
    copy: "Tan exterior with red accents repainted to gray and yellow — a full retail rebrand in one visit.",
  },
  {
    key: "ba5",
    label: "Residential Back Exterior · Des Moines",
    before: "/photos/ba5-before.jpg",
    after: "/photos/ba5-after.jpg",
    copy: "Faded tan siding transformed to a deep slate blue-gray with crisp white trim.",
  },
  {
    key: "ba4",
    label: "Commercial · Backroom Clothing",
    before: "/photos/ba4-before.jpg",
    after: "/photos/ba4-after.jpg",
    copy: "Dated brick and mixed siding repainted all-white for a clean modern retail look.",
  },
];

const whyChoose = [
  { Icon: Shield, title: "Owner On Every Job", desc: "No subs you don't know. Peter is on-site, checking the work personally." },
  { Icon: DollarSign, title: "Honest Quotes", desc: "Flat pricing, nothing hidden. What we quote is what you pay." },
  { Icon: Clock, title: "On Schedule", desc: "When we say Tuesday 8am, we mean it. Your time is the whole product." },
  { Icon: Award, title: "Licensed & Insured", desc: "Full coverage — residential and commercial. COI on file before we start." },
];

const testimonials = [
  {
    quote:
      "Budget Pro Painting did an amazing job on the interior painting. The team was professional, clean, and finished on time. The quality of work exceeded our expectations.",
    name: "Sarah M.",
    city: "Verified Google Review",
  },
  {
    quote:
      "Hired Budget Pro for our exterior painting and couldn't be happier. Great communication, fair pricing, and excellent workmanship. Highly recommend.",
    name: "James R.",
    city: "Verified Google Review",
  },
  {
    quote:
      "The drywall repairs and painting they did for us were flawless. They paid attention to every detail and made sure everything was perfect.",
    name: "Linda T.",
    city: "Verified Google Review",
  },
  {
    quote:
      "Had our kitchen cabinets refinished and they look incredible. Saved a ton of money compared to replacing, and the quality exceeded our expectations.",
    name: "Michael D.",
    city: "Verified Google Review",
  },
];

export default function HomeClient() {
  const [baIndex, setBaIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setBaIndex((i) => (i + 1) % beforeAfters.length), 9000);
    return () => clearInterval(t);
  }, []);

  const ba = beforeAfters[baIndex];

  return (
    <>
      <style>{`
        /* ============ HERO ============ */
        .bp-hero { position: relative; min-height: 100vh; overflow: hidden; color: #fff; display: flex; align-items: flex-end; margin-top: -88px; padding-top: 88px; }
        .bp-hero-bg { position: absolute; inset: 0; z-index: 0; }
        .bp-hero-bg img { width: 100%; height: 100%; object-fit: cover; object-position: center 40%; }
        .bp-hero-overlay { position: absolute; inset: 0; z-index: 1; background: linear-gradient(105deg, rgba(8,23,72,0.85) 0%, rgba(8,23,72,0.55) 45%, rgba(8,23,72,0.35) 75%, rgba(8,23,72,0.7) 100%), linear-gradient(180deg, rgba(8,23,72,0.15) 0%, rgba(8,23,72,0.5) 100%); }
        .bp-hero-stripe { position: absolute; top: 0; right: 0; width: 160px; height: 100%; background: linear-gradient(180deg, #E30613 0%, #B80510 100%); z-index: 1; transform: skewX(-6deg) translateX(80px); opacity: 0.85; }
        .bp-hero-inner {
          position: relative; z-index: 2; width: 100%; max-width: 1320px; margin: 0 auto; padding: 150px 32px 96px;
          display: grid; grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.9fr); gap: 56px; align-items: center;
        }
        .bp-hero-copy { max-width: 720px; }
        .bp-hero-logo-plate {
          position: relative; padding: 36px 36px 32px; background: rgba(250, 247, 241, 0.97);
          border-radius: 4px; box-shadow: 0 28px 70px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(227, 6, 19, 0.18);
          backdrop-filter: blur(10px); display: flex; flex-direction: column; gap: 18px;
          transform: rotate(-1.5deg);
        }
        .bp-hero-logo-plate::before {
          content: ""; position: absolute; top: -10px; right: -10px; width: 60%; height: 6px;
          background: linear-gradient(90deg, #1A37A8 0%, #E30613 100%); transform: skewX(-8deg);
        }
        .bp-hero-logo-plate img { width: 100%; height: auto; max-height: 200px; object-fit: contain; display: block; }
        .bp-hero-logo-tag {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 12px; background: #0A0F1E; color: #E6E6F0;
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
          border-radius: 2px; align-self: flex-start;
        }
        .bp-hero-logo-tag::before {
          content: ""; width: 6px; height: 6px; border-radius: 50%; background: #FF4B57;
          box-shadow: 0 0 0 3px rgba(255,75,87,0.32); animation: pulseDot 2s ease-in-out infinite;
        }
        .bp-hero-logo-foot {
          padding-top: 14px; border-top: 1px solid #E4DDD0;
          display: flex; align-items: center; justify-content: space-between; gap: 12px;
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #1A37A8;
        }
        .bp-hero-logo-foot .red { color: #E30613; }
        .bp-hero-pill { display: inline-flex; align-items: center; gap: 10px; padding: 8px 16px; background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.28); border-radius: 999px; font-size: 11.5px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; margin-bottom: 28px; backdrop-filter: blur(8px); }
        .bp-hero-pill .dot { width: 8px; height: 8px; border-radius: 50%; background: #E30613; box-shadow: 0 0 0 4px rgba(227,6,19,0.35); animation: pulseDot 2s ease-in-out infinite; }
        @keyframes pulseDot { 50% { box-shadow: 0 0 0 10px rgba(227,6,19,0); } }
        .bp-hero h1 { font-size: clamp(44px, 8vw, 104px); font-weight: 900; line-height: 0.98; letter-spacing: -0.035em; color: #fff; margin-bottom: 24px; }
        .bp-hero h1 em { font-style: normal; color: #FF4B57; position: relative; display: inline-block; }
        .bp-hero h1 em::after { content: ""; position: absolute; left: 0; right: 0; bottom: 4px; height: 10px; background: #E30613; z-index: -1; transform: skewX(-8deg); opacity: 0.55; }
        .bp-hero-type { font-size: clamp(16px, 2vw, 22px); color: rgba(255,255,255,0.85); margin-bottom: 16px; min-height: 32px; font-weight: 500; }
        .bp-hero-desc { font-size: clamp(15px, 1.5vw, 18px); color: rgba(255,255,255,0.8); max-width: 620px; line-height: 1.65; margin-bottom: 40px; }
        .bp-hero-desc strong { color: #fff; font-weight: 600; }
        .bp-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 48px; }
        .bp-hero-trust { display: flex; gap: 28px; flex-wrap: wrap; align-items: center; padding-top: 26px; border-top: 1px solid rgba(255,255,255,0.18); max-width: 780px; }
        .bp-hero-trust-item { display: inline-flex; align-items: center; gap: 8px; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.85); }
        .bp-hero-scroll { position: absolute; left: 50%; bottom: 22px; transform: translateX(-50%); font-size: 10.5px; letter-spacing: 0.28em; color: rgba(255,255,255,0.65); z-index: 3; animation: float 3s ease-in-out infinite; }
        @keyframes float { 50% { transform: translate(-50%, -6px); } }

        /* Paint color swatch strip — decorative divider */
        .bp-swatch-strip { display: flex; height: 10px; width: 100%; }
        .bp-swatch-strip > span { flex: 1; }

        /* ============ SERVICES ============ */
        .bp-services { padding: 110px 0; background: #fff; position: relative; }
        .bp-services-head { max-width: 1320px; margin: 0 auto 56px; padding: 0 32px; text-align: center; }
        .bp-eyebrow { display: inline-flex; align-items: center; gap: 10px; padding: 6px 14px; background: rgba(227,6,19,0.08); border: 1px solid rgba(227,6,19,0.22); border-radius: 999px; font-size: 11.5px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #E30613; margin-bottom: 18px; }
        .bp-services h2 { font-size: clamp(36px, 5.5vw, 68px); font-weight: 900; letter-spacing: -0.035em; line-height: 1.02; color: #0A0F1E; }
        .bp-services h2 em { font-style: normal; color: #1A37A8; position: relative; display: inline-block; }
        .bp-services h2 em::after { content: ""; position: absolute; left: -6px; right: -6px; bottom: 2px; height: 12px; background: #FF4B57; z-index: -1; opacity: 0.4; transform: skewX(-8deg); }
        .bp-services-sub { max-width: 560px; margin: 22px auto 0; font-size: 17px; color: #3A4158; }
        .bp-services-grid { max-width: 1320px; margin: 0 auto; padding: 0 32px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; }
        .bp-service-card { position: relative; background: #FAF7F1; border: 1px solid #E4DDD0; border-radius: 4px; padding: 48px 36px 40px; overflow: hidden; transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s; cursor: pointer; height: 100%; }
        .bp-service-card::before { content: ""; position: absolute; top: 0; left: -30%; width: 30%; height: 6px; background: var(--swatch, #1A37A8); transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .bp-service-card:hover::before { left: 100%; }
        .bp-service-card:hover { transform: translateY(-8px); box-shadow: 0 28px 56px rgba(10,15,30,0.14); }
        .bp-service-icon-box { display: inline-flex; align-items: center; justify-content: center; width: 62px; height: 62px; background: var(--swatch, #1A37A8); color: #fff; border-radius: 3px; margin-bottom: 28px; position: relative; }
        .bp-service-icon-box::after { content: ""; position: absolute; inset: -4px; border: 1.5px solid var(--swatch, #1A37A8); border-radius: 3px; opacity: 0.25; }
        .bp-service-card h3 { font-size: 26px; margin-bottom: 14px; color: #0A0F1E; font-weight: 800; letter-spacing: -0.02em; }
        .bp-service-card p { font-size: 15.5px; line-height: 1.7; color: #3A4158; margin-bottom: 24px; }
        .bp-service-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--swatch, #1A37A8); transition: gap 0.2s; }
        .bp-service-card:hover .bp-service-link { gap: 12px; }

        /* ============ BEFORE / AFTER SLIDER ============ */
        .bp-ba { padding: 120px 0; background: linear-gradient(180deg, #081748 0%, #0F2575 60%, #081748 100%); color: #fff; position: relative; overflow: hidden; }
        .bp-ba::before { content: ""; position: absolute; top: -20%; right: -10%; width: 60%; height: 120%; background: radial-gradient(circle, rgba(227,6,19,0.16) 0%, transparent 60%); filter: blur(80px); }
        .bp-ba-inner { position: relative; max-width: 1320px; margin: 0 auto; padding: 0 32px; }
        .bp-ba-head { text-align: center; max-width: 760px; margin: 0 auto 56px; }
        .bp-ba-head .bp-eyebrow { background: rgba(255,75,87,0.15); border-color: rgba(255,75,87,0.4); color: #FF4B57; }
        .bp-ba-head h2 { font-size: clamp(36px, 5.5vw, 68px); font-weight: 900; letter-spacing: -0.035em; line-height: 1.02; color: #fff; margin-bottom: 18px; }
        .bp-ba-head h2 em { font-style: normal; color: #FF4B57; }
        .bp-ba-head p { font-size: 17px; color: rgba(255,255,255,0.75); max-width: 560px; margin: 0 auto; }
        .bp-ba-stage { position: relative; aspect-ratio: 16/9; overflow: hidden; border-radius: 4px; box-shadow: 0 40px 90px rgba(0,0,0,0.5); background: #0A0F1E; }
        .bp-ba-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
        .bp-ba-after { animation: baReveal 9s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
        @keyframes baReveal {
          0%   { clip-path: inset(0 0 0 10%); }
          10%  { clip-path: inset(0 0 0 10%); }
          45%  { clip-path: inset(0 0 0 90%); }
          55%  { clip-path: inset(0 0 0 90%); }
          90%  { clip-path: inset(0 0 0 10%); }
          100% { clip-path: inset(0 0 0 10%); }
        }
        .bp-ba-line { position: absolute; top: 0; bottom: 0; left: 10%; width: 3px; background: #fff; box-shadow: 0 0 24px rgba(0,0,0,0.5); z-index: 2; animation: baLine 9s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
        @keyframes baLine {
          0%   { left: 10%; }
          10%  { left: 10%; }
          45%  { left: 90%; }
          55%  { left: 90%; }
          90%  { left: 10%; }
          100% { left: 10%; }
        }
        .bp-ba-handle { position: absolute; top: 50%; left: 10%; transform: translate(-50%, -50%); width: 44px; height: 44px; background: #E30613; border-radius: 50%; box-shadow: 0 6px 24px rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 900; font-size: 18px; z-index: 3; pointer-events: none; animation: baHandle 9s cubic-bezier(0.65, 0, 0.35, 1) infinite; }
        @keyframes baHandle {
          0%   { left: 10%; }
          10%  { left: 10%; }
          45%  { left: 90%; }
          55%  { left: 90%; }
          90%  { left: 10%; }
          100% { left: 10%; }
        }
        .bp-ba-label { position: absolute; top: 20px; padding: 8px 16px; background: rgba(10,15,30,0.82); color: #fff; font-size: 11.5px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; z-index: 3; }
        .bp-ba-label.before { left: 20px; }
        .bp-ba-label.after { right: 20px; background: #E30613; }
        .bp-ba-caption { display: grid; grid-template-columns: 1fr auto; gap: 20px; align-items: center; margin-top: 28px; padding: 24px 28px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); border-radius: 4px; }
        .bp-ba-caption .l { font-size: 11px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: #FF4B57; margin-bottom: 6px; }
        .bp-ba-caption h4 { font-size: 20px; font-weight: 800; color: #fff; margin-bottom: 8px; letter-spacing: -0.01em; }
        .bp-ba-caption p { font-size: 14.5px; color: rgba(255,255,255,0.72); line-height: 1.6; max-width: 720px; }
        .bp-ba-dots { display: flex; gap: 8px; }
        .bp-ba-dots button { width: 32px; height: 4px; background: rgba(255,255,255,0.25); border: none; cursor: pointer; transition: background 0.2s; border-radius: 0; padding: 0; }
        .bp-ba-dots button.active { background: #E30613; }

        /* ============ ABOUT + WHY ============ */
        .bp-about { padding: 110px 0; background: #FAF7F1; }
        .bp-about-inner { max-width: 1320px; margin: 0 auto; padding: 0 32px; display: grid; grid-template-columns: 1.1fr 1fr; gap: 72px; align-items: center; }
        .bp-about-img { position: relative; border-radius: 4px; overflow: visible; aspect-ratio: 4/5; }
        .bp-about-img img { width: 100%; height: 100%; object-fit: cover; border-radius: 4px; box-shadow: 0 40px 80px rgba(10,15,30,0.22); position: relative; z-index: 1; }
        .bp-about-img::after { content: ""; position: absolute; left: -20px; bottom: -20px; width: 120px; height: 120px; background: #E30613; z-index: 0; }
        .bp-about-img::before { content: ""; position: absolute; right: -24px; top: -24px; width: 160px; height: 160px; background: #1A37A8; z-index: 0; }
        .bp-about-badge { position: absolute; bottom: 28px; left: 28px; padding: 14px 20px; background: rgba(10,15,30,0.85); color: #fff; backdrop-filter: blur(10px); border-radius: 3px; border: 1px solid rgba(255,255,255,0.2); z-index: 2; }
        .bp-about-badge .n { font-size: 32px; font-weight: 900; color: #FF4B57; line-height: 1; }
        .bp-about-badge .l { font-size: 10.5px; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.8); margin-top: 4px; }
        .bp-about-copy h2 { font-size: clamp(34px, 4.8vw, 58px); font-weight: 900; letter-spacing: -0.035em; line-height: 1.02; margin-bottom: 24px; color: #0A0F1E; }
        .bp-about-copy h2 em { font-style: normal; color: #1A37A8; }
        .bp-about-copy p { font-size: 16.5px; line-height: 1.75; color: #3A4158; margin-bottom: 18px; }
        .bp-why { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 36px; padding-top: 32px; border-top: 1px solid #D6D0C0; }
        .bp-why-card { display: flex; gap: 14px; }
        .bp-why-icon { flex-shrink: 0; width: 40px; height: 40px; background: #1A37A8; color: #fff; display: flex; align-items: center; justify-content: center; border-radius: 2px; }
        .bp-why-card:nth-child(even) .bp-why-icon { background: #E30613; }
        .bp-why-card h4 { font-size: 15px; font-weight: 800; margin-bottom: 4px; color: #0A0F1E; }
        .bp-why-card p { font-size: 13.5px; line-height: 1.55; color: #3A4158; margin: 0; }

        /* ============ STATS STRIP ============ */
        .bp-stats { padding: 70px 0; background: #0A0F1E; color: #fff; }
        .bp-stats-inner { max-width: 1320px; margin: 0 auto; padding: 0 32px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
        .bp-stat { text-align: center; padding: 0 18px; position: relative; }
        .bp-stat + .bp-stat::before { content: ""; position: absolute; left: 0; top: 10%; bottom: 10%; width: 1px; background: rgba(255,255,255,0.12); }
        .bp-stat-n { font-size: clamp(36px, 4.5vw, 54px); font-weight: 900; color: #fff; letter-spacing: -0.03em; line-height: 1; margin-bottom: 8px; }
        .bp-stat-n em { font-style: normal; color: #FF4B57; }
        .bp-stat-l { font-size: 11.5px; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.6); }

        /* ============ TESTIMONIALS ============ */
        .bp-tests { padding: 110px 0; background: #fff; }
        .bp-tests-inner { max-width: 1320px; margin: 0 auto; padding: 0 32px; }
        .bp-tests-head { text-align: center; margin-bottom: 56px; max-width: 720px; margin-left: auto; margin-right: auto; }
        .bp-tests-head h2 { font-size: clamp(34px, 4.8vw, 58px); font-weight: 900; letter-spacing: -0.035em; color: #0A0F1E; }
        .bp-tests-head h2 em { font-style: normal; color: #1A37A8; }
        .bp-tests-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; max-width: 1100px; margin: 0 auto; }

        /* ============ CORE VALUES ============ */
        .bp-values { padding: 96px 0; background: #FAF7F1; position: relative; }
        .bp-values-head { max-width: 1320px; margin: 0 auto 48px; padding: 0 32px; text-align: center; }
        .bp-values-head h2 { font-size: clamp(34px, 5vw, 60px); font-weight: 900; letter-spacing: -0.035em; line-height: 1.05; color: #0A0F1E; }
        .bp-values-head h2 em { font-style: normal; color: #E30613; }
        .bp-values-head p { font-size: 16.5px; color: #3A4158; max-width: 560px; margin: 18px auto 0; }
        .bp-values-grid { max-width: 1200px; margin: 0 auto; padding: 0 32px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .bp-value-card { position: relative; background: #fff; border: 1px solid #E4DDD0; border-radius: 4px; padding: 44px 34px 36px; text-align: left; overflow: hidden; transition: transform 0.35s, box-shadow 0.35s; }
        .bp-value-card::before { content: ""; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(180deg, #1A37A8 0%, #E30613 100%); }
        .bp-value-card:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(10,15,30,0.12); }
        .bp-value-icon { display: inline-flex; align-items: center; justify-content: center; width: 54px; height: 54px; background: linear-gradient(135deg, #1A37A8 0%, #0F2575 100%); color: #fff; border-radius: 3px; margin-bottom: 22px; }
        .bp-value-card h3 { font-size: 22px; font-weight: 800; letter-spacing: -0.015em; color: #0A0F1E; margin-bottom: 10px; }
        .bp-value-card p { font-size: 15px; line-height: 1.7; color: #3A4158; margin: 0; }
        .bp-test { padding: 36px 32px; background: #FAF7F1; border: 1px solid #E4DDD0; border-radius: 4px; border-top: 4px solid #E30613; display: flex; flex-direction: column; }
        .bp-test .stars { display: flex; gap: 3px; margin-bottom: 16px; color: #E30613; }
        .bp-test p { font-size: 15.5px; line-height: 1.7; color: #0A0F1E; margin-bottom: 22px; flex: 1; }
        .bp-test .who { display: flex; flex-direction: column; padding-top: 18px; border-top: 1px solid #E4DDD0; }
        .bp-test .who .n { font-weight: 800; font-size: 15px; color: #0A0F1E; }
        .bp-test .who .c { font-size: 12.5px; color: #7A8299; letter-spacing: 0.08em; text-transform: uppercase; margin-top: 2px; }

        /* ============ FINAL CTA ============ */
        .bp-final { padding: 110px 0; position: relative; overflow: hidden; background: linear-gradient(135deg, #1A37A8 0%, #0F2575 60%, #081748 100%); color: #fff; }
        .bp-final::before { content: ""; position: absolute; top: -40%; left: -10%; width: 60%; height: 180%; background: radial-gradient(circle, rgba(227,6,19,0.25) 0%, transparent 60%); filter: blur(100px); }
        .bp-final::after { content: ""; position: absolute; bottom: -40%; right: -10%; width: 50%; height: 150%; background: radial-gradient(circle, rgba(255,75,87,0.18) 0%, transparent 60%); filter: blur(100px); }
        .bp-final-inner { position: relative; max-width: 960px; margin: 0 auto; padding: 0 32px; text-align: center; }
        .bp-final h2 { font-size: clamp(40px, 6vw, 80px); font-weight: 900; letter-spacing: -0.035em; line-height: 1.02; color: #fff; margin-bottom: 22px; }
        .bp-final h2 em { font-style: normal; color: #FF4B57; }
        .bp-final p { font-size: 18px; color: rgba(255,255,255,0.82); max-width: 560px; margin: 0 auto 40px; line-height: 1.6; }
        .bp-final-ctas { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }

        /* ============ BUTTONS ============ */
        .bp-btn { display: inline-flex; align-items: center; gap: 10px; padding: 17px 32px; font-size: 14.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; border-radius: 3px; transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); border: none; cursor: pointer; }
        .bp-btn-red { background: #E30613; color: #fff; box-shadow: 0 10px 24px rgba(227,6,19,0.3); }
        .bp-btn-red:hover { background: #B80510; transform: translateY(-3px); box-shadow: 0 14px 32px rgba(227,6,19,0.4); }
        .bp-btn-outline { background: rgba(255,255,255,0.1); color: #fff; border: 1.5px solid rgba(255,255,255,0.5); backdrop-filter: blur(8px); }
        .bp-btn-outline:hover { background: #fff; color: #0A0F1E; transform: translateY(-3px); }

        /* ============ MOBILE ============ */
        @media (max-width: 1100px) {
          .bp-hero-inner { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 900px) {
          /* HERO — tighter overall */
          .bp-hero { min-height: auto; align-items: stretch; }
          .bp-hero-inner { padding: 108px 20px 48px; gap: 22px; text-align: center; justify-items: center; }
          .bp-hero-stripe { width: 36px; transform: skewX(-6deg) translateX(18px); opacity: 0.6; }
          .bp-hero-copy { max-width: 100%; }
          .bp-hero-pill { font-size: 10px; letter-spacing: 0.14em; padding: 5px 11px; margin-bottom: 14px; align-self: center; }
          .bp-hero h1 { font-size: clamp(38px, 9.5vw, 52px); margin-bottom: 14px; }
          .bp-hero-type { font-size: 14px; min-height: 22px; margin-bottom: 12px; }
          .bp-hero-desc { font-size: 14.5px; margin: 0 auto 22px; max-width: 36ch; line-height: 1.55; }
          .bp-hero-ctas { flex-direction: column; gap: 9px; width: 100%; margin-bottom: 22px; justify-content: center; }
          .bp-hero-ctas > * { width: 100%; justify-content: center; padding: 14px 20px; font-size: 13px; }
          /* Hide the long trust pill row on mobile — already covered by chrome elsewhere */
          .bp-hero-trust { display: none; }
          .bp-hero-scroll { display: none; }
          /* Logo plate centered up top, sized smaller for less vertical bulk */
          .bp-hero-logo-plate {
            order: -1; transform: none; width: min(360px, 88vw); padding: 18px 22px 16px;
            margin: 0 auto; box-shadow: 0 14px 36px rgba(0,0,0,0.4); gap: 12px;
          }
          .bp-hero-logo-plate img { max-height: 100px; }
          .bp-hero-logo-tag { font-size: 9.5px; padding: 4px 9px; }
          .bp-hero-logo-foot { font-size: 10px; letter-spacing: 0.1em; padding-top: 10px; }

          /* Tighter section paddings across the board */
          .bp-services, .bp-ba, .bp-about, .bp-tests, .bp-final, .bp-values { padding: 44px 0; }

          /* Tighter section heading spacing */
          .bp-services-head, .bp-ba-head, .bp-tests-head, .bp-values-head { margin-bottom: 26px; padding: 0 20px; }
          .bp-services h2, .bp-ba-head h2, .bp-tests-head h2, .bp-values-head h2 { font-size: clamp(28px, 8vw, 36px) !important; }
          .bp-services-sub, .bp-ba-head p, .bp-values-head p { font-size: 14.5px; }
          .bp-eyebrow { font-size: 10px; letter-spacing: 0.18em; padding: 5px 12px; margin-bottom: 12px; }

          /* Services — 1-col, tighter padding */
          .bp-services-grid { grid-template-columns: 1fr; gap: 12px; padding: 0 20px; }
          .bp-service-card { padding: 26px 22px; }
          .bp-service-card h3 { font-size: 20px; margin-bottom: 10px; }
          .bp-service-card p { font-size: 14px; line-height: 1.6; margin-bottom: 16px; }
          .bp-service-icon-box { width: 50px; height: 50px; margin-bottom: 18px; }

          /* Before/after */
          .bp-ba-inner { padding: 0 20px; }
          .bp-ba-caption { grid-template-columns: 1fr; gap: 12px; padding: 16px 18px; margin-top: 18px; }
          .bp-ba-caption h4 { font-size: 16px; }
          .bp-ba-caption p { font-size: 13px; line-height: 1.55; }
          .bp-ba-label { padding: 5px 10px; font-size: 9.5px; letter-spacing: 0.16em; top: 12px; }
          .bp-ba-label.before { left: 12px; }
          .bp-ba-label.after { right: 12px; }
          .bp-ba-handle { width: 30px; height: 30px; font-size: 12px; }

          /* Core values — 1 col, tighter cards */
          .bp-values-grid { grid-template-columns: 1fr; gap: 10px; padding: 0 20px; }
          .bp-value-card { padding: 24px 22px 22px; }
          .bp-value-card h3 { font-size: 19px; margin-bottom: 8px; }
          .bp-value-card p { font-size: 14px; line-height: 1.6; }
          .bp-value-icon { width: 46px; height: 46px; margin-bottom: 16px; }

          /* About */
          .bp-about-inner { grid-template-columns: 1fr; gap: 32px; padding: 0 20px; }
          .bp-about-img { aspect-ratio: 4/3; max-height: 280px; }
          .bp-about-img img { max-height: 280px; }
          .bp-about-img::after { width: 50px; height: 50px; left: -8px; bottom: -8px; }
          .bp-about-img::before { width: 60px; height: 60px; right: -10px; top: -10px; }
          .bp-about-badge { padding: 10px 14px; bottom: 16px; left: 16px; }
          .bp-about-badge .n { font-size: 24px; }
          .bp-about-copy h2 { font-size: clamp(28px, 7.5vw, 38px) !important; margin-bottom: 16px; }
          .bp-about-copy p { font-size: 15px; line-height: 1.65; margin-bottom: 14px; }
          .bp-why { grid-template-columns: 1fr; gap: 12px; margin-top: 24px; padding-top: 22px; }
          .bp-why-card h4 { font-size: 14.5px; }
          .bp-why-card p { font-size: 13px; }

          /* HIDE STATS on mobile — saves ~200px scroll, redundant with About badge */
          .bp-stats { display: none !important; }

          /* Testimonials — only show top 2 on mobile, 1 col stacked */
          .bp-tests-inner { padding: 0 20px; }
          .bp-tests-grid { grid-template-columns: 1fr; gap: 12px; max-width: 100%; }
          .bp-tests-grid > *:nth-child(n+3) { display: none; }
          .bp-test { padding: 22px 20px; }
          .bp-test p { font-size: 14px; line-height: 1.6; margin-bottom: 18px; }
          .bp-test .stars { margin-bottom: 12px; }

          /* Final CTA */
          .bp-final-inner { padding: 0 20px; }
          .bp-final h2 { font-size: clamp(30px, 8vw, 44px) !important; margin-bottom: 16px; }
          .bp-final p { font-size: 14.5px; margin-bottom: 24px; }
          .bp-final-ctas { flex-direction: column; gap: 9px; }
          .bp-final-ctas > * { width: 100%; justify-content: center; padding: 14px 22px; font-size: 13px; }

          /* Paint swatch divider — thinner */
          .bp-swatch-strip { height: 6px; }
        }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="bp-hero">
        <div className="bp-hero-bg">
          <img src="/photos/residential-estate.jpg" alt="Stunning painted residential exterior — Budget Pro Painting work" />
        </div>
        <div className="bp-hero-overlay" />
        <div className="bp-hero-stripe" aria-hidden />

        <div className="bp-hero-inner">
          <div className="bp-hero-copy">
            <div className="bp-hero-pill">
              <span className="dot" /> Altoona · Des Moines · Central Iowa
            </div>
            <h1>
              Paint that<br />actually <em>lasts.</em>
            </h1>
            <div className="bp-hero-type">
              <TypeAnimation
                sequence={[
                  "Interior painting · whole-house repaints.",
                  2400,
                  "Exterior painting · siding, trim, fascia.",
                  2400,
                  "Deck + fence staining that survives Iowa.",
                  2400,
                  "Epoxy garage floors that don't chip.",
                  2400,
                ]}
                wrapper="span"
                speed={52}
                repeat={Infinity}
              />
            </div>
            <p className="bp-hero-desc">
              Expert painting and remodeling you can trust — owner-operated by Peter, serving Altoona, Des Moines, and the surrounding Iowa communities. <strong>Quality workmanship. Honest pricing. Reliable service.</strong>
            </p>
            <div className="bp-hero-ctas">
              <Link href="/quote" className="bp-btn bp-btn-red">
                Get an Estimate <ArrowRight size={16} />
              </Link>
              <a href="tel:+15155056429" className="bp-btn bp-btn-outline">
                <Phone size={16} /> (515) 505-6429
              </a>
            </div>
            <div className="bp-hero-trust">
              <span className="bp-hero-trust-item">
                <Shield size={14} style={{ color: "#FF4B57" }} /> Licensed &amp; Insured
              </span>
              <span className="bp-hero-trust-item">
                <Star size={14} style={{ color: "#FF4B57", fill: "#FF4B57" }} /> 5.0 Rated
              </span>
              <span className="bp-hero-trust-item">
                <Award size={14} style={{ color: "#FF4B57" }} /> Owner On Every Job
              </span>
              <span className="bp-hero-trust-item">
                <MapPin size={14} style={{ color: "#FF4B57" }} /> Based in Altoona
              </span>
            </div>
          </div>

          {/* Brand plate — intentional logo placement */}
          <div className="bp-hero-logo-plate">
            <span className="bp-hero-logo-tag">Established Local · Iowa</span>
            <img src="/logo.png" alt="Budget Pro Painting & Remodeling LLC" />
            <div className="bp-hero-logo-foot">
              <span>Painting · Staining</span>
              <span className="red">Epoxy · Cabinets</span>
            </div>
          </div>
        </div>
        <div className="bp-hero-scroll">Scroll</div>
      </section>

      {/* paint swatch strip divider */}
      <div className="bp-swatch-strip" aria-hidden>
        <span style={{ background: "#1A37A8" }} />
        <span style={{ background: "#E30613" }} />
        <span style={{ background: "#0A0F1E" }} />
        <span style={{ background: "#FAF7F1" }} />
        <span style={{ background: "#8B3A16" }} />
        <span style={{ background: "#3A4158" }} />
      </div>

      {/* ============ SERVICES ============ */}
      <section className="bp-services">
        <div className="bp-services-head">
          <ScrollReveal>
            <div className="bp-eyebrow"><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E30613" }} /> Services</div>
            <h2>Three things we do <em>exceptionally well.</em></h2>
            <p className="bp-services-sub">
              Not a sprawling menu. Three core services — dialed in, delivered sharp, every single job.
            </p>
          </ScrollReveal>
        </div>
        <div className="bp-services-grid">
          {services.map((s, i) => {
            const Icon = s.Icon;
            return (
              <ScrollReveal key={s.href} delay={i * 100}>
                <Link href={s.href} style={{ display: "block", height: "100%" }}>
                  <div className="bp-service-card" style={{ ["--swatch" as string]: s.swatch } as React.CSSProperties}>
                    <div className="bp-service-icon-box">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <span className="bp-service-link">
                      Learn more <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ============ BEFORE/AFTER SLIDER (right after services) ============ */}
      <section className="bp-ba">
        <div className="bp-ba-inner">
          <div className="bp-ba-head">
            <ScrollReveal>
              <div className="bp-eyebrow"><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF4B57" }} /> Before &amp; After</div>
              <h2>Real jobs. <em>Real finishes.</em></h2>
              <p>Actual Budget Pro projects. Watch the transformation — or jump to a different project.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="bp-ba-stage" key={ba.key}>
              <img className="bp-ba-img" src={ba.before} alt={`Before — ${ba.label}`} />
              <img className="bp-ba-img bp-ba-after" src={ba.after} alt={`After — ${ba.label}`} />
              <span className="bp-ba-label before">Before</span>
              <span className="bp-ba-label after">After</span>
              <div className="bp-ba-line" aria-hidden />
              <div className="bp-ba-handle" aria-hidden>⇄</div>
            </div>

            <div className="bp-ba-caption">
              <div>
                <div className="l">Project Showcase</div>
                <h4>{ba.label}</h4>
                <p>{ba.copy}</p>
              </div>
              <div className="bp-ba-dots">
                {beforeAfters.map((b, i) => (
                  <button
                    key={b.key}
                    className={i === baIndex ? "active" : ""}
                    onClick={() => setBaIndex(i)}
                    aria-label={`Show ${b.label}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ CORE VALUES ============ */}
      <section className="bp-values">
        <div className="bp-values-head">
          <ScrollReveal>
            <div className="bp-eyebrow"><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1A37A8" }} /> Core Values</div>
            <h2>What we <em>actually stand for.</em></h2>
            <p>The three principles that shape every quote, every visit, every finished job.</p>
          </ScrollReveal>
        </div>
        <div className="bp-values-grid">
          {coreValues.map((v, i) => {
            const Icon = v.Icon;
            return (
              <ScrollReveal key={v.title} delay={i * 120}>
                <div className="bp-value-card">
                  <div className="bp-value-icon"><Icon size={24} strokeWidth={1.8} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ============ ABOUT / WHY ============ */}
      <section className="bp-about">
        <div className="bp-about-inner">
          <ScrollReveal direction="left">
            <div className="bp-about-img">
              <img src="/photos/commercial-white-black.jpg" alt="Budget Pro Painting commercial project — crisp white exterior with black trim" />
              <div className="bp-about-badge">
                <div className="n">
                  <CountUp end={500} duration={2.5} enableScrollSpy scrollSpyOnce /> +
                </div>
                <div className="l">Jobs Finished</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="bp-about-copy">
              <div className="bp-eyebrow"><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1A37A8" }} /> About Peter</div>
              <h2>
                A painter who <em>actually shows up.</em>
              </h2>
              <p>
                Peter Thawngzauk founded Budget Pro Painting &amp; Remodeling to do one thing:
                deliver clean, honest painting work to central Iowa homeowners — without the
                upsells, surprise change-orders, or vanishing acts that plague this industry.
              </p>
              <p>
                Every job is walked, quoted, and painted by Peter personally. Same quote on the
                invoice. Same crew every visit. Same standard whether it&apos;s a whole-house
                exterior or a single accent wall.
              </p>

              <div className="bp-why">
                {whyChoose.map((w) => (
                  <div key={w.title} className="bp-why-card">
                    <div className="bp-why-icon"><w.Icon size={18} /></div>
                    <div>
                      <h4>{w.title}</h4>
                      <p>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="bp-stats">
        <div className="bp-stats-inner">
          {[
            { n: 500, suf: "+", l: "Projects Completed" },
            { n: 5.0, suf: "★", l: "Average Rating", dec: 1 },
            { n: 100, suf: "%", l: "Owner Supervised" },
            { n: 7, suf: " YR", l: "Years in Iowa" },
          ].map((s) => (
            <div key={s.l} className="bp-stat">
              <div className="bp-stat-n">
                <CountUp end={s.n} duration={2.2} decimals={s.dec || 0} enableScrollSpy scrollSpyOnce /> <em>{s.suf}</em>
              </div>
              <div className="bp-stat-l">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bp-tests">
        <div className="bp-tests-inner">
          <div className="bp-tests-head">
            <ScrollReveal>
              <div className="bp-eyebrow"><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#E30613" }} /> Client Words</div>
              <h2>
                What neighbors <em>actually say.</em>
              </h2>
            </ScrollReveal>
          </div>
          <div className="bp-tests-grid">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 100}>
                <div className="bp-test">
                  <div className="stars">
                    {[1, 2, 3, 4, 5].map((n) => <Star key={n} size={16} fill="#E30613" />)}
                  </div>
                  <p>&ldquo;{t.quote}&rdquo;</p>
                  <div className="who">
                    <span className="n">{t.name}</span>
                    <span className="c">{t.city}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="bp-final">
        <div className="bp-final-inner">
          <ScrollReveal>
            <div className="bp-eyebrow" style={{ background: "rgba(255,75,87,0.18)", borderColor: "rgba(255,75,87,0.45)", color: "#FF4B57" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF4B57" }} /> Free Quote · No Pressure
            </div>
            <h2>
              Ready for a <em>sharper finish?</em>
            </h2>
            <p>
              Call, text, or send a note. Peter will walk your project, give you a fair price, and tell you straight what it needs — no bundle pitch.
            </p>
            <div className="bp-final-ctas">
              <Link href="/quote" className="bp-btn bp-btn-red">
                Get an Estimate <ArrowRight size={16} />
              </Link>
              <a href="tel:+15155056429" className="bp-btn bp-btn-outline">
                <Phone size={16} /> (515) 505-6429
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
