import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "LIGHT" | "DARK";

type Props = {
	type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
	flex: 1;
	margin: 20px;
	padding: 16px 24px;

	min-height: 56px;
	max-height: 56px;

	background-color: ${({ theme, type }) =>
		type === "DARK"
			? theme.COLORS.GRAY.HUE_600
			: theme.COLORS.GRAY.HUE_100};

	border-radius: 6px;

	justify-content: center;
	align-items: center;
	flex-direction: row;

	border: 1px solid ${({ theme }) => theme.COLORS.GRAY.HUE_700};
`;

export const ButtonText = styled(Text)<Props>`
	color: ${({ theme, type }) =>
		type === "DARK" ? theme.COLORS.WHITE : theme.COLORS.GRAY.HUE_600};

	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const IconContainer = styled.View`
	width: 30px;
	height: 30px;

	justify-content: center;
	align-items: center;

	margin-right: 12px;
`;

export const Icon = styled(Ionicons).attrs<Props>(({ theme, type }) => ({
	size: 24,
	color: type === "LIGHT" ? theme.COLORS.GRAY.HUE_600 : theme.COLORS.WHITE,
}))``;
