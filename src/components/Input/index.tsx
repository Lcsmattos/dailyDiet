import { useTheme } from "styled-components";
import { TextInput, Text } from "./styles";

type Props = {
	label: string;
	placeholder?: string;
};

export function Input({ label, placeholder }: Props) {
	const { COLORS } = useTheme();

	return (
		<>
			<Text>{label}</Text>
			<TextInput
				placeholder={placeholder}
				placeholderTextColor={COLORS.GRAY.HUE_500}
			/>
		</>
	);
}
