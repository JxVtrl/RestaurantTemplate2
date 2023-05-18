import {
  createContext,
  useContext,
  useEffect,
  useState,
  // useRef,
} from "react";
import SteakWithTomato from "../assets/images/steak-with-tomato.png";
import SalmonSalad from "../assets/images/salmon-salad.png";
import ChickenSalad from "../assets/images/chicken-salad.png";
import SteakWithPotato from "../assets/images/steak-with-potato.png";
import { CartIcon, ProfileIcon, SearchIcon } from "../assets/svg";

interface AppContextData {
  foodVariants: {
    id: number;
    name: string;
    description: string;
    color: string;
    image: string;
  }[];
  foodIndex: number;
  setFoodIndex: (index: number) => void;
  navItems: {
    id: number;
    name: string;
  }[];
  activeNav: number;
  setActiveNav: (index: number) => void;
  optionsItems: {
    id: number;
    name: string;
    icon: JSX.Element;
  }[];
}

const AppContext = createContext<AppContextData>({} as any);

export function AppProvider({ children }: any) {
  const [foodIndex, setFoodIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFoodIndex((prevState) => {
        if (prevState === 3) {
          return 0;
        } else {
          return prevState + 1;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [activeNav, setActiveNav] = useState(0);

  const foodVariants = [
    {
      id: 0,
      name: "Steak with tomato",
      description:
        "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
      color: "#A80000",
      image: SteakWithTomato,
    },
    {
      id: 1,
      name: "Salmon salad",
      description:
        "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
      color: "#00A839",
      image: SalmonSalad,
    },
    {
      id: 2,
      name: "Chicken salad",
      description:
        "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
      color: "#FFA800",
      image: ChickenSalad,
    },
    {
      id: 3,
      name: "Steak with potato",
      description:
        "Salisbury Steak is made with ground beef that has been shaped into patties, while Swiss Steak is made with actual steak. For Swiss Steak, the beef is rolled or pounded and then braised in a",
      color: "#FF2B2B",
      image: SteakWithPotato,
    },
  ];

  const navItems = [
    {
      id: 0,
      name: "Produtos",
    },
    {
      id: 1,
      name: "Sobre",
    },
    {
      id: 2,
      name: "Contato",
    },
    {
      id: 3,
      name: "Time",
    },
  ];

  const optionsItems = [
    {
      id: 0,
      name: "Pesquisar",
      icon: <SearchIcon />,
    },
    {
      id: 1,
      name: "Carrinho",
      icon: <CartIcon />,
    },
    {
      id: 2,
      name: "Perfil",
      icon: <ProfileIcon />,
    },
  ];

  const value = {
    foodVariants,
    foodIndex,
    setFoodIndex,
    navItems,
    activeNav,
    setActiveNav,
    optionsItems,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  return useContext(AppContext);
}
