import { paths } from "./paths";

type TParam = string | number | boolean | null | undefined | object;

interface IParams extends Record<string, TParam> {
  search?: Record<string, string | number | boolean>;
}

const fillRoute = (routeName: paths, params: IParams = {}): string => {
  let outputRoute = routeName.toString();

  Object.keys(params).forEach(key => {
    const clearParam = null === params[key];

    const regex = new RegExp(`(/?)(:${key})\\??`, "gi");
    if (typeof params[key] !== "undefined") {
      outputRoute = outputRoute.replace(regex, clearParam ? "" : "$1" + (params[key] ?? "").toString());
    }
  });

  if (!!params?.search && typeof params.search === "object") {
    outputRoute +=
      "?" +
      Object.keys(params.search)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(params?.search?.[key] || ""))
        .join("&");
  }

  return outputRoute;
};

export default fillRoute;
