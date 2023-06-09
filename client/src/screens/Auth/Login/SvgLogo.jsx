import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgLogo = (props) => {
    return (
        <Svg
            width="19"
            height="21"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M12.04 8.06C13.86 8.06 14.98 5.4 14.98 3.72C14.98 2.32 14.28 0.64 12.88 0.64C11.06 0.64 9.94 3.3 9.94 4.98C9.94 6.38 10.64 8.06 12.04 8.06ZM6.72 8.06C8.12 8.06 8.82 6.38 8.82 4.98C8.82 3.16 7.7 0.5 5.88 0.5C4.48 0.5 3.78 2.18 3.78 3.58C3.64 5.4 4.76 8.06 6.72 8.06ZM17.08 6.66C15.26 6.66 14 9.18 14 11C14 12.26 14.56 13.52 15.82 13.52C17.64 13.52 18.9 11 18.9 9.18C18.9 7.92 18.2 6.66 17.08 6.66ZM4.9 11C4.9 9.18 3.5 6.66 1.82 6.66C0.56 6.66 0 7.92 0 9.18C0 11 1.4 13.52 3.08 13.52C4.34 13.52 4.9 12.26 4.9 11ZM9.38 10.72C6.58 10.72 2.8 15.2 2.8 18.28C2.8 19.68 3.78 20.1 4.9 20.1C6.58 20.1 7.84 18.98 9.38 18.98C10.78 18.98 12.04 20.1 13.58 20.1C14.7 20.1 15.96 19.82 15.96 18.28C15.96 15.2 12.18 10.72 9.38 10.72Z"
                fill="#532A95"
                fillOpacity="0.7"
            />
        </Svg>
    );
};

export default SvgLogo;
