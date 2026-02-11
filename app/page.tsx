'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import logo from '../assests/home/logo.png';
import HeroImg from '../assests/home/hero-img.png';
import ExamImage1 from "../assests/home/exam-img-1.png";
import ExamImage2 from "../assests/home/exam-img-2.png";
import jambImg from "../assests/home/jamb.png";
import waecImg from "../assests/home/waec.png";
import necoImg from "../assests/home/neco.png";
import satImg from "../assests/home/sat.png";
import rightImg from "../assests/home/right-icon.png"
import onlineImg1 from "../assests/home/online-img1.png";
import onlineImg2 from "../assests/home/online-img2.png";
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
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
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
      <section className="pt-32 pb-20 bg-[#EEFAF5]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-2">
                Practice  <span className='text-[#044272]'>Smarter,</span>  Improve Faster and{' '}
                <span className="text-[#54CD98]">Master Your Exams</span>
              </h1>
              <p className="text-lg mb-8">
                Practice real exam questions, get instant results, and improve
                your score.
              </p>
              <div className="flex flex-wrap gap-4 mb-8 mt-8">
                <Button className="bg-[#044272]  rounded-3xl md:inline-flex">
                  Get Free Test
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:flex"
            >
              <Image src={HeroImg} className="w-full h-[450px] object-cover" alt='Hero image' />
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
              Get access thousands of practice questions for your choice exams.
              Get verified past questions and realistic test experience.
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
                  <div className="flex items-start space-x-4 ">
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
                  <div className="flex items-start space-x-4">
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
                  <div className="flex items-start space-x-4">
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
                  <div className="flex items-start space-x-4">
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
      <section className="py-10 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl font-semibold ">How it works</h2>
            <p className="text-gray-300">
              Simple process steps to better result —{' '}
              <span className="text-[#54CD98]">BETTER RESULT</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                icon: rightImg,
                title: 'Choose your exam',
                color: "#D400FF"
              },
              {
                step: '02',
                icon: FileText,
                title: 'Practice past questions',
              },
              {
                step: '03',
                icon: ClipboardCheck,
                title: 'Get instant result',
              },
              {
                step: '04',
                icon: BarChart3,
                title: 'Improve score',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='bg-blue'
              >
                <Card className=" transition-all text-center h-full py-6">
                  <CardContent>
                    <div className={`w-14 h-14 rounded-full bg-${item.color} flex items-center justify-center mx-auto`}>
                      {/* here */}
                      {/* <Image src={} alt="Right Icon" className="w-5 h-5 text-white object-cover" /> */}
                    </div>
                    <h3 className="text-sm mb-3">{item.title}</h3>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-400 rounded-full -z-10" />
                <img
                  src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students"
                  className="rounded-3xl w-full"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built to help students learn faster, practice smarter, and
                succeed confidently
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Exam-standard questions
                  </h3>
                  <p className="text-gray-600">
                    Practice with questions that match real exam formats and
                    difficulty levels, helping you get familiar with what to
                    expect.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Instant answers & explanation
                  </h3>
                  <p className="text-gray-600">
                    Get immediate feedback on your answers with detailed
                    explanations to help you understand concepts better.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Mobile-friendly practice
                  </h3>
                  <p className="text-gray-600">
                    Study anywhere, anytime with our mobile-optimized platform
                    that works seamlessly on any device.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 pb-10 md:pb-48 bg-[#E6ECF1]">
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
                  className="hidden md:flex absolute bottom-0 left-40 top-40  w-[400px]   h-[307px] object-cover rounded-xl shadow-lg z-20"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Voices of Our Global Student
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Thousands of students in different countries have used our
              platform to improve their exam scores.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-sm text-gray-500 mb-4">Testimonial</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Stories of Growth and Success
              </h3>
              <p className="text-gray-600 mb-6">
                Our students consistently share how the platform's detailed
                explanations, verified exam questions and smart analytics have
                transformed how they prepared.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 relative overflow-hidden">
                <CardContent className="p-8 text-white relative z-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
                  <p className="text-lg mb-6 leading-relaxed">
                    "DoLearn helped transform my exam preparation. The practice
                    questions were exactly like the real JAMB exam, and the
                    instant feedback helped me understand my mistakes. I improved
                    my score from 180 to 285 in just 3 months! The platform
                    made studying actually enjoyable."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center">
                      <span className="text-2xl">👨‍🎓</span>
                    </div>
                    <div>
                      <div className="font-bold">Chukwu Ebuka</div>
                      <div className="text-blue-200 text-sm">
                        JAMB Student
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className=" flex-1 "
          >
            <div>
              <div className="text-md font-semibold  mb-2">
                Frequently Ask Question
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Do You Have Any Questions?
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

      {/* CTA Section with Image */}
      <section className="py-20 bg-gradient-to-br from-green-100 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <img
              src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Happy student"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">DoLearn</span>
              </div>
              <p className="text-gray-400 mb-4">
                Subscribe our Newsletter
              </p>
              <p className="text-gray-500 text-sm">
                Get the latest updates on exam preparation tips and resources
              </p>
            </div>
            <div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
                {/* <Button className="bg-blue-600 hover:bg-blue-700 px-8">
                  Subscribe
                </Button> */}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 DoLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
