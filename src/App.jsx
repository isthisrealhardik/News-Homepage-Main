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


  return (
    <div className="text-main font-Inter w-screen h-full bg-off-white text-very-dark-blue pb-20">
      {/* NAVIGATION BAR */}
      <nav className="w-screen flex justify-between items-center px-4 pt-6">
        {/* Small Screens */}
        <img className="w-12" src="/assets/images/logo.svg" alt="Logo" />
        <img onClick={navPop} className="w-10 h-4" src="/assets/images/icon-menu.svg" alt="Nav Button" />
        {/* NAVPOP */}
        <div id="navpop" className="absolute w-screen h-screen bg-black bg-opacity-50 left-0 top-0 flex justify-end hidden">
          <div className="bg-off-white w-[60%] flex flex-col justify-center px-5 py-5 ">
            <img onClick={navPopClose} className="w-10 absolute left-[335px] top-5" src="/assets/images/icon-menu-close.svg" alt="Icon Close Menu" />
            <ul className="space-y-4 text-very-dark-blue text-2xl">
              <li className="hover:text-dark-grayish-blue" >Home</li>
              <li className="hover:text-dark-grayish-blue" >New</li>
              <li className="hover:text-dark-grayish-blue" >Popular</li>
              <li className="hover:text-dark-grayish-blue" >Trending</li>
              <li className="hover:text-dark-grayish-blue" >Categories</li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="px-4 pt-6">
        <img className="w-screen" src="/assets/images/image-web-3-mobile.jpg" alt="Web 3 Mobile" />
        <h1 className="font-extrabold text-5xl pt-6">The Bright Future of Web 3.0</h1>
        <p className="font-normal text-dark-grayish-blue leading-6 py-6">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of people. But it is really fulfilling its promise?</p>
        <button className="bg-soft-red uppercase text-off-white rounded-none tracking-widest text-base font-normal flex items-center justify-center hover:bg-opacity-90 pt-4">Read more</button>
      </header>
      <section className="bg-very-dark-blue text-off-white mx-4 mt-12">
        <h1 className="text-soft-orange font-bold text-4xl pl-4 pt-4">New</h1>
        {
          newInfo.map(obj => (
            <div key={obj.heading} className="px-4">
              <h3 className="text-xl font-bold pt-6">{obj.heading}</h3>
              <p className="text-off-white pt-2 opacity-50">{obj.paragraph}</p>
              <div className="h-[1px] bg-grayish-blue mt-6 opacity-50"></div>
            </div>
          ))
        }
      </section>
      <section className="mt-12">
        {
          news.map(obj => (
            <div key={obj.id} className="flex px-4 py-4 justify-center items-center">
              <img className="w-36 h-36" src={obj.images} />
              <div className="px-4">
                <h1 className="text-grayish-blue font-bold text-4xl">{obj.id}</h1>
                <h2 className="text-very-dark-blue text-xl font-extrabold">{obj.heading}</h2>
                <p className="text-dark-grayish-blue text-base">{obj.paragraph}</p>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  )
}

export default App
