import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react"
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons"
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"

export function Description() {
  return (
    <button
      className="w-full my-2 flex flex-col items-center
text-gray-800 font-bold text-xs leading-tight
uppercase whitespace-pre font-overpass"
    >
      <Link to="/">
        Proyecto de preparación de los maestros/as
        <span className="font-extrabold mt-2 text-lg"></span>
      </Link>
      Vinculación con el medio
    </button>
  )
}

function ButtonMenu({ name }) {
  return (
    <>
      <button className="p-2 bg-gray-100 hover:bg-blue-100 rounded-md">
        {name}
      </button>
    </>
  )
}

function ButtonChakra() {
  return (
    <>
      <Menu>
        <MenuButton
          className="p-2 rounded-md"
          as={Button}
          colorScheme="gray"
          rightIcon={<ChevronDownIcon />}
        >
          Medio y Colaboraciones
        </MenuButton>
        <MenuList>
          <MenuItem>Participación en Eventos</MenuItem>
          <MenuItem>Medio de Comunicación</MenuItem>
          <MenuItem>Fundaciones y/o Universidades</MenuItem>
        </MenuList>
      </Menu>
    </>
  )
}

function Hamburguer() {
  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => setWidth(window.innerWidth))
  return (
    <div className="z-50">
      <div className={window.innerWidth > 690 ? "hidden" : "flex"}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Link to="/Acerca">Acerca</Link>
            </MenuItem>
            <MenuItem>Participación en Eventos</MenuItem>
            <MenuItem>Medio de Comunicación</MenuItem>
            <MenuItem>Fundaciones y/o Universidades</MenuItem>
            <MenuItem>Entrevistas</MenuItem>
            <MenuItem>
              <Link to="/Literatura">Literatura</Link>
            </MenuItem>
            <MenuItem>Contacto</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  )
}

function Toolbar() {
  const [width, setWidth] = useState(window.innerWidth)
  window.addEventListener("resize", () => setWidth(window.innerWidth))

  return (
    <div className={window.innerWidth < 698 ? "hidden" : "flex"}>
      <div className="flex justify-center items-center flex-row gap-4 z-50">
        <Link to="/acerca">
          <ButtonMenu name="Acerca" />
        </Link>
        <ButtonChakra />
        <ButtonMenu name="Entrevistas" />
        <Link to='Literatura'><ButtonMenu name="Literatura" /></Link>
        <Link to="/contacto">
          <ButtonMenu name="Contacto" />
        </Link>
      </div>
    </div>
  )
}

function Header() {
  return (
    <>
      <Outlet />
      <header className="absolute top-0 left-0 w-full text-gray-600">
        <nav className="flex justify-center items-center flex-wrap">
          <Description />
          <Toolbar />
          <div className="fixed bottom-12 right-5 z-50">
            <Hamburguer />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
