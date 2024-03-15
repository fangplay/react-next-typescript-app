import Image from "next/image";

export default function Contaxt() {
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
        <h1>Contact</h1>
      </div>
      <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4">
      <div className="col-md-16">
        <h3>My Contact</h3>
        <p>Programmer Work Session</p>
        <ul>
          <li>Phone:(+66)0866911960</li>
          <li>
            Email:<a href="mailto:fangplay-working@hotmail.com"
              >fangplay-working@hotmail.com</a
            >
          </li>
          <li>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/sirirak-sophakarn-442310158/"
              target="_blank"
              >Sirirak Sophakarn</a
            >
          </li>
          <li>GitHub:<a href="https://github.com/fangplay" target="_blank">FANGPLAY Sirirak</a></li>
        </ul>
        <br/>
        <p>Channel Work Session</p>
        <ul>
          <li>Phone:(+66)0866911960</li>
          <li>
            Email:<a href="mailto:fangplay_2014@hotmail.com"
              >fangplay_2014@hotmail.com</a
            >
          </li>
          <li>
            Facebook:
            <a
              href="https://www.facebook.com/fangplay.sirirak"
              target="_blank"
              >Sirirak Sophakarn</a
            >
          </li>
        </ul>
      </div>
			</div>
    </main>
  );
}
