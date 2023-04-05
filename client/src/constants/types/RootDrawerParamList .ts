import { MisPedidos, Home } from "../../screens";

export type RootDrawerParamList = {
  home_drawer: undefined;
  misPedidos_drawer: undefined;
};

export const screens = {
    home_drawer: Home,
    misPedidos_drawer: MisPedidos
};