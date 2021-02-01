import { observer, useLocalObservable } from "mobx-react-lite";
import ResizeObserver from "react-resize-observer";
import { Box } from "@material-ui/core";
// import NavBar from "components/NavBar";

const AppLayout = observer(
  ({
    fluid = false,
    overflow = "auto",
    children,
    Drawer = null,
    drawerProps = {},
    onContentResize = null,
    footer = true,
  }) => {
    const store = useLocalObservable(() => ({
      width: null,
      onResize(rect) {
        // Trigger custom user resize
        onContentResize ? onContentResize(rect) : null;

        const { width } = rect;

        if (width <= 600) {
          this.width = "small";
        } else if (width <= 960) {
          this.width = "medium";
        } else if (width > 960) {
          this.width = "large";
        }
      },
    }));

    return (
      <>
        {/* <NavBar fluid={fluid} /> */}
        <Box display="flex" flexGrow={1} overflow={overflow}>
          <Box
            id="content"
            display="flex"
            flexGrow={1}
            flexDirection="column"
            position="relative"
            overflow={overflow}
            className={store.width}
          >
            <ResizeObserver onResize={store.onResize} />
            {children}
          </Box>
        </Box>
      </>
    );
  }
);

export default AppLayout;
