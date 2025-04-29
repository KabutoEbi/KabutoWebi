import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="text-center bg-green-100">
            <Header />
            <div className="mt-4 text-xl">
                <img src="/icon.jpg" alt="KabutoEbi Icon" className="mx-auto my-10 w-50 h-50 rounded-full" />
                <div className="text-xl">
                    <p className="font-bold text-2xl bg-green-300 border-t-6 border-green-600 p-4">自己紹介</p>
                    <div className="my-4">
                        <p>KabutoEbi</p>
                        <p>プログラミン・ロードバイク・1人旅が趣味</p>
                        <p>高専3年生 電気情報工学科（電気分野は好きじゃない）</p>
                    </div>
                </div>
                <div className="mt-4 text-xl">
                    <p className="font-bold text-2xl bg-green-300 border-t-6 border-green-600 p-4">経歴</p>
                    <div className="my-4">
                        <p>2007年9月12日：生誕</p>
                        <p>2014年4月：小学校入学</p>
                        <p>2020年3月：小学校卒業</p>
                        <p>2020年4月：中学校入学</p>
                        <p>2023年3月：中学校卒業</p>
                        <p>2023年4月：舞鶴工業高等専門学校入学</p>
                        <p>2025年現在：舞鶴工業高等専門学校在学中</p>
                    </div>
                </div>
                <div className="mt-4 text-xl">
                    <p className="font-bold text-2xl bg-green-300 border-t-6 border-green-600 p-4">技術スタック</p>
                    <table className="table-auto mx-auto my-4 border-collapse border border-black">
                        <thead>
                            <tr>
                                <th className="border border-gray-400 px-4 py-2">技術</th>
                                <th className="border border-gray-400 px-4 py-2">レベル</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">C++</td>
                                <td className="border border-gray-400 px-4 py-2">ある程度</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">React</td>
                                <td className="border border-gray-400 px-4 py-2">ある程度</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">Flutter</td>
                                <td className="border border-gray-400 px-4 py-2">勉強中</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-400 px-4 py-2">Japanese</td>
                                <td className="border border-gray-400 px-4 py-2">ギリギリ</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;