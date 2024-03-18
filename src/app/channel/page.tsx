import Image from "next/image";
import channellogo from "./images/logo-x+8.png";

export default function Channel() {
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
        <Image src={channellogo} alt="channel logo" width={1000} height={850}/>
      </div>
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4">
        <p>NeoXFANGPLAY is started in 2018. This channel presentation on gamers , games , podcast , event time and other stories for mostly people who want know that.</p>
        <br/>
				<div className="ico-item relative flex place-items-center">
        <h1>You can see on the platforms.</h1>
				<p><a href="https://www.youtube.com/channel/UCTfcciUBkQH7ecExH7Qloaw" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="red" className="bi bi-youtube" viewBox="0 0 16 16">
					<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
				  </svg></a></p>
				<p><a href="https://www.facebook.com/neoxfangplay" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="blue" className="bi bi-facebook" viewBox="0 0 16 16">
					<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
				  </svg></a></p>
				<p><a href="https://www.twitch.tv/neoxfangplay" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" fill="purple" className="bi bi-twitch" viewBox="0 0 16 16">
					<path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z"/>
					<path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z"/>
				  </svg></a></p>
				</div>
			  </div>
    </main>
  );
}
