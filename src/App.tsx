import MobileNav from './components/MobileNav'
import DesktopNav from './components/DesktopNav'

function App() {
  return (
    <div className="h-[100dvh] w-[100dvw] font-epilogue">
		<header aria-label="desktop nav bar" className="w-100 h-30">
			<DesktopNav />
			<MobileNav />
		</header>
		<main
			className="desktop:w-screen desktop:flex desktop:flex-row-reverse justify-center items-end gap-10 p-5">
			<img
				className="w-[30%] col-start-2 hidden desktop:block"
				src="/image-hero-desktop.png"
				alt="cool illustration showing a user with a laptop"
			/>
			<img
				className="w-full desktop:hidden"
				src="/image-hero-mobile.png"
				alt="cool illustration showing a user with a laptop"
			/>
			<article
				className="col-start-1 w-full flex flex-col items-center text-center gap-5 mt-10 desktop:items-start m-0 justify-end self-end max-w-3xl desktop:gap-10 desktop:text-left">
				<h1 className="font-bold text-4xl text-almost-black desktop:text-8xl">
					Make <br className="hidden desktop:block" />remote work
				</h1>
				<p
					className="w-[95%] font-medium text-[18px] text-medium-gray desktop:w-1/2">
					Get your team in sync, no matter your location. Streamline processes,
					create team rituals, and watch productivity soar.
				</p>
				<button
					className="bg-almost-black p-3 px-8 rounded-2xl text-almost-white font-bold desktop:mb-10"
					>Learn more</button
				>
				<footer
					className="w-[95%] max-w-[500px] self-center flex justify-between items-center my-10 desktop:self-start mt-20 mb-0">
					<img
						width={80}
						src="/client-databiz.svg"
						alt="our client databiz's logo"
					/>
					<img
						width={80}
						src="/client-audiophile.svg"
						alt="our client audiophile's logo"
					/>
					<img width={80} src="/client-meet.svg" alt="our client meet's logo" />
					<img
						width={80}
						src="client-maker.svg"
						alt="our client maker's logo"
					/>
				</footer>
			</article>
		</main>
	</div>
  )
}

export default App
