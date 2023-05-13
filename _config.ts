import lume from "lume/mod.ts";
import date from "lume/plugins/date.ts";

const site = lume({
  src: "./src",
});

site.use(date());

export default site;
