"use client";

import { AppBar, Stack, Tab, Tabs, Toolbar } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation_map = new Map([
  ["/", 0],
  ["/page1", 1],
  ["/page2", 2],
]);

interface LinkTabProps {
  href: string;
  label: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Link href={props.href}>
      <Tab label={props.label} />
    </Link>
  );
}

function Navigation() {
  // State for which tab is currently selected
  const [selected_tab, set_selected_tab] = useState<number | boolean>(false);

  // Keep the tab in sync with the current path
  const path = usePathname();
  useEffect(() => {
    set_selected_tab(navigation_map.get(window.location.pathname) ?? false);
  }, [path]);

  return (
    <Stack direction="row">
      <Tabs value={selected_tab} aria-label="Navigation tabs">
        <LinkTab href="/" label="Home" />
        <LinkTab href="/page1" label="Page 1" />
        <LinkTab href="/page2" label="Page 2" />
      </Tabs>
    </Stack>
  );
}

export default function MyAppBar() {
  return (
    <AppBar position="sticky">
      <Toolbar disableGutters>
        <Navigation />
      </Toolbar>
    </AppBar>
  );
}
