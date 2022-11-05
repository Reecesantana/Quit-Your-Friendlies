import Link from "next/link";
import { CgShapeHexagon } from "react-icons/cg";
import Login from "./Login";
import NavItem from "./NavItem";

export const Navbar = () => {
  return (
    <>
      <div className='bg-neutral-100 float-left h-screen w-64 text-center flex flex-col'>
        <Link className='text-xl' href={"/"}>
          <div className='bg-sky-400 text-neutral-50 w-screen h-12 justify-center'>
            <span className='text-3xl cursor-default text-left flex flex-row ml-10 p-1'>
              <CgShapeHexagon className='text-3xl mr-3 translate-y-1' />
              Last Set
            </span>
          </div>
        </Link>
        <nav className='border border-r-sky-400 h-screen bg-neutral-100 overflow-y-auto pb-14 text-neutral-800'>
          <NavItem image='' title='Fox' />
          <NavItem image='' title='Marth' />
          <NavItem image='' title='Jigglypuff' />
          <NavItem image='' title='Falco' />
          <NavItem image='' title='Sheik' />
          <NavItem image='' title='Falcon' />
          <NavItem image='' title='Yoshi' />
          <NavItem image='' title='Peach' />
          <NavItem image='' title='Ice Climbers' />
          <NavItem image='' title='Samus' />
          <NavItem image='' title='Pikachu' />
          <NavItem image='' title='Luigi' />
          <NavItem image='' title='Doctor Mario' />
          <NavItem image='' title='Mario' />
          <NavItem image='' title='Ganon' />
          <NavItem image='' title='Link' />
          <NavItem image='' title='Young Link' />
          <NavItem image='' title='Mr. Game & Watch' />
          <NavItem image='' title='Roy' />
          <NavItem image='' title='Donkey Kong' />
          <NavItem image='' title='Mewtwo' />
          <NavItem image='' title='Ness' />
          <NavItem image='' title='Pichu' />
          <NavItem image='' title='Bowser' />
          <NavItem image='' title='Kirby' />
          <NavItem image='' title='Zelda' />
        </nav>

        <Login />
      </div>
    </>
  );
};
