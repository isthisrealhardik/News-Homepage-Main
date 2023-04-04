function App() {
  let newInfo = [
    {
      heading: 'Hydrogen Vs Electric Cars',
      paragraph: 'Will Hydrogen-fueled cars every catch-up to EVs?'
    },
    {
      heading: 'The Downsides of AI Artistry',
      paragraph: 'What are the possible adverse effects of on-demand AI image generation',
    },
    {
      heading: 'Is VC Funding Drying Up',
      paragraph: 'Private Funding by VC firms is down 50% YOY. We take a look at what that means',
    }
  ];


  let news = [
    {
      id: '01',
      images: '/assets/images/image-retro-pcs.jpg',
      heading: 'Reviving Retro Pcs',
      paragraph: 'What happens when old PCs are given modern upgrades',
    },
    {
      id: '02',
      images: '/assets/images/image-top-laptops.jpg',
      heading: 'Top 10 Laptops of 2022',
      paragraph: 'Our various picks for various needs and budgets',
    },
    {
      id: '03',
      images: '/assets/images/image-gaming-growth.jpg',
      heading: 'The Growth of Gaming',
      paragraph: 'How the pandemic has sparked fresh opportunites',
    }
  ]

  const navPop = () => {
    let navpop = document.getElementById("navpop");
    navpop.classList.remove('hidden');
  }
  
  const navPopClose = () => {
    let navpop = document.getElementById("navpop")
    navpop.classList.add("hidden");
  }

  let logo = "/assets/images/logo.svg";


  return (
    <div className="text-main font-Inter w-screen h-full bg-off-white text-very-dark-blue pb-20 sm:px-[50px] md:px-[80px] lg:px-[120px]">
      {/* NAVIGATION BAR */}
      {/* sm */}
      <nav className="w-screen flex justify-between items-center px-4 sm:w-full md:w-full pt-6 lg:hidden">
        {/* Small Screens */}
        <img className="w-12" src={logo} alt="Logo" />
        <img onClick={navPop} className="w-10 h-4" src="/assets/images/icon-menu.svg" alt="Nav Button" />
        {/* NAVPOP */}
        <div id="navpop" className="absolute w-screen h-screen bg-black bg-opacity-50 left-0 top-0 flex justify-end hidden">
          <div className="bg-off-white w-[60%] flex flex-col justify-center px-5 py-5 ">
            <img onClick={navPopClose} className="w-10 absolute left-[335px] top-5" src="/assets/images/icon-menu-close.svg" alt="Icon Close Menu" />
            <ul className="space-y-4 text-very-dark-blue text-2xl">
              <li className="" >Home</li>
              <li className="hover:text-soft-red transition" >New</li>
              <li className="hover:text-soft-red transition" >Popular</li>
              <li className="hover:text-soft-red transition" >Trending</li>
              <li className="hover:text-soft-red transition" >Categories</li>
            </ul>
          </div>
        </div>
      </nav>
      {/* lg */}
      <nav className="hidden lg:flex justify-between items-center pt-24 w-full">
        <img className="w-24" src={logo} alt="Logo" />
        <ul className="flex space-x-16 text-3xl text-dark-grayish-blue">
          <li className="hover:text-soft-red transition" >Home</li>
          <li className="hover:text-soft-red transition" >New</li>
          <li className="hover:text-soft-red transition" >Popular</li>
          <li className="hover:text-soft-red transition" >Trending</li>
          <li className="hover:text-soft-red transition" >Categories</li>
        </ul>
      </nav>
      {/* HEADER */}
      {/* sm */}
      <header className="lg:hidden px-4 pt-6">
        <img className="w-screen" src="/assets/images/image-web-3-mobile.jpg" alt="Web 3 Mobile" />
        <h1 className="font-extrabold text-5xl pt-6">The Bright Future of Web 3.0</h1>
        <p className="font-normal text-dark-grayish-blue leading-6 py-6">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of people. But it is really fulfilling its promise?</p>
        <button className="bg-soft-red uppercase text-off-white rounded-none tracking-widest text-base font-normal flex items-center justify-center hover:bg-very-dark-blue pt-4 transition">Read more</button>
      </header>
      {/* lg */}
      <header className="hidden lg:grid grid-cols-3 grid-rows-2 items-stretch gap-8 mt-20">
        <img className="w-full col-span-2 row-start-1 col-start-1 object-cover" src="/assets/images/image-web-3-desktop.jpg" alt="Web 3 Desktop" />
        <h1 className="font-extrabold text-8xl pt-6 row-start-2 col-start-1">The Bright Future of Web 3.0</h1>
        <div className="col-start-2 row-start-2 flex flex-col items-start">
          <p className="font-normal text-dark-grayish-blue text-2xl leading-8 py-6">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of people. But it is really fulfilling its promise?</p>
          <button className="bg-soft-red uppercase mt-10 text-off-white rounded-none tracking-widest text-3xl font-normal flex items-center justify-center hover:bg-very-dark-blue pt-4 transition">Read more</button>
        </div>
        <section className="hidden lg:block bg-very-dark-blue text-off-white row-span-2 col-start-3 row-start-1">
        <h1 className="text-soft-orange font-bold text-6xl pl-8 pt-8">New</h1>
        {
          newInfo.map(obj => (
            <div key={obj.heading} className="px-8 py-4">
              <h3 className="text-3xl font-bold pt-8 hover:text-soft-orange transition">{obj.heading}</h3>
              <p className="text-off-white pt-4 opacity-50 text-2xl">{obj.paragraph}</p>
              <div className="h-[1px] bg-grayish-blue mt-6 opacity-50"></div>
            </div>
          ))
        }
        </section>
      </header>
      {/* SECTION 1 */}
      <section className="lg:hidden bg-very-dark-blue text-off-white mx-4 mt-12">
        <h1 className="text-soft-orange font-bold text-4xl pl-4 pt-4">New</h1>
        {
          newInfo.map(obj => (
            <div key={obj.heading} className="px-4">
              <h3 className="text-xl font-bold pt-6 hover:text-soft-orange transition">{obj.heading}</h3>
              <p className="text-off-white pt-2 opacity-50">{obj.paragraph}</p>
              <div className="h-[1px] bg-grayish-blue mt-6 opacity-50"></div>
            </div>
          ))
        }
      </section>
      <section className="mt-12 lg:flex justify-around items-center lg:mt-20">
        {
          news.map(obj => (
            <div key={obj.id} className="flex px-4 py-4 justify-center items-center">
              <img className="w-36 h-36 lg:w-40 lg:h-44 lg:object-cover" src={obj.images} />
              <div className="px-4 lg:ml-4 ">
                <h1 className="text-grayish-blue font-bold text-5xl lg:text-5xl">{obj.id}</h1>
                <h2 className="text-very-dark-blue text-xl lg:text-3xl lg:mt-4 font-extrabold hover:text-soft-red transition">{obj.heading}</h2>
                <p className="text-dark-grayish-blue text-base lg:text-xl lg:mt-2">{obj.paragraph}</p>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default App
