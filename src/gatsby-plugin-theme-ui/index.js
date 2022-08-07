import { merge } from "theme-ui";
import originalTheme from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index";

const theme = merge(originalTheme, {
    images: {
        default: {
            marginY: "1%",
            borderRadius: "1%",
        }
    },
});

export default theme;