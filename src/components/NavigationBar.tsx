import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

gsap.registerPlugin(ScrollToPlugin)

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState("home")

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    setActive(id)

    gsap.to(window, {
      duration: 1.2,
      scrollTo: {
        y: `#${id}`,
        offsetY: 90,
      },
      ease: "power3.inOut",
    })
  }

  useEffect(() => {
    const sections = ["hero-section", "explore", "about", "footer"]

    const handleScroll = () => {
      let current = "hero-section"

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return

        const rect = el.getBoundingClientRect()

        if (rect.top <= 200 && rect.bottom >= 200) {
          current = id
        }

        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 10
        ) {
          current = "footer"
        }
      })

      setActive(current)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="w-full bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_0_40px_rgba(16,185,129,0.08)] px-5 md:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <div
          onClick={() => scrollToSection("hero-section")}
          className="flex flex-col leading-none cursor-pointer"
        >
          <h1 className="text-white font-black text-lg tracking-[3px]">
            NOHAZZ
          </h1>

          <p className="text-[9px] text-green-300 tracking-[4px] uppercase">
            Textile Science
          </p>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10">
          <div className="flex items-center gap-8 text-sm font-medium text-gray-300">
            <button
              onClick={() => scrollToSection("hero-section")}
              className={`hover:text-green-300 ${
                active === "hero-section" ? "text-green-300" : ""
              }`}
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("explore")}
              className={`hover:text-green-300 ${
                active === "explore" ? "text-green-300" : ""
              }`}
            >
              Explore
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className={`hover:text-green-300 ${
                active === "about" ? "text-green-300" : ""
              }`}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("footer")}
              className={`hover:text-green-300 ${
                active === "footer" ? "text-green-300" : ""
              }`}
            >
              Contact
            </button>
          </div>

          {/* BUTTONS */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <button
              className="
                px-4 lg:px-5
                py-2
                rounded-full
                border border-white/10
                bg-white/5
                text-white
                text-sm lg:text-base
                hover:border-green-400/40
                transition-all
                whitespace-nowrap
              "
            >
              Customer Portal
            </button>

            <button
              className="
                px-4 lg:px-5
                py-2
                rounded-full
                bg-green-400
                text-black
                text-sm lg:text-base
                font-semibold
                whitespace-nowrap
              "
            >
              Admin Portal
            </button>
          </div>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div
          className="
            lg:hidden
            mt-4
            p-5
            rounded-3xl
            bg-[#030807]/95
            backdrop-blur-3xl
            border border-white/5
            shadow-[0_20px_80px_rgba(0,0,0,0.85)]
            flex flex-col gap-3
            text-white
            overflow-hidden
            relative
          "
        >
          {/* glow effect */}
          <div className="absolute inset-0 bg-linear-to-br from-green-500/5 via-transparent to-transparent pointer-events-none" />

          <button
            onClick={() => scrollToSection("hero-section")}
            className={`
              relative z-10
              text-left
              px-5 py-4
              rounded-2xl
              font-medium
              tracking-wide
              transition-all duration-300
              hover:bg-white/8
              hover:text-green-300
              ${
                active === "hero-section"
                  ? "bg-green-400/12 text-green-300 border border-green-400/20"
                  : "text-gray-300"
              }
            `}
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("explore")}
            className={`
              relative z-10
              text-left
              px-5 py-4
              rounded-2xl
              font-medium
              tracking-wide
              transition-all duration-300
              hover:bg-white/8
              hover:text-green-300
              ${
                active === "explore"
                  ? "bg-green-400/12 text-green-300 border border-green-400/20"
                  : "text-gray-300"
              }
            `}
          >
            Explore
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className={`
              relative z-10
              text-left
              px-5 py-4
              rounded-2xl
              font-medium
              tracking-wide
              transition-all duration-300
              hover:bg-white/8
              hover:text-green-300
              ${
                active === "about"
                  ? "bg-green-400/12 text-green-300 border border-green-400/20"
                  : "text-gray-300"
              }
            `}
          >
            About
          </button>

          <button
            onClick={() => scrollToSection("footer")}
            className={`
              relative z-10
              text-left
              px-5 py-4
              rounded-2xl
              font-medium
              tracking-wide
              transition-all duration-300
              hover:bg-white/8
              hover:text-green-300
              ${
                active === "footer"
                  ? "bg-green-400/12 text-green-300 border border-green-400/20"
                  : "text-gray-300"
              }
            `}
          >
            Contact
          </button>

          {/* MOBILE BUTTONS */}
          <div className="relative z-10 flex flex-col gap-3 pt-3">
            <button
              className="
                w-full
                px-5 py-4
                rounded-2xl
                border border-white/10
                bg-white/5
                text-white
                font-medium
                hover:border-green-400/30
                transition-all
              "
            >
              Customer Portal
            </button>

            <button
              className="
                w-full
                px-5 py-4
                rounded-2xl
                bg-green-400
                text-black
                font-semibold
                transition-all
              "
            >
              Admin Portal
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavigationBar