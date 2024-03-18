import Image from "next/image";
import profilepic from "./images/profile-2024.jpg";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          This web that you viewing&nbsp;
          <code className="font-mono font-bold">is beta test.</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            rel="noopener noreferrer"
          >
            Developing base on
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </p>
        </div>
      </div>
      <div className="relative flex place-items-center">
        <h1>About FANGPLAY</h1>
      </div>
      <br/>
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4">
      <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="relative flex justify-center">
                {/* <img src="../img/profile-2024.jpg" alt="profile picture" className="rounded-circle img-profile img-fluid border rounded-3 shadow-lg mb-4"/> */}
                <Image src={profilepic} alt="profile picture" width={400} height={400} className="rounded-circle img-profile img-fluid border shadow-lg"/>
              </div>
              <br/>
              <div className="lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4">
                <h2>Basic Information</h2>
                <p>Name : Sirirak Sophakarn</p>
                <p>Chinese Name : 西裡拉克·索法卡恩</p>
                <p>Japanese Name : シリラク・ソファカーン</p>
                <p>Korean Name : 시라크 소타카르</p>
                <p>Nickname : Fangplay</p>
                <p>Chinese Nickname : 方普拉</p>
                <p>Japanese Nickname : ファングプレイ</p>
                <p>Korean Nickname : 팡플레이</p>
                <p>Birth Date : 5 August 1995</p>
                <p>Blood Line : B</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4">
                <h2>Langauge</h2>
                <p>ไทย,อังกฤษ,จีน,ญี่ปุ่น,เกาหลี</p>
                <p>Thai,English,Chinese,Japanese,Korean</p>
                <p>泰語,英語,中文,日語,韓語</p>
                <p>タイ語,英語,中国語,日本語,韓国語</p>
                <p>태국어, 영어, 중국어, 일본어, 한국어</p>
              </div>
			  <div className="lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4">
				<h2>Score Langauge</h2>
				<h3>TOEIC</h3>
				<p>Score : 515(On 21 November 2023)</p>
				<h3>CU-TEP</h3>
				<p>Score : 43(On 27 May 2023)</p>
			  </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
