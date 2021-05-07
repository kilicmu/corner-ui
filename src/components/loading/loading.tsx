import { createNamespace } from "/home/kilic/workspace/components/corner-ui/src/utils/create";
import "./loading.scss";

const [createComponent, bem] = createNamespace("loading");

export default createComponent({
    name: "loading",
    props: {},
    setup: (props, ctx) => {
        return () => (
            <div></div>
        )
    }
})