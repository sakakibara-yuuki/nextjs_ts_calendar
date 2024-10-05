import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import type { Preview } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import "../app/ui/globals.css";
import "../app/ui/css/dark.module.css";

const preview: Preview = {
  decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // viewport: {
    //   viewports: INITIAL_VIEWPORTS,
    //   defaultViewport: 'galaxys9',
    // },
  },
};

export default preview;
