import { Footer } from "./footer";
import { Header } from "./header";
import { FooterMenus, Menus } from "./menu";
import { loginMenuItem, myAccessMenuItem, universalMenuItems } from "./items";
import { TableOfContents } from "./table-of-contents";
import { renderShadow } from "./utils";



const windowParamConfig = {...winodw.ACCESS_CI_UI_CONFIG};

const paramConfig = {
  universalMenus: {
    loginUrl: "/login",
    logoutUrl: "/logout",
    siteName: "Allocations",
    targetId: "universal-menus",
    ...windowParamConfig.universalMenus
  },
  header: {
    siteName: "Allocations",
    targetId: "header",
    ...windowParamConfig.header
  },
  siteMenus: {
    items: siteItems,
    siteName: "Allocations",
    targetId: "site-menus",
    ...windowParamConfig.siteMenus
  },
  tableOfContents: {
    headings: document.querySelectorAll("#body h1, #body h2"),
    targetId: "table-of-contents",
    ...windowParamConfig.tableOfContents
  },
  footerMenus: {
    items: siteItems,
    targetId: "footer-menus",
    ...windowParamConfig.footerMenus
  },
  footer: {
    targetId: "footer",
    ...windowParamConfig.footer
  }
};

for (let key in paramConfig) {
  if (!paramConfig[key].target) {
    paramConfig[key].target = document.getElementById(paramConfig[key].targetId)
  }
}

const footer = (params = {}) => {
  renderShadow(<Footer {...params} />, params.target);
};

const header = (params = {}) => {
  renderShadow(<Header {...params} />, params.target);
};

const universalMenus = ({
  items,
  isLoggedIn,
  loginUrl,
  logoutUrl,
  siteName,
  target,
} = {}) => {
  if (isLoggedIn === undefined)
    isLoggedIn = document.cookie.split("; ").includes("SESSaccesscisso=1");

  if (items === undefined) {
    const lastItem = { ...(isLoggedIn ? myAccessMenuItem : loginMenuItem) };
    lastItem.items = lastItem.items.map((item) => ({
      ...item,
      href:
        (item.name == "Login" && loginUrl) ||
        (item.name == "Log out" && logoutUrl) ||
        item.href,
    }));

    items = [...universalMenuItems, lastItem];
    if (siteName)
      items.find((item) => item.name == siteName).classes += " active";
  }

  renderShadow(
    <Menus
      classes="universal"
      items={items}
      name="ACCESS Menu"
      target={target}
    />,
    target
  );
};

const siteMenus = ({ items, siteName, target }) =>
  renderShadow(
    <Menus
      classes="site"
      items={items}
      name={`${siteName} Menu`}
      target={target}
    />,
    target
  );

const footerMenus = ({ items, target }) =>
  renderShadow(<FooterMenus items={items} />, target);

const tableOfContents = ({ headings = [], target }) =>
  renderShadow(<TableOfContents headings={headings} />, target);

export {
  footer,
  header,
  footerMenus,
  loginMenuItem,
  myAccessMenuItem,
  siteMenus,
  tableOfContents,
  universalMenuItems,
  universalMenus,
};
