'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import logo from '../assests/home/logo.svg';
import ExamImage1 from "../assests/home/exam-img-1.png";
import ExamImage2 from "../assests/home/exam-img-2.png";
import jambImg from "../assests/home/jamb.png";
import waecImg from "../assests/home/waec.png";
import necoImg from "../assests/home/neco.png";
import satImg from "../assests/home/sat.png";
import onlineImg1 from "../assests/home/online-img1.png";
import onlineImg2 from "../assests/home/online-img2.png";
import studentImg from "../assests/home/student-img.jpg";
import productImg from "../assests/home/productive-img.png";
import fullLogo from "../assests/home/full-logo.png";
import instantImg from "../assests/home/instant-result.svg"
import examImg from "../assests/home/exam-svg.svg";
import practiceImg from "../assests/home/practice.svg";
import goalImg from "../assests/home/goal.svg"
import slantArrow from "../assests/home/slant-arrow.svg"
// 

import graduateImg from "../assests/home/hero-profile-img.png"
import profileSmallImg from "../assests/home/small-profile-img.jpg"
import userImg from "../assests/home/avatar.jpg"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  BookOpen,
  FileText,
  ClipboardCheck,
  BarChart3,
  CheckCircle2,
  Star,
  ArrowRight,
  Check,
  ArrowUp,
  ChevronUp,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import TestimonialSlider from '@/components/Home/TestimonialSlider';
import Hero from '@/components/Home/HeroSection';

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-1 ">
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              <div className="">
                <Image src={logo} alt="DoLearn Logo" className="w-[90px] h-[18px]" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6 text-[16px]">
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition">
                Exam Library
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition">
                About Us
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 transition">
                Connect
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:inline-flex">
                Log in
              </Button>
              <Button className="bg-[#044272] px-9 rounded-3xl md:inline-flex">
                Get Free Test
              </Button>

            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20  lg:pt-[53px]  bg-[#EEFAF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl lg:text-4xl  font-bold text-gray-900  md:leading-tight mb-2">
                Practice  <span className='text-[#044272]'>Smarter,</span>  Improve  <br/> Faster and{' '}
                <span className="text-[#54CD98]">Master Your Exams</span>
              </h1>
              <p className="text-lg mb-8 font-semibold">
                Practice real exam questions, get instant results, and <br/> improve
                your score.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 mt-8">
                <Button className="bg-[#044272]  rounded-3xl md:inline-flex">
                  Start Free Test
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:flex"
            >
              <div className="relative flex justify-center">
                <Image
                  src={slantArrow}
                  alt="profile"
                  className="absolute -left-[130px] w-30 h-[120px] top-[179px]"
                />
                {/* background circle */}
                <div
                  className="absolute w-[370px] h-[350px] rounded-full left-[28px] top-36
               bg-[url('/circle.png')] bg-cover bg-center"
                ></div>
                {/* graduate image */}
                <Image
                  src={graduateImg} // replace with your image path
                  alt="graduate"
                  className="relative z-10 w-full h-[498px] object-cover"
                />

                {/* profile circle */}
                <Image
                  src={profileSmallImg}   // small profile image
                  alt="profile"
                  className="absolute top-[130px] left-20 w-28 h-28 rounded-full"
                />
                {/* testimonial card */}
                <div className="bg-white  z-10 absolute bottom-20 -left-28 shadow-xl rounded-lg px-4 py-3 gap-3">
                  <div className=" z-50  flex items-center">
                    <div className="flex -space-x-2">
                      <Image src={userImg} className="w-10 h-10 rounded-full border-2 object-cover border-white" alt="avatar" />
                      <Image src={userImg} className="w-10 h-10 rounded-full border-2 object-cover border-white" alt="avatar" />
                      <Image src={userImg} className="w-10 h-10  rounded-full border-2 object-cover border-white" alt="avatar" />
                    </div>

                    <div className="text-sm">
                      <div className="text-yellow-400 text-xl">★★★★</div>

                    </div>
                  </div>
                  <p className="text-[#33383B] text-sm mt-2">
                    Over 3000+ learners <br /> engaged globally today
                  </p>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Exams We Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-[#044272]">
              Exams We Support
            </h2>
            <p className="text-md max-w-3xl mx-auto">
              Get exam-focused practice for JAMB, WAEC, NECO, and SAT using verified past questions and realistic CBT practice tests.
            </p>
          </motion.div>

          <div className="grid  lg:grid-cols-2 gap-4 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='flex items-center space-x-0 md:space-x-5'
            >
              <h1 className='text-[#CAF0DF]  text-[50px] font-semibold hidden md:flex'>01</h1>
              <Card className=" transition-all  border-none shadow-lg ">
                <CardContent className="p-6 w-full">
                  <div className="flex items-start sm:space-x-4 space-y-2 flex-col sm:flex-row ">
                    <div className="">
                      <Image src={jambImg} alt="JAMB" className="w-20 h-20 object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl  text-gray-900 mb-2">
                        JAMB Practice Questions
                      </h3>
                      <p className="text-sm mb-4">
                        Solve latest JAMB questions and answers to prepare
                        better for your upcoming JAMB exams.
                      </p>
                      <div className='text-end flex justify-end'>
                        <Link
                          href="#"
                          className="inline-flex items-center text-[#044272] font-medium justify-end"
                        >
                          Start Practicing
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="row-span-2"
            >
              <div className="hidden lg:flex h-full rounded-2xl overflow-hidden">
                <Image
                  src={ExamImage1}
                  alt="Student studying"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex items-center space-x-5'
            >
              <Card className="transition-all  border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start sm:space-x-4 space-y-2 flex-col sm:flex-row ">
                    <div className="">
                      <Image src={waecImg} alt="WAEC" className="w-20 h-20 object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl  text-gray-900 mb-2">
                        WAEC Past Questions
                      </h3>
                      <p className="text-sm mb-4">
                        Study WAEC past questions and answers with clear explanations to revise effectively and score higher.
                      </p>
                      <div className='text-end flex justify-end'>
                        <Link
                          href="#"
                          className="inline-flex items-center text-[#044272] font-medium justify-end"
                        >
                          Start Practicing
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <h1 className='text-[#CAF0DF]  text-[50px] font-semibold hidden sm:flex'>02</h1>
            </motion.div>
          </div>

          <div className="grid  lg:grid-cols-2 gap-4 md:gap-8 mt-12 md:mt-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="row-span-2"
            >
              <div className=" hidden lg:flex h-full rounded-2xl overflow-hidden">
                <Image
                  src={ExamImage2}
                  alt="Student studying"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className='flex items-center space-x-5 '

            >
              <Card className=" transition-all  border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start sm:space-x-4 space-y-2 flex-col sm:flex-row ">
                    <div className="">
                      <Image src={necoImg} alt="NECO" className="w-20 h-20 object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl  text-gray-900 mb-2">
                        NECO Practice Test
                      </h3>
                      <p className="text-sm mb-4">
                        Take NECO practice tests online, track your progress, and identify weak areas before the exam.
                      </p>
                      <div className='text-end flex justify-end'>

                        <Link
                          href="#"
                          className="inline-flex items-center text-[#044272] font-medium justify-end"
                        >
                          Start Practicing
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <h1 className='text-[#CAF0DF]  text-[50px] font-semibold hidden sm:flex'>03</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className='flex items-center space-x-0 md:space-x-5 mt-5 sm:mt-0'
            >
              <h1 className='text-[#CAF0DF]  text-[50px] font-semibold hidden sm:flex'>04</h1>
              <Card className=" transition-all  border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start sm:space-x-4 space-y-2 flex-col sm:flex-row ">
                    <div className="">
                      <Image src={satImg} alt="SAT" className="w-20 h-20 object-cover" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl  text-gray-900 mb-2">
                        SAT Practice Test
                      </h3>
                      <p className="text-sm mb-4">
                        Prepare for the SAT with exam-style practice questions, performance tracking, and smart feedback.
                      </p>
                      <div className='text-end flex justify-end'>

                        <Link
                          href="#"
                          className="inline-flex items-center text-[#044272] font-medium justify-end"
                        >
                          Start Practicing
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        className="
    relative
    py-10
    text-white
    bg-[url('/graduation.svg')]
    bg-cover
    bg-center
    bg-no-repeat
  "
      >
        <div className="absolute inset-0 bg-[#021C30B2]" />

        <div className="max-w-7xl mx-auto px-6 relative z-100 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-semibold ">How it works</h2>
            <p className="text-gray-300">
              Simple process steps to  span better result —{' '}
              <span className="text-[#54CD98] font-semibold">BETTER RESULT</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: examImg,
                title: 'Choose your exam',
                color: "#D400FF4D"
              },
              {
                step: '02',
                icon: practiceImg,
                title: 'Practice past questions',
                color: "#00000"
              },
              {
                step: '03',
                icon: instantImg,
                title: 'Get instant result',
                color: "#FB76014D"
              },
              {
                step: '04',
                icon: goalImg,
                title: 'Improve score',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='relative z-10 '
              >
                <Card className="bg-transparent transition-all text-center h-full py-4  bg-none  text-white">
                  <CardContent>
                    <div className={`w-14 h-14 rounded-full  flex items-center justify-center mx-auto`}>
                      {/* here */}
                      <Image src={item.icon} alt="Right Icon" className="w-12 h-12  text-white object-cover" />
                    </div>
                    <h3 className="text-sm mb-3 mt-5">{item.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <h2 className="text-xl  text-[#54CD98] ">
                  Why Students Choose Us?
                </h2>
                <h2 className="text-xl  mb-8 mt-2">
                  Built to help students learn faster, practice smarter, and
                  succeed confidently
                </h2>
                <div className='space-y-4  mt-16'>
                  <div>
                    <h3 className="text-xl mb-2 font-medium">
                      Exam-standard questions
                    </h3>
                    <p className="text-[#33383B] text-sm">
                      Practice with questions that match real exam formats and
                      difficulty levels, helping you get familiar with what to
                      expect.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-medium" >
                      Mobile-friendly practice
                    </h3>
                    <p className="text-[#33383B] text-sm">
                      Learn anytime, anywhere with a platform optimized for mobile devices, so you can practice on the go without limits.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div>
              <Image src={studentImg} alt="Right Icon" className="rounded-s-full rounded-e-full w-[400px] h-[400px] text-white object-cover" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className='space-y-4 '>
                <div>
                  <h3 className="text-xl mb-2 font-medium">
                    Instant answers & explanations
                  </h3>
                  <p className="text-[#33383B] text-sm">
                    Get immediate feedback on every question, with detailed explanations to help you understand mistakes and reinforce learning.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-2 font-medium" >
                    Designed for African students
                  </h3>
                  <p className="text-[#33383B] text-sm">
                    Our content is tailored to the needs of African learners, focusing on local exams and learning styles for maximum relevance and results.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 pb-10 md:pb-28 bg-[#E6ECF1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 ">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative  w-full md:w-[500px] h-64">
                <Image
                  src={onlineImg1}
                  alt="Image 1"
                  className="absolute top-0 left-0 w-full md:w-[500px] h-[307px] object-cover rounded-xl shadow-lg  z-10"
                />
                <Image
                  src={onlineImg2}
                  alt="Image 2"
                  className="hidden lg:flex absolute bottom-0 left-40 top-40  w-[400px]   h-[307px] object-cover rounded-xl shadow-lg z-20"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className='mt-0 md:mt-10'
            >
              <h2 className="text-3xl font-semibold text-[#044272] mb-1">
                How Online Exam Practice Helps You Score Higher
              </h2>
              <p className="text-[#044272] mb-8 ">
                Our platform is built to support online exam practice in Nigeria, helping students learn at their own pace, anytime and anywhere.
              </p>
              <div className="space-y-4">
                {[
                  'Practice real exam-style questions',
                  'Get instant results and explanations',
                  'Identify weak subjects and topics',
                  'Track progress over time',
                  'Prepare confidently for CBT exams',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#8CA8BE] flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-[#044272]" />
                    </div>
                    <span className="text-gray-700 font-medium">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
              <Button className="bg-[#044272]  rounded-3xl md:inline-flex mt-6">
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-bold text-[#044272]">
              Voices of Our Global Student
            </h2>
            <p className="text-md max-w-3xl mx-auto">
              Thousands of students use our platform to prepare smarter and score higher.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-md font-semibold  mb-2">
                Testimonials
              </div>
              <h2 className="text-2xl font-bold text-[#044272] mb-2">
                Stories of Growth and Success
              </h2>
              <p className="">
                These are real experiences from students who used verified exam questions and smart analytics to transform how they prepared
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <TestimonialSlider />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" flex-1 "

          >
            <div>
              <div className="text-md font-semibold  mb-2">
                Frequently Ask Question
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Do You Have Any <span className='text-[#044272]'>Questions?</span>
              </h2>
              <p className="">
                Everything you need to know about this product, can’t find the answer you are looking for.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='flex-1'
          >
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem
                value="item-1"
                className="border-none rounded-lg"
              >
                <AccordionTrigger className="text-left px-6 rounded-md hover:no-underline bg-[#F4F4F4] ">
                  <span className="font-semibold text-gray-900">
                    Can I practice exams on any device?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-white mt-3">
                  Yes! Our platform is fully responsive and works seamlessly on
                  smartphones, tablets, laptops, and desktops. You can practice
                  anywhere, anytime, making it easy to fit studying into your
                  schedule.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                value="item-2"
                className="border-none rounded-lg"
              >
                <AccordionTrigger className="text-left px-6 rounded-md hover:no-underline bg-[#F4F4F4] ">
                  <span className="font-semibold text-gray-900">
                    Can I practice exams on any device?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-white mt-3">
                  Yes! Our platform is fully responsive and works seamlessly on
                  smartphones, tablets, laptops, and desktops. You can practice
                  anywhere, anytime, making it easy to fit studying into your
                  schedule.
                </AccordionContent>
              </AccordionItem> <AccordionItem
                value="item-3"
                className="border-none rounded-lg"
              >
                <AccordionTrigger className="text-left px-6 rounded-md hover:no-underline bg-[#F4F4F4] ">
                  <span className="font-semibold text-gray-900">
                    Can I practice exams on any device?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-white mt-3">
                  Yes! Our platform is fully responsive and works seamlessly on
                  smartphones, tablets, laptops, and desktops. You can practice
                  anywhere, anytime, making it easy to fit studying into your
                  schedule.
                </AccordionContent>
              </AccordionItem> <AccordionItem
                value="item-4"
                className="border-none rounded-lg"
              >
                <AccordionTrigger className="text-left px-6 rounded-md hover:no-underline bg-[#F4F4F4] ">
                  <span className="font-semibold text-gray-900">
                    Can I practice exams on any device?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 bg-white mt-3">
                  Yes! Our platform is fully responsive and works seamlessly on
                  smartphones, tablets, laptops, and desktops. You can practice
                  anywhere, anytime, making it easy to fit studying into your
                  schedule.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>


      {/* Ready to be productive */}
      <section className="bg-[#CAF0DF] relative mt-16 py-12 lg:py-0">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16">

          {/* Text + Button */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center"
          >
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Ready to be more productive with{" "}
                <span className="text-[#044272]">DOLEARN?</span>
              </h2>
              <Button className="bg-[#044272]  rounded-3xl md:inline-flex ">
                Get Started
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className=" justify-center hidden lg:flex"
          >
            <Image
              src={productImg}
              alt="Productive Image"
              className="-mt-24 w-full  object-contain"
            />
          </motion.div>

        </div>
      </section>

      {/* Newletter */}

      <section className="bg-[#E6ECF1] mt-12">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image src={logo} alt="DoLearn Logo" className="w-[150px] h-[28px]" />
            </div>

            {/* Newsletter Text */}
            <div className="text-center md:text-left">
              <h3 className="font-semibold text-gray-800">
                Subscribe our Newsletter
              </h3>
              <p className="text-sm text-[#999999]">
                We will send you nice letter once per week. No spam.
              </p>
            </div>

            {/* Input + Button */}
            <div className="w-full md:w-auto">
              <form className="flex flex-col sm:flex-row items-center bg-none lg:bg-white rounded-full p-1 shadow-sm">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 w-full px-4 py-2 text-sm outline-none rounded-full"
                />
                <button
                  type="submit"
                  className="mt-2 sm:mt-0 sm:ml-2 px-6 py-2 text-sm font-medium bg-[#0E4C6E] text-white rounded-full hover:bg-[#08354C] transition-all duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>



      {/* Footer */}

      <footer className="bg-[#000A06] text-gray-300 relative">
        <div className="max-w-7xl mx-auto px-6 py-14">
          {/* Top Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-16">
            {/* Logo + About */}
            <div className="">
              <div className="flex items-center gap-2 mb-4">
                <Image src={fullLogo} alt="DoLearn Logo" className="w-[160px] h-[30px]" />
              </div>
            </div>
            {/* About */}
            <div className='lg:col-span-2'>
              <h4 className="text-white font-semibold mb-4">About DoLearn</h4>
              <p className="text-sm  text-[#808080] leading-relaxed mb-4">
                Your trusted destination for exam preparation and progress tracking.We provide verified questions, real CBT practice, and clear performance insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-xs sm:text-sm">
                <span>(210) 555-0114</span>
                <span>Dolearnn@gmail.com</span>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm   text-[#999999]">
                <li className="hover:text-white cursor-pointer">Inventory</li>
                <li className="hover:text-white cursor-pointer">
                  Sell your cars
                </li>
                <li className="hover:text-white cursor-pointer">
                  Book a car
                </li>
                <li className="hover:text-white cursor-pointer">
                  Contact Us
                </li>
              </ul>
            </div>
            {/* Working Hours */}
            <div>
              <h4 className="text-white font-semibold mb-4">Working Hour</h4>
              <ul className="space-y-2 text-sm   text-[#999999]">
                <li>Monday - Friday: 8:00 - 19:00</li>
                <li>Saturday: 8:00 - 17:00</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm   text-[#999999]">
                <li className="hover:text-white cursor-pointer">FAQs</li>
                <li className="hover:text-white cursor-pointer">
                  Terms & Conditions
                </li>
                <li className="hover:text-white cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#808080] mt-12 pt-6 text-center text-xs text-[#808080]">
            DOLEARNN eLearning © {new Date().getFullYear()} All Rights Reserved
          </div>
        </div>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-[#044272] p-3 rounded-full text-white shadow-lg hover:bg-[#08354C] transition-all duration-300"
        >
          <ChevronUp size={20} />
        </button>
      </footer>
    </main>
  );
}
