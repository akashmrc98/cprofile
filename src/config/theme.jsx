import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";

export const theme = extendTheme({
	semanticTokens: {
		colors: {
			"chakra-heading-text": { _light: colors.p },
			"chakra-body-text": { _light: colors.p },
			"chakra-placeholder-color": { _light: colors.p },
		},
	},
});
