import { TouchableOpacityProps } from "react-native";
import {
	ButtonText,
	ButtonTypeStyleProps,
	Container,
	Icon,
	IconContainer,
} from "./styles";

import { Ionicons } from "@expo/vector-icons";

type Props = TouchableOpacityProps & {
	buttonText: string;
	type?: ButtonTypeStyleProps;
	icon?: keyof typeof Ionicons.glyphMap;
};

export function Button({ icon, buttonText, type = "DARK", ...rest }: Props) {
	return (
		<Container type={type} {...rest}>
			{icon ? (
				<IconContainer>
					<Icon name={icon} type={type} />
				</IconContainer>
			) : null}

			<ButtonText type={type}>{buttonText}</ButtonText>
		</Container>
	);
}
