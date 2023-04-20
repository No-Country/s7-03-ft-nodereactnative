import { MisPedidos, AddNewVeterinarie, VeterinariasScreen } from '../../screens';

export type RootDrawerParamList = {
    add_veterinarie: undefined;
    misPedidos_drawer: undefined;
    VetDetail: any;
};

export const screens = {
    add_veterinarie: AddNewVeterinarie,
    misPedidos_drawer: MisPedidos,
    VetDetail: VeterinariasScreen,
};
