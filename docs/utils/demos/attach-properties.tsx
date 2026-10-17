import { attachPropertiesToComponent } from "@ffxixslh/pro-components";
import React from "react";

const Foo = attachPropertiesToComponent(() => <div>foo</div>, {
  Bar: () => <div>bar</div>,
});

export default () => (
  <>
    <Foo />
    <Foo.Bar />
  </>
);
