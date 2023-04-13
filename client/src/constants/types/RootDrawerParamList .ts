import { MisPedidos, AddNewVeterinarie } from '../../screens';

export type RootDrawerParamList = {
    add_veterinarie: undefined;
    misPedidos_drawer: undefined;
};

export const screens = {
    add_veterinarie: AddNewVeterinarie,
    misPedidos_drawer: MisPedidos,
};
