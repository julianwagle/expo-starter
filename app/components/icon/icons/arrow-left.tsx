import 'react-native-gesture-handler';
import React from 'react';
import { Icon, IIconProps } from 'native-base';
import { Path, G } from 'react-native-svg';
export function ArrowLeft(props: IIconProps, color) {
	return (
		<Icon viewBox="0 0 602.339 681.729" {...props}>
			<G >
				<Path
					fill={color}
					d="m488 256a24 24 0 0 1 -24 24h-335.432l-24-24 24-24h335.432a24 24 0 0 1 24 24zm-279.029 160.971a24 24 0 0 0 0-33.942l-127.03-127.029 127.03-127.029a24 24 0 0 0 -33.942-33.942l-144 144a24 24 0 0 0 0 33.942l144 144a24 24 0 0 0 33.942 0z"
				/>
			</G>
		</Icon>
	);
}
