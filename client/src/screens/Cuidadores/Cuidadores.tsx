import { CuidadorBar } from '../../components';
import { ContainerCuidadores } from './Cuidadores.style';

export interface CuidadoresProps {}

const Cuidadores: React.FC<CuidadoresProps> = () => {
    const listaCuidadores = [
        {
			id: 1,
            nombre: 'Matias Rosi',
            slogan: 'Amante de los animales',
            rating: 2,
        },
        {
			id: 2,
            nombre: 'Maria Suarez',
            slogan: 'Amante de los animales',
            rating: 4.5,
        },
        {
			id: 3,
            nombre: 'Sofia Torrez',
            slogan: 'Las mejores tardes',
            rating: 4.5,
        },
    ];
    return (
        <ContainerCuidadores
            source={require('../../../assets/fondoHuellitas.png')}
        >
            {listaCuidadores?.map((cuidador) => {
                return (
                    <CuidadorBar
					key={cuidador?.id}
                        nombre={cuidador?.nombre}
                        slogan={cuidador?.slogan}
                        rating={cuidador?.rating}
                    />
                );
            })}
        </ContainerCuidadores>
    );
};

export default Cuidadores;
