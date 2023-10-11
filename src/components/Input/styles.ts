import styled from "styled-components/native";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
	type: ButtonIconTypeStyleProps;
};

export const TextInput = styled.TextInput`
	flex: 1;

	min-height: 56px;
	max-height: 56px;

	margin: 0px 5px;
	padding: 0px 10px;

	border-radius: 6px;
	border: 1px solid ${({ theme }) => theme.COLORS.GRAY.HUE_700};

	font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;

	background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Text = styled.Text`
	margin-left: 5px;

	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;

	color: ${({ theme }) => theme.COLORS.GRAY.HUE_600};
`;
