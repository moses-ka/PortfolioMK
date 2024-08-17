"use client";
import {motion} from "framer-motion";
export default function Skills() {
  return (
    <>
      <motion.ul
     initial={{ x: '-100vw' }}  // Start from off-screen left
     animate={{ x: '100vw' }}
     transition={{
        duration: 15,        // Duration of one complete cycle
        repeat: Infinity,    // Repeat the animation indefinitely
        repeatType: "loop",  // Loop the animation continuously
        ease:"linear"  // Smooth easing function for a more natural motion
      }}
       className="flex  justify-center items-center text-white font-bold gap-6 flex-wrap   h-max">
        <li className="flex flex-col justify-center items-center  h-20 w-20 ">
          <img
            alt="Figma  Skill Logo"
            className="w-[50px] invert "
            src="https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000"
          />
          <span className="m-2          ">Figma</span>
        </li>
        <li className="flex flex-col justfiy-center items-center        h-20 w-20 ">
          <img
            className=""
            alt="HTLM Skill Logo "
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtklEQVR4nO3ZW2xMQRgH8L+oJogHxAPxghc8iMsDbyWoiHQ7s7UlrkFtUQ0pIUKIS0IqEtdQQVwiLhFEJG4JD3WL4EG0IajbnnO2u92DaovSjmxX9HycadeZYRPZL5lkk8k5Z357vpn5dhZIRzrS8f+GwVFncohUNoPho3cAw4uUAzieqwDupBpgctz2DDA5zqsOQBT/eWuYR+5xTgWwPxWAujnkHmWeAQbHxlQAameRSbxBBVCcCsD7GQSw2DPAYshPBcCe1nq9xRHwDsjFaNnArBndhW3b7bakYtNAAohOdTyLIcszwGQYJP12J2cIOxbTA1jViwCqA44U8mOgZ0CIoWdb6WFbIXVAc7MQSzIIwMprfcabAHp4Bgigg8HQKAPEqirVAfU2GXxzEZnAjfExQCVMDkMKqLhLBmsV9lOexN8WkvwPKQ2+BcDwUAq4f5UCSoYrAxoLCeCBDsBlGaCm/AwBhNeOUwZ8mk9S6JIywGA4IgVcOUQA1aX5yoD6uQ4Ax2EdgK0yQPT8dvVJfGM7AXycTQClygCTY7kUcGKDOuDSegL4MNPxDD+W6QDMkgEih5arA86WEMC76QQwUxlg+DFBCtgdVAccn0sANY4ywmDIVgaE8jDMSxEnncT3jlHAAT/pj+S3XhvKxVBlwGsf+mgFPL5IAbvGkv6wo4yIcPRWBogsZBgMTW6Dq16dRdIlevNc+4CqWxRQOoL0O1agZhFEJ+gIk6PGDRBeMoQAah6Vtw8IV1LA+gE/+5oWkWuj0BUGR6UbwJrXlwBioZcivC5bWIHM3wFLM4XYN0mIhnfSUvrrAvIGKnQCbrjm+NQuritP7G2ViF7YJcJrxgixJ1uIOwcTVadbLO30E/A5SFag6zoBp2ST1I5Y3pfRL3UkvRoKSCF3UhvAZNgp3Y3PbmtJnT8GxFOpfK/8OIVhh07AmjaXy7yOIrxilIic3ixir57KAfE0undUiLKcxJwo/uU4xVEHmQyrtQEMhvlJr/0OjP3qiRD1sTYHLWTHKRwFOgG5njayyRm//d5N9jglxOHTBghzjNK2E8t+Si6CiDhOIywfRuoD+NH/bwAaCxP1f3SKyx6Tg37aANZ4dNUBaCqC+FSQKJmdNY/ptkmOR1fojJa3wBA0OE4bHLXJAr4EE4e1UUeV6doYGkyGawbHStOHwfib8SaAziE/xpkMW0yO+17fjpH4B6gsfv4Z9aEbUhVJv51/+S2rvB2TYeKP3ftZS4t/ZpgY7/N843SkIx3/Z3wHrTGmPWk4PzUAAAAASUVORK5CYII="
          />
          <span className="m-2      ">HTML</span>
        </li>
        <li className="flex flex-col justfiy-center items-center          h-20 w-20 ">
          <img
            className=" "
            alt="CSS Skill Logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEEElEQVR4nO3YSUwUQRQA0J5qF4zx4JK4HEz04HrRg3G5aIxr4nJRb+pFOelBYaoaVDSgkcUVN0Qxbgfxoh5QYKp6RBQXkIjKMuAoiAziMKCCKCiU6THQXTgtM12lk5j5SSVkuqu7Hr+2LkmKRCQi8f8GQKQdIELDWiBusw6AxB12AMKvODKAH4YdAEmRZYAN4pu8DZDPNYRejlb21bchcsM6AOHMsAAOvdABEJ/lyUBSOAAgucyQAZxoGQAQ2R4WwIGnhjGAt1kHQLIhLIDEx3p9hay3DJCQY5FZw6alPqAtLS0DlmBizOVGFpHwoO89kl1daB0A86ebAcYm3hMC6KGUDjnfLwO7C3VAnHOadYDiGG0GGBKnUp+PH/Cxs/v3LhTn1AE7ckdZB0jUBhDuMkO88Xi5AbVtP1jA2XrDO3CX1gYOgH8mahA5iKdmNzGAMl8Xe8/pN4YZiLzjarwfAEmpSMD8W14GUODpZLvPCbex/lNugA3hXJGAVbk+BnCr9it7zzGXYRUmd/gBEF8SCdjsZMfFpeov7D2Hyw2rMLkoIgNpwTY21eEKeRAff9HOAlKeGzKAU7kBAJLYYAEJOZUhAxJLP7Nj4GCpcRaK4QcgsilYwM6bL0MGxD76xAKSivVn2slGboAM1eXBAqKvPw8ZsKWglQXse6iPH4Us4wZIyDFb5CC+WtPBANY5fOw9e+731ZVinbP4Afb8CSIBOW+/MoClOc1sBuLv6oD4gvH8gL3OQQCS7kCNm5nG7kgLqxoGBBS972QAc2580K9nvqNAUXsHcI8UXTKYH/BrJmoOBJh4oJABlLgbBwRUtH5nAFOym/TrGXXGGcgrpPF+ACIVgQAj995lALWNXro8s5hGxeu7yd7GDcvy0NW5Ptra2c0Axl3RvwXAqdf68yEpFwawQeIMBBhssqV+7fHSkwWv6OIzT+iK2830gusLbfnGNrw3orI8egbSq42rsCoOgHC22SCtb2q2vJ1u/97DdrEjhuMUSK6JA0CcbgY4olb/8bvALLSulFHRbxuRZjhOQfi4MABAZPefpkqtKy048Zgm57uoq77JFKB1oys1HXRtns8/JuT+X2IpzwxjAO8SB4Bka7DzvhFTVf+B+gZotGx2nILwFmEAGalrrSxi2nfz0CyLxyl2skYYQILOeaJWYtNypo7dRijqXHEAxTFZOEBbdU+6qZxS9uscSGHrSTF5k8QBYvKGCwFk1FH5aBUF+4spMCx2IEDR3ikJDS0Lihptg+Q6QPhz0Ij0GgqSn1E5Qe8egQvusEHiAApGUhyeIf3V2FE0TFYcS2yQJAOIS6xmB0Di1o7P/eef9vsjpLBF0Nn5l/9lnuxAvNK/ekNcoxXtb+037Zrl50YiEpH4P+Mn9Q+e3CSBSHQAAAAASUVORK5CYII="
          />
          <span className="m-2         ">CSS</span>
        </li>
        <li className="flex flex-col justfiy-center items-center          h-20 w-20 ">
          <img
            className=""
            alt="JavaScript Skill Logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nGNgGAWjYBSMgkEJvt+X+z+YMMOoB+6PxsD/0SREChjoJPN9NBPfH/hQ/z5ajN4f+JD/PlqR3R8cmIFUMNAO/j7qgfsDH+rfR5PQfUpCjBGOl04VQZE7s1Pyf6gv939xUZb/LMyM/yXFWf5HBvD8P7tTcvB7YPtSsf8c7Ewo8gxQzMXJBJYftB74elfuv4IsK1ycnY3pv4YKG5iGiZkasP//dm+QeuDkNgm4GBMT4//TOyBJ5tZRqf9K8qz/cxL5/r++Kjt4Y2DXCnG4GCgZfbyFcOy769gdPqg8cPuYNIq4rxvX/5tHpIg0bxB4AIRd7ThR5DjYmf4nhvP+v7xfamh44N4J6f/62uwYJRAzMyPYI28Gcx6AYZAjy7L5//NwYRanOups/59fkBncHoDhp+dk/jeXCfwXE2FBUZ8VzzewHgCV9/g8gF7Ov7gkAy7/YeplJFno5wFQKeLjwvV/3VxRuNjVA1IoHliLJDe3T/i/kS47RnnfXSsIV8/GykQfDyyeLAKu/mGlSU4S3/+JzUL/LU04UDwAavuA1IPaPzAxe0vO/3eOS4PFn1+U+W9rjtADqq3p4oFL+6TgHsCFVRRY4Ummpx4RyiDMyMj4X0qCBaUpAcKlWfz0S0I7l4v95+Nhxup4UFLYugTROAN5pCJHAK+Hbcw4sBalNPMACD84Jf0/O4Hvv6wUK7g8BzWTAz25/x/fLIFV/aH1Ev/D/Xn+qylBGnIC/Mxgh09pE/r/+TauUo2GHqAHZhj1wP3RGPhP1yQ0CkbBKBgFDPQAANX6rlnxM/hBAAAAAElFTkSuQmCC"
          />
          <span className="m-2          ">JS</span>
        </li>
        <li className="flex flex-col justfiy-center items-center          h-20 w-20  ">
          <img
            className=""
            alt=" Tailwind Skill Logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/ElEQVR4nO2Yy29NURTGv6pHmIigngMDMTDz/BckUoRi4pUYYEaQYKIGEhMzDcGMNGSvdUqbqkebnLVOVSQakVRo4zXy6MREqoq6svdt1U3a6+7T4547OL9kT+7d99y1zl7rW2ttICMjIyMjI+MvLndPg+lcA5ZN4HCPW6RbEOhqmOfTUbFGk+wAy32wfAVrbvwl30H6AKT73G8qAqPrQdozsdETLNJ37pRShWSne6u+xheeSkM6p8GyEaw/J2e8jp5GC9raZpTP+KCrBiT9iRjPo07IPbR0z/Kyw4QL4znAcmnk+IdA2gzS42A5AJajYLlRPJGLrk6Y9tklG096xt9407EEpN9A0opb4bJx9zS1zwXptZhOPMXth4uL2xCtBEkfAtnq7wDJCZCcQy5X9c+9rCdB8itGYn9GoEfQ2Dmn4HlBuBSkZ0EyANZXMKba3wGjuzz3HwTLcMzk/gGWXrB0g+RNwcuwtSQWcbymaHdiisUu4VtLioBECaLtYB1MQHJ7YKL55TX+jxOyzsVubAekKz3jR7Faz3LaJSqXHDIfwHIY9bkpqBjMo5lgrQPrFbA+AemnkRAbBMl795ltM6xUxmo1bOtr45b0otNm1o/5h7sa0O+UgeWq60J9K+h/xZhqV1m9WgUbDlKfviNBVw1YHk9CIV679joVmjsWgPRFAjo96EKvrORyVSC9m1ihsUXLFi9fTJzWwEKyv/DPpW9EBXrz5TyWZg+D9JCfHZG/0wjDqWB5C9YvLhEDXVTwvW2obGPlo9tj+m17l1MlRsB5Jx7eWBkkfYmmaEXRfbbFzctpnNO4jsZw3rjPNeHy/GWADsYbUOxQYNWnFOywYYeOuMlNchMsx/LDj2219c7YTC0NiK0+Plitt+Nfcgmfc0WyrD2OHcDtKJmE8eREYgNSusy6MDkHxIZPHVKFotr8JZW3Qj0DhWtREdjTcPeg7mpxqIjRA65gkmxz8l2R2C6WZBUC2Qwje/OXu1Gtu9ytWKMzMjIyMjKQDr8BpC0SbqrQ1j8AAAAASUVORK5CYII="
          />
          <span className="m-2           duration-1000">Tailwind</span>
        </li>
        <li className="flex flex-col justfiy-center items-center      h-20 w-20 ">
          <img
            className=" "
            alt="SASS Skill Logo"
            src="data:image/png;base64,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"
          />
          <span className="m-2          ">SASS</span>
        </li>
        <li className="flex flex-col justfiy-center items-center          h-20 w-20 ">
          <img
            className=""
            alt="BootStrap Skill Logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB9UlEQVR4nO2Zu0vDUBSH828lBQVRF63ugpskoojooIsgKmpxFFRQEETEyQoOiVrtgxYcKpRah2qF+ii+ELVJ6iM1OXKFoiYR05Sm90I+ONuB/L7cc8lNQlEuLi4uWMMxQjvHCGGO5mWOEcCRonmZpfkQ6+G9lYb3ORaa+VNmspI7DzhUN73dakcgXOvg3PcqBMsWYGlewkdAEO2sAOBUVDUErKCpGsjPCuTORIhuXcHsYBy6PQQJmJHLiODrOiBXAFFUVFgcSZArUJIY7YjiJ6Dv628KwPJYEgqSYugN+y/wFygVktBznyuQIzDQvGfoVd4+yBFA865HfHonQ6C3fgeS0TtDbyb5iJ+Af/7kVwXWs3BzLpv2rkyl8BOwSvrwAXrqtskUOIrdQ1/DrqXwWAqgM1IicgvD7SEyBX4+B/obA3gJmPUOeYOwMZf+Oj7o8c+f4C9QKhRWz+VpnhyBobagof9VLpIjgDatQaBAkMDmgnGEbi9k/AXQ6KD5N9vEkc1LvATKQVU1GO+MkSuwtXT673WwFHiRirA2c2wpfM0FNA1AzitwnZUgvncNq9Opr9dMzmL4qgk4WRTJnxZZRsjbEQhhJLBfvoCH92IjQAstlB3Qz4Vah+cYfoKqBPRzAX2fd3JPsDQvobGxfeddXFxcKKf4BKis2RSvB6ZeAAAAAElFTkSuQmCC"
          />
          <span className="m-2          ">Bootstrap</span>
        </li>
        <li className="flex flex-col justfiy-center items-center          h-20 w-20 ">
          <img
            alt="Git Skill Logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACVUlEQVR4nO2ZTWsUQRCGO4lehUCURFO1y+pBEPSQo6BXQUmqNsxBvEp+gAdzDOrVg4IYxIMifuRfBSGeIrJO9SZExJZ2JmFol52P3emZCVNQMAzbve8zXV01Na1Ua6211pprRqkZzbgpjN+s22t7TzVGPMErzWiSLgRvzZaaVU0Ur5sAYVLE1x4i7HeuCqNOA/gHwbhdmz1hNlbODggu2+uwv3yrURAmUHOa8Itm/DEkXIkg8KZmCDNBUIXhFImHTwlBzYEwt9UZTbgzQtC+rF+6bn+juXtD1uGahdIEz4Xwdy3Cydgnz/h5zFPdP+h3O+44IXha+Z4wUdh8TAuLwV2cd8ceBD2sdGObQM0JwYcscR3eW1pwx3+/c+VcZdnJbKlZYXyfRUC8MR+5c9hUW0mKNZH4d1nFxwC/7Avcifg4pLzXCaPUjJ0oj/ikH88jBF8P+9jzmmJN9Er8uqj4JEAsxh+EiZ78m0nEuwBRWMDu4VqnW3qd0Iybk4ofBXAMoRmX8tYJndhTqRZ3UaUARBC9C3nrhBDu1QZgVJ0Ig8XzUwMoM4Rif+j+55BwY+x8a/jYW/pMBSAYCC3ft72EdWF8oBl+TrUmTANizArEYQFH1ksraFn73KIA2kevUGQlhPGPZnxxAkDwMr6XZ47t6b0P5YQQhifuHMLwrBLxhSCCzqJybLgKFysTnxeiSJ7X3rqybBC587x47YvTIHzkeR8rUXqen9QmrRNSh++kRSFqIb4oRK3En5rP640/4DgVR0z/HfIR7lm3zUjlZwGttdaaqqX9BXBaAh7aBFdkAAAAAElFTkSuQmCC"
          />
          <span className="m-2        ">Git</span>
        </li>
        <li className="flex flex-col justfiy-center items-center         h-20 w-20 ">
          <img
            className=""
            alt="React Skill Logo"
            src="data:image/png;base64,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"
          />
          <span className="m-2          ">React</span>
        </li>
        <li className="flex flex-col justify-center items-center  h-20 w-20 ">
          <img
            alt="Next JS Skill Logo"
            className="w-[50px] invert "
            src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
          />
          <span className="m-2          ">NextJS</span>
        </li>
        <li className="flex flex-col justify-center items-center  h-20 w-20 ">
          <img
            alt="TypeScript Skill Logo"
            className="w-[50px]"
            src="https://img.icons8.com/?size=100&id=nCj4PvnCO0tZ&format=png&color=000000"
          />
          <span className="m-2          ">TypeScript</span>
        </li>
        <li className="flex flex-col justfiy-center items-center          h-20 w-20 ">
          <img
            className=" w-[50px]"
            alt="ExpressJs Skill Logo"
            src="https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000"
          />
          <span className="m-2    ">Express</span>
        </li>

        <li className="flex flex-col justfiy-center items-center          h-20 w-20 ">
          <img
            className=" w-[50px]"
            alt="NodeJs Skill Logo"
            src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000"
          />
          <span className="m-2          ">Node.js</span>
        </li>
        <li className="flex flex-col justify-center items-center  h-20 w-20 ">
          <img
            alt="Python Skill Logo"
            className="w-[50px] "
            src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000"
          />
          <span className="m-2          ">Python</span>
        </li>
        <li className="flex flex-col justify-center items-center  h-20 w-20 ">
          <img
            alt="Django Skill Logo"
            className="w-[50px] invert"
            src="https://img.icons8.com/?size=100&id=mUBILbYvUMq8&format=png&color=000000"
          />
          <span className="m-2          ">Django</span>
        </li>
        <li className="flex flex-col justfiy-center items-center         h-20 w-20 ">
          <img
            className=""
            alt="PostgressSQL Skill Logo"
            src="data:image/png;base64,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"
          />
          <span className="m-2        ">PostgreSQL</span>
        </li>
        <li className="flex flex-col justfiy-center items-center          h-20 w-20 ">
          <img
            className=""
            alt="MongoDB Skill Logo"
            src="data:image/png;base64,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"
          />
          <span className="m-2        ">MongoDB</span>
        </li>
        <li className="flex flex-col justfiy-center items-center        h-20 w-20 ">
          <img
            className="w-12 h-12"
            alt="Supabase Skill Logo"
            src="https://supabase.com/dashboard/img/supabase-logo.svg"
          />
          <span className="m-2        ">Supabase</span>
        </li>
      </motion.ul>
    </>
  );
}
