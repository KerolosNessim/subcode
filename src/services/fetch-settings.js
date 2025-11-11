import { getData } from "./fetch-data";

export async function getSettings() {
  const res = await getData({
    url: "/settings",
  });
  if (res?.code == 200) {
    return res?.data?.data[0];
  } else {
    return {};
  }
}
